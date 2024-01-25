const data = [
    {
        title: "Platinum tier",
        sponsors: [
            {src: "/sponsors/devfolio.png", alt: "DEVFOLIO LOGO", link: "https://devfolio.co/"},
            {src: "/sponsors/onboard.png", alt: "ONBOARD LOGO", link: "https://onboard.dev/"},
        ],
    },
    {
        title: "Gold tier",
        sponsors: [
            {src: "/sponsors/2IIM.png", alt: "2IIM LOGO", link: "https://www.2iim.com/"},
        ]
    },
    {
        title: "Silver tier",
        sponsors: [
            {src: "/sponsors/replit-light.png", alt: "REPLIT LOGO", link: "https://replit.com/"},
            {src: "/sponsors/polygon.png", alt: "POLYGON LOGO", link: "https://polygon.technology/"},
            {src: "/sponsors/gradvine.png", alt: "GRADVINE LOGO", link: "https://gradvine.com/"},
        ]
    }
]

const Sponsors = () => {
    return (
        <section id="sponsors" className="section-bg justify-items-center bg-primary relative py-12">
            <img src="/HexagonFull.png" alt="DSC" className="absolute top-1/2 right-0 w-48 md:w-64 rotate-180 opacity-60" />
            <div className="relative w-full h-full">
                <h1 className="text-5xl md:text-7xl font-extrabold text-center text-secondary mb-12 heading"> Sponsors </h1>
                <div className="items-center p-2 mb-12">
                    {data.map((tier, index) => (
                        <div key={index} className="">
                            <h2 className="tier-title text-xl md:text-2xl text-center p-2 z-40 heading text-secondary">{tier.title}</h2>
                            <div className="grid grid-cols-1 mx-auto place-items-center sm:grid-flow-col auto-cols-max gap-4 p-4 w-fit">
                                {tier.sponsors.map((sponsor, index) => (
                                    <a key={index} href={sponsor.link} target="_blank" rel="noopener noreferrer">
                                        <div className="bg-[url('/sponsors/placeholder.png')] flex h-36 w-36 rounded-2xl transform transition-transform hover:scale-110">
                                            <img className="mx-auto object-contain p-2" src={sponsor.src} alt={sponsor.alt} />
                                        </div>
                                    </a>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Sponsors;