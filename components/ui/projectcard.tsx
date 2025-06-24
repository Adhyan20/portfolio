import { useState } from "react";
import Image from "next/image";

interface ProjectCardProps {
  title: string;
  shortDescription: string;
  fullDescription: string;
  imageSrc?: string;
  githubLink?: string;
}

export default function ProjectCard({
  title,
  shortDescription,
  fullDescription,
  imageSrc,
  githubLink,
}: ProjectCardProps) {
  const [expanded, setExpanded] = useState(false);

  return (
    <>
      {/* Project Card */}
      <div className="bg-black bg-opacity-50 rounded-lg p-4 shadow-md text-white border border-gray-700">
        <h3 className="text-lg font-semibold text-yellow-400 mb-2">{title}</h3>
        <p className="text-sm text-gray-300">{shortDescription}</p>
        <button
          onClick={() => setExpanded(true)}
          className="mt-2 text-sm text-yellow-400 underline hover:text-yellow-300"
        >
          Show More
        </button>
      </div>

      {/* Fullscreen Overlay */}
      {expanded && (
        <div className="fixed top-0 left-0 w-full h-full bg-[rgba(0,0,0,0.7)] backdrop-blur-sm z-50 flex items-center justify-center px-6">
          <div className="max-w-3xl text-center text-white">
            <h2 className="text-2xl font-bold text-yellow-400 mb-4">{title}</h2>
            {imageSrc && (
              <div className="w-[500px] mx-auto mb-4">
                <Image
                  src={imageSrc}
                  alt={title}
                  width={500}
                  height={380}
                  className="rounded shadow-md w-full h-auto"
                />
              </div>
            )}
            <p className="text-base text-gray-200 leading-relaxed mb-6">
              {fullDescription}
            </p>
            {githubLink && (
              <a
                href={githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-4 text-yellow-400 underline hover:text-yellow-300 transition"
              >
                View on GitHub
              </a>
            )}
            <br />
            <button
              onClick={() => setExpanded(false)}
              className="bg-yellow-400 text-black font-medium px-5 py-2 rounded-full hover:scale-105 hover:shadow-[0_0_10px_rgba(255,255,0,0.6)] transition"
            >
              Go Back
            </button>
          </div>
        </div>
      )}
    </>
  );
}
