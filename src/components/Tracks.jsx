import Card from "./ui/Card";
import Card2 from "./ui/Card2";
import tracks from "../data/tracks.json";
import specialTracks from "../data/specialTracks.json";

const Tracks = () => {
  return (
    <section id="tracks" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 place-items-center p-4 relative overflow-clip bg-primary min-h-screen">
      <img src="/Tracks.png" alt="tracks" className="absolute right-0 top-1/2 -translate-y-1/2 hidden sm:block"/>
      <img src="/Tracks.png" alt="tracks" className="absolute left-0 top-1/2 -translate-y-1/2 rotate-180 hidden sm:block"/>
      <h1 className="col-span-full text-center text-5xl md:text-7xl font-extrabold text-secondary mb-4 heading">Tracks</h1>
      { tracks.map((track, index) => <Card key={index} title={track.title} description={track.description} />) }
      <h2 className="col-span-full text-2xl md:text-4xl font-extrabold text-secondary my-4 heading">Special Tracks</h2>
      <p className="col-span-full text-secondary">We encourage participants to bring their unique perspective and creativity to these ideas, adapting and expanding upon them to create innovative solutions during the hackathon. </p>
        <div className="carousel rounded-box max-w-4xl min-w-64 col-span-full">
          { specialTracks.map((track, index) => <Card2 key={index} title={track.title} description={track.description} />) }
          { specialTracks.map((track, index) => <Card2 key={index} title={track.title} description={track.description} />) }
        </div>
    </section>
  );
};

export default Tracks;
