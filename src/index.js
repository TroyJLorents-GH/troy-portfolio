import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import Contact from "./components/Contact/Contact";
import AIAssistant from "./components/AIAssistant/AIAssistant";
import "./index.css";
import "./portfolio-v2.scss";
import { initBlueprint } from "./blueprint/blueprint";
import "./blueprint/blueprint.scss";

if (document.documentElement.dataset.portfolioV2 === "true") {
  // A markup change must never stop the contact form and assistant from mounting.
  let disposeBlueprint;
  try {
    disposeBlueprint = initBlueprint();
  } catch (error) {
    console.error('Blueprint presentation failed; showing the standard page.', error);
    document.documentElement.dataset.portfolioBlueprint = 'false';
  }
  const onPageHide = event => {
    if (!event.persisted) {
      disposeBlueprint?.();
      window.removeEventListener('pagehide', onPageHide);
    }
  };
  window.addEventListener('pagehide', onPageHide);
  ReactDOM.createRoot(document.getElementById("contact-widget")).render(<Contact />);
  ReactDOM.createRoot(document.getElementById("assistant-widget")).render(<AIAssistant />);
  requestAnimationFrame(() => requestAnimationFrame(() => window.refreshPortfolioLayout?.()));
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
