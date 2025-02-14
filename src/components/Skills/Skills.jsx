import React from "react";
import { FaCss3, FaHtml5, FaJava, FaJs, FaReact, FaNodeJs  } from "react-icons/fa";
import { SiSpringboot ,SiHibernate,SiMysql,SiSpring ,SiTailwindcss} from "react-icons/si";
const Skills = () => {
  return (
    <div id="Skills" className="p-10 md:p-24">
      <h1 className="text-2xl md:text-4xl text-white font-bold">Skills</h1>
      <div className="flex flex-wrap items-center justify-around">
        <div className="flex flex-wrap md:w-2/5 gap-8 md:p-12 py-10">
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaHtml5 color="#E34F26" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaCss3 color="#1572B6" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaReact color="#61DAFB" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaJs color="#F7DF1E" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaJava color="#F7DF1E" size={50}/>
           </span>
           <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <SiHibernate  color="#61DAFB" size={50}/>
           </span>
           <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <SiMysql  color="#61DAFB" size={50}/>
           </span>
           <span className="p-3 bg-zinc-950  flex items-center rounded-2xl">
            <SiSpring color="#28A745" size={50}/>
           </span>
           <span className="p-3 bg-zinc-950  flex items-center rounded-2xl">
            <SiSpringboot color="#28A745" size={50}/>
           </span>
           <span className="p-3 bg-zinc-950  flex items-center rounded-2xl">
            <SiTailwindcss color="#61DAFB" size={50}/>
           </span>
           <span className="p-3 bg-zinc-950  flex items-center rounded-2xl">
            <FaNodeJs color="#E34F26" size={50}/>
           </span>
        </div>
      </div>
    </div>
  )
}

export default Skills
