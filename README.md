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
cd AXIS-TASK-1
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
- PS : Backend validations such as (exceeding withdrawal limit) is logged in BE Terminal.

## 📄 Documentation

### Design Decisions

#### 1. **Tech Stack**
- **Backend**: Node.js with Express for lightweight, scalable APIs.
- **Database**: MongoDB (via Mongoose) to allow for dynamic schemas and fast document storage.
- **Frontend**: React.js with Material UI (MUI) for a clean, responsive user interface.
- **API Testing**: Jest and Supertest for automated tests.
- **Swagger**: Used for API documentation for better visibility and developer experience.
- **Docker**: Enables consistent development and deployment environments.

#### 2. **Structure & Modularity**
- Separated the backend into `controllers`, `services`, `routes`, and `models` to maintain separation of concerns and improve maintainability.
- The frontend uses a simple component structure (`AccountForm`, `TransactionForm`, `Balance`) to keep the UI easy to extend and manage.

#### 3. **RESTful API**
- Clean and descriptive RESTful routes (e.g., `POST /accounts`, `GET /accounts/:id/balance`).
- Separate endpoints for deposit and withdraw operations, clearly indicating intent.

### Challenges Encountered

#### 1. **Handling Transactions Safely**
- Since MongoDB does not support true ACID transactions at the document level (unless using replica sets), extra care was taken in validating input and confirming state updates atomically in code.

#### 2. **User Interface Consistency**
- Styling components with MUI required additional setup for responsiveness and spacing. We chose MUI for rapid prototyping and scalability of components.

#### 3. **Cross-Origin Requests**
- CORS setup was needed to ensure the React frontend could communicate with the backend during development.

---