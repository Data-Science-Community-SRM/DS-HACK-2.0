const Prizes = () => {
  const prizes = [
    {
      title: "2nd Prize",
      prize: "₹ 15,000",
    },
    {
      title: "1st Prize",
      prize: "₹ 25,000",
    },
    {
      title: "3rd Prize",
      prize: "₹ 10,000",
    },
  ]

  return (  
    <section id="prizes" className="bg-secondary pt-8 pb-24 font-bold heading relative overflow-hidden -z-10">
      <img src="/Hexagon.png" alt="DSC" className="absolute -top-5 -left-5 w-48 md:w-64 -z-10" />
      <img src="/Hexagon.png" alt="DSC" className="absolute -bottom-5 -right-5 w-48 md:w-64 rotate-180 -z-10" />
      <img src="/PurpleDSC.png" alt="DSC" className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 max-w-5xl -z-10" />
      <h1 className="text-5xl md:text-7xl font-extrabold text-center text-white mb-16 heading"> Prizes </h1>
      <div className="flex flex-col md:flex-row gap-16 justify-center items-center">
        {prizes.map((prize, index) => (
          <div key={index} className={`hover:rotate-3 flex flex-col justify-center items-center p-4 clip-3 bg-primary ${index === 1 ? "scale-125": ''} text-secondary`}>
            <img src="/Prize.png" alt="prize" className="w-48 h-48 mb-4"/>
            <h1 className="text-xl mb-4">{prize.title}</h1>
            <h1 className="text-3xl">{prize.prize}</h1>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Prizes;
