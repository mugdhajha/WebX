import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Dashboard from './pages/Dashboard';
import EditProfile from './pages/EditProfile';
import {AuthProvider} from './context/AuthContext';
import {ThemeProvider} from './context/ThemeContext';
import ProtectedRoute from './components/ProtectedRoute';
import './App.css';


function App() {
  return (
    <AuthProvider>
    <ThemeProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Navigate to="/Login" />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/dashboard" element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            } />
          <Route path="/edit-profile" element={
            <ProtectedRoute>
              <EditProfile />
            </ProtectedRoute>
          } />
        </Routes>
      </Router>
    </ThemeProvider>
    </AuthProvider>
  );
}

export default App;