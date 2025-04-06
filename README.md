# 🧠 TheSoulApp — Mental Health Support Platform

TheSoulApp is a platform that connects users with certified therapists, offering personalized emotional support, chat, and mindfulness content. Designed with privacy, security, and mental wellness at its core.

---

## 🌐 Tech Stack

- **Java 21 + Spring Boot 3**
- **Spring Security + JWT**
- **MySQL (via AWS RDS)**
- **WebSockets for real-time chat**
- **Dockerized backend**
- **AWS (Cognito, SNS, S3 planned)**

---

## 🚀 Modules

| Module        | Description |
|---------------|-------------|
| `auth`        | Secure JWT-based authentication system |
| `user`        | Therapist and patient management |
| `chat`        | Real-time chat using WebSockets |
| `diary`       | Emotional diary with mood tracking |
| `blog`        | Curated blog articles for mental well-being |
| `shared`      | Common configuration, exception handling, response wrappers, utilities |

---

## 🧱 Features

- Secure user login with role-based access (Patient / Therapist / Admin)
- Real-time messaging with message history
- Private emotional diary
- Admin-curated blog content
- Modular and testable codebase (great for demos and production)

---

## 🐳 Run with Docker

```bash
./gradlew build
docker build -t thesoulapp-backend .
docker run -p 8080:8080 thesoulapp-backend
