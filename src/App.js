// Smita's Animated Portfolio Website

import React from "react";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-50 text-gray-900 px-6 py-10">
      <section className="text-center mb-16">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold mb-4"
        >
          👋 Hi, I'm Smita Kulkarni
        </motion.h1>
        <p className="text-lg max-w-xl mx-auto">
          MSBA @ University of Washington • Ex-Deloitte • Passionate about pricing, forecasting, and turning messy data into smart decisions.
        </p>
      </section>

      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-4">🚀 Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Project Cards Placeholder */}
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-4">🛠 Skills & Tools</h2>
        <ul className="grid grid-cols-2 md:grid-cols-3 gap-2 text-sm">
          <li>Python, R, SQL</li>
          <li>Power BI, Tableau, Excel VBA</li>
          <li>Machine Learning, Time Series, Forecasting</li>
          <li>Regression, Clustering, Association Rules</li>
          <li>Agile, Jira, GenAI</li>
          <li>Data Modeling & Project Management</li>
        </ul>
      </section>

      <section className="text-center">
        <h2 className="text-2xl font-semibold mb-2">📫 Let's Connect</h2>
        <p>📍 Seattle, WA</p>
        <p>📧 <a href="mailto:smitask244@gmail.com" className="text-blue-600">smitask244@gmail.com</a></p>
        <a
          href="https://linkedin.com/in/smita-kulkarni-239b51124"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-4 px-4 py-2 bg-blue-600 text-white rounded-md"
        >
          LinkedIn
        </a>
      </section>
    </div>
  );
}
