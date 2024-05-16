import { useState } from "react";
import Accordian from "../../../components/accordian";
import { questions } from "./quetsions.data";
import { PiCaretRightBold } from "react-icons/pi";
import Button from "../../../components/button";

const FrequentQuestions = () => {
  const [selectedAccordianID, setSelectedAccordianID] = useState(null);
  const onToggle = (id) => {
    if (selectedAccordianID === id) {
      id = null;
    }
    setSelectedAccordianID(id);
  };
  return (
    <div className="px-[4vw] lg-1:px-[12vw] py-[4vw] border-b-8 border-theme-gray">
      <div className=" text-center text-[5vw] md-1:text-[3vw] font-bold mb-[5vw] md-1:mb-[2vw] font-netflix-bold leading-[4vw]">
        Frequently Asked Questions
      </div>
      <div className="mb-[3vw]">
        {questions &&
          questions.map(({ id, question, answer }) => (
            <Accordian
              key={id}
              accordianId={id}
              title={question}
              body={answer}
              isOpened={selectedAccordianID === id}
              onToggle={onToggle}
            />
          ))}
      </div>
      <div className="flex flex-col items-center">
        <div className="text-[2vw] md-1:text-[1.5vw] font-normal mb-[4vh]">
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

export default FrequentQuestions;
