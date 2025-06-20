# React Authentication App

A full-featured React authentication application with user login, signup, profile editing, theme switching (light/dark mode), and protected routes. Built using modern React tools and deployed with Docker and Netlify.

## Features

- User authentication with localStorage
- Login and signup with form validation
- Edit user profile (bio and other details)
- Toggle between light and dark themes
- Route protection for dashboard and profile editing
- Responsive design with custom CSS
- Toast notifications for user feedback
- Dockerized build for production-ready deployment

## Technologies Used

- React
- React Router DOM
- React Hook Form
- React Toastify
- Custom CSS (no UI frameworks)
- Docker
- Netlify (for live deployment)

## Getting Started

### Prerequisites

- Node.js and npm installed
- Git (for cloning the repository)

### Installation

```bash
git clone https://github.com/yourusername/react-auth-app.git
cd react-auth-app
npm install
npm start
```

### Production Build

```bash
npm run build
```

### Docker Deployment

#### Build Docker Image

```bash
docker build -t react-auth-app .
```

#### Run Docker Container

```bash
docker run -d -p 3000:80 react-auth-app
```

Visit `http://localhost:3000` in your browser.

## Netlify Deployment

The website is deployed here : https://delightful-sable-574b35.netlify.app/

Or you can deploy it through these steps:

1. Push your project to a GitHub repository.
2. Go to [Netlify](https://app.netlify.com/) and link your repository.
3. Set the build command to `npm run build`.
4. Set the publish directory to `build`.
5. Ensure you have a `_redirects` file in your `public/` folder with this content:

   ```
   /*    /index.html   200
   ```

6. Deploy your site.


## Route Protection

Protected routes like `/dashboard` and `/edit-profile` are only accessible if the user is authenticated. Unauthorized users are redirected to the login page.

