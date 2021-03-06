import { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { getUser } from "../../service/UserProfileService";
import { userProfileData, userProfileFormPresenter } from "../userProfileFromPresenter/userProfileFormPresenter";

export const ValidationSchema = Yup.object().shape({
  firstName: Yup.string().trim().required("FirstName is required").nullable(),
  lastName: Yup.string().trim().required("LastName is required"),
  email: Yup.string().trim().required("Email is required."),
});
const UserProfileFormPresentation = (props: any) => {

  const { user } = useAuth0();

  const [name] = useState<any>(user?.nickname?.split("."));
  const profileValue = {
    firstName: name[0],
    lastName: name[1],
    email: user?.email,
  };

  const [profile, setProfile] = useState<any>(profileValue);
  const [disable] = useState<any>(true);

  const profileValueSet = {
    firstName: profile.firstName,
    lastName: profile.lastName,
    email: profile.email,
    id: profile.id,
  };

  useEffect(() => {
    getUser().then((res: any) => {
      setProfile(res.data[0]);
    });
  }, []);

  useEffect(()=>{
    /** subscribe the asObservable value pass to  props of userProfileFormContainer */
    userProfileFormPresenter.userProfile$().subscribe((res)=>{
      props.updateUser(res);
    })
  })
 
  /** userProfileData value passed to presenter */
  const handleSubmit = (values: any) => {
    if (values.id) {
      userProfileData(values);
    }
  };

  return (
    <div className="flex-grow flex justify-center">
      <div className="w-full lg:w-1/2">
        <div className="flex justify-center">
          <figure className="my-6">
            <img
              className="w-16 h-16 rounded-full object-cover"
              src={user?.picture}
              alt=""
            />
          </figure>
        </div>
        <Formik
          initialValues={profileValueSet ? profileValueSet : profileValue}
          enableReinitialize={true}
          validationSchema={ValidationSchema}
          onSubmit={(values: any) => {
            handleSubmit(values);
          }}
        >
          {(formik) => {
            const { values, handleChange } = formik;
            return (
              <Form>
                <div className="flex flex-col space-y-5 mt-8 px-6">
                  <div className="flex flex-col space-y-2">
                    <label className="text-sm text-gray-400" htmlFor="name">
                      First Name
                    </label>
                    <Field
                      className="border px-3 py-2 rounded bg-gray-100 font-medium"
                      type="text"
                      name="firstName"
                      id="firstName"
                      value={values.firstName}
                      onChange={handleChange}
                      // disabled={disable}
                    />
                    <ErrorMessage
                      name="firstName"
                      component="small"
                      className="error font-semibold text-red-500"
                    />
                  </div>
                  <div className="flex flex-col space-y-2">
                    <label className="text-sm text-gray-400" htmlFor="name">
                      Last Name
                    </label>
                    <Field
                      className="border px-3 py-2 rounded bg-gray-100 font-medium"
                      type="text"
                      name="lastName"
                      id="lastName"
                      value={values.lastName}
                      onChange={handleChange}
                      // disabled={disable}
                    />
                    <ErrorMessage
                      name="lastName"
                      component="small"
                      className="error font-semibold text-red-500"
                    />
                  </div>
                  <div className="flex flex-col space-y-2">
                    <label className="text-sm text-gray-400" htmlFor="name">
                      Email Address
                    </label>
                    <Field
                      className="border px-3 py-2 rounded bg-gray-100 font-medium"
                      type="text"
                      name="email"
                      id="email"
                      value={user?.email}
                      onChange={handleChange}
                      disabled={disable}
                    />
                    <ErrorMessage
                      name="email"
                      component="small"
                      className="error font-semibold text-red-500"
                    />
                  </div>
                  <div className="flex justify-center ">
                    <button
                      // onClick={() => setDisable(!disable)}
                      className="bg-sky-500 text-white px-9 py-1 rounded"
                    >
                      Edit
                    </button>
                  </div>
                </div>
              </Form>
            );
          }}
        </Formik>
      </div>
    </div>
  );
};

export default UserProfileFormPresentation;
