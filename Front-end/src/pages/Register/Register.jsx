import "./Register.css"
import "../../index.css";
import logo from "../../assets/image/performance_8956378.png";

const Register = () => {
  return (
    <div>
      <div className="container_form flex flex-col gap-4 items-center justify-center">
        <div className="flex gap-4">
          <img className="Logo" src={logo} alt="" />
          <h1 className="container-title" style={{ color: "var(--container-bg)" }}>PerformanceTracker</h1>
        </div>
        <div className="box_wrabber">
          <div className="flex flex-col mb-8">
            <h1 className="container-title">Create Your Account</h1>
            <p style={{ color: "var(--el-bg)" }}>
              Join your team and start tracking your performance goals.
            </p>
          </div>
          <form action="">
            <div className="flex flex-col gap-2 mb-8">
              <label htmlFor="full_name">Full Name</label>
              <input
                type="text"
                placeholder="Enter your full name"
                name="full_name"
                id="full_name"
              />
            </div>
            <div className="flex flex-col gap-2 mb-8">
              <label htmlFor="email">Work Email</label>
              <input
                type="email"
                placeholder="you@example.com"
                name="email"
                id="email"
              />
            </div>
            <div className="flex flex-col gap-2 mb-8">
              <label htmlFor="work_password">Password</label>
              <input
                type="password"
                placeholder="Enter your password"
                name="work_password"
                id="work_password"
              />
            </div>
            <div className="flex flex-col gap-2 mb-8">
              <label htmlFor="confirm_password">Confirm Password</label>
              <input
                type="password"
                placeholder="Confirm your password"
                name="confirm_password"
                id="confirm_password"
              />
            </div>
            <button type="submit" className="w-full">
              Create Account
            </button>
            <div className="flex justify-center mt-8">
              <p>
                Already have an account?{" "}
                <a href="/login" style={{ color: "var(--el-bg)" }}>
                  Login here
                </a>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register