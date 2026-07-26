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
    id: 'library-management',
    title: 'Library Management System',
    description: 'A modern web application for digital book cataloging, circulation tracking, and library member management.',
    bullets: [
      'Developed automated borrowing and returning workflows with fine calculation and due date tracking.',
      'Implemented real-time book search, category filtering, and ISBN database lookups.',
      'Designed admin dashboards for inventory management and member activity audit logs.'
    ],
    tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Tailwind CSS', 'REST API'],
    github: 'https://github.com/harshdewji/library-management-system',
    live: 'https://harshbuilds-theta.vercel.app/',
    doc: {
      overview: 'A digital platform for libraries to manage book inventories, track issued books, maintain reader profiles, and automate late return penalties.',
      architecture: 'MERN stack architecture with React frontend interface communicating with Express/Node.js API endpoints backed by MongoDB schemas.',
      dbSchema: `Collection Books {
  _id ObjectId [pk]
  title String [not null]
  author String [not null]
  isbn String [unique, not null]
  category String [not null]
  available_copies Number [default: 1]
  total_copies Number [default: 1]
}

Collection BorrowRecords {
  _id ObjectId [pk]
  book_id ObjectId [ref: > Books._id, not null]
  user_id ObjectId [ref: > Users._id, not null]
  issue_date Date [default: Date.now]
  due_date Date [not null]
  return_date Date
  fine_amount Number [default: 0]
  status String [default: 'Borrowed'] // 'Borrowed', 'Returned', 'Overdue'
}`,
      apiEndpoints: [
        { method: 'GET', path: '/api/books', desc: 'Retrieve catalog of books with availability filters' },
        { method: 'POST', path: '/api/books/borrow', desc: 'Issue a book to a registered library member' },
        { method: 'POST', path: '/api/books/return', desc: 'Process returned book and compute applicable overdue fines' },
        { method: 'GET', path: '/api/admin/reports', desc: 'Fetch overall borrowing statistics and overdue alerts' }
      ],
      installation: [
        'git clone https://github.com/harshdewji/library-management',
        'cd library-management && npm install',
        'Set MONGODB_URI and PORT in environment settings',
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
