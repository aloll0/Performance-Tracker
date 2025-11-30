import "tailwindcss"
import "../../index.css"
import './Header.css'
import logo from "../../assets/image/ChatGPT Image Nov 30, 2025, 07_46_08 PM.png";
const Header = () => {
  return (
    <div>
      <div className="container">
        <div className="container-box flex justify-between items-center">
          <div className="leftSection">
            <a href="/">
              <img src={logo} alt="" className="Logo" />
            </a>
          </div>
          <div className="rightSection flex gap-4">
            <a href="/login" className="container-title">
              Login
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header