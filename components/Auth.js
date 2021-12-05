import { useSession } from "next-auth/client";
import Login from "./Login";

const isSessionValid = (session) => {
  if (
    typeof session !== typeof undefined &&
    session !== null &&
    typeof session.user !== typeof undefined
  ) {
    return true;
  } else {
    return false;
  }
};

function Auth({ children }) {
  const [session, loading] = useSession();

  if (!loading) {
    if (isSessionValid(session)) {
      return <>{children}</>;
    } else {
      return <Login />;
    }
  } else {
    return null;
  }
}

export default Auth;
