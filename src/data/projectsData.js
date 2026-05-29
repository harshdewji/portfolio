// Single Source of Truth for Harsh Kumar Dewangan's Projects
// Editing this file automatically synchronizes the project grid and the system documentation modal.

export const projectsData = [
  {
    id: 'chat-app',
    title: 'Real-Time Chat Application',
    description: 'A modern instant messaging application built to provide seamless, low-latency communication between users.',
    bullets: [
      'Developed real-time chat functionality using WebSockets (Socket.IO) for instant message delivery.',
      'Designed interactive user status metrics, including live online/offline presence and typing indicators.',
      'Implemented secure user authentication with JWT and optimized file upload pipelines for image sharing.'
    ],
    tech: ['React.js', 'Node.js', 'Socket.IO', 'Neon DB', 'Express.js', 'JWT'],
    github: 'https://github.com/harshdewji',
    live: 'https://harshbuilds-theta.vercel.app/',
    doc: {
      overview: 'This project implements a fully responsive real-time chat application with instant message updates, typing indicators, user online states, and image sharing. The codebase is optimized for production-grade WebSocket pooling.',
      architecture: 'Client-Server architecture. The frontend is built as a single-page React app that initiates WebSocket connections to an Express server. Messages are stored persistently in Neon PostgreSQL, and media file uploads are integrated directly with Cloudinary API.',
      dbSchema: `Table Users {
  id serial [pk]
  username varchar(50) [not null]
  email varchar(100) [unique, not null]
  password_hash varchar(255) [not null]
  status varchar(15) // 'online', 'offline'
  avatar_url varchar(255)
  created_at timestamp [default: now()]
}

Table Messages {
  id serial [pk]
  sender_id integer [ref: > Users.id, not null]
  receiver_id integer [ref: > Users.id, not null]
  content text [not null]
  image_url varchar(255)
  is_read boolean [default: false]
  created_at timestamp [default: now()]
}`,
      apiEndpoints: [
        { method: 'POST', path: '/api/auth/register', desc: 'Registers a new user profile' },
        { method: 'POST', path: '/api/auth/login', desc: 'Authenticates user credentials and returns JWT' },
        { method: 'GET', path: '/api/users/contacts', desc: 'Retrieve contacts list with active online/offline status' },
        { method: 'POST', path: '/api/media/upload', desc: 'Uploads images to Cloudinary for real-time messaging' }
      ],
      installation: [
        'git clone https://github.com/harshdewji/realtime-chat',
        'cd realtime-chat && npm install',
        'Set up a .env file with PORT, DATABASE_URL (Neon DB), and JWT_SECRET',
        'npm run dev (starts both client and socket listener server)'
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
    github: 'https://github.com/harshdewji',
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
