import React from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import ThemeToggle from "../components/ThemeToggle";

const EditProfile = () => {
    const{ user,login } = useAuth();
    const [bio, setBio] = React.useState(user.bio || '');
    const navigate = useNavigate();

    const handleSave = () => {
        if (bio.trim() === '') {
            toast.error("Bio cannot be empty");
            return;
        }
        const updatedUser = { ...user, bio };
        localStorage.setItem("user", JSON.stringify(updatedUser));
        const users = JSON.parse(localStorage.getItem("users")) || [];
        const index = users.findIndex(u => u.email === user.email);
        if (index !== -1) {
            users[index] = updatedUser;
            localStorage.setItem("users", JSON.stringify(users));
        }
        login(updatedUser);
        toast.success("Profile updated successfully");
        setTimeout(() => {
            navigate("/dashboard");
        }, 1000);
    };
    return (
        <div className="background">
            <div className="dashboard-container">
            <ThemeToggle />
            <div className="form-group">
                <h1>Edit Bio</h1>
                <label>Bio : </label>
                <textarea
                    value={bio}
                    onChange={(e) => setBio(e.target.value)}
                    placeholder="Write something about yourself..."
                />
            </div>
            <div className="button-group">
                <button onClick={handleSave} className="dashboard-button">Save</button>
                <button onClick={() => navigate("/dashboard")} className="dashboard-button">Cancel</button>
            </div>
            <ToastContainer position="bottom-center" autoClose={2000}/>
            </div>
        </div>
    );
};
export default EditProfile;