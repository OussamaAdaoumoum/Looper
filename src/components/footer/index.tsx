import useScrollTo from "../hooks/useScrollTo";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { scrollTo } = useScrollTo();
  const { t } = useTranslation();
  return (
    <footer className="container z-30 flex flex-col items-center p-4 mx-auto sm:p-6 ">
      <div className="w-11/12 lg:flex lg:justify-between lg:w-10/12">
        <div className="mb-20 lg:mb-0">
          {/* <Logo
            height={30}
            fill="currentColor"
            onClick={() => scrollTo("hero")}
          /> */}
        </div>
      </div>
      <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
      <div className="flex flex-col justify-between w-11/12 gap-2 pb-20 text-sm lg:10/12 lg:flex-row text-primary-dark sm:flex sm:items-center lg:justify-center dark:text-gray-400 sm:text-center lg:pb-0">
        <span>
          © {`2023-${new Date().getFullYear()} `}
          <a
            href=""
            target="_blank"
            rel="noreferrer"
            className="font-bold cursor-pointer hover:underline"
          >
            Looper
          </a>
          . {t("copyright")}
        </span>
        <span className="hidden lg:block"> | </span>
        <span>
          View on {` `}
          <a
            href=""
            target="_blank"
            rel="noreferrer"
            className="font-bold cursor-pointer hover:underline"
          >
            GitHub
          </a>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
