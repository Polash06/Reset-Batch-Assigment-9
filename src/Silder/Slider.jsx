import AwesomeSlider from "react-awesome-slider";
import withAutoplay from "react-awesome-slider/dist/autoplay";
import "react-awesome-slider/dist/styles.css";

const Slider = () => {
  const AutoplaySlider = withAutoplay(AwesomeSlider);

  const slider = (
    <AutoplaySlider
      play={true}
      cancelOnInteraction={false} // should stop playing on user interaction
      interval={6000}
    >
      <div data-src="https://i.ibb.co/0qRYQQC/Malson-Modern-Bed-Room-20180819090641741.jpg" />
      <div data-src="https://i.ibb.co/L8PnvGv/Modular-Home-08-scaled-1-768x512.webp" />
      <div data-src="https://i.ibb.co/x1XgqXk/317854997.jpg" />
    </AutoplaySlider>
  );

  return (
    <div>
      <div>{slider}</div>
     
    </div>
  );
};

export default Slider;
