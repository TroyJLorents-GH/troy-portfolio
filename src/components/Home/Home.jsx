import React from "react";
import { motion } from "framer-motion";
import "./Home.scss";

const socials = [
  { icon: "ri-mail-line", href: "mailto:troy.j.lorents@gmail.com", title: "Email" },
  { icon: "ri-github-line", href: "https://github.com/TroyJLorents-GH", title: "GitHub" },
  { icon: "ri-linkedin-box-line", href: "https://www.linkedin.com/in/troy-lorents/", title: "LinkedIn" },
  { icon: "ri-profile-line", href: "/assets/Troy_Lorents_Resume_2026.pdf", title: "Resume" },
];

const Home = () => {
  return (
    <>
      {/* Fixed social icons (site chrome) */}
      <div className="icons">
        {socials.map((s) => (
          <a
            key={s.title}
            href={s.href}
            title={s.title}
            target={s.href.startsWith("http") || s.href.startsWith("/assets") ? "_blank" : undefined}
            rel="noopener noreferrer"
          >
            <i className={s.icon}></i>
          </a>
        ))}
      </div>

      <section className="hero">
        {/* Animated background grid */}
        <div className="hero__grid" aria-hidden="true" />

        <motion.div
          className="hero__inner"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Monogram avatar */}
          <motion.div
            className="hero__avatar"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
          >
            <span>TL</span>
          </motion.div>

          <motion.h1
            className="hero__title"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            Troy Lorents
          </motion.h1>

          <motion.p
            className="hero__role"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.38, duration: 0.6 }}
          >
            Senior Full-Stack Software Developer
          </motion.p>

          <motion.p
            className="hero__bio"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45, duration: 0.6 }}
          >
            I design, develop, and deploy web, mobile, and AI-powered solutions, from
            enterprise workflow apps to intelligent agents and document intelligence
            platforms. Background in Business Law plus 8+ years of software engineering.
            I specialize in React.js, .NET, Python, and cloud platforms, with deep
            experience in Azure AI Foundry agents, RAG pipelines, semantic search, and
            LLM integrations.
          </motion.p>

          <motion.div
            className="hero__cta"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55, duration: 0.6 }}
          >
            <a href="#contact" className="btn btn--primary">
              <i className="ri-mail-line"></i> Get in Touch
            </a>
            <a href="#portfolio" className="btn btn--outline">
              View Projects <i className="ri-arrow-down-line"></i>
            </a>
          </motion.div>

          <motion.div
            className="hero__socials"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.65, duration: 0.6 }}
          >
            {socials.map((s) => (
              <motion.a
                key={s.title}
                href={s.href}
                title={s.title}
                target={s.href.startsWith("http") || s.href.startsWith("/assets") ? "_blank" : undefined}
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <i className={s.icon}></i>
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.a
          href="#skills"
          className="hero__scroll"
          aria-label="Scroll to skills"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 10, 0] }}
          transition={{
            opacity: { delay: 1, duration: 0.6 },
            y: { delay: 1.5, duration: 1.5, repeat: Infinity },
          }}
        >
          <i className="ri-arrow-down-line"></i>
        </motion.a>
      </section>
    </>
  );
};

export default Home;
