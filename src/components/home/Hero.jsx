import Typewriter from "typewriter-effect";
import { home } from "../data/dummydata";
function Hero() {
  return (
    <>
      <section className="hero">
        <div className="hero__container">
          {home.map((value, i) => (
            <div className="herocontainer" key={i}>
              <h3>{value.text}</h3>
              <h1>
                <Typewriter
                  options={{
                    strings: [
                      "Alamin Musa",
                      "Front End Developer",
                      "UI/UX Designer"
                    ],
                    autoStart: true,
                    loop: true
                  }}
                />
              </h1>
              <p>{value.desc}</p>
              <button className="primaryBtn">Download CV</button>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default Hero;
