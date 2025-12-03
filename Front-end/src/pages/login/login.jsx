import "./login.css";
import "../../index.css";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    // لو في token، يروح dashboard مباشرة
    if (localStorage.getItem("token")) {
      navigate("/dashboard");
    }
  }, [navigate]);

  const logiin = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      alert("Please fill all fields!");
      return;
    }

    try {
      // 🔥 استخدم axios زي Register
      const result = await axios.post("http://localhost:3000/api/user/login", {
        email,
        password,
      });

      console.log("Login response:", result.data);

      // 🔥 احفظ الـ token
      if (result.data.token) {
        localStorage.setItem("token", result.data.token);
        alert("Login successful!");

        // 🔥 Redirect للـ dashboard
        window.location.href = "/dashboard";
      } else {
        alert(result.data.msg || "Login failed");
      }
    } catch (error) {
      console.error("Login error:", error);

      // 🔥 عرض الـ error message من Backend
      const errorMsg =
        error.response?.data?.msg ||
        error.response?.data?.error ||
        "Login failed. Please try again.";
      alert(errorMsg);
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
                required
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
                required
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
}
