# 💼 Job Portal Project

A full-stack MERN-based Job Portal application where users can post jobs, apply for jobs, and manage job applications securely using JWT authentication and MongoDB.

---

## 🔗 Live Links

- 🌐 **Frontend Live:** [https://job-protal-project.web.app](https://job-protal-project.web.app)
- 🛠️ **Backend Server (Vercel):** [https://jobprotal-fisow7wc3-md-riyajul-islam-akashs-projects.vercel.app](https://jobprotal-fisow7wc3-md-riyajul-islam-akashs-projects.vercel.app)

---

## ⚙️ Features

- ✅ JWT-based user authentication (login & secure access)
- ✅ Secure cookie storage (httpOnly, secure, sameSite)
- ✅ Protected routes using custom middleware
- ✅ Job post and job application functionality
- ✅ Auto update application count per job
- ✅ Role-based access protection
- ✅ MongoDB for persistent data
- ✅ RESTful API structure
- ✅ Cross-Origin setup for secure frontend-backend communication
- ✅ Logout API to clear token

---

## 🧰 Technologies Used

### Frontend
- React
- React Router DOM
- Tailwind CSS + DaisyUI
- Firebase Authentication

### Backend
- Express.js
- MongoDB (Native Driver)
- JSON Web Token (JWT)
- Cookie-Parser
- CORS
- dotenv

---

## 🧪 API Endpoints Summary

| Method | Endpoint                    | Description                    |
|--------|-----------------------------|--------------------------------|
| POST   | `/jwt`                      | Issue JWT token to user        |
| POST   | `/logout`                   | Clear token cookie (Logout)    |
| GET    | `/jobs`                     | Get all jobs / filter by HR    |
| GET    | `/jobs/:id`                 | Get a specific job by ID       |
| POST   | `/jobs`                     | HR post a new job              |
| GET    | `/job_applications`         | Get job applications by user   |
| GET    | `/job_applications/jobs/:jobId` | Get all applications for a job |
| POST   | `/job_applications`         | Apply to a job                 |
| PATCH  | `/job_applications/:id`     | Update application status      |
| DELETE | `/job_applications/:id`     | Delete a job application       |

---

## 🔐 Authentication Flow

- 🔐 When a user logs in, the backend generates a JWT token.
- 🍪 The token is stored in an HTTP-only cookie.
- 🔎 All protected routes verify this token using middleware.
- ❌ If the token is invalid/expired, user gets a 401 or 403 error.
- 🚪 Logout clears the cookie (token).

---

## 🌿 Environment Variables (`.env`)

📦 server/
├── index.js // Main entry point
├── .env // Environment secrets
├── package.json
├── middleware/
│ └── verifyToken.js // JWT middleware
└── collections/
└── jobs.js // Routes and DB queries



---

## 🧑‍💻 Developer Information

**👨‍💻 Name:** Md Riyajul Islam Akash  
**🌍 Portfolio:** [https://mdriyajulislamakash11.github.io/My-Portfolio/](https://mdriyajulislamakash11.github.io/My-Portfolio/)  
**📧 Email:** hafejmohammadakash@gmail.com  
**💻 GitHub:** [https://github.com/mdriyajulislamakash11](https://github.com/mdriyajulislamakash11)  
**🔗 LinkedIn:** [https://www.linkedin.com/in/mdriyajulislam/](https://www.linkedin.com/in/mdriyajulislam/)

---

## 📸 Screenshots (Optional)

> You can add screenshots of your job portal frontend and backend panel here.

  
---

## 📝 License

This project is open-sourced under the [MIT License](https://opensource.org/licenses/MIT)

