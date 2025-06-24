"use client";
import React, { useState } from "react";
import Link from "next/link";
import ProjectCard from "@/components/ui/projectcard";

export default function Home() {
  const [showOverlay, setShowOverlay] = useState(false);
  const [showWorkEx, setShowWorkEx] = useState(false);
  const [showProjects, setShowProjects] = useState(false);
  const [showSkills, setShowSkills] = useState(false);
  const [showContact, setShowContact] = useState(false);
  const [showResume, setShowResume] = useState(false);

  return (
    <main
      className="min-h-screen bg-cover bg-center bg-no-repeat text-white flex items-center justify-center px-4"
      style={{ backgroundImage: "url('/picc.png')" }}
    >
      <div className="absolute top-3 left-6 z-20 text-white text-3xl font-bold tracking-widest drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]">
        PORTFOLIO
      </div>

      <div className="absolute top-5 left-1/2 transform -translate-x-1/2 z-30">
        <nav className="flex space-x-6 text-sm md:text-base font-medium text-white">
          <a
            onClick={() => setShowWorkEx(true)}
            className="cursor-pointer hover:text-yellow-400 transition"
          >
            Work Ex
          </a>
          <a
            onClick={() => setShowProjects(true)}
            className="cursor-pointer hover:text-yellow-400 transition"
          >
            Projects
          </a>

          <a
            onClick={() => setShowSkills(true)}
            className="cursor-pointer hover:text-yellow-400 transition"
          >
            Skills
          </a>

          <a
            onClick={() => setShowContact(true)}
            className="cursor-pointer hover:text-yellow-400 transition"
          >
            Contact
          </a>
          <a
            onClick={() => setShowResume(true)}
            className="cursor-pointer hover:text-yellow-400 transition"
          >
            Resume
          </a>
        </nav>
      </div>

      {/* Simulated Laptop Screen - Clean Centered Layout */}
      <div className="relative w-[640px] h-[360px] bg-black rounded-md shadow-lg px-6 py-6 z-10 transform translate-y-[-60px]">
        <div className="flex flex-row items-center gap-18 h-full">
          {/* Profile Image */}
          <div className="flex-shrink-0">
            <img
              src="/Image1.png"
              alt="Adhyan Kumar"
              className="w-36 h-36 md:w-40 md:h-40 rounded-full object-cover shadow-xl"
            />
          </div>

          {/* About Me Section */}
          <div className="flex-1 text-left overflow-y-auto h-full pr-1 py-2 flex flex-col justify-center">
            <h2 className="text-yellow-400 text-xl md:text-2xl font-bold mb-2">
              About Me →
            </h2>
            <p className="text-base md:text-lg text-gray-200 leading-relaxed">
              I’m <b>Adhyan</b> an AI/ML & Data Science engineer with hands-on
              experience developing machine learning models, deploying scalable
              solutions, and driving product impact using Python, ML frameworks,
              and cloud tools — blending technical depth with real-world
              execution.
            </p>
            <button
              onClick={() => setShowOverlay(true)}
              className="self-start mt-4 bg-yellow-400 text-black font-medium px-4 py-1.5 text-sm rounded-full shadow-sm transition duration-300 hover:shadow-[0_0_8px_rgba(255,255,0,0.6)] hover:scale-105"
            >
              Learn More
            </button>
          </div>
        </div>
      </div>
      {showOverlay && (
        <div
          id="overlay"
          className="fixed top-0 left-0 w-full h-full bg-[rgba(0,0,0,0.6)] backdrop-blur-sm z-50 animate-slideIn overflow-y-auto flex items-center justify-center px-6"
          onClick={() => setShowOverlay(false)}
        >
          <div className="text-center max-w-3xl text-white space-y-4">
            {/* Profile Image */}
            <img
              src="/Image1.png"
              alt="Adhyan Kumar"
              className="w-32 h-32 md:w-36 md:h-36 rounded-full object-cover shadow-lg mx-auto"
            />

            {/* Name */}
            <h1 className="text-2xl md:text-3xl font-bold text-white">
              Adhyan Kumar
            </h1>

            {/* Unified Paragraph */}
            <p className="text-base md:text-lg text-gray-200 leading-relaxed">
              I graduated with{" "}
              <strong>
                B.Tech in Computer Science with Specialization in Cloud
                Computing
              </strong>
              ,I am a highly driven{" "}
              <strong>AI/ML & Data Science engineer</strong> with a strong
              foundation in <strong>machine learning</strong>,{" "}
              <strong>deep learning</strong>, and{" "}
              <strong>cloud-integrated systems</strong>. I've built and deployed
              real-world solutions like an{" "}
              <strong>AI-powered journaling system</strong> with mood tracking,
              a <strong>resume intelligence engine</strong> using Gemini Flash,
              and an <strong>interactive cognitive dashboard</strong> for
              real-time analytics. I specialize in designing{" "}
              <strong>production-grade ML pipelines</strong>, transforming data
              into insights using <strong>Python</strong>,{" "}
              <strong>TensorFlow</strong>, <strong>SQL</strong>, and{" "}
              <strong>cloud platforms</strong> such as AWS and GCP. During my
              tenure at <strong>Cognizant</strong>, I worked on applied ML
              workflows, enabling scalable, data-driven decision systems. I'm
              passionate about building <strong>intelligent products</strong>{" "}
              that bridge science and real-world utility, backed by a solid
              understanding of both <strong>model architecture</strong> and{" "}
              <strong>system design</strong>.
            </p>
            <button
              onClick={() => {
                const overlay = document.getElementById("overlay");
                if (overlay) {
                  overlay.classList.add("animate-slideOut");
                  setTimeout(() => setShowOverlay(false), 500); // hide after animation
                }
              }}
              className="mt-6 bg-yellow-400 text-black font-medium px-5 py-2 rounded-full shadow-sm transition duration-300 hover:shadow-[0_0_8px_rgba(255,255,0,0.6)] hover:scale-105"
            >
              Go Back to Homepage
            </button>
          </div>
        </div>
      )}
      {showWorkEx && (
        <div
          id="workExOverlay"
          className="fixed top-0 left-0 w-full h-full bg-[rgba(0,0,0,0.6)] backdrop-blur-sm z-50 animate-slideIn overflow-y-auto flex flex-col items-center justify-start px-6 pt-12"
        >
          {/* Glowing Heading */}
          <h1 className="text-2xl md:text-3xl font-bold text-yellow-400 drop-shadow-[0_0_6px_rgba(255,255,0,0.8)] mb-10 text-center">
            Work Experience
          </h1>

          {/* -- Cognizant Experience -- */}
          <div className="mb-12 text-center max-w-2xl">
            <img
              src="/cognizant.png" // Replace with actual path
              alt="Cognizant"
              className="w-45 h-auto mx-auto mb-3 rounded-md shadow-md"
            />
            <p className="text-sm md:text-base text-gray-300 mb-3">
              <strong>May 2024 – Present</strong> • Remote Internship •{" "}
              <strong>Cognizant</strong>
            </p>
            <p className="text-sm md:text-base text-gray-200 leading-relaxed">
              As a <strong>Programmer Analyst Intern</strong> at Cognizant, I’ve
              been immersed in a full-stack engineering environment focused on
              enterprise-grade technologies. My current scope involves hands-on
              work with <strong>C# and .NET</strong> for backend service
              development, leveraging <strong>Docker</strong> for containerized
              deployments, and working with <strong>SQL Server</strong> for data
              layer integration. I'm actively applying <strong>Angular</strong>{" "}
              for frontend interfaces and contributing to internal tools built
              on modern web stacks. This role has strengthened my understanding
              of scalable architecture, DevOps workflows, and cross-functional
              collaboration — preparing me for real-world development and
              delivery cycles in production environments.
            </p>
          </div>

          {/* -- Nova Nectar Experience -- */}
          <div className="mb-10 text-center max-w-2xl">
            <img
              src="/novanectar.png" // Replace with actual path
              alt="Nova Nectar"
              className="w-45 h-auto mx-auto mb-3 rounded-md shadow-md"
            />
            <p className="text-sm md:text-base text-gray-300 mb-3">
              <strong>April 2024 – June 2024</strong> • On-site •{" "}
              <strong>Nova Nectar</strong>
            </p>
            <p className="text-sm md:text-base text-gray-200 leading-relaxed">
              At <strong>Nova Nectar</strong>, I actively contributed to the
              development of AI-powered solutions across multiple domains. I led
              the creation of a smart <strong>ATS Resume Scanner</strong>, an
              intelligent <strong>Google Meet summarizer</strong> using
              transcription and NLP, and a comprehensive{" "}
              <strong>Global Air Quality Analysis system</strong> integrating
              real-time environmental data. Additionally, I played a key role in
              debugging and enhancing the performance of an AI-driven chatbot,
              ensuring conversational reliability and responsiveness. This
              experience deepened my expertise in{" "}
              <strong>machine learning pipelines</strong>,{" "}
              <strong>data processing</strong>, and{" "}
              <strong>LLM-powered workflows</strong>, while sharpening my
              ability to deliver end-to-end, production-ready applications.
            </p>
          </div>

          {/* Go Back Button */}
          <button
            onClick={() => {
              const overlay = document.getElementById("workExOverlay");
              if (overlay) {
                overlay.classList.add("animate-slideOut");
                setTimeout(() => setShowWorkEx(false), 500);
              }
            }}
            className="mt-2 mb-8 bg-yellow-400 text-black font-medium px-5 py-2 rounded-full shadow-sm transition duration-300 hover:shadow-[0_0_10px_rgba(255,255,0,0.6)] hover:scale-105"
          >
            Go Back
          </button>
        </div>
      )}
      {showProjects && (
        <div
          id="projectsOverlay"
          className="fixed top-0 left-0 w-full h-full bg-[rgba(0,0,0,0.6)] backdrop-blur-sm z-50 animate-slideIn overflow-y-auto px-6 pt-12"
        >
          <h1 className="text-2xl md:text-3xl font-bold text-yellow-400 drop-shadow-[0_0_6px_rgba(255,255,0,0.8)] mb-10 text-center">
            Projects
          </h1>

          <div className="grid gap-6 md:grid-cols-2 max-w-6xl mx-auto">
            <ProjectCard
              title="SelfOS X+"
              shortDescription="AI-powered personal cognitive OS with rich journaling and reflection."
              fullDescription="SelfOS X+ is a full-stack intelligent operating system that combines AI journaling, emotional analytics, and semantic search. Built using React, Tailwind, PostgreSQL, and Framer Motion, it includes LLM-assisted reflections, emoji mood tracking, tagging, and voice logging. Aesthetically designed with a dark neon theme and animated UI, it enables introspection via natural language insights, timeline navigation, and local-first performance. Ideal for building a futuristic, self-evolving personal productivity ecosystem."
              imageSrc="/SelfOs.png"
            />

            <ProjectCard
              title="RAG Pipeline with Agentic Router"
              shortDescription="High-performance RAG engine using ensemble retrievers and dynamic routing."
              fullDescription="Designed and deployed a FastAPI-based microservice integrating BM25, FAISS, and TF-IDF retrievers to boost physics Q&A accuracy by 35%. The backend handles 50+ RPM with sub-500ms latency and integrates Sarvam TTS for highly natural voice output. An agentic router was built to seamlessly route between RAG, Wolfram Alpha, or human fallback, enabling hybrid reasoning and decision support. Includes adaptive intent classification and multi-modal response orchestration for scalable intelligent assistants."
              imageSrc="/AgenticRouter.png"
              githubLink="https://github.com/Adhyan20/Agent-with-Tool-Calling-support-and-RAG-integration-on-FastAPI-endpoints"
            />

            <ProjectCard
              title="ESRGAN Video Upscaler"
              shortDescription="AI upscaling system for restoring and enhancing archival video content."
              fullDescription="Developed a TensorFlow-based 4× super-resolution pipeline using ESRGAN to enhance clarity of archival and compressed videos. Achieved +8dB PSNR improvement over traditional interpolation and 40% noise reduction while preserving edge quality. Used OpenCV for real-time frame processing (50+ FPS) on NVIDIA T4 hardware. Optimized for batch inference, denoising, and sharpening — making it suitable for film restoration, medical imaging, and anime upscaling."
              imageSrc="/upscale.png"
              githubLink="https://github.com/Adhyan20/Upscaling-Videos-Using-ESRGAN"
            />

            <ProjectCard
              title="Brain Tumor Detection"
              shortDescription="AI model ensemble to detect tumors from brain MRI with high precision."
              fullDescription="Engineered an ensemble model combining XGBoost and Random Forest to diagnose brain tumors from over 2,000 MRI scans with 98% accuracy — outperforming radiologist benchmarks by 5%. Optimized KNN and preprocessing pipelines to reduce false alarms by 20%. OpenCV automation cut inference time from 10 minutes to under 30 seconds per scan, enabling rapid triage support. The system is built for clinical reliability and integrated with Grad-CAM for transparent model interpretability."
              imageSrc="/BrainTumor.png"
              githubLink="https://github.com/Adhyan20/Brain-Tumor-Detection"
            />
          </div>

          <div className="flex justify-center mt-10 mb-8">
            <button
              onClick={() => {
                const overlay = document.getElementById("projectsOverlay");
                if (overlay) {
                  overlay.classList.add("animate-slideOut");
                  setTimeout(() => setShowProjects(false), 500);
                }
              }}
              className="bg-yellow-400 text-black font-medium px-5 py-2 rounded-full hover:scale-105 hover:shadow-[0_0_10px_rgba(255,255,0,0.6)] transition"
            >
              Go Back
            </button>
          </div>
        </div>
      )}
      {showSkills && (
        <div
          id="skillsOverlay"
          className="fixed top-0 left-0 w-full h-full bg-[rgba(0,0,0,0.7)] backdrop-blur-sm z-50 px-6 pt-12 animate-slideIn overflow-y-auto"
        >
          <h1 className="text-3xl font-bold text-yellow-400 mb-8 text-center drop-shadow-[0_0_8px_rgba(255,255,0,0.6)]">
            My Skills & Technologies
          </h1>

          <div className="w-full flex justify-center">
            <div className="w-full max-w-3xl grid grid-cols-1 md:grid-cols-2 gap-8 text-white text-base">
              <div>
                <h2 className="text-xl font-semibold text-yellow-300 mb-2">
                  Languages
                </h2>
                <ul className="list-disc list-inside space-y-1 text-gray-300">
                  <li>Python</li>
                  <li>Java</li>
                  <li>C++</li>
                  <li>JavaScript</li>
                  <li>SQL</li>
                  <li>HTML, CSS</li>
                </ul>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-yellow-300 mb-2">
                  Developer Tools
                </h2>
                <ul className="list-disc list-inside space-y-1 text-gray-300">
                  <li>VS Code, Sublime, Jupyter, Google Colab</li>
                  <li>MS Excel, Kaggle</li>
                  <li>Power BI, Tableau</li>
                  <li>AWS</li>
                </ul>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-yellow-300 mb-2">
                  Frameworks & Technologies
                </h2>
                <ul className="list-disc list-inside space-y-1 text-gray-300">
                  <li>ReactJS, FastAPI, PyTorch, TensorFlow, Keras</li>
                  <li>Linux, Git, PostreSQl</li>
                  <li>Hadoop, Pyspark</li>
                </ul>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-yellow-300 mb-2">
                  Coursework
                </h2>
                <ul className="list-disc list-inside space-y-1 text-gray-300">
                  <li>Data Structures & Algorithms</li>
                  <li>Machine Learning, Deep Learning</li>
                  <li>Maths & Statistics</li>
                  <li>Visualization & BI</li>
                  <li>Big Data & Cloud</li>
                  <li>Generative AI & LLMs</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="flex justify-center mt-12 mb-8">
            <button
              onClick={() => {
                const overlay = document.getElementById("skillsOverlay");
                if (overlay) {
                  overlay.classList.add("animate-slideOut");
                  setTimeout(() => setShowSkills(false), 500);
                }
              }}
              className="bg-yellow-400 text-black font-medium px-5 py-2 rounded-full hover:scale-105 hover:shadow-[0_0_10px_rgba(255,255,0,0.6)] transition"
            >
              Go Back
            </button>
          </div>
        </div>
      )}
      {showContact && (
        <div
          id="contactOverlay"
          className="fixed top-0 left-0 w-full h-full bg-[rgba(0,0,0,0.7)] backdrop-blur-sm z-50 px-6 pt-12 animate-slideIn overflow-y-auto"
        >
          <h1 className="text-3xl font-bold text-yellow-400 mb-8 text-center drop-shadow-[0_0_8px_rgba(255,255,0,0.6)]">
            Get in Touch
          </h1>

          <div className="w-full flex justify-center">
            <div className="w-full max-w-2xl text-white text-center space-y-6">
              <p className="text-base text-gray-200 leading-relaxed">
                I'm always open to collaborating on impactful AI/ML projects,
                discussing innovative ideas, or exploring new opportunities.
                Feel free to reach out via any of the platforms below — whether
                it's about work, mentorship, or just a good conversation on
                tech.
              </p>

              <div className="space-y-2 text-gray-300">
                <p>
                  <strong>Email:</strong>{" "}
                  <a
                    href="mailto:adhyank7@gmail.com"
                    className="text-yellow-400 hover:underline"
                  >
                    adhyank7@gmail.com
                  </a>
                </p>
                <p>
                  <strong>LinkedIn:</strong>{" "}
                  <a
                    href="https://www.linkedin.com/in/adhyankumar27"
                    target="_blank"
                    className="text-yellow-400 hover:underline"
                  >
                    linkedin.com/in/adhyankumar27
                  </a>
                </p>
                <p>
                  <strong>GitHub:</strong>{" "}
                  <a
                    href="https://github.com/Adhyan20"
                    target="_blank"
                    className="text-yellow-400 hover:underline"
                  >
                    github.com/Adhyan20
                  </a>
                </p>
              </div>
            </div>
          </div>

          <div className="flex justify-center mt-12 mb-8">
            <button
              onClick={() => {
                const overlay = document.getElementById("contactOverlay");
                if (overlay) {
                  overlay.classList.add("animate-slideOut");
                  setTimeout(() => setShowContact(false), 500);
                }
              }}
              className="bg-yellow-400 text-black font-medium px-5 py-2 rounded-full hover:scale-105 hover:shadow-[0_0_10px_rgba(255,255,0,0.6)] transition"
            >
              Go Back
            </button>
          </div>
        </div>
      )}
      {showResume && (
        <div
          id="resumeOverlay"
          className="fixed top-0 left-0 w-full h-full bg-[rgba(0,0,0,0.7)] backdrop-blur-sm z-50 px-6 pt-12 animate-slideIn overflow-y-auto"
        >
          <h1 className="text-3xl font-bold text-yellow-400 mb-6 text-center drop-shadow-[0_0_8px_rgba(255,255,0,0.6)]">
            My Resume
          </h1>

          <div className="flex justify-center">
            <iframe
              src="/Adhyan_Kumar_Resume.pdf"
              title="Resume PDF"
              className="w-full max-w-4xl h-[80vh] rounded-lg shadow-lg border border-yellow-400"
            ></iframe>
          </div>

          <div className="flex justify-center mt-6 gap-4">
            <a
              href="/Adhyan_Kumar_Resume.pdf"
              download
              className="bg-yellow-400 text-black font-medium px-5 py-2 rounded-full hover:scale-105 hover:shadow-[0_0_10px_rgba(255,255,0,0.6)] transition"
            >
              Download Resume
            </a>
            <button
              onClick={() => {
                const overlay = document.getElementById("resumeOverlay");
                if (overlay) {
                  overlay.classList.add("animate-slideOut");
                  setTimeout(() => setShowResume(false), 500);
                }
              }}
              className="bg-yellow-400 text-black font-medium px-5 py-2 rounded-full hover:scale-105 hover:shadow-[0_0_10px_rgba(255,255,0,0.6)] transition"
            >
              Go Back
            </button>
          </div>
        </div>
      )}
    </main>
  );
}
