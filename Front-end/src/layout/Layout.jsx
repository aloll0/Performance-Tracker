import { useLocation } from "react-router-dom";
import Header from "../components/Header/Header.jsx";
import AppRouting from "../router/AppRouting.jsx";

const Layout = () => {
  const location = useLocation();

  const hideHeader =
    location.pathname === "/login" || location.pathname === "/register";
  

  return (
    <>
      {!hideHeader && <Header />}
      <AppRouting />
    </>
  );
};

export default Layout;
