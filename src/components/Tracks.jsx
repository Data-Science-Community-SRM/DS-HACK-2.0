import Card from "./ui/Card";

const Tracks = () => {

  const tracks = [
    {title: "Computer Vision", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.", details: "cv"},
    {title: "NLP", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.", details: "nlp"},
    {title: "Generative AI", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.", details: "generative"},
    {title: "Health", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.", details: "health"},
    {title: "IOT", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.", details: "iot"},
    {title: "Open Innovation", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.", details: "open"},
  ]

  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-4 gap-y-12 place-items-center p-4 relative overflow-clip">
      <img src="/Tracks.png" alt="tracks" className="absolute right-0 top-1/2 -translate-y-1/2"/>
      <img src="/Tracks.png" alt="tracks" className="absolute left-0 top-1/2 -translate-y-1/2 rotate-180"/>
      <h1 className="col-span-full text-center text-5xl md:text-7xl font-extrabold text-secondary">Tracks</h1>
      {tracks.map((track, index) => <Card key={index} title={track.title} description={track.description} details={track.details}/>)}
    </section>
  )
}
export default Tracks;