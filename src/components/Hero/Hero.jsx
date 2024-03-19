import heroPhoto from "img/hero-photo.png";

const Hero = () => {
  return (
    <section>
      <div>
        <h1>Clinically proven. Ethically made.</h1>
        <p>
          Stress and fatigue erode our ability to perform at our best. LK-01
          helps you tackle the mental and physical effects of fatigue to perform
          at your peak.
        </p>
        <button>Shop Now</button>
      </div>
      <img src={heroPhoto} alt="" />
    </section>
  );
};

export default Hero;
