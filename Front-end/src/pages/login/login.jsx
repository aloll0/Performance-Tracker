import "./login.css";
import "../../index.css";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("user-info")) {
      navigate("/add");
    }
  }, [navigate]);

  const logiin = async (e) => {
    e.preventDefault(); 

    console.warn(email, password);
    let item = { email, password };

    try {
      let result = await fetch("http://localhost:3000/api/user/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(item),
      });

      let data = await result.json();
      console.log(data);

      if (data.user) {
        localStorage.setItem("user-info", JSON.stringify(data.user));
        navigate("/add");
      } else {
        alert(data.message || "Login failed");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

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
          <form onSubmit={logiin}>
            <div className="flex flex-col gap-2 mb-8">
              <label htmlFor="email">Email / Username</label>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
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
                value={password}
                onChange={(e) => setPassword(e.target.value)}
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
          <Link to={"/register"} style={{ color: "var(--el-bg)" }}>
            Register here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
