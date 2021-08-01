import React from "react";

const Projects = () => {
  const projects = [
    {
      id: 1,
      name: "Let India Breathe",
      shortdesc: "Revamped the php site to nextjs",
      url: "https://www.letindiabreathe.in/",
      features: [
        "Dynamic Project Routes, project data is now fetched from a JSON file.",
        "All types of responses go into a single google sheet workbook.",
        "Static rendering and preloading of all pages using NextJS.",
        "Multilingual email templates",
      ],
    },
    {
      id: 2,
      name: "Oye Beauty",
      shortdesc: "Designed and Developed the Website for Oye Busy Technology",
      url: "https://oyebeauty.in/",
      features: [
        "Dynamic Project Routes,pages data is fetched from a API with React Context Hook.",
        "Build a Custom Date and time picker.",
        "Implemented adaptive way to make responsive website with different view",
      ],
    },
    {
      id: 3,
      name: "Marknote",
      shortdesc:
        "An Inspiration of Google keep Application build with nextjs and Strapi (Headless cms backend) ",
      url: "https://markdown-frontend.vercel.app/",
      features: [
        "MarkDown editor with functionalites like",
        "share",
        "edit",
        "delete",
      ],
    },
    {
      id: 4,
      name: "ISEWA",
      shortdesc: "Wordpress Website Build with Elementor",
      url: "http://isewa.org.in/",
      features: ["LearnPress", "Woocommerce"],
    },
    {
      id: 5,
      name: "IamTrans",
      shortdesc: "Wordpress Website Build with Themeco Pro Builder",
      url: "https://www.iamtrans.in/",
      features: [],
    },
  ];
  return (
    <div id="projects">
      <div className="pt-28"></div>
      <h2 className="text-5xl font-bold text-center text-fourth">Projects</h2>
      <div className="bg-first flex justify-center w-full p-11 my-10 space-y-2 rounded-xl">
        <div className="flex flex-wrap justify-between items-baseline">
          {projects.map((item) => {
            return (
              <div
                className="bg-white m-auto my-9 p-6  rounded-2xl w-80 md:w-96 border space-y-2 um:w-auto text-fourth border-fourth "
                key={item.id}
              >
                <a href={item.url} target="_blank" rel="noreferrer noopener">
                  <h2 className="text-center font-bold text-xl md:text-2xl text-third hover:text-fourth hover:transition">
                    {item.name}
                  </h2>
                </a>
                <p className="md:text-lg">
                  <span className="font-medium text-justify  ">
                    Description:
                  </span>
                  {item.shortdesc}
                </p>
                <ul className="list-disc pl-4 md:text-lg">
                  {item.features.map((item) => {
                    return <li key={item}>{item}</li>;
                  })}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Projects;
