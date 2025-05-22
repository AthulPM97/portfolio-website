"use client";

import ProjectCard from "@/components/ProjectCard";
import { Projects } from "@/constants";
import React from "react";

const Page = () => {
  return (
    <div
      style={{ backgroundImage: "url(/mountains.jpg)" }}
      className="w-screen h-screen flex items-center justify-center bg-center bg-cover pt-[100px]"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-[90%] w-full h-full place-items-center overflow-y-auto py-8 hide-scrollbar">
        {Projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            text={project.text}
            image={project.src}
          />
        ))}
      </div>
    </div>
  );
};

export default Page;
