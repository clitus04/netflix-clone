import { links } from "./links.data";
import languageIcon from "../../../assets/languageIcon.png";

const Footer = () => {
  return (
    <div className="px-[4vw] lg-1:px-[12vw] py-[4vw]">
      <div className="text-gray-text pb-[1vw] text-[2vw] md-1:text-[1vw] ml-[40%] sm:ml-0">
        Questions? Call{" "}
        <a className="underline cursor-pointer">000-800-919-1694</a>
      </div>
      <div className="flex flex-wrap mb-[3vw] sm:mb-[1vw]">
        {links &&
          links.map((item) => (
            <div
              key={item.id}
              className="w-full ml-[40%] sm:ml-0 sm:w-1/2 md-1:w-1/4 pb-[1%]"
            >
              <a className="text-gray-text text-[2vw] md-1:text-[1vw] underline cursor-pointer">
                {item.name}
              </a>
            </div>
          ))}
      </div>
      <div className="flex gap-1 h-full w-max items-center border bg-[#111414] pl-[0.25vw] pr-[0.5vw] py-[0.25vw] mb-[3vw] sm:mb-[1vw] rounded ml-[40%] sm:ml-0">
        <img src={languageIcon} alt="" className="w-[3.5vw] md-1:w-[1.5vw]" />
        <select className="bg-transparent text-[2vw] md-1:text-[1vw] w-[3/4]">
          <option className="text-black">English</option>
          <option className="text-black">Hindi</option>
        </select>
      </div>
      <div className="text-gray-text text-[2vw] md-1:text-[1vw] ml-[40%] sm:ml-0">
        Netflix India
      </div>
    </div>
  );
};

export default Footer;
