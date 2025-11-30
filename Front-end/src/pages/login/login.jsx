import "./login.css";
import "../../index.css"

const Login = () => {
  return (
    <div className="container_form">
      <div className="box_wrabber flex flex-col gap-4 items-center justify-center">
        <div className="flex flex-col justify-center">
          <h1 className="container-title">Performix</h1>
          <p style={{ color: "var(--el-bg)" }}>
            welcome back! Please login to your account.
          </p>
        </div>
        <div className="flex flex-col gap-6 w-full">
          <form action="">
            <div className="flex flex-col gap-2 mb-8">
              <label htmlFor="email">Email / Username</label>
              <input
                type="email"
                placeholder="you@example.com"
                name="email"
                id="email"
              />
            </div>
            <div className="flex flex-col gap-2 mb-8">
              <div className="flex justify-between">
                <label htmlFor="password">Password</label>
                <a href="" style={{ color: "var(--el-bg)" }}>
                  Forgot Password?
                </a>
              </div>
              <input
                type="password"
                placeholder="Enter your password"
                name="password"
                id="password"
              />
            </div>
            <button type="submit" className="w-full">
              Login
            </button>
          </form>
        </div>
        <p>
          Don't have an account?{" "}
          <a href="/register" style={{ color: "var(--el-bg)" }}>
            Register here
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
