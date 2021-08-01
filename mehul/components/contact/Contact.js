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
    <div id="contact">
      <div className="pt-28"></div>
      <h2 className="text-5xl text-center font-bold text-third">Contact Me</h2>
      <div className="flex flex-row flex-wrap items-center justify-evenly py-20">
        <div className="relative">
          <img
            style={{
              width: "100% !important",
            }}
            width="500"
            height="400"
            className="w-full lg:mb-20"
            src="/img/contact.svg"
            alt="contactme"
          />
          <a
            className="absolute text-first top-laptop sm:text-lg sm:top-small text-2xl left-8 lg:top-tab lg:left-4"
            href="tel:+917977060652"
          >
            <p>+91 7977060652</p>
          </a>
          <a
            className="absolute  bottom-28 left-16"
            href="mailto:mehulgawhale123@gmail.com?subject=query&cc=mehulgawhale123@gmail.com"
          >
            <svg
              width="29"
              height="29"
              viewBox="0 0 29 29"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M22.2333 0H6.76667C3.02954 0 0 3.02954 0 6.76667V22.2333C0 25.9705 3.02954 29 6.76667 29H22.2333C25.9705 29 29 25.9705 29 22.2333V6.76667C29 3.02954 25.9705 0 22.2333 0Z"
                fill="url(#paint0_linear)"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M6.0692 20.533L11.1916 15.2284L12.4313 16.4766C12.7134 16.7615 13.0491 16.9876 13.4192 17.1419C13.7892 17.2963 14.1861 17.3757 14.587 17.3757C14.9879 17.3757 15.3848 17.2963 15.7548 17.1419C16.1248 16.9876 16.4606 16.7615 16.7427 16.4766L17.864 15.3475L22.8776 20.5393C22.7976 20.5562 22.7145 20.5649 22.6294 20.5649H6.34615C6.25094 20.5649 6.15814 20.5538 6.0692 20.533ZM23.8056 9.36435C23.8266 9.45377 23.8377 9.54681 23.8377 9.64251V19.3565C23.8377 19.6683 23.7196 19.9525 23.526 20.1668L18.3746 14.833L23.8054 9.36411L23.8056 9.36435ZM5.16199 19.5977V9.88418C5.16199 9.67441 5.2154 9.47697 5.3094 9.3049L10.6807 14.7139L5.43314 20.1478C5.29677 19.9908 5.20335 19.8012 5.16199 19.5975V19.5977ZM23.3998 8.71161L16.2373 15.8739C15.2936 16.8178 13.7634 16.8178 12.8197 15.8739L5.62115 8.67584C5.82295 8.52432 6.07404 8.43442 6.34615 8.43442H22.6292C22.9105 8.434 23.1831 8.53216 23.3996 8.71185L23.3998 8.71161Z"
                fill="white"
              />
              <defs>
                <linearGradient
                  id="paint0_linear"
                  x1="14.5"
                  y1="0"
                  x2="14.5"
                  y2="29"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#008EE7" />
                  <stop offset="1" stop-color="#00D6FA" />
                </linearGradient>
              </defs>
            </svg>
          </a>
          <a
            className="absolute  top-6 right-12 "
            href="https://www.linkedin.com/in/mehul-gawhale/"
            target="_blank"
            rel="noreferrer noopener"
          >
            <svg
              width="29"
              height="29"
              viewBox="0 0 29 29"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M26.2587 0H2.74129C1.22732 0 0 1.22732 0 2.74129V26.2587C0 27.7727 1.22732 29 2.74129 29H26.2587C27.7727 29 29 27.7727 29 26.2587V2.74129C29 1.22732 27.7727 0 26.2587 0Z"
                fill="#379AD0"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M5.62689 14.7164V23.3731H9.81097V13.995V11.5423H5.62689V14.7164Z"
                fill="#FEFEFE"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M7.79107 5.62689C6.63684 5.62689 5.62689 6.63684 5.62689 7.79107C5.62689 8.80102 6.63684 9.81097 7.79107 9.81097C8.80102 9.81097 9.81097 8.80102 9.81097 7.79107C9.81097 6.63684 8.80102 5.62689 7.79107 5.62689ZM23.2289 15.1493C22.9403 12.9851 21.9304 11.5423 18.9005 11.5423C17.1692 11.5423 16.015 12.2637 15.4378 13.1294V11.5423H12.1194V13.8508V23.3732H15.5821V17.4577C15.5821 16.015 15.8707 14.4279 17.7463 14.4279C19.6219 14.4279 19.7662 16.3035 19.7662 17.602V23.3732H23.3732V16.8806C23.3732 16.3035 23.3732 15.7264 23.2289 15.1493Z"
                fill="#FEFEFE"
              />
            </svg>
          </a>
          <a
            className="absolute top-6 left-7 "
            href="https://github.com/mehul2410"
            target="_blank"
            rel="noreferrer noopener"
          >
            <svg
              width="29"
              height="29"
              viewBox="0 0 29 29"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0)">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M14.5 0C22.5084 0 29 6.6554 29 14.8667C29 21.4338 24.8501 27.0047 19.0921 28.9724C18.357 29.1188 18.096 28.6546 18.096 28.2587C18.096 27.7686 18.1134 26.1679 18.1134 24.1785C18.1134 22.7923 17.6494 21.8875 17.1289 21.4264C20.358 21.0581 23.751 19.8009 23.751 14.0908C23.751 12.4668 23.1884 11.1415 22.2575 10.1004C22.4083 9.72489 22.9056 8.21273 22.1154 6.16533C22.1154 6.16533 20.9003 5.76697 18.1322 7.68967C16.9496 7.36002 15.7278 7.19144 14.5 7.18911C13.2732 7.19133 12.0523 7.35992 10.8707 7.68967C8.0997 5.76697 6.8817 6.16533 6.8817 6.16533C6.09435 8.21273 6.5917 9.72489 6.74105 10.1004C5.8145 11.1415 5.24755 12.4668 5.24755 14.0908C5.24755 19.7864 8.6333 21.0629 11.8538 21.4385C11.4391 21.8097 11.0635 22.4645 10.933 23.4259C10.1065 23.8058 8.0069 24.4632 6.7135 22.1911C6.7135 22.1911 5.94645 20.7627 4.49065 20.6583C4.49065 20.6583 3.0769 20.6395 4.39205 21.5617C4.39205 21.5617 5.3418 22.0184 6.00155 23.7367C6.00155 23.7367 6.85271 26.3901 10.8866 25.4911C10.8939 26.7338 10.9069 27.9049 10.9069 28.2587C10.9069 28.6517 10.6401 29.1116 9.91655 28.9738C4.15425 27.0091 0 21.4352 0 14.8667C0 6.6554 6.4931 0 14.5 0Z"
                  fill="#122E4F"
                />
              </g>
              <defs>
                <clipPath id="clip0">
                  <rect width="29" height="29" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </a>
        </div>
        <form
          className="bg-first p-10 w-contact flex flex-col border space-y-2 border-fourth text-fourth rounded-2xl"
          onSubmit={(e) => e.preventDefault()}
        >
          <p className="text-fourth animate-pulse text-center">
            {emailresponse}
          </p>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Name"
            value={contact.name}
            onChange={(e) => setContact({ name: e.target.value })}
          />
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Email"
            required
            value={contact.email}
            onChange={(e) => setContact({ ...contact, email: e.target.value })}
          />
          <label htmlFor="message">Message:</label>
          <textarea
            type="text"
            id="message"
            name="message"
            className="h-44 resize-none"
            placeholder="Message"
            value={contact.message}
            onChange={(e) =>
              setContact({ ...contact, message: e.target.value })
            }
          />
          <input
            type="submit"
            placeholder="Send"
            onClick={form}
            className="bg-fourth cursor-pointer text-first text-lg py-2 rounded-md"
          />
        </form>
      </div>
    </div>
  );
};

export default Contact;
