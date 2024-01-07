const data = [
    {
        title: "Platinum tier",
        sponsors: [
            {src: "/sponsors/devfolio.png", alt: "DEVFOLIO LOGO"},            
        ],
    },
    {
        title: "Gold tier",
        sponsors: [
            {src: "/sponsors/gradvine.png", alt: "GRADVINE LOGO"},
            {src: "/sponsors/onboard.png", alt: "ONBOARD LOGO"},
        ]
    },
    {
        title: "Silver tier",
        sponsors: [
            {src: "/sponsors/replit.png", alt: "REPLIT LOGO"},
            {src: "/sponsors/polygon.png", alt: "POLYGON LOGO"},           
        ]
    }
]

const Sponsors = () => {
    console.log(data)
    return (
        <section id="sponsors" className="section-bg justify-items-center">
            <div className="relative w-full h-full">
                <h2 className="section-title text-4xl text-center p-16 z-40 sm:text-8xl">Sponsors</h2>
                <div className="items-center p-2 mb-12">
                    {data.map((tier, index) => {
                        return (
                            <div key={index} className="">
                                <h2 className="tier-title text-2xl text-center p-2 z-40 sm:text-4xl">{tier.title}</h2>
                                <div className="grid grid-cols-1 mx-auto place-items-center sm:grid-flow-col auto-cols-max gap-4 p-4 w-fit">
                                    {tier.sponsors.map((sponsor, index) => {
                                        return (
                                            <div key={index} className={`bg-[url('/sponsors/placeholder.png')] flex h-36 w-36 rounded-2xl`}>
                                                <img className="mx-auto object-contain p-2" src={sponsor.src} alt={sponsor.alt} />
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    );
}

export default Sponsors;