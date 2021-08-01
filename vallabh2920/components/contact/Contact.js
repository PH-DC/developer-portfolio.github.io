import React from "react";
import { supabase } from "../../supabase";

const Contact = () => {
  const [contact, setContact] = React.useState({
    name: "",
    email: "",
    message: "",

  });
  const [emailresponse, setEmailresponse] = React.useState("");
  const form = async () => {
    if (contact.name && contact.message && contact.email) {
      const { data, error } = await supabase.from("contactform").insert({
        name: contact.name,
        email: contact.email,
        message: contact.message,
      });
      setEmailresponse("Your message has been save will revert asap!");
      setContact({ name: "", email: "", message: "" });
    } else {
      setEmailresponse("Something went wrong !");
    }
  };
  return (
    <div id="contact" className=" ">
      <h2 className="m-8 text-fourth font-extrabold text-4xl tracking-wider text-center">
        CONTACT ME!
      </h2>
      <div className="flex flex-row flex-wrap items-center justify-evenly mb-10 md:space-y-6">
        <div className="md:w-img ">
          <img src="/img/contact-1.svg" className="px-16 rounded-2xl w-card"></img>
        </div>
        <form onSubmit={(e) => e.preventDefault()} 
        className="bg-first flex justify-start flex-col p-10 space-y-2 w-96 border border-fourth rounded-xl">
        <p className="text-fourth animate-pulse text-center">
            {emailresponse}
          </p>
          <label className="text-fourth" htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" placeholder="Name" value={contact.name}
            onChange={(e) => setContact({ name: e.target.value })} />
          <label className="text-fourth" htmlFor="email">Email:</label>
          <input type="email" placeholder="Email" required value={contact.email}
            onChange={(e) => setContact({ ...contact, email: e.target.value })}  />
          <label className="text-fourth" htmlFor="message">Message:</label>
          <textarea placeholder="Message" className="  h-32 " value={contact.message}
            onChange={(e) =>
              setContact({ ...contact, message: e.target.value })
            }/>
          <input type="submit" onClick={form} className=" rounded-md h-10 border-2 cursor-pointer border-fourth bg-third text-white font-medium" ></input>
        </form>
      </div>
    </div>
  );
};

export default Contact;
