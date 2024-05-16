import tv from "../../../../assets/tv.png";
import tvVideo from "../../../../assets/video-tv.mp4";

const TvAnimation = () => {
  return (
    <div className="relative flex justify-center">
      <img alt="" src={tv} className="w-3/4 md-1:w-full" />
      <video
        autoPlay
        muted
        loop
        className="absolute top-[21%] left-[22%] md-1:left-[12.5%] w-[55%] md-1:w-[74%]"
      >
        <source src={tvVideo} type="video/mp4" />
      </video>
    </div>
  );
};

export default TvAnimation;
