import React from "react";
import Image from "next/image";

const Experience = () => {
  const experience = [
    {
      id: 1,
      year: "( October 2020 - present )",
      name: "Enroot Mumbai",
      url: "https://enrootmumbai.in/",
      img: "/img/enroot.svg",
      role: "Joined as a Front end Developer",
      shortdesc:
        "Enroot Mumbai is a Non-Profit Organization solving social issues using tech.",
      project: ["LetIndiaBreathe", "IamTrans", "iSEWA", "PbCancerCare"],
    },
    {
      id: 2,
      year: "( Feb 2021 - April-2021 )",
      name: "Oye busy",
      url: "https://oyebusy.com/",
      img: "/img/busy.svg",
      role: "Joined as a Web Developer (Internship)",
      shortdesc: "A startup providing Hassle Free home services.",
      project: ["Oye beauty", "Oye busy"],
    },
  ];

  return (
    <div className="py-10">
      <h2 className="text-5xl font-bold text-center text-fourth">Experience</h2>
      {experience.map((item) => {
        return (
          <div
            className="bg-first flex flex-wrap p-11 my-10 rounded-xl"
            key={item.id}
          >
            <div className="flex  flex-col justify-center items-center m-auto h-full space-y-2 text-third font-bold">
              <Image src={item.img} alt={item.name} width={320} height={130} />
              <a
                className="text-xl  hover:text-fourth hover:transition"
                href={item.url}
                target="_blank"
                rel="noreferrer noopener"
              >
                {item.name}
              </a>
              <p>{item.year}</p>
            </div>
            <div className="px-16 py-4 space-y-2 text-fourth w-exp">
              <h2 className="text-2xl font-extrabold text-third">
                {item.role}
              </h2>
              <h3 className="text-xl"> {item.shortdesc} </h3>
              <p className="text-xl font-bold">Projects </p>
              <ul className="list-disc pl-6 md:text-lg">
                {item.project.map((items) => {
                  return (
                    <li className="text-third " key={items}>
                      {items}
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Experience;
