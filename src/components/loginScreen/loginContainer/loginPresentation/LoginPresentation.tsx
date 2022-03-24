import React from 'react'
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";


export const ValidationSchema = Yup.object().shape({
    Email: Yup.string().trim().required("Email is required."),
    Password:Yup.string().trim().required("Password is required.")
  });

 const LoginPresentation = (props:any) => {

    const initialValue = {
        Email: "",
        Password: "",
      };

    const handleSubmit = (values: any) => {
      
         if(values){
           props.loginValue(values);
         }        
      };
  return (
    <div>
         <div className="bg-gray-50 flex-grow overflow-y-auto">
      <Formik
        initialValues={initialValue}
        enableReinitialize={true}
        validationSchema={ValidationSchema}
        onSubmit={(values:any) => {
          handleSubmit(values);
        }}
      >
        {(formik) => {
          const { values, handleChange } = formik;
          return (
            <Form>
              <div className="px-6 md:px-12 py-4">
                <h1 className="text-2xl font-bold">
                  { "Loin Form"}
                </h1>
                <div className="flex flex-col md:flex-row justify-between gap-8 pt-4 w-full">
                  <section className="w-full flex flex-col gap-6">
                    {/* First Name */}
                    <div className="sm:col-span-3 form-row">
                      <label
                        htmlFor="name"
                        className="block text-base font-medium text-gray-700"
                      >
                        EmailID
                      </label>
                      <div className="mt-1">
                        <Field
                          type="text"
                          name="Email"
                          id="Email"
                          value={values.Email}
                          onChange={handleChange}
                          autoComplete="given-name"
                          className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                        />
                      </div>
                      <ErrorMessage
                        name="Email"
                        component="small"
                        className="error font-semibold text-red-500"
                      />
                    </div>
                    {/* Last Name */}
                    <div className="sm:col-span-3 form-row">
                      <label
                        htmlFor="name"
                        className="block text-base font-medium text-gray-700"
                      >
                        Password
                      </label>
                      <div className="mt-1">
                        <Field
                          type="text"
                          name="Password"
                          id="Password"
                          value={values.Password}
                          onChange={handleChange}
                          autoComplete="given-name"
                          className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                        />
                      </div>
                      <ErrorMessage
                        name="Password"
                        component="small"
                        className="error font-semibold text-red-500"
                      />
                    </div>
                  </section>
                </div>
                <div className="buttons flex justify-center items-center gap-8 py-6">
                  <button
                    className="bg-gray-200 border border-black px-3 py-1"
                    type="submit"
                  >
                    {"Submit"}
                  </button>
                </div>
              </div>
            </Form>
          );
        }}
      </Formik>
    </div>
    </div>
  )
};
export {LoginPresentation as LoginPresentation}