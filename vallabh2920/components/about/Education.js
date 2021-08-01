import React from 'react'

const Education = () => {
    const educationData = [
        {
          id: 1,
          year: "2015-2016",
          college: "C.K.T. School ",
          university: "SSC",
          grade: "79.00%",
          degree: "",
        },
        {
          id: 2,
          year: "2016-2018",
          college: "C.K.T. jr. College ",
          university: "HSC",
          grade: "69.00% ",
          degree: "Information technology",
        },
        {
          id: 3,
          year: "2018-present",
          college:"Mahatma Education Society's Pillai HOC College Of Education And Research",
          university: "Mumbai University",
          grade: "6.6 CGPA",
          degree: "Information technology - Persuing",
        },
      ];
    return (
        <div >
            <h2 className="m-8 text-fourth font-extrabold text-4xl tracking-wider text-center">EDUCATION
            </h2>
            {educationData.map((item) => {
        return (
          <div className="bg-first p-11 flex items-center flex-wrap w-full  my-3 mt-10 rounded-xl md:justify-center md:text-center md:m-auto md:my-6 md:w-4/5" key={item.id}>
            
              <img src="./img/calendar.svg" alt="" className=" mr-36 ml-10 md:m-0"/>
              
            
            <div className=" w-card ">
            <p className=" text-fourth font-normal" > {item.year}</p>
            <h2 className="text-2xl text-third font-bold "> {item.college} </h2>
            <h3 className=" text-fourth font-semibold text-lg "> {item.university} </h3>
            <h3 className=" text-fourth font-medium text-lg ">{item.degree} </h3>
            <p className=" text-fourth font-medium text-lg"> {item.grade}</p>
            </div>
          </div>
        );
      })}
        </div>
    )
}

export default Education
