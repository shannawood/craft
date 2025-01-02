# React Simple App

A simple React application demonstrating basic concepts including routing, state management, and interactive components.

## Features

- **Multi-page Navigation** - Home and About pages with React Router
- **Interactive Counter** - Increment, decrement, and reset functionality
- **Todo List** - Add and manage tasks with keyboard support
- **Responsive Design** - Clean, modern styling that works on all devices
- **Component Architecture** - Modular React components for maintainability

## Technology Stack

- **React 18** - JavaScript library for building user interfaces
- **React Router 6** - Declarative routing for React applications
- **Webpack 5** - Module bundler for modern JavaScript applications
- **Babel** - JavaScript compiler for next generation JavaScript

## Getting Started

### Prerequisites

Make sure you have Node.js installed on your system.

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd craft
```

2. Install dependencies:
```bash
npm install
```

### Development

Start the development server:
```bash
npm start
# or
npm run dev
```

The application will open in your browser at `http://localhost:3000`.

### Build

Create a production build:
```bash
npm run build
```

## Project Structure

```
craft/
├── public/
│   └── index.html          # HTML template
├── src/
│   ├── components/
│   │   ├── Navigation.js   # Navigation menu component
│   │   ├── Home.js         # Home page component
│   │   └── About.js        # About page component
│   ├── App.js              # Main application component
│   ├── App.css             # Application styles
│   └── index.js            # Entry point
├── webpack.config.js       # Webpack configuration
├── package.json            # Dependencies and scripts
└── README.md               # Project documentation
```

## Available Scripts

- `npm start` - Start development server
- `npm run dev` - Start development server with auto-open
- `npm run build` - Build for production

## Pages

### Home (`/`)
- Welcome message and project overview
- Interactive counter with +/- buttons and reset
- Todo list with add functionality
- Features list

### About (`/about`)
- Project overview and description
- Technology stack information
- Getting started instructions
- Contact information

## Contributing

Feel free to explore the code and modify it as needed. This project serves as a foundation for learning React concepts and can be extended with additional features.