import naturesPhoto from "img/natures-photo.png";

const Advantages = () => {
  return (
    <section>
      <div>
        <h2>What’s inside?</h2>
        <p>All of nature’s healing wisdom.</p>
        <ul>
          <li>
            <h3>Boost your focus</h3>
            <p>
              Encourages higher measures of mental performance like associative
              thinking, short-term memory, and concentration to help you reach
              your peak cognitive function.
            </p>
          </li>
          <li>
            <h3>Increase your energy</h3>
            <p>
              Enhances ATP production and mitochondrial function to support your
              natural energy levels and promote cellular repair.
            </p>
          </li>
          <li>
            <h3>Find your calm</h3>
            <p>
              Helps balance your mind's serotonin, norepinephrine, and dopamine
              levels without causing drowsiness or fatigue, to improve your
              body's response to stress.
            </p>
          </li>
        </ul>
      </div>
      <img src={naturesPhoto} alt="" />
    </section>
  );
};


export default Advantages;