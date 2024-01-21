import Countdown from "./ui/Countdown";
import updates from "../data/updates";

const discordInvite = "https://discord.gg/NH7upGY7QB";

const Landing = () => {
  return (
    <>
      <section className="hero min-h-screen relative overflow-hidden bg-primary">
        <img src="/Hero.png" className="max-w-6xl absolute" />
        <div className="hero-content flex-col relative text-center text-neutral-content before:absolute before:top-0 before:w-full before:h-full before:bg-opacity-40 before:bg-base-300 before:blur-2xl before:left-0 before:border-2 before:-z-10">
          <div className="max-w-md text-white flex flex-col items-center justify-center heading">
            <div className="flex mb-2 gap-4 items-center justify-center">
              <img src="/SRM.png" width={100} alt="SRM Logo" />
              <img src="/CTech.png" width={80} alt="CTech Logo" />
              <img src="/SOC.png" width={40} alt="SOC Logo" />
            </div>
            <h1 className="mb-5 text-5xl md:text-6xl font-bold">DS Hack 2.0</h1>
            <p className="text-xl md:text-2xl">Dive Deep Hack High</p>
            <p className="mb-5 text-lg md:text-md">
              Elevate Automation with Deep Learning
            </p>
            <div className="flex flex-col items-center gap-4">
              <div
                className="apply-button"
                data-hackathon-slug="ds-hack"
                data-button-theme="dark-inverted"
                style={{
                  height: "44px",
                  width: "256px",
                  backgroundColor: "none",
                }}
              ></div>
              <a
                className="bg-white w-full h-12 flex items-center justify-center gap-5 hover:bg-[#5865f2] transition-all duration-300 ease-in-out group"
                href={discordInvite}
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src="/Discord.png"
                  alt="discord"
                  className="w-10 h-10 group-hover:filter group-hover:brightness-0"
                />
                <p className="text-secondary text-xl">Join Discord</p>
              </a>
            </div>

            <Countdown />
          </div>
        </div>
      </section>
      <section className="bg-primary flex flex-row items-center">
        <div className="bg-secondary text-white p-4 text-2xl font-extrabold">
          LATEST UPDATES
        </div>
        <marquee className="text-2xl text-center text-secondary font-bold">
          {updates[0].message}
        </marquee>
      </section>
    </>
  );
};

export default Landing;
