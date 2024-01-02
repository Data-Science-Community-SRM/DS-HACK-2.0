const Landing = () => {

  return (
    <section className="hero min-h-screen relative">
      <img src="/Hero.png" className="max-w-6xl absolute"/>
      <div className="hero-content relative text-center text-neutral-content before:absolute before:top-0 before:w-full before:h-full before:bg-opacity-40 before:bg-base-300 before:blur-2xl before:left-0 before:border-2 before:-z-10">
        <div className="max-w-md text-white">
          <h1 className="mb-5 text-5xl md:text-7xl font-bold">DS Hack 2.0</h1>
          <p className="text-xl md:text-3xl">Dive Deep Hack High</p>
          <p className="mb-5 text-lg md:text-xl">Elevate Automation with Deep Learning</p>
          {/* <div 
            className="apply-button" 
            data-hackathon-slug="YOUR-HACKATHON-SLUG" 
            data-button-theme="dark-inverted"
            style={{height: "44px", width: "312px"}}
          ></div> */}
        </div>
      </div>
    </section>
  )
};

export default Landing;
