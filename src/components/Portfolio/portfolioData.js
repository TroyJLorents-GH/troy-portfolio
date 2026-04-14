const portfolioData = [
  {
    name: "Agent OS",
    link: "https://pjf-ai-commandcenter.netlify.app/",
    github: [
      {
        label: "GitHub Repo",
        url: "https://github.com/TroyJLorents-GH/agent-os"
      }
    ],
    description:
      "A dashboard-style AI workspace with 6 agents, 9 tools, and 10 pages. Features voice input, scheduled agent runs, budget tracking, and an integrated terminal. Built with React, TypeScript, and Tailwind CSS. Vision: a Neural Architect platform with multi-model support, agent cards, document workflows, and vector search.",
    tags: [
      "React", "TypeScript", "Tailwind CSS", "Azure AI Foundry", "Multi-Agent Systems",
      "Voice Input", "Scheduled Agents", "Budget Tracking", "Terminal", "Vite"
    ]
  },
  {
    name: "Job Nexus",
    link: "https://job-nexus-delta.vercel.app/",
    github: [
      {
        label: "GitHub Repo",
        url: "https://github.com/TroyJLorents-GH/job-nexus"
      }
    ],
    description:
      "A combined job search application that unifies job tracking, JobSpy web scraping, resume matching, and AI chat into a single platform. Features Firebase Auth (Google, Email/Password, Email Link), multi-user data isolation, and responsive design. Deployed on Vercel.",
    tags: [
      "React 19", "TypeScript", "Tailwind CSS", "TanStack (Table, Query, Router)",
      "Firebase Auth", "Vercel", "JobSpy", "AI Chat", "Vite", "Responsive Design"
    ]
  },
  {
    name: "Doc Intelligence Hub",
    link: "",
    github: [
      {
        label: "GitHub Repo",
        url: "https://github.com/TroyJLorents-GH/doc-intel-hub"
      }
    ],
    status: "in-progress",
    progress: 90,
    description:
      "A multi-format document intelligence platform with Agentic RAG. Processes PDFs, Word docs, and images through Azure Document Intelligence, generates embeddings, and stores them in Cosmos DB for semantic search. Features a Flask API hosted on an Azure VM with hybrid search (BM25 + vector) powered by Azure AI Search, Graphiti knowledge graphs via Neo4j, job-resume matching, and automated indexing.",
    tags: [
      "Python", "Flask", "Azure Document Intelligence", "Azure AI Search",
      "Cosmos DB", "Embeddings", "Semantic Search", "Agentic RAG", "Neo4j Aura",
      "Graphiti Knowledge Graphs", "Hybrid Search (BM25 + Vector)", "Docker", "Azure VM", "REST API"
    ]
  },
  {
    name: "Resume Match AI",
    link: "https://openai-llm.netlify.app/",
    github: [
      {
        label: "GitHub Repo",
        url: "https://github.com/TroyJLorents-GH/openai-mll"
      }
    ],
    description:
      "A full-stack AI-powered resume matching and chat platform. Features an intelligent chat interface backed by Azure AI Foundry agents, resume-to-job matching via Azure AI Search (hybrid BM25 + vector), and a Python Flask API proxy hosted on an Azure VM. Built with React and Material UI with a clean light theme.",
    tags: [
      "React", "Material UI", "Python", "Flask", "Azure AI Foundry",
      "Azure AI Search", "Azure OpenAI", "Neo4j Aura", "Cosmos DB", "Embeddings",
      "Hybrid Search", "VM API Proxy", "REST API", "LLM Integration", "Knowledge Graphs"
    ]
  },
  {
    name: "Peptide Tracker",
    link: "https://peptide-iq.vercel.app/",
    github: [
      {
        label: "GitHub Repo",
        url: "https://github.com/TroyJLorents-GH/peptide-app"
      }
    ],
    description:
      "A peptide tracking, calculator, and serum concentration web app. Features dosage calculations, injection logging, and concentration tracking with a polished UI built on MUI X Pro components.",
    tags: [
      "React", "Material UI / MUI X Pro", "TypeScript", "Calculators",
      "Health & Fitness", "Responsive Design"
    ]
  },
  {
    name: "Window Commander",
    link: "",
    github: [
      {
        label: "GitHub Repo",
        url: "https://github.com/TroyJLorents-GH/window-commander"
      }
    ],
    description:
      "A phone-controlled desktop window manager with voice push-to-talk. Consists of a Python desktop agent that manages windows and a companion Expo mobile app for remote control and voice commands.",
    tags: [
      "Python", "React Native", "Expo", "Voice Control", "Desktop Automation",
      "Window Management", "Push-to-Talk", "WebSocket"
    ]
  },
  {
    name: "Job Advisor",
    link: "",
    github: [
      {
        label: "GitHub Repo",
        url: "https://github.com/TroyJLorents-GH/job-advisor"
      }
    ],
    description:
      "A resume and job advisory tool powered by Azure AI Foundry's ResumeAgent. Analyzes job postings and recommends the best-fit resume from a candidate's portfolio. Built with React, Tailwind CSS, and Netlify Functions with service principal authentication.",
    tags: [
      "React", "Tailwind CSS", "Netlify Functions", "Azure AI Foundry",
      "Foundry Agents", "Service Principal Auth", "Serverless", "JavaScript (ES6+)"
    ]
  },
  {
    name: "Enterprise Student Assignment System",
    link: "https://studentsystem-web-central-hma3gmcbgtdqe9hb.centralus-01.azurewebsites.net/",
    github: [
      {
        label: "Full-Stack (.NET + Blazor)",
        url: "https://github.com/TroyJLorents-GH/NET_EnterpriseStudentSystem"
      }
    ],
    description:
      "A comprehensive full-stack admin dashboard for managing student assignments, grader applications, and course schedules. Built with clean architecture using .NET 8.0 Web API backend and Blazor Server for real-time UI updates via SignalR. Features Azure SQL database integration and deployed on Azure App Services with Application Insights monitoring.",
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
      "C# (ASP.NET Core Web API)", ".NET Core", "Swagger", "Authentication: CAS SSO, JWT", "Entity Framework", "React.js", "Material UI / MUI X Pro", "React Router",
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
    link: "https://insightai-openai.streamlit.app/",
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
    name: "React Native Scheduler (In Progress)",
    link: "",
    github: [
      {
        label: "GitHub Repo",
        url: "https://github.com/TroyJLorents-GH/react-native-scheduler"
      }
    ],
    status: "in-progress",
    progress: 85,
    description:
      "A mobile app for scheduling, calendar management, and to-do tracking, built with React Native and Expo SDK 55. Integrates with Google Calendar, supports reminders, and features an intuitive modern UI. Currently in development, aiming for both iOS and Android release.",
    tags: [
      "React Native", "Expo SDK 55", "JavaScript (ES6+)", "Google Calendar API", "OpenWeather API",
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
      "React.js", "Apollo Client", "GraphQL", "Subscriptions", "Supabase", "Node.js",
      "JavaScript (ES6+)", "Chat Application", "Real-time Updates", "UI/UX"
    ]
  }
];

export default portfolioData;
