import {useAuth0} from "@auth0/auth0-react" 

const ProfileContent = () => {
    const {user,isAuthenticated,isLoading}=useAuth0();
    if(isLoading){
      return <div>Loading!</div>
    }
  return (
      <div>
      
      {isAuthenticated ?  (
          <div>
            <img src={user?.picture}/>
            <h2>{user?.nickname}</h2>
            <p>{user?.email}</p>
          </div>
      ):null}
      </div>
  )
}

export default ProfileContent;