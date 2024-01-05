const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen bg-secondary flex items-center justify-center relative flex-col overflow-clip p-4"
    >
      <img src="/About.png" className="max-w-4xl absolute" />
      <p className="z-10 text-center max-w-4xl px-4 py-8 bg-primary text-black clip text-xs md:text-xl ">
        <strong className="text-5xl">&apos;24 Edition</strong>
        <br />
        DS Hack 2.0 will be entirely centered around the revolutionary
        combination of deep learning and machine automation. Participants will
        explore the cutting edge domain where automated systems and intelligent
        algorithms collide, stretching the bounds of what is possible. With the
        goal of demonstrating the full potential of incorporating deep learning
        into machine automation, DS Hack 2.0 seeks to be a catalyst for
        innovations that improve predictive maintenance, streamline industrial
        processes, or transform autonomous systems
      </p>
    </section>
  );
};
export default About;
