import React from 'react'

const Skills = () => {
    const skills = [
        {
          id: 1,
          image: "./img/html1.svg",
          name: "HTML",
          percent: "80%",
        },
        {
          id: 2,
          image: "./img/css-2.svg",
          name: "CSS",
          percent: "60%",
        },
        {
          id: 3,
          image: "./img/react-1.svg",
          name: "REACTJS",
          percent: "55%",
        },
        {
          id: 4,
          image: "./img/ux-1.svg",
          name: "UI/UX",
          percent: "85%",
        },
        {
          id: 5,
          image: "./img/git.svg",
          name: "GIT",
          percent: "70%",
        },
        {
          id: 6,
          image: "./img/photoshop.svg",
          name: "PHOTOSHOP",
          percent: "50%",
        },
        {
          id: 7,
          image: "./img/nextjs-1.svg",
          name: "NEXT.JS",
          percent: "50%",
        },
      ];
    return (
        <div id="skills" className="my-14">
      <h2 className="m-8 text-fourth font-extrabold text-4xl tracking-wider text-center">SKILLS</h2>
      <div className="bg-first flex justify-around flex-wrap p-11 my-10 rounded-xl md:p-6 mx-6">
        {skills.map((item) => {
          return (
            <div className="w-80 m-4 px-5 flex items-center " key={item.id}>
              <div className="">
                <img className="w-20 h-20" src={item.image} alt={item.name} />
              </div>
              <div className="px-4">
                <p className="text-lg text-fourth mb-2">{item.name}</p>
                <div className="rounded-lg w-32 h-2 relative  bg-white">
                  <span
                    className="rounded-lg top-0 left-0 bg-third h-2 absolute"
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
    )
}

export default Skills
