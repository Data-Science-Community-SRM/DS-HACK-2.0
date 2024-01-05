import Card from "./ui/Card";

const Tracks = () => {
  const tracks = [
    {
      title: "Computer Vision",
      description:
        "Decode visuals, amplify creativity. Delve into the magic of pixels and unlock boundless possibilities in Computer Vision!",
      details: "cv",
    },
    {
      title: "NLP",
      description:
        "Dive into the realm of Natural Language Processing.",
      details: "nlp",
    },
    {
      title: "Generative AI",
      description:
        "Unleash the power of algorithms to create intricate and innovative solutions.s",
      details: "generative",
    },
    {
      title: "Data Science",
      description:
        "Analyze, interpret, and visualize data to drive innovation and create impactful solutions.",
      details: "datascience",
    },
    {
      title: "IOT",
      description:
        "Innovate in the realm where  physical meets  digital",
      details: "iot",
    },
    {
      title: "Open Innovation",
      description:
        "Unleash your creative genius beyond the confines of predefined tracks. Explore your ideas and create something truly breathtaking.",
      details: "open",
    },
  ];

  return (
    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 place-items-center p-4 relative overflow-clip">
      {/* <img src="/Tracks.png" alt="tracks" className="absolute right-0 top-1/2 -translate-y-1/2" />
      <img src="/Tracks.png" alt="tracks" className="absolute left-0 top-1/2 -translate-y-1/2 rotate-180" /> */}
      <h1 className="col-span-full text-center text-5xl md:text-7xl font-extrabold text-secondary mb-4">
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
