import netflixIcon from "../../../assets/netflixLogo.png";
import languageIcon from "../../../assets/languageIcon.png";
import backgroundImage from "../../../assets/background.jpg";
import Button from "../../../components/button";
import { PiCaretRightBold } from "react-icons/pi";

const SignupLayout = () => {
  return (
    <div className="h-[97vh] landing-screen flex flex-col border-b-8 border-theme-gray relative">
      <img
        src={backgroundImage}
        alt=""
        className="absolute h-full w-full object-cover opacity-50"
      />
      <div className="flex items-center justify-between px-[12vw] py-[3vh] z-10">
        <img src={netflixIcon} alt="" className="w-[16vw] md-1:w-[12vw]" />
        <div className="flex items-center gap-[2vw]">
          <div className="flex gap-1 h-full items-center border bg-[#111414] px-[0.5vw] py-[0.25vw] rounded">
            <img src={languageIcon} alt="" className="w-[3.5vw] md-1:w-[1.5vw]" />
            <select className="bg-transparent text-[2vw] md-1:text-[1vw] w-[3/4]">
              <option className="text-black">English</option>
              <option className="text-black">Hindi</option>
            </select>
          </div>
          <Button size="small">Sign In</Button>
        </div>
      </div>
      <div className="flex-1 flex flex-col justify-center items-center text-white z-10">
        <div className="text-[5vw] md-1:text-[3vw] font-bold mb-[2vh]">
          Unlimited movies, TV shows and more
        </div>
        <div className="text-[2.5vw] md-1:text-[1.5vw] font-normal mb-[2vh]">
          Watch anywhere. Cancel anytime.
        </div>
        <div className="text-[2.5vw] md-1:text-[1.5vw] font-normal mb-[4vh]">
          Ready to watch? Enter your email to create or restart your membership.
        </div>
        <div className="flex flex-col items-center md-1:flex-row md-1:items-stretch gap-[1.5vw] md-1:gap-[0.5vw]">
          <input
            placeholder="Email address"
            className="text-[2vw] md-1:text-[1vw] w-[50vw] md-1:w-[25vw] px-[1.25vw] py-[0.75vw] border rounded bg-[#0f101060]"
          />
          <Button size="large" Icon={PiCaretRightBold}>
            Get Started
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SignupLayout;
