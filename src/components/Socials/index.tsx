import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faStackOverflow,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import classNames from "classnames";

const Socials: React.FC<{
  className?: string;
}> = ({ className }) => {
  const socials = [
    {
      label: "Twitter",
      icon: <FontAwesomeIcon icon={faTwitter} />,
      url: "",
    },
    {
      label: "Github",
      icon: <FontAwesomeIcon icon={faGithub} />,
      url: "",
    },
    {
      label: "Linkedin",
      icon: <FontAwesomeIcon icon={faLinkedin} />,
      url: "",
    },
    {
      label: "StackOverflow",
      icon: <FontAwesomeIcon icon={faStackOverflow} />,
      url: "",
    },
    {
      label: "Email",
      icon: <FontAwesomeIcon icon={faEnvelope} className="block lg:hidden" />,
      url: "",
    },
  ];
  return (
    <div
      className={classNames(
        "z-50 flex flex-row items-center w-full gap-4 p-4 bg-background-light dark:bg-background lg:w-4 lg:flex-col lg:bg-none",
        className
      )}
    >
      <span className="flex flex-grow lg:hidden">Get in touch: </span>

      {socials.map((social) => (
        <a
          key={social.url}
          href={social.url}
          target="_blank"
          className="transition-colors hover:text-primary"
          rel="noreferrer"
        >
          {social.icon}
        </a>
      ))}
      <div className="h-12 ml-[5px] border-l dark:border-background-light border-background hidden lg:flex" />
    </div>
  );
};

export default Socials;
