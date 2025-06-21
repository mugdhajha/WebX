import React from "react";
import { set, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { registerUser, validUser } from "../services/authService";
import ThemeToggle from "../components/ThemeToggle";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Signup = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const navigate = useNavigate();

    const onSubmit = (data) => {
        const stored = localStorage.getItem('users');
        const users = stored ? JSON.parse(stored) : [];
        const existingUser = users.find(user => user.email === data.email);

        if (existingUser) {
            toast.error("User already exists");
        } else {
            users.push(data);
            localStorage.setItem('users', JSON.stringify(users));
            toast.success("Registration successful");
            setTimeout(() => navigate("/login"),1000);
        }
    };

    const goToLogin = () => navigate("/login");

    return (
        <div className="background">
            <div className="login-container">
            <ThemeToggle />
            <h2>Signup</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-group">
                    <label>Name:</label>
                    <input type="text" {...register("name", { required: true })} />
                    {errors.name && <span className="error">Name is required</span>}
                </div>
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
                <button type="submit" className="login-button">Signup</button>
            </form>
            <div className="login-link">
                <p>Already have an account? <span onClick={goToLogin} className="link">Login</span></p>
                </div>
                </div>
            <ToastContainer position="bottom-center" autoClose={2000} />
        </div>
    );
};
export default Signup;