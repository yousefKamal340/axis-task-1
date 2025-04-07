# Fintech App

A simple fintech backend and frontend application that supports account creation, deposit, withdrawal, and balance inquiry.

## 🚀 Features
- Open account
- Deposit funds
- Withdraw funds
- Check balance

## 🧱 Tech Stack
- Node.js, Express.js
- React.js
- Jest (tests)
- Docker
- Swagger (OpenAPI)

## 📦 Getting Started
### Prerequisites
- Node.js
- Docker

### Running locally
```bash
git clone <repo-url>
cd fintech-app
npm install --prefix backend
npm install --prefix frontend
npm start --prefix backend
npm start --prefix frontend
```
Frontend: http://localhost:3000  
Backend API: http://localhost:5000

### Using Docker
```bash
docker-compose up --build
```

### Running Tests
```bash
cd backend
npm install
npm test
```

### Swagger Docs
You can import `backend/swagger.json` into [Swagger Editor](https://editor.swagger.io/) to test the API.

## 📂 Structure
- `backend/` - Node.js API
- `frontend/` - React UI

## ✅ Acceptance Criteria
- ✔ Opening account returns Account ID
- ✔ Deposits/Withdrawals return Transaction ID
- ✔ Balance returns correct value

---