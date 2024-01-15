import judgeData from "../data/judges.json";

import PropTypes from "prop-types";

const Judge = ({
  name,
  company,
  designation,
  linkedin,
  image,
  companyLogo,
}) => {
  return (
    <div className="relative transform transition-transform hover:scale-105">
      <img
        src={companyLogo}
        alt={`${company} Logo`}
        className="absolute -left-12 -top-4 w-44 bg-primary p-2 rounded-md z-10"
      />
      <div className="text-center max-w-4xl px-4 py-8 bg-primary text-black clip text-xs md:text-lg relative">
        <img
          src={image}
          alt={name}
          className="w-48 h-48 rounded mx-auto mt-5"
        />
        <a
          href={linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="text-secondary underline flex items-center justify-center mt-2"
        >
          <img src="/socials/linkedin.png" alt="linkedin" className="bg-secondary rounded w-8 h-8 mr-2 transform transition-transform hover:scale-105" />
        </a>
      </div>
      <h1 className="text-4xl text-center mt-4 text-primary font-orbitron">
        {name}
      </h1>
      <p className="text-center text-primary font-orbitron">
        <span className="text-white font-extrabold">{company}</span> -{" "}
        {designation}
      </p>
    </div>
  );
};


const Chief = () => {
  return (
    <div className="relative w-full min-h-screen pb-10 sm:pb-10 md:pb-20 bg-[#800080] flex flex-col py-10 gap-y-14 sm:gap-y-14 md:gap-y-28 overflow-hidden">
      <img
        src="/Hexagon.png"
        alt="DSC"
        className="absolute -bottom-5 -right-5 w-48 md:w-64 rotate-180"
      />
      <img
        src="/PurpleDSC.png"
        alt="DSC"
        className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 max-w-5xl grayscale"
      />
      <h1 className="text-5xl md:text-7xl font-extrabold text-center  mb-16 heading z-10 text-primary">
        JUDGES
      </h1>

      <div className="relative w-full flex flex-col sm:flex-col md:flex-row  items-center justify-around gap-x-20 gap-y-28">
        {judgeData.map((judge, index) => (
          <Judge key={index} {...judge} />
        ))}
      </div>
    </div>
  );
};

export default Chief;

Judge.propTypes = {
  name: PropTypes.string.isRequired,
  company: PropTypes.string.isRequired,
  designation: PropTypes.string.isRequired,
  linkedin: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  companyLogo: PropTypes.string.isRequired,
};
