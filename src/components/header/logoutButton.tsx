import { useAuth0 } from "@auth0/auth0-react";

const LogOutButton = () => {
  const { logout, isAuthenticated } = useAuth0();
  return (
    <>
      {isAuthenticated && (
        <button
          className="bg-red-500 text-white px-4 py-2"
          onClick={() => logout({ returnTo: window.location.origin })}
        >
          Log Out
        </button>
      )}
    </>
  );
};

export default LogOutButton;
