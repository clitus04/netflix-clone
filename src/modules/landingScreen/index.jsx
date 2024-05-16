import Footer from "./footer";
import FrequentQuestions from "./frequentQuestions";
import PromotionLayout from "./promotionLayout";
import TvAnimation from "./promotionLayout/tvAnimation";
import SignupLayout from "./signupLayout";

const LandingScreen = () => {
  return (
    <div>
      <SignupLayout />
      <PromotionLayout
        title="Enjoy on your TV"
        description="Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray
          players and more."
      >
        <TvAnimation />
      </PromotionLayout>
      <PromotionLayout
        title="Download your shows to watch offline"
        description="Save your favourites easily and always have something to watch."
        reverse
      >
        <TvAnimation />
      </PromotionLayout>
      <PromotionLayout
        title="Watch everywhere"
        description="Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV."
      >
        <TvAnimation />
      </PromotionLayout>
      <PromotionLayout
        title="Create profiles for kids"
        description="Send children on adventures with their favourite characters in a space made just for them—free with your membership."
        reverse
      >
        <TvAnimation />
      </PromotionLayout>
      <FrequentQuestions />
      <Footer />
    </div>
  );
};

export default LandingScreen;
