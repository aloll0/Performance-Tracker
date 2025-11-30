import "tailwindcss"
import "../../index.css"
import './Header.css'
const Header = () => {
  return (
    <div>
      <div className="container">
        <div className="container-box flex justify-between items-center">
          <div className="leftSection">
            <a href="/" className="container-title">Performance Tracker</a>
          </div>
          <div className="rightSection flex gap-4">
            <a href="/login" className="container-title">Login</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header