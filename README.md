# 🧠 TheSoulApp - Emotional Support, Redefined

**TheSoulApp** is an intelligent, secure, and highly personalized emotional support platform. Designed for real people and real healing — we bring together psychology, technology, and gamified wellness to create lasting change.

## ✨ Key Features

- 🔍 Personalized emotional onboarding surveys (Quick, Medium, Deep)
- 🧘 Therapist matching based on preferences and therapeutic goals
- 📅 Real-time reminders, task tracking & calendar integrations
- 🎮 Gamified experience with avatar ("your soul") and rewards
- 🔐 Full control of privacy & therapist data access
- 📰 Therapist-curated emotional wellness blog
- 💳 Socioeconomic-aware pricing system with Stripe integration

## 🧱 Tech Stack

| Layer             | Tech                                                  |
|------------------|-------------------------------------------------------|
| Backend          | Java 21, Spring Boot 3.x, JPA, REST, JWT              |
| AI Assistance    | Vercel AI, Cursor.dev                                 |
| Data Storage     | MySQL (Amazon RDS), AES256 encryption, Flyway         |
| CI/CD            | GitHub Actions + Vercel deployments                   |
| Infra (future)   | AWS Amplify, ECS (Docker), S3, SNS, Route53           |
| Mobile App       | Flutter (Android/iOS), integrated with backend        |

## 🚀 Getting Started

```bash
# Clone
git clone https://github.com/yourusername/thesoulapp.git
cd thesoulapp

# Build Spring Boot backend
./mvnw spring-boot:run

# API docs (Swagger)
http://localhost:8080/swagger-ui.html
