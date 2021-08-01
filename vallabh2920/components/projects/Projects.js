import React from 'react'

const Projects = () => {
    // const projects = [
    //     {
    //       id: 1,
    //       name: "Let India Breathe",
    //       shortdesc: "Revamped the php site to nextjs",
    //       url: "https://www.letindiabreathe.in/",
    //       features: [
    //         "Dynamic Project Routes, project data is now fetched from a JSON file.",
    //         "All types of responses go into a single google sheet workbook.",
    //         "Static rendering and preloading of all pages using NextJS.",
    //         "Multilingual email templates",
    //       ],
    //     },
    //     {
    //       id: 2,
    //       name: "Oye Beauty",
    //       shortdesc: "Designed and Developed the Website for Oye Busy Technology",
    //       url: "https://oyebeauty.in/",
    //       features: [
    //         "Dynamic Project Routes,pages data is fetched from a API with React Context Hook.",
    //         "Build a Custom Date and time picker.",
    //         "Implemented adaptive way to make responsive website with different view",
    //       ],
    //     },
    //     {
    //       id: 3,
    //       name: "ISEWA",
    //       shortdesc: "Wordpress Website Build with Elementor",
    //       url: "http://isewa.org.in/",
    //       features: ["LearnPress", "Woocommerce"],
    //     },
    //     {
    //       id: 4,
    //       name: "IamTrans",
    //       shortdesc: "Wordpress Website Build with Themeco Pro Builder",
    //       url: "https://www.iamtrans.in/",
    //       features: [],
    //     },
    //     {
    //       id: 5,
    //       name: "Marknote",
    //       shortdesc:
    //         "An Inspiration of Google keep Application build with nextjs and Strapi (Headless cms backend) ",
    //       url: "https://markdown-frontend.vercel.app/",
    //       features: [
    //         "MarkDown editor with functionalites like",
    //         "share",
    //         "edit",
    //         "delete",
    //       ],
    //     },
    //   ];
    return (
        <div id="projects">
            <h2 className="m-8 text-fourth font-extrabold text-4xl tracking-wider text-center">PROJECTS</h2>
            <div className="ml-24 mr-24 mt-10 mb-14 p-11 flex justify-center items-center flex-col  bg-first rounded-xl md:mx-7">

                
                <a  href="https://foodies-b9b87.web.app/" alt="" target="_blank" rel="noreferrer noopener"><img src="/img/foodies.svg"/></a>
                <h3 className="m-6 text-2xl text-fourth " >Foodies</h3>
                <p className=" text-2xl text-fourth">Designed and Developed the Website about food and calories.</p><br></br>
                <p className=" text-2xl font-semibold text-third">Features implemented:- </p>
                <ul className="list-disc ml-4 mt-4 space-y-4 text-2xl text-fourth">
                    <li>
                    Implemented adaptive way to make responsive website with different view
                    </li>
                    <li>
                    Built with reactjs and using and Food recipe API provided by edamam.com
                    </li>
                </ul>


            </div>
            
        </div>
    )
}

export default Projects
