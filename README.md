# EcoTrack — Sustainable Living Client

## 🌐 Live Demo
[EcoTrack Live Site]https://eco-track-imad.netlify.app/


## ✨ Project Theme
The client application for **EcoTrack** provides a community platform for users to engage with sustainability challenges, share eco-tips, and track their personal environmental impact.

## 🚀 Key Client-Side Features

*   **Public and Protected Layouts:** Consistent and responsive design with separate layouts for marketing and user-dashboard pages.
*   **Firebase Authentication:** Implements user login and registration with Firebase (Email/Password + Google), including client-side password validation.
*   **Secure Routing:** Protects user-specific routes (`/my-activities`, `/challenges/add`), ensuring proper redirection to login when unauthenticated.
*   **Dynamic Data Presentation:** Home page displays real-time data for Active Challenges, Recent Tips, and Upcoming Events fetched from the Express API.
*   **Enhanced User Experience:** Implements global loading spinners, skeleton loaders for content, and styled toast notifications for all success and error feedback.

## 🛠 Tech Stack (Client)
*   **Framework:** *React*
*   **Auth:** Firebase Authentication
*   **Hosting:** Netlify