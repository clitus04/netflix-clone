import { LiaPlusSolid, LiaTimesSolid } from "react-icons/lia";

const Accordian = ({ accordianId, title, body, isOpened, onToggle }) => {
  return (
    <div className="mb-[0.5vw]">
      <div
        className="flex items-center bg-theme-gray hover:bg-theme-gray-light transition-colors cursor-pointer px-[2vw] py-[1vw] mb-[0.1vw]"
        onClick={() => onToggle(accordianId)}
      >
        <div className="flex-1 text-[2.5vw] md-1:text-[1.5vw] font-normal leading-[4vw] md-1:leading-[2vw]">
          {title}
        </div>
        {isOpened ? (
          <LiaTimesSolid size={"3vw"} />
        ) : (
          <LiaPlusSolid size={"3vw"} />
        )}
      </div>
      <div className={`${isOpened && "flex flex-col gap-[2vw] h-auto px-[2vw] py-[1vw]"} bg-theme-gray overflow-y-hidden h-0`}>
        {body.map(({ id, para }) => (
          <p key={id} className="text-[2.5vw] md-1:text-[1.5vw] font-normal leading-[4vw] md-1:leading-[2vw]">{para}</p>
        ))}
      </div>
    </div>
  );
};

export default Accordian;
