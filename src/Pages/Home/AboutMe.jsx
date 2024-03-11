export default function AboutMe() {
  return (
    <section id="AboutMe" className="about--section">
      <div className="about--section--img">
        <img src="./img/sakarya-univer.jpg" alt="sakarya-univer" />
        <img src="./img/astrum.jpeg" alt="astrum" />
      </div>
      <div className="hero--section--content--box about--section--box">
        <div className="hero--section--content">
          {/* <p className="section--title">About</p> */}
          <h1 className="skills-section--heading">About Me</h1>
          <p className="hero--section-description">
          Hello, my name is Muxibillo and I am 24 years old. 
          I am a third-year student at Sakarya University in the Sakarya province of Turkey, 
          studying computer engineering. Currently, I am on academic vacation. 
          I am also a graduate of the Frontend Developer specialization at Astrum IT Academy. 
          I have a Turkish language certificate at the C1 level, 
          and I am proficient in English (B1), Russian (A2), and Japanese (N5). 
          I currently live in Tashkent.
          </p>
        </div>
      </div>
    </section>
  );
}
