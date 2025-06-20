import React from "react";
import { useAuth } from "../context/AuthContext";
import {useNavigate} from "react-router-dom";
import ThemeToggle from "../components/ThemeToggle";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Dashboard = () => {
    const { user, logout } = useAuth();
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        toast.success("Logout successful!");
        setTimeout(() => {
        navigate("/login")},100);
    };

    if (!user) {
        return <p className="text-center mt-8">User not logged in</p>; // Optional: Redirect or show login link
    }

    return (
        <div className="background">
            <div className="dashboard-container">
                <ThemeToggle />
                <div className="form-group">
                    <h1>Welcome, {user.name}</h1>
                    <p><strong>Email : </strong>{user.email}</p>
                    <p><strong>Bio : </strong>{user.bio ||'No bio set yet.'}</p>
                </div>
                <div className="button-group">
                    <div className="space-between"></div>
                    <button onClick={() => navigate('/edit-profile')} className="dashboard-button">Edit Profile</button>
                    <button onClick={handleLogout} className="dashboard-button">Logout</button>
                </div>
                <ToastContainer position="bottom-center" autoClose={2000} />
            </div>
        </div>
    );
};

export default Dashboard;