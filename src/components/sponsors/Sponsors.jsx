const data = [
    {
        title: "Platinum tier",
        sponsors: [
            "/assets/placeholder.png"
        ],
    },
    {
        title: "Gold tier",
        sponsors: [
            "/assets/placeholder.png",
            "/assets/placeholder.png",
            "/assets/placeholder.png",
        ] 
    },
    {
        title: "Silver tier",
        sponsors: [
            "/assets/placeholder.png",
            "/assets/placeholder.png",
            "/assets/placeholder.png",
        ]
    }
]

const Sponsors = () => {
    return (
        <section id="sponsors" className="section-bg justify-items-center">
            <div className="relative w-full h-full">
                <div className="absolute right-0 z-0">
                    <svg width="130" height="105" viewBox="0 0 130 105" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M102.985 23.5156L114.489 3.62411L137.496 3.62412L149 23.5156L137.496 43.4072L114.489 43.4071L102.985 23.5156Z" fill="#660066" />
                        <path d="M34.5112 22.9688L46.0149 3.07724L69.0223 3.07724L80.5259 22.9688L69.0223 42.8603L46.0149 42.8603L34.5112 22.9688Z" fill="#660066" />
                        <path d="M68.4741 82.0313L79.9778 62.1397L102.985 62.1397L114.489 82.0313L102.985 101.923L79.9778 101.923L68.4741 82.0313Z" fill="#660066" />
                        <path d="M68.4741 43.2031L79.9778 23.3116L102.985 23.3116L114.489 43.2031L102.985 63.0947L79.9778 63.0946L68.4741 43.2031Z" fill="#AB1DCC" />
                        <path d="M3.01368e-06 43.2031L11.5037 23.3116L34.511 23.3116L46.0147 43.2031L34.511 63.0947L11.5037 63.0946L3.01368e-06 43.2031Z" fill="#AB1DCC" />
                        <path d="M34.5112 62.8906L46.0149 42.9991L69.0223 42.9991L80.5259 62.8906L69.0223 82.7822L46.0149 82.7821L34.5112 62.8906Z" fill="#D896FF" />
                        <path d="M102.985 62.8906L114.489 42.9991L137.496 42.9991L149 62.8906L137.496 82.7822L114.489 82.7821L102.985 62.8906Z" fill="#D896FF" />
                        <path d="M68.4741 3.28134L81.3473 3.28134L101.89 3.28135L114.489 3.28134L102.985 23.1729L79.9778 23.1729L68.4741 3.28134Z" fill="#D896FF" />
                        <path d="M2.60992e-06 3.07723L12.8732 3.07724L33.4154 3.07725L46.0147 3.07724L34.511 22.9688L11.5037 22.9688L2.60992e-06 3.07723Z" fill="#D896FF" />
                    </svg>
                </div>
                <div>
                    <h2 className="section-title text-4xl text-center p-16 z-40 sm:text-8xl">Sponsors</h2>
                </div>
                <div className="justify-items-center">
                    {data.map((tier, index) => {
                        return (
                            <div key={index} className="place-items-center">
                                <h2 className="tier-title text-2xl text-center p-2 z-40 sm:text-4xl">{tier.title}</h2>
                                <div className="place-items-center grid grid-cols-1 sm:grid-cols-3 gap-4 p-4">
                                    {tier.sponsors.map((sponsor, index) => {
                                        return (
                                            <div key={index} className="w-fit">
                                                <img className="mx-auto" src={sponsor} alt="sponsor" />
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