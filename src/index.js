import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import Contact from "./components/Contact/Contact";
import AIAssistant from "./components/AIAssistant/AIAssistant";
import "./index.css";
import "./portfolio-v2.scss";

if (document.documentElement.dataset.portfolioV2 === "true") {
  ReactDOM.createRoot(document.getElementById("contact-widget")).render(<Contact />);
  ReactDOM.createRoot(document.getElementById("assistant-widget")).render(<AIAssistant />);
  requestAnimationFrame(() => requestAnimationFrame(() => window.ScrollTrigger?.refresh()));
} else {
  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(
    <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.StrictMode>
  );
}
