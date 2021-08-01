import React from "react";
import BasePage from "../../layout/BasePage";
import Image from "next/image";

const Footer = () => {
  return (
    <BasePage className="bg-fourth py-6 ">
      <div className="flex justify-between">
        <div className="flex space-x-4 items-center">
          <a href="#home" className="mr-4">
            <Image width={60} height={60} src="/img/icons.svg" alt="logo" />
          </a>
          <Image
            width={25}
            height={25}
            src="/img/copyright.svg"
            alt="copyright"
          />
          <p className="text-first">2021</p>
        </div>
        <div className="flex space-x-4 items-center">
          <a href="mailto:mehulgawhale123@gmail.com?subject=query&cc=mehulgawhale123@gmail.com">
            <Image width={25} height={25} src="/img/mail.svg" alt="mail" />
          </a>
          <a
            href="https://www.linkedin.com/in/mehul-gawhale/"
            target="_blank"
            rel="noreferrer noopener"
          >
            <Image
              width={25}
              height={25}
              src="/img/linkedin.svg"
              alt="linkedin"
            />
          </a>
          <a
            href="https://github.com/mehul2410"
            target="_blank"
            rel="noreferrer noopener"
          >
            <Image width={25} height={25} src="/img/github.svg" alt="github" />
          </a>
        </div>
      </div>
    </BasePage>
  );
};

export default Footer;
