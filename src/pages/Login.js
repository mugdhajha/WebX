import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { validUser } from "../services/authService";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import "../styles/Login.css";
import ThemeToggle from "../components/ThemeToggle";

const Login = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const navigate = useNavigate();
    const { login } = useAuth();
    
    const onSubmit = (data) => {
        const stored = localStorage.getItem('users');
        const users = stored ? JSON.parse(stored) : [];
        const validUser = users.find(u => u.email === data.email && u.password === data.password);
        if (validUser) {
        login(validUser);
        toast.success("Login successful!");
        setTimeout(() => {
        navigate("/dashboard")}, 1000);
        } else {
        toast.error("Invalid email or password");
        }
    };

    const goToSignup = () => navigate("/signup");
    
    return (
        <div className="background">
            <div className="login-container">
            <ThemeToggle />
            <ToastContainer position="bottom-center" autoClose={2000}/>    
            <h2>Login</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                {/* <div className="form-group">
                <label>Name:</label>
                <input type="text" {...register("name", { required: true })} />
                {errors.name && <span className="error">Name is required</span>}
                </div> */}
                <div className="form-group">
                <label>Email:</label>
                <input type="email" {...register("email", { required: true })} />
                {errors.email && <span className="error">Email is required</span>}
                </div>
                <div className="form-group">
                <label>Password:</label>
                <input type="password" {...register("password", { required: true })} />
                {errors.password && <span className="error">Password is required</span>}
                </div>
                <button type="submit" className="login-button">Login</button>
            </form>
            <div className="signup-link">
                <p>Don't have an account? <span onClick={goToSignup} className="link">Signup</span></p>
                </div>
            </div>
        </div>
    );
};
export default Login;