const PromotionLayout = ({ title, description, children, reverse }) => {
  return (
    <div
      className={`flex flex-col md-1:flex-row ${
        reverse && "md-1:flex-row-reverse"
      } px-[4vw] lg-1:px-[12vw] py-[4vw] border-b-8 gap-[2vw] border-theme-gray`}
    >
      <div className="md-1:w-1/2 flex flex-col justify-center items-center md-1:items-start">
        <div className="text-[5vw] lg-1:text-[3vw] font-bold mb-[2vh] font-netflix-bold leading-[6vw] lg-1:leading-[4vw]">
          {title}
        </div>
        <div className="text-[2.5vw] lg-1:text-[1.5vw] font-normal leading-[3.5vw] lg-1:leading-[2vw] text-center md-1:text-left">
          {description}
        </div>
      </div>
      <div className="md-1:w-1/2">{children}</div>
    </div>
  );
};

export default PromotionLayout;
