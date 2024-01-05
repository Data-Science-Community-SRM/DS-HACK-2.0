const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen bg-secondary flex items-center justify-center relative flex-col overflow-clip p-4"
    >
      <img src="/About.png" className="max-w-4xl absolute" />
      <p className="z-10 text-center max-w-4xl px-4 py-8 bg-primary text-black clip text-xs md:text-xl ">
        <strong className="text-5xl">&apos;24 Edition</strong>
        <br></br>
        <br />
        DSC SRM is back with DS Hack2.0 ! This edition focuses on the
        groundbreaking fusion of deep learning and machine automation, pushing
        the boundaries of innovation. Participants will showcase the power of
        incorporating deep learning into automation, aiming to revolutionize
        predictive maintenance, industrial processes, and autonomous systems.
      </p>
    </section>
  );
};
export default About;
