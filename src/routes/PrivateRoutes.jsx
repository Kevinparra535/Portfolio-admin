import { useContext } from "react";
import { Route, Redirect } from "react-router-dom";

import AuthContext from "../contexts/Auth.context";

const PrivateRoutes = ({ component: Component, path, ...rest }) => {
  const { user } = useContext(AuthContext);

  //Validamos que el usuario tenga roles web para este departamento y sección
  const allowed = user !== null ? true : false;
  console.log("allowed", allowed);

  return (
    <Route
      path={path}
      {...rest}
      render={(props) =>
        allowed ? <Component {...props} /> : <Redirect to="/" />
      }
    />
  );
};
export default PrivateRoutes;
