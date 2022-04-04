import {useAuth0} from "@auth0/auth0-react" 
import { Link } from "react-router-dom";

const ProfileContent = () => {
    const {user,isAuthenticated,isLoading}=useAuth0();
    if(isLoading){
      return <div>Loading!</div>
    }
  return (
      <div>
      {isAuthenticated ?  (
          <div className="flex items-center space-x-3">
            <Link to={'/userProfile'}>
            <img className="w-12" src={user?.picture}/>
            </Link>
            <h2>{user?.nickname}</h2>
          </div>
      ):null}
      </div>
  )
}

export default ProfileContent;