import { useLocation } from "react-router-dom";
import Header from "../components/Header/Header.jsx";
import SideBar from "../components/SideBar/SideBar.jsx";
import AppRouting from "../router/AppRouting.jsx";

const Layout = () => {
  const location = useLocation();

  const hideHeader =
    location.pathname === "/login" || location.pathname === "/register";

  const hideSideBar =
    location.pathname === "/login" || location.pathname === "/register";

  return (
    <>
      {!hideHeader && !hideSideBar ? (
        <div className="flex w-full h-screen">
          <SideBar />

          <div className="flex flex-col flex-1">
            <Header />
            <main className="flex-1 overflow-auto p-5">
              <AppRouting />
            </main>
          </div>
        </div>
      ) : (
        <AppRouting />
      )}
    </>
  );
};

export default Layout;
