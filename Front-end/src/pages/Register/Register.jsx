import "./Register.css"
import "../../index.css";
import logo from "../../assets/image/ChatGPT Image Nov 30, 2025, 07_43_03 PM.png";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from 'axios'

//http://localhost:3000/api/user/register

export default function Register() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
  });

  const [confirmPass, setConfirmPass] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleConfirmPassChange = (e) => {
    setConfirmPass(e.target.value);
  };

const handleSubmit = async (e) => {
  e.preventDefault();

  if (
    !formData.name ||
    !formData.email ||
    !formData.password ||
    !formData.phone
  ) {
    alert("Please fill all fields!");
    return;
  }

  if (formData.password !== confirmPass) {
    alert("Passwords do not match!");
    return;
  }

  try {
    // 1️⃣ Register فقط
    await axios.post("http://localhost:3000/api/user/register", formData);

    alert("Account created successfully! Please login.");

    // 2️⃣ Redirect للـ login page
    window.location.href = "/login";
  } catch (err) {
    console.error("Full error:", err);

    let errorMsg = "An error occurred";

    if (err.response?.data?.error) {
      const errorText = err.response.data.error;

      if (errorText.includes("duplicate key") && errorText.includes("email")) {
        errorMsg = "This email is already registered!";
      } else {
        errorMsg = errorText;
      }
    } else if (err.response?.data?.msg) {
      errorMsg = err.response.data.msg;
    } else if (err.message) {
      errorMsg = err.message;
    }

    alert(errorMsg);
  }
};


  useEffect(() => {
    console.log("Register component mounted");
    console.log("Initial form data:", formData);
  }, [formData]);

  return (
    <div>
      <div className="container_form flex flex-col gap-4 items-center justify-center">
        <div className="flex gap-4">
          <img className="Logo" src={logo} alt="" />
        </div>
        <div className="box_wrabber">
          <div className="flex flex-col mb-8">
            <h1 className="container-title">Create Your Account</h1>
            <p style={{ color: "var(--el-bg)" }}>
              Join your team and start tracking your performance goals.
            </p>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col gap-2 mb-8">
              <label htmlFor="name">Full Name</label>
              <input
                type="text"
                placeholder="Enter your full name"
                name="name"
                id="name"
                onChange={handleInputChange}
              />
            </div>
            <div className="flex flex-col gap-2 mb-8">
              <label htmlFor="email">Work Email</label>
              <input
                type="email"
                placeholder="you@example.com"
                name="email"
                id="email"
                onChange={handleInputChange}
              />
            </div>
            <div className="flex flex-col gap-2 mb-8">
              <label htmlFor="phone">Phone</label>
              <input
                type="tel"
                placeholder="Enter your phone number"
                name="phone"
                id="phone"
                onChange={handleInputChange}
              />
            </div>
            <div className="flex flex-col gap-2 mb-8">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                placeholder="Enter your password"
                name="password"
                id="password"
                onChange={handleInputChange}
              />
            </div>
            <div className="flex flex-col gap-2 mb-8">
              <label htmlFor="confirm_password">Confirm Password</label>
              <input
                type="password"
                placeholder="Confirm your password"
                name="confirm_password"
                id="confirm_password"
                onChange={handleConfirmPassChange}
              />
              {confirmPass && confirmPass !== formData.password && (
                <span style={{ color: "red" }}>Passwords do not match</span>
              )}
            </div>
            <button type="submit" className="w-full">
              Create Account
            </button>
            <div className="flex justify-center mt-8">
              <p>
                Already have an account?{" "}
                <Link to="/login" style={{ color: "var(--el-bg)" }}>
                  Login here
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};


