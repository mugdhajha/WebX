export const saveUser = (userData) => {
    localStorage.setItem('user', JSON.stringify(userData));
};
export const getUser = () => {
    const user = localStorage.getItem('user');
    return user ? JSON.parse(user) : null;
};
export const removeUser = () => {
    localStorage.removeItem('user');
};
export const validUser = (email, password) => {
    const users=JSON.parse(localStorage.getItem('user'));
    return users.find((u) => u.email === email && u.password === password);
};
export const registerUser = (userData) => {
    const users = JSON.parse(localStorage.getItem('user')) || [];
    users.push(userData);
    localStorage.setItem('user', JSON.stringify(users));
}