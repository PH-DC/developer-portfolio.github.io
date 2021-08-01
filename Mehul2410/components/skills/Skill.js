import React from "react";
import Image from "next/image";

const Skill = () => {
  const skills = [
    {
      id: 1,
      image: "/img/html.svg",
      name: "HTML",
      percent: "100%",
    },
    {
      id: 2,
      image: "/img/css.svg",
      name: "CSS",
      percent: "90%",
    },
    {
      id: 3,
      image: "/img/react.svg",
      name: "REACTJS",
      percent: "85%",
    },
    {
      id: 4,
      image: "/img/ux.svg",
      name: "UI/UX",
      percent: "90%",
    },
    {
      id: 5,
      image: "/img/git.svg",
      name: "GIT",
      percent: "85%",
    },
    {
      id: 6,
      image: "/img/docker.svg",
      name: "DOCKERS",
      percent: "60%",
    },
    {
      id: 7,
      image: "/img/mongodb.svg",
      name: "MONGODB",
      percent: "70%",
    },
    {
      id: 8,
      image: "/img/nextjs.svg",
      name: "NEXT.JS",
      percent: "80%",
    },
  ];
  return (
    <div id="skills">
      <div className="pt-28"></div>
      <h2 className="text-5xl font-bold text-center text-fourth">Skills</h2>
      <div className="bg-first flex justify-evenly flex-wrap p-11 my-10 rounded-xl">
        {skills.map((item) => {
          return (
            <div className="w-80 m-4 px-5 flex items-center " key={item.id}>
              <div>
                <Image
                  width={60}
                  height={60}
                  src={item.image}
                  alt={item.name}
                />
              </div>
              <div className="px-6">
                <p className="text-xl text-fourth font-bold mb-2">
                  {item.name}
                </p>
                <div className="rounded-lg w-32 h-2 relative bg-third">
                  <span
                    className="rounded-lg top-0 left-0 bg-fourth h-2 absolute"
                    style={{
                      width: item.percent,
                    }}
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Skill;
