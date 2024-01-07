import Card from "./ui/Card";
import tracks from "../data/tracks.json";

const Tracks = () => {
  return (
    <section
      id="tracks"
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 place-items-center p-4 relative overflow-clip bg-primary min-h-screen"
    >
      <img
        src="/Tracks.png"
        alt="tracks"
        className="absolute right-0 top-1/2 -translate-y-1/2 hidden sm:block"
      />
      <img
        src="/Tracks.png"
        alt="tracks"
        className="absolute left-0 top-1/2 -translate-y-1/2 rotate-180 hidden sm:block"
      />
      <h1 className="col-span-full text-center text-5xl md:text-7xl font-extrabold text-secondary mb-4 heading">
        Tracks
      </h1>
      {tracks.map((track, index) => (
        <Card
          key={index}
          title={track.title}
          description={track.description}
          details={track.details}
        />
      ))}
    </section>
  );
};

export default Tracks;
