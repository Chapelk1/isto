import istoPhoto from "img/isto-photo.png";

const Isto = () => {
  return (
    <section>
      <img src={istoPhoto} alt="" />
      <h2>CLINICALLY PROVEN</h2>
      <span>ISTO</span>
      <p>
        The ISTO Clinical Study is a randomized, double-blind human study that
        shows LK-01™ Pure Salidroside supports oxygen uptake and mood state. The
        preliminary results of our clinical study support LK-01 as a must-have
        for improved endurance and resiliency.
      </p>
      <button>Learn more</button>
    </section>
  );
};


export default Isto;