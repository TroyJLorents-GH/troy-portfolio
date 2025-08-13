const portfolioData = [
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
  progress: 50,
  description:
    "A mobile app for scheduling, calendar management, and to-do tracking, built with React Native and Expo. Integrates with Google Calendar, supports reminders, and features an intuitive modern UI, and is an Productivity App that users will actually want to use daily! Currently in development, aiming for both iOS and Android release.",
  tags: [
    "React Native", "Expo", "JavaScript (ES6+)", "Google Calendar API", "OpenWeather API",
    "Mobile App", "Scheduling", "Reminders", "UI/UX", "Cross-Platform", "iOS", "Android"
  ]
}
  // Add more projects here...
];

export default portfolioData;
