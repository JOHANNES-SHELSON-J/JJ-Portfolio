"use client";

import Head from "next/head";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  // Smooth scroll handler
  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <Head>
        <title>My Portfolio</title>
        <meta name="description" content="Professional Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Background animation and design */}
      <div className="fixed top-0 left-0 w-full h-full -z-10 overflow-hidden bg-gradient-to-br from-blue-100 via-white to-blue-50">
        {/* Existing spinning circles */}
        <svg
          className="absolute animate-slow-spin"
          width="400"
          height="400"
          viewBox="0 0 400 400"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{ opacity: 0.05, top: "10%", left: "10%", position: "absolute" }}
        >
          <circle cx="200" cy="200" r="180" stroke="#3B82F6" strokeWidth="20" />
        </svg>
        <svg
          className="absolute animate-slow-spin-reverse"
          width="300"
          height="300"
          viewBox="0 0 300 300"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{ opacity: 0.05, bottom: "10%", right: "10%", position: "absolute" }}
        >
          <circle cx="150" cy="150" r="140" stroke="#2563EB" strokeWidth="15" />
        </svg>

        {/* New subtle abstract blob shapes */}
        <svg
          className="absolute"
          width="300"
          height="300"
          viewBox="0 0 200 200"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{
            opacity: 0.07,
            top: "20%",
            right: "15%",
            position: "absolute",
            filter: "blur(30px)",
            transform: "rotate(15deg)",
          }}
        >
          <path
            fill="#3B82F6"
            d="M44.4,-72.2C57.8,-64.7,64.9,-50.6,69.7,-36.4C74.5,-22.2,77,-11.1,73.9,-2.1C70.9,6.9,62.4,13.7,54.3,23.4C46.2,33.1,38.5,45.8,29.5,50.6C20.5,55.5,10.2,52.6,-0.6,54.1C-11.4,55.6,-22.7,61.5,-31,57.1C-39.3,52.8,-44.5,38.2,-52.7,28.1C-60.9,18,-72,12.3,-72.1,3.8C-72.2,-4.7,-61.2,-16.2,-53.8,-28.3C-46.5,-40.4,-42.8,-52.9,-35.2,-61.6C-27.6,-70.4,-16.9,-75.3,-6.5,-73.4C3.9,-71.6,7.9,-63.7,44.4,-72.2Z"
            transform="translate(100 100)"
          />
        </svg>

        <svg
          className="absolute"
          width="250"
          height="250"
          viewBox="0 0 200 200"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{
            opacity: 0.06,
            bottom: "25%",
            left: "10%",
            position: "absolute",
            filter: "blur(20px)",
            transform: "rotate(-25deg)",
          }}
        >
          <path
            fill="#2563EB"
            d="M42.1,-67.8C54.1,-61.3,60.7,-50.2,66.4,-39.7C72.1,-29.1,76.9,-19,76.1,-9.8C75.4,-0.5,68.9,7.9,63.3,18.6C57.6,29.3,52.8,42.4,44.1,51.7C35.4,61.1,22.8,66.7,10.2,65.3C-2.4,63.8,-14.9,55.3,-24.9,48.7C-34.8,42.1,-42.3,37.3,-46.6,30.6C-50.8,23.9,-51.8,15.3,-56.4,6.9C-61,-1.5,-69.1,-10.7,-68.6,-19.4C-68.1,-28.2,-58.9,-36.5,-51.7,-45.4C-44.4,-54.4,-39.2,-64,-31.8,-69.4C-24.3,-74.7,-12.2,-75.9,-1,-73.9C10.3,-71.9,20.6,-66.3,42.1,-67.8Z"
            transform="translate(100 100)"
          />
        </svg>
      </div>

      {/* NAVIGATION BAR */}
<nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-sm shadow-md z-50">
  <div className="max-w-10xl mx-auto px-6 py-4 flex justify-between items-center">
    {/* Logo / Name */}
    <div
      className="text-2xl sm:text-3xl font-extrabold text-blue-600 tracking-wide cursor-pointer"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
    >
      My Portfolio
    </div>

    {/* Navigation Links */}
    <ul className="hidden md:flex space-x-8 text-gray-700 font-medium">
      {["about", "projects", "skills", "contact"].map((section) => (
        <li
          key={section}
          className="cursor-pointer hover:text-blue-600 relative group transition-all"
          onClick={() => scrollToSection(section)}
        >
          <span className="transition-colors">{section.charAt(0).toUpperCase() + section.slice(1)}</span>
          <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-blue-600 transition-all group-hover:w-full"></span>
        </li>
      ))}
    </ul>
  </div>
</nav>


      {/* Main content with padding top to avoid nav overlap */}
      <main className="min-h-screen px-6 py-10 pt-24">
        {/* Hero Section */}
<section id="hero" className="py-16 px-4 text-center">
  <motion.h1
    initial={{ opacity: 0, y: -50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    className="text-5xl font-extrabold text-blue-600 dark:text-blue-400"
  >
    Hello, I'm Johannes Johnson
    </motion.h1>
    
<motion.p
  initial={{ opacity: 0, y: -50 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  className="mt-4 text-sm text-justify text-black-1000 dark:text-gray-300 max-w-2xl mx-auto"
>
  Passionate and detail-oriented Computer Information Systems student with a strong foundation in database management, web development, and software engineering. Always eager to learn new technologies and contribute to innovative projects. Looking forward to opportunities where I can apply my technical skills and grow professionally.
</motion.p> 
  {/* Hero Photo */}
  <div className="mt-4 flex justify-center" id="hero-photo" data-aos="fade-up">
    <img
      src="/Cut Image.jpg"
      alt="My Photo"
      className="w-65 h-65 object-cover rounded-full border-4 border-blue-500 shadow-xl hover:shadow-2xl transition duration-300"
    />
  </div>
</section>

{/* Download Resume Button */}
<div className="mt flex justify-center">
  <a
    href="/Johannes_Resume.pdf"
    download
    className="group inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white font-semibold py-2.5 px-7 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-400"
    aria-label="Download Resume"
  >
    <svg
      className="w-5 h-5 group-hover:translate-y-0.5 transition-transform duration-300"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      viewBox="0 0 24 24"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a2 2 0 002 2h12a2 2 0 002-2v-1M12 12v8m0 0l-4-4m4 4l4-4m0-10H8a2 2 0 00-2 2v4h12V6a2 2 0 00-2-2z" />
    </svg>
    Download Resume
  </a>
</div>

{/* About Me */}
<section
  data-aos="fade-up"
  id="about"
  className="mt-16 bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-10 max-w-3xl mx-auto"
>
  <h2 className="text-3xl font-semibold mb-6 text-gray-800 dark:text-white text-center">
    About Me
  </h2>
  <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed max-w-xl mx-auto text-justify">
    I'm currently pursuing my Master's in <strong>Computer Information Systems</strong> at the&nbsp;
    <span className="text-blue-600 dark:text-blue-400">University of Houston – Clear Lake</span>, with a strong academic standing.  
    I hold a Bachelor's degree in <strong>Electronics and Communication</strong> from&nbsp;
    <span className="text-blue-600 dark:text-blue-400">Rajalakshmi Engineering College</span>.  
    I am passionate about developing scalable web applications and continuously expanding my technical skillset.
  </p>
</section>

        {/* Projects */}
<section
  data-aos="fade-up"
  id="projects"
  className="mt-20 max-w-6xl mx-auto px-6 py-12"
>
  <h2 className="text-4xl font-extrabold text-center mb-12 text-gray-900 dark:text-white">
    Projects
  </h2>

  <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 mx-auto text-justify">
    {/* Project Card */}
    {[
      {
        title: "Portfolio Website",
        stack: "Next.js, Tailwind CSS",
        description:
          "A stylish portfolio showcasing skills, projects, and experience with smooth animations and responsive design for an engaging user experience.",
      },
      {
        title: "Car Wash and Repair Management System",
        stack: "PostgreSQL, Django, Bootstrap",
        description:
          "A full-stack web app to manage car service operations including user registration, bookings, billing, and dashboards.",
      },
      {
        title: "Spectral Analysis of Seashore Minerals",
        stack: "ENVI, GIS, Python",
        description:
          "Analyzed coastal minerals through satellite image processing using ENVI and GIS tools with Python visualization.",
      },
      {
        title: "RFID Attendance System",
        stack: "Arduino, Firebase, Google Sheets API",
        description:
          "Built a real-time RFID-based attendance system with automated logging to Google Sheets via Firebase.",
      },
      {
        title: "Colliery Gas Detector",
        stack: "Arduino, MQ Sensors",
        description:
          "Embedded system to detect toxic gases in mines and alert workers, enhancing safety using Arduino and MQ sensors.",
      },
    ].map((proj, i) => (
      <div
        key={i}
        className="group bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-md hover:shadow-xl transition-transform transform hover:-translate-y-1 hover:scale-[1.01]"
      >
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
          {proj.title}
        </h3>
        <p className="text-sm text-indigo-600 dark:text-indigo-400 mb-2 italic">
          {proj.stack}
        </p>
        <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
          {proj.description}
        </p>
      </div>
    ))}
  </div>
</section>

{/* Experience */}
<section className="max-w-5xl mx-auto px-8 py-16">
  <h2 className="text-3xl font-extrabold mb-10 text-center text-gray-900 dark:text-white fade-in">
    Experience
  </h2>

  <div className="relative border-l-4 border-blue-600 pl-6 space-y-10">
    {/* Experience Item */}
    <div className="group relative">
      <div className="absolute -left-4 top-1 w-3 h-3 bg-blue-600 rounded-full group-hover:scale-125 transition-transform duration-200"></div>
      <div className="bg-white dark:bg-gray-800 p-5 rounded-xl shadow-md hover:shadow-lg transition-shadow">
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
          Student Assistant
        </h3>
        <p className="text-gray-700 dark:text-gray-300">
          Alfred R. Neumann Library, UHCL
        </p>
        <span className="text-sm text-gray-500 dark:text-gray-400">
          Oct 2024 – Present
        </span>
      </div>
    </div>

    <div className="group relative">
      <div className="absolute -left-4 top-1 w-3 h-3 bg-blue-600 rounded-full group-hover:scale-125 transition-transform duration-200"></div>
      <div className="bg-white dark:bg-gray-800 p-5 rounded-xl shadow-md hover:shadow-lg transition-shadow">
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
          Outreach Volunteer
        </h3>
        <p className="text-gray-700 dark:text-gray-300">
          St. John’s Church, New Perungalathur
        </p>
        <span className="text-sm text-gray-500 dark:text-gray-400">
          Jun 2021 – May 2023
        </span>
      </div>
    </div>

    <div className="group relative">
      <div className="absolute -left-4 top-1 w-3 h-3 bg-blue-600 rounded-full group-hover:scale-125 transition-transform duration-200"></div>
      <div className="bg-white dark:bg-gray-800 p-5 rounded-xl shadow-md hover:shadow-lg transition-shadow">
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
          Volunteer
        </h3>
        <p className="text-gray-700 dark:text-gray-300">
          LEO Club of REC Chennai
        </p>
        <span className="text-sm text-gray-500 dark:text-gray-400">
          Jan 2021 – Dec 2023
        </span>
      </div>
    </div>
  </div>
</section>

{/* Skills */}
<section
  data-aos="fade-up"
  className="mt-16 max-w-5xl mx-auto px-6 py-10 bg-gray-50 dark:bg-gray-900 rounded-2xl shadow-md"
  id="skills"
>
  <h2 className="text-3xl font-extrabold mb-8 text-center text-gray-900 dark:text-white">
    Technical Skills
  </h2>

  <div className="grid md:grid-cols-2 gap-10 text-gray-800 dark:text-gray-200">
    {/* Languages & DBs */}
    <div>
      <h3 className="flex items-center text-xl font-semibold mb-2">
        🗃️ <span className="ml-2">Languages & Databases</span>
      </h3>
      <p className="text-sm">
        Python, SQL, MySQL, SQLite, PostgreSQL, MS SQL Server
      </p>
    </div>

    {/* Web & Frameworks */}
    <div>
      <h3 className="flex items-center text-xl font-semibold mb-2">
        🌐 <span className="ml-2">Web & Frameworks</span>
      </h3>
      <p className="text-sm">
        HTML, CSS, JavaScript, TypeScript, Bootstrap, Tailwind CSS, React, Next.js, Django, Flask, .NET Razor Pages
      </p>
    </div>

    {/* Tools & Platforms */}
    <div>
      <h3 className="flex items-center text-xl font-semibold mb-2">
        🛠️ <span className="ml-2">Tools & Platforms</span>
      </h3>
      <p className="text-sm">
        Git, GitHub, Version Control, Arduino, Raspberry Pi
      </p>
    </div>

    {/* Animations & UX */}
    <div>
      <h3 className="flex items-center text-xl font-semibold mb-2">
        🎞️ <span className="ml-2">Animations & UX</span>
      </h3>
      <p className="text-sm">
        Framer Motion, AOS (Animate On Scroll), CSS Animations
      </p>
    </div>

    {/* Concepts */}
    <div>
      <h3 className="flex items-center text-xl font-semibold mb-2">
        📘 <span className="ml-2">Concepts</span>
      </h3>
      <p className="text-sm">
        System Analysis & Design, SDLC, Agile Methodologies, GIS Mapping
      </p>
    </div>
  </div>
</section>

{/* Contact */}
<section
  id="contact"
  className="py-16 px-6 max-w-3xl mx-auto fade-in"
>
  <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 transition-all duration-300">
    <h2 className="text-3xl font-extrabold mb-6 text-gray-900 dark:text-white flex items-center gap-2">
      <span>📬</span> Contact Me
    </h2>

    <form
      action="https://formsubmit.co/johannes.shelson12@gmail.com"
      method="POST"
      className="space-y-6"
    >
      {/* Disable CAPTCHA */}
      <input type="hidden" name="_captcha" value="false" />

      {/* Name */}
      <div>
        <label className="block mb-1 font-semibold text-gray-700 dark:text-gray-300">Name</label>
        <input
          type="text"
          name="name"
          required
          placeholder="Your full name"
          className="w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-600 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
        />
      </div>

      {/* Email */}
      <div>
        <label className="block mb-1 font-semibold text-gray-700 dark:text-gray-300">Email</label>
        <input
          type="email"
          name="email"
          required
          placeholder="you@example.com"
          className="w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-600 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
        />
      </div>

      {/* Message */}
      <div>
        <label className="block mb-1 font-semibold text-gray-700 dark:text-gray-300">Message</label>
        <textarea
          name="message"
          rows="5"
          required
          placeholder="Type your message here..."
          className="w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-600 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
        ></textarea>
      </div>

      {/* Submit */}
      <div className="text-center">
        <button
          type="submit"
          className="bg-blue-900 text-white px-8 py-3 rounded-xl hover:bg-blue-800 transition-transform transform hover:scale-105 shadow-md"
        >
          🚀 Send Message
        </button>
      </div>
    </form>
  </div>
</section>

    <footer className="text-center py-8 text-sm text-gray-600 dark:text-gray-400 bg-gray-100 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700">
      <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
        <p className="text-xs sm:text-sm">
          &copy; {new Date().getFullYear()} <strong className="font-medium">Johannes Johnson</strong>. All rights reserved.
        </p>

        <a
          href="https://www.linkedin.com/in/johannes-johnson-882636257/"
          target="_blank"
          className="flex items-center gap-1 text-blue-600 dark:text-blue-400 hover:underline hover:text-blue-800 dark:hover:text-blue-300 transition-colors"
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 
              2.76 2.24 5 5 5h14c2.76 0 5-2.24 
              5-5v-14c0-2.76-2.24-5-5-5zm-11 
              19h-3v-10h3v10zm-1.5-11.27c-.97 
              0-1.75-.79-1.75-1.76s.78-1.75 
              1.75-1.75 1.76.78 1.76 
              1.75-.79 1.76-1.76 
              1.76zm13.5 11.27h-3v-5.5c0-1.32-.03-3.01-1.84-3.01-1.85 
              0-2.13 1.44-2.13 2.92v5.59h-3v-10h2.89v1.36h.04c.4-.75 
              1.38-1.54 2.84-1.54 3.03 0 3.59 1.99 3.59 
              4.58v5.6z"
            />
          </svg>
          <span className="text-sm">LinkedIn</span>
        </a>
      </div>
    </footer>
      </main>

      {/* Tailwind CSS custom animations and keyframes */}
      <style jsx global>{`
        @keyframes slow-spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        @keyframes slow-spin-reverse {
          from {
            transform: rotate(360deg);
          }
          to {
            transform: rotate(0deg);
          }
        }
        .animate-slow-spin {
          animation: slow-spin 120s linear infinite;
        }
        .animate-slow-spin-reverse {
          animation: slow-spin-reverse 120s linear infinite;
        }
      `}</style>
    </>
  );
}
