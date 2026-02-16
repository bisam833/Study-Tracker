# StudyTracker

StudyTracker is a simple productivity web application built to track focused study sessions and monitor progress across different subjects. The goal of this project is to maintain consistency, visualize study patterns, and improve time management.

---

## About the Project

This project was created to solve a personal problem — tracking actual study time in a structured way. Instead of using third-party productivity apps, I built a custom solution with features tailored to my workflow.

It supports timed sessions, subject-wise tracking, goal monitoring, and session history.

---

## Features

### Authentication
- Basic login system (demo-based)
- Protected routes
- Logout functionality

### Study Timer
- 25-minute Pomodoro session
- 45-minute and 60-minute preset options
- Custom time selection
- Automatically stores completed sessions

### Dashboard
- Displays total study hours
- Weekly goal progress
- Current study streak
- Visual progress bar

### Goals
- Track learning progress in:
  - DSA
  - React
  - DBMS
  - Operating Systems
- Progress indicators for each subject

### History
- Shows previously completed study sessions
- Displays subject and duration
- Shows latest 5 sessions

---

## Tech Stack

Frontend:
- React
- React Router
- Tailwind CSS
- Axios
- Lucide Icons

Backend:
- Node.js
- Express.js
- MongoDB

---

## Project Structure




# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
