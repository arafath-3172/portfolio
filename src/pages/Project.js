import React from "react";
import ProjectCard from "../components/ProjectCard";

function Project() {
  return (
    <div className="flex flex-wrap items-center justify-center flex-col lg:flex-row relative overflow-hidden ">
      <img
        src="./star.jpg"
        alt=""
        className="h-full w-full object-cover opacity-20 absolute bottom-0"
      />
      <div className="z-20 flex items-center justify-center gap-3 m-2 flex-wrap">
        <ProjectCard
          name={"RestON"}
          image={"/project/p1.png"}
          about={
            "You can write reviews of camp-grounds ,built using MongoDB database as backend,Map Box API,React for frontend"
          }
          demo={"https://reston.onrender.com/"}
          code={"https://github.com/arafath-3172/RestOn"}
        />
        <ProjectCard
          name={"Chat Sphere 🖼️"}
          image={"/project/p2.png"}
          about={
            "Chat Sphere is a responsive Chat Application Built using React for frontend,MongoDB for Backend,Cloudinary for storing user avatar."
          }
          demo={"https://chatsphere-50is.onrender.com/"}
          code={"https://github.com/arafath-3172/ChatSphere"}
        />
        <ProjectCard
          name={"Code Box"}
          image={"/project/p3.png"}
          about={
            "A basic ONLINE IDE made for fun using HTML,CSS and Javascript where one can code a basic website without using an IDE"
          }
          demo={"https://arafath-3172.github.io/online-ide/"}
          code={"https://github.com/arafath-3172/online-ide"}
        />
        <ProjectCard
          name={"Algorithm Visualizer"}
          image={"/project/p4.png"}
          about={
            "Algorithm Visualizer is an interactive way and platform that visualize the algorithms in four main domain i.e. Trie data structure, Binary Search Tree, Path Finding and Sort Visual algorithm. "
          }
          demo={"https://algorithm-visualizer-3172.vercel.app/"}
          code={"https://github.com/arafath-3172/Algorithm-Visualizer"}
        />
      </div>
    </div>
  );
}

export default Project;
