// Single Source of Truth for Harsh Kumar Dewangan's Projects
// Editing this file automatically synchronizes the project grid and the system documentation modal.

export const projectsData = [
  {
    id: 'expense-tracker',
    title: 'Expense Tracker System',
    description: 'A comprehensive full-stack financial management platform for tracking income, managing expenses, and visualizing financial analytics.',
    bullets: [
      'Built multi-wallet management with interactive tracking for cash, bank, and digital accounts.',
      'Designed analytics dashboards featuring interactive data charts for expense categorizations and monthly budget tracking.',
      'Implemented automated document scanning/OCR parsing for invoice processing and recurring transaction schedules.'
    ],
    tech: ['React.js', 'Node.js', 'Express.js', 'PostgreSQL', 'Prisma', 'Chart.js', 'JWT'],
    github: 'https://github.com/harshdewji/expense-tracker',
    live: 'https://harshbuilds-theta.vercel.app/',
    doc: {
      overview: 'A production-ready Fintech Expense Tracker platform allowing users to log daily expenses, monitor wallet balances, scan receipts with OCR capabilities, and analyze spending patterns with real-time charts.',
      architecture: 'Full-Stack architecture. React (Vite) client interfacing with a Node.js Express REST API backend using Prisma ORM with PostgreSQL database.',
      dbSchema: `Table Users {
  id serial [pk]
  name varchar(100) [not null]
  email varchar(100) [unique, not null]
  password_hash varchar(255) [not null]
  created_at timestamp [default: now()]
}

Table Wallets {
  id serial [pk]
  user_id integer [ref: > Users.id, not null]
  name varchar(50) [not null]
  balance numeric(12,2) [default: 0.00]
  type varchar(20) // 'Cash', 'Bank', 'Credit'
}

Table Transactions {
  id serial [pk]
  wallet_id integer [ref: > Wallets.id, not null]
  type varchar(10) // 'income', 'expense'
  category varchar(50) [not null]
  amount numeric(12,2) [not null]
  description text
  date timestamp [default: now()]
}`,
      apiEndpoints: [
        { method: 'GET', path: '/api/transactions', desc: 'Fetches filtered transactions for the user' },
        { method: 'POST', path: '/api/transactions/create', desc: 'Logs a new income or expense entry' },
        { method: 'GET', path: '/api/wallets', desc: 'Fetches wallet balance breakdown' },
        { method: 'POST', path: '/api/ocr/scan', desc: 'Parses uploaded receipt images to extract bill amounts' }
      ],
      installation: [
        'git clone https://github.com/harshdewji/expense-tracker',
        'cd expense-tracker && npm install',
        'Configure database credentials in .env and run npx prisma db push',
        'npm run dev'
      ]
    }
  },
  {
    id: 'movie-explorer',
    title: 'Movie Explorer',
    description: 'A responsive cinematic discovery platform providing real-time movie search, trending trailers, personalized watchlists, and detailed media metrics.',
    bullets: [
      'Engineered an interactive discovery interface consuming TMDB REST APIs for real-time search, genres, and trending releases.',
      'Implemented user watchlist management and rating systems with persistent state storage.',
      'Optimized performance using debounced search queries, infinite scroll pagination, and responsive modal views.'
    ],
    tech: ['React.js', 'Node.js', 'Express.js', 'TMDB API', 'Tailwind CSS', 'REST API'],
    github: 'https://github.com/harshdewji/movie-explorer',
    live: 'https://harshbuilds-theta.vercel.app/',
    doc: {
      overview: 'A feature-packed Movie Explorer web application allowing users to browse trending cinema, search global movie databases, view detailed cast/crew metrics, stream trailers, and manage personalized watchlists.',
      architecture: 'MERN stack architecture with React (Vite) frontend communicating with an Express/Node.js API proxy and MongoDB for user watchlists, ratings, and review collections.',
      dbSchema: `Collection Users {
  _id ObjectId [pk]
  username String [unique, not null]
  email String [unique, not null]
  password_hash String [not null]
  avatar_url String
  created_at Date [default: Date.now]
}

Collection Watchlists {
  _id ObjectId [pk]
  user_id ObjectId [ref: > Users._id, not null]
  movie_id String [not null] // TMDB Movie ID
  title String [not null]
  poster_path String
  release_date String
  vote_average Number
  status String [default: 'Plan to Watch'] // 'Plan to Watch', 'Watched'
  added_at Date [default: Date.now]
}

Collection Reviews {
  _id ObjectId [pk]
  user_id ObjectId [ref: > Users._id, not null]
  movie_id String [not null]
  rating Number [not null] // 1 - 10 scale
  review_text String
  created_at Date [default: Date.now]
}`,
      apiEndpoints: [
        { method: 'GET', path: '/api/movies/trending', desc: 'Fetches weekly trending movies with backend caching' },
        { method: 'GET', path: '/api/movies/search?q=:query', desc: 'Searches movies by title or keyword with debouncing' },
        { method: 'POST', path: '/api/watchlist/add', desc: 'Adds a movie title to the authenticated user\'s watchlist' },
        { method: 'POST', path: '/api/movies/review', desc: 'Submits user rating and review for a specific movie' }
      ],
      installation: [
        'git clone https://github.com/harshdewji/movie-explorer',
        'cd movie-explorer && npm install',
        'Configure TMDB_API_KEY, MONGODB_URI, and PORT in .env',
        'npm run dev'
      ]
    }
  },
  {
    id: 'erp-system',
    title: 'ERP Management System',
    description: 'An Enterprise Resource Planning dashboard created to optimize organizational operations, workflow automation, and personnel management.',
    bullets: [
      'Built administrative workflows to track employee directory details, attendance records, and task delegations.',
      'Designed secure role-based access control (RBAC) systems with custom authorization views.',
      'Integrated interactive data analysis widgets displaying real-time task progress and productivity metrics.'
    ],
    tech: ['React.js', 'Node.js', 'MongoDB', 'REST APIs', 'Bootstrap', 'Express.js'],
    github: 'https://github.com/harshdewji/erp-management-system',
    live: 'https://harshbuilds-theta.vercel.app/',
    doc: {
      overview: 'An Enterprise Resource Planning (ERP) platform allowing managers to organize employee activities, log work attendance, assign tasks, and monitor departmental performance analytics in real time.',
      architecture: 'MERN Stack. Built with a React-based frontend dashboard, an Express/Node.js REST API server, and a MongoDB backend. Middleware layers handle Role-Based Access Control (RBAC) validations per route.',
      dbSchema: `Collection Employees {
  _id ObjectId [pk]
  name String [not null]
  email String [unique, not null]
  role String [not null] // 'Admin', 'Manager', 'Staff'
  department String [not null]
  hire_date Date [default: Date.now]
}

Collection Attendance {
  _id ObjectId [pk]
  employee_id ObjectId [ref: > Employees._id, not null]
  date Date [not null]
  status String [not null] // 'Present', 'Absent', 'Leave'
  check_in String // e.g. "09:00 AM"
  check_out String // e.g. "05:00 PM"
}

Collection Tasks {
  _id ObjectId [pk]
  assigned_to ObjectId [ref: > Employees._id, not null]
  title String [not null]
  description String
  priority String // 'High', 'Medium', 'Low'
  status String [default: 'Pending'] // 'Pending', 'In Progress', 'Completed'
  due_date Date
}`,
      apiEndpoints: [
        { method: 'GET', path: '/api/employees', desc: 'Fetch all employee profiles (Admin/Manager role required)' },
        { method: 'POST', path: '/api/attendance/checkin', desc: 'Logs daily check-in time for employee' },
        { method: 'POST', path: '/api/tasks/create', desc: 'Assigns a new project task to a specific staff member' },
        { method: 'GET', path: '/api/analytics/dashboard', desc: 'Aggregate stats on attendance and completed tasks' }
      ],
      installation: [
        'git clone https://github.com/harshdewji/erp-system',
        'cd erp-system && npm install',
        'Configure your MONGODB_URI and JWT_SECRET inside local environments',
        'npm run dev (spins up Vite frontend server and Express api portal)'
      ]
    }
  }
];
