const portfolioData = [
  {
    name: "Enterprise Student Assignment System",
    link: "https://studentsystem-web-cwc6dec2f3afg4d7.westus-01.azurewebsites.net/",
    github: [
      {
        label: "Full-Stack (.NET + Blazor)",
        url: "https://github.com/TroyJLorents-GH/NET_EnterpriseStudentSystem"
      }
    ],
    description:
      "A comprehensive full-stack admin dashboard for managing student assignments, grader applications, and course schedules. Complements the Student Hiring System by providing administrators with bulk operations, inline editing, and document status tracking. Built with clean architecture using .NET 8.0 Web API backend and Blazor Server for real-time UI updates via SignalR. Features Azure SQL database integration and deployed on Azure App Services with Application Insights monitoring.",
    tags: [
      "C# (ASP.NET Core 8.0)", ".NET 8.0", "Blazor Server", "SignalR", "Entity Framework Core",
      "Dapper", "ADO.NET", "Clean Architecture", "Azure SQL Database", "Azure App Services",
      "Application Insights", "Swagger/OpenAPI", "xUnit", "Repository Pattern", "Dependency Injection",
      "Bootstrap 5", "Real-time Updates", "CRUD Operations", "SQL Server"
    ]
  },
  {
    name: "Student Hiring System",
    link: "https://www.troystaticsite.com",
    github: [
      {
        label: "Backend (.NET)",
        url: "https://github.com/TroyJLorents-GH/MyStudentApi"
      },
      {
        label: "Frontend (React)",
        url: "https://github.com/TroyJLorents-GH/student-ui"
      }
    ],
    description:
      "A full-stack application to streamline student hiring and automate HR workflows for a university. Features a .NET Core Web API backend and a React frontend, both deployed on Azure. Includes secure authentication, advanced UI with MUI X Pro, and automated integration with Microsoft/Google tools.",
    tags: [
      "C# (ASP.NET Core Web API)", ".NET Core", "Swagger", "Authentication: CAS SSO, JWT",  "Entity Framework", "React.js", "Material UI / MUI X Pro", "React Router",
      "JavaScript (ES6+)", "HTML5", "CSS3/SCSS", "SQL (SQL Server, PostgreSQL, Redshift)", "Azure", "fetch", "Power Automate"
    ]
  },
  {
  name: "Student Hiring System (Python + React)",
  link: "https://blue-moss-0cf2b2f10.1.azurestaticapps.net",
  github: [
    {
      label: "Backend (Py – FastAPI)",
      url: "https://github.com/TroyJLorents-GH/StudentApi-py"
    },
    {
      label: "Frontend (React)",
      url: "https://github.com/TroyJLorents-GH/ui-student-py"
    }
  ],
  description:
    "A full-stack student hiring and workflow automation app. Rewritten with a Python (FastAPI) backend and a modern React frontend for easier cross-platform hosting, faster deployment, and improved developer productivity. Features secure authentication (ASU CAS SSO, JWT), OpenAPI/Swagger auto-docs, and Power Automate integration. Deployed with Azure App Service, Static Web Apps, and GitHub Actions CI/CD.",
  tags: [
    "Python 3.x", "FastAPI", "Uvicorn", "SQLAlchemy", 
    "SQL Server", "Azure SQL", "PostgreSQL", "Redshift", 
    "Authentication: CAS SSO, JWT", "Swagger/OpenAPI", 
    "React.js (ES6+)", "Material UI / MUI X Pro", "React Router", 
    "Axios", "fetch", "React Context", "CSS3/SCSS", "Power Automate", 
    "React Testing Library", "Jest", "Azure", "GitHub"
  ]
  },
  {
      name: "NextStep - Career Guidance and Job Discovery Web App",
      link: "https://job-tracker-frontend-ekxsmomdlq-uw.a.run.app/",
      github: [
        {
          label: "GitHub Repo",
          url: "https://github.com/TroyJLorents-GH/tanstack-job-tracker"
        }
      ],
      description:
        "A completed job tracking and dashboard application. Search for jobs across LinkedIn, Indeed, Glassdoor, ZipRecruiter all in one place. Hosted on GC with user data persisted in a Supabase PostgreSQL database. Built with React, TypeScript, and TanStack libraries, it includes interactive filtering, sorting, and data visualization with a polished, responsive UI.",
      tags: [
        "React.js", "TypeScript", "TanStack Table", "TanStack Query",
        "SCSS", "JavaScript (ES6+)", "Responsive UI", "Data Visualization",
        "Google Cloud Run", "Supabase", "PostgreSQL"
      ]
    },
  {
    name: "InsightAI",
    link: "https://insightai-openai.streamlit.app/", // If you have a live demo, add the URL; otherwise, leave blank
    github: [
      {
        label: "GitHub Repo",
        url: "https://github.com/TroyJLorents-GH/InsightAI"
      }
    ],
    description:
      "A document-aware AI chatbot demo that lets users upload files (PDF, Word, Excel, CSV) and chat with an AI assistant powered by GPT-4. Features document Q&A, summarization, content flagging, session history, pin/delete/resume chat, and OpenAI moderation—all in a modern Streamlit UI.",
    tags: [
      "Python 3.13", "Streamlit", "OpenAI GPT-4", "Document Q&A", "Chatbot",
      "PyMuPDF (fitz)", "SQLite", "python-dotenv",
      "Session Persistence", "Content Moderation", "Keyword Extraction"
    ]
  },
  {
    name: "OpenAI MLL (In Progress)",
    link: "", // Add live demo link if you have one, else leave blank
    github: [
      {
        label: "GitHub Repo",
        url: "https://github.com/TroyJLorents-GH/openai-mll"
      }
    ],
    status: "in-progress",
    progress: 90,
    description:
      "A hands-on playground for experimenting with OpenAI's GPT models, including prompt engineering, API integration, and real-time responses. This project features a streamlined Python backend and CLI for fast prototyping, as well as environment management with python-dotenv. Great for AI workflow demos and testing new LLM features.",
    tags: [
      "Python", "OpenAI API", "OpenAI GPT-4", "Prompt Engineering", 
    "python-dotenv", "LLM Playground", "Session Persistence", "PyMuPDF (fitz)",
    "React", "JavaScript", "JSX", "CSS-in-JS", 
    "Flask", "State Management", "Error/Threat Handling", "Chat Interface Design"
    ]
  },
  {
    name: "React Native Scheduler (In Progress)",
    link: "", // Add your demo/testflight link here in the future if you want!
    github: [
      {
        label: "GitHub Repo",
        url: "https://github.com/TroyJLorents-GH/react-native-scheduler"
      }
    ],
  status: "in-progress",
    progress: 85,
    description:
      "A mobile app for scheduling, calendar management, and to-do tracking, built with React Native and Expo. Integrates with Google Calendar, supports reminders, and features an intuitive modern UI, and is an Productivity App that users will actually want to use daily! Currently in development, aiming for both iOS and Android release.",
    tags: [
      "React Native", "Expo", "JavaScript (ES6+)", "Google Calendar API", "OpenWeather API",
      "Mobile App", "Scheduling", "Reminders", "UI/UX", "Cross-Platform", "iOS", "Android"
    ]
  },
  {
    name: "GraphQL Chatroom (In Progress)",
    link: "",
    github: [
      {
        label: "GitHub Repo",
        url: "https://github.com/TroyJLorents-GH/chat_application_FS_GQL"
      }
    ],
    status: "in-progress",
    progress: 85,
    description:
      "A custom chatroom application using GraphQL for queries, mutations, and subscriptions. Built with React + Apollo Client on the frontend and a GraphQL backend to handle real-time messaging. Includes room creation, message history, and live updates.",
    tags: [
      "React.js", "Apollo Client", "GraphQL", "Subscriptions", "Superbase", "Node.js",
      "JavaScript (ES6+)", "Chat Application", "Real-time Updates", "UI/UX"
    ]
  }
];

export default portfolioData;
