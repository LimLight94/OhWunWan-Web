import {Navigate, Outlet} from "react-router-dom";
import {isLogin} from "../../common/utils";

const PrivateRoute = () => {

  return isLogin() ? <Outlet/> : <Navigate to="/login"/>;
}

export default PrivateRoute;