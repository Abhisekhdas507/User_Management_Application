# User_Management_Application

Project name - User Management Application

Project Overview

This is a User Management Application that allows user to -

Log in using email and password by mock authentication via Reqres API,
View a paginated list of users,
Edit user details on a separate Edit User page,
Delete users from the list.


How to run the Project.

git clone https://github.com/Abhisekhdas507/User_Management_Application,
cd User_Management_Application,
Install Dependencies,
npm install,
Start Server,
npm start.


API Used

This application interacts with the Reqres API for fetching and updating user data,
Login - POST /api/login with email and password in the body,
Fetch Users - GET /api/users?page=1,
Edit User - PUT /api/users/{id},
Delete User - DELETE /api/users/{id}.



Install dependencies.

axios.
react-icons,
react-router-dom,
react-toastify,
tailwindcss.


Features Implemented

Login authentication (Token stored in localStorage),
User list with pagination,
Edit user details on a new page,
Delete users with confirmation,
Error handling & notifications using tostify.


Assumptions and Consideration

The authentication is mocked using the Reqres API,
Changes made (edit/delete) do not persist because the API does not support real updates,
Users are fetched using a paginated API request,
The app uses React Router for navigation,
Styling is done using Tailwind CSS.


Future Improvements

Implement real backend authentication,
Enhance user experience with better error handling,
Project Host On Netlify,
web app link - https://abhisekh-user-management-app.netlify.app/
