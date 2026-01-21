# Urban Hair Lounge ✂️  
*A full-stack salon appointment management system built with Node.js, Express, MongoDB, and Vanilla JavaScript.*

---

## 🚀 Project Overview

Urban Hair Lounge is a complete salon appointment booking platform designed to simplify the scheduling process for customers while providing an efficient administrative panel for salon owners.  
The system supports secure authentication, booking management, feedback collection, and admin controls — all wrapped in a clean and user-friendly UI.

---

## ✨ Features

### 👤 **User Features**
- **User Authentication** — Secure signup & login using sessions.  
- **Appointment Booking** — Choose date, time, and service with a smooth booking interface.  
- **My Bookings** — View, track, and manage past and upcoming appointments.  
- **Feedback System** — Submit service reviews and share feedback.

### 🛡️ **Admin Features**
- **Admin Dashboard** — Overview of all bookings, users, and feedback.  
- **Booking Management** — View all customer appointments, cancel slots, manage availability.  
- **User Management** — View all registered customers.  
- **Feedback Monitoring** — Read customer messages to improve service.  
- **Secure Admin Login** — Protected admin access.

---

## 🛠️ Tech Stack

| Layer        | Technology Used |
|--------------|-----------------|
| **Frontend** | HTML5, CSS3, JavaScript (Vanilla) |
| **Backend**  | Node.js, Express.js |
| **Database** | MongoDB with Mongoose ODM |
| **Auth**     | Express Sessions |
| **Styling**  | Custom CSS (located in `/public/css`) |

---

## 📸 Screenshots (Aligned Grid)

### 🔥 **Application Preview**

<p align="center">
  <img src="https://github.com/user-attachments/assets/916b8b8a-5b8d-47e2-bc97-b790482a3331" width="32%" />
  <img src="https://github.com/user-attachments/assets/73ef3dd2-5480-48e0-9906-91e12727b2b8" width="32%" />
  <img src="https://github.com/user-attachments/assets/57b163f2-bcf1-43b4-a1a0-f9524b4553be" width="32%" />
</p>

<p align="center">
  <img src="https://github.com/user-attachments/assets/15e7d34f-483b-4c1d-899a-2c7dbf665a03" width="32%" />
  <img src="https://github.com/user-attachments/assets/0503c3c4-761d-4340-bc23-d69ab4affb6d" width="32%" />
  <img src="https://github.com/user-attachments/assets/2f853ce7-c2ef-4a17-a98b-b9a71055b26b" width="32%" />
</p>

<p align="center">
  <img src="https://github.com/user-attachments/assets/5fbf90ce-516a-40fd-a083-c044165ece1b" width="32%" />
  <img src="https://github.com/user-attachments/assets/a8b30bbb-eb40-4d8a-bdc3-69e630157f23" width="32%" />
  <img src="https://github.com/user-attachments/assets/30adf9b5-baee-4ba0-a6d5-964bbb268b6f" width="32%" />
</p>

<p align="center">
  <img src="https://github.com/user-attachments/assets/469ef34e-68ba-4b54-8f38-910e77841869" width="32%" />
  <img src="https://github.com/user-attachments/assets/be3e4b43-bc41-4b96-bb10-8487254be553" width="32%" />
  <img src="https://github.com/user-attachments/assets/95eaf55c-95da-4b5f-a03e-3400503d27be" width="32%" />
</p>

<p align="center">
  <img src="https://github.com/user-attachments/assets/549264a9-c09e-4e87-93a6-63eecf0b280c" width="32%" />
</p>

---

## 📋 Prerequisites

Make sure you have installed:

- **Node.js** (v14+ recommended)
- **MongoDB** (local or Atlas Cloud)

---

## ⚙️ Installation & Setup

### **1. Clone the repository**
```bash
git clone https://github.com/yourusername/Urban-Hair-Lounge.git
cd Urban-Hair-Lounge
```

### **2. Install dependencies**
```bash
npm install
```

### **3. Configure the database**
By default, the app connects to:
```
mongodb://localhost:27017/urbanhair
```
This is defined inside `app.js`.

### **4. Seed the database (optional)**
Creates default admin + test user.
```bash
node seed.js
```

### **5. Run the server**
```bash
node app.js
```

➡️ The app will be live at:  
**http://localhost:3000**

---

## 🔑 Default Login Credentials

| Role | Email | Password |
|------|--------|----------|
| **Admin** | admin@urbanhair.com | admin123 |
| **User**  | test@example.com   | test123  |

---

## 📂 Project Structure

```
Urban-Hair-Lounge/
├── models/             # Mongoose Schemas (User, Admin, Slot, Feedback)
├── public/             # CSS, Images, JS (client-side)
├── route/              # Express routes (admin, signup, login)
├── views/              # Frontend HTML templates
├── app.js              # Main server file
├── seed.js             # Database seeder
├── package.json        # Dependencies & scripts
└── database.sql        # (Reference if migrating to SQL)
```

---

## 🔗 API Endpoints

### **User Routes**
- `POST /user/signup` — Register  
- `POST /user/login` — Login  
- `POST /slot` — Book appointment  

### **Admin Routes**
- `POST /admin/login` — Admin login  
- `GET /admin/bookings` — View all bookings  
- `DELETE /admin/bookings/:id` — Cancel booking  
- `GET /admin/users` — View users  
- `GET /admin/feedback` — View feedback  

---

## 🤝 Contributing

1. Fork the repository  
2. Create your feature branch  
3. Commit your changes  
4. Open a Pull Request  

---

## 📄 License
This project is licensed under the **ISC License**.

---

## ⭐ Show Your Support
If you like this project, consider starring ⭐ the repository!

