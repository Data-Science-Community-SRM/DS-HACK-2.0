const data = [
    {
        title: "Platinum tier",
        sponsors: [
            "/assets/polygon.png"
        ],
    },
    {
        title: "Gold tier",
        sponsors: [
            "/assets/devfolio.png",
            "/assets/replit.png",
            "/assets/solana.png",
        ]
    },
    {
        title: "Silver tier",
        sponsors: [
            "/assets/gradvine.png",
            "/assets/onboard.png",
        ]
    }
]

const Sponsors = () => {
    return (
        <section id="sponsors" className="section-bg justify-items-center">
            <div className="relative w-full h-full">
                <div className="absolute right-0 z-0 invisible sm:visible">
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
                <div className="items-center p-2">
                    {data.map((tier, index) => {
                        return (
                            <div key={index} className="">
                                <h2 className="tier-title text-2xl text-center p-2 z-40 sm:text-4xl">{tier.title}</h2>
                                <div className="grid grid-cols-1 mx-auto place-items-center sm:grid-flow-col auto-cols-max gap-4 p-4 w-fit">
                                    {tier.sponsors.map((sponsor, index) => {
                                        return (
                                            <div key={index} className="bg-[url('/assets/placeholder.png')] flex h-36 w-36 rounded-2xl">
                                                <img className="mx-auto object-contain p-2" src={sponsor} alt="sponsor" />
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
            <div className="invisible sm:visible">
                <svg width="285" height="239" viewBox="0 0 285 239" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M51.3823 185.474L25.2867 230.751L-26.9044 230.751L-53 185.474L-26.9044 140.197L25.2867 140.197L51.3823 185.474Z" fill="#660066" />
                    <path d="M206.713 186.719L180.618 231.996L128.427 231.996L102.331 186.719L128.427 141.442L180.618 141.442L206.713 186.719Z" fill="#660066" />
                    <path d="M129.669 52.2812L103.573 97.5581L51.3822 97.5581L25.2866 52.2812L51.3822 7.00436L103.573 7.00436L129.669 52.2812Z" fill="#660066" />
                    <path d="M129.669 140.662L103.573 185.939L51.3822 185.939L25.2866 140.662L51.3822 95.3847L103.573 95.3847L129.669 140.662Z" fill="#AB1DCC" />
                    <path d="M285 140.662L258.904 185.939L206.713 185.939L180.618 140.662L206.713 95.3847L258.904 95.3847L285 140.662Z" fill="#AB1DCC" />
                    <path d="M206.713 95.8491L180.618 141.126L128.427 141.126L102.331 95.8491L128.427 50.5722L180.618 50.5722L206.713 95.8491Z" fill="#D896FF" />
                    <path d="M51.3823 95.8491L25.2867 141.126L-26.9044 141.126L-53 95.8491L-26.9044 50.5722L25.2867 50.5722L51.3823 95.8491Z" fill="#D896FF" />
                    <path d="M129.669 231.531L100.467 231.531L53.8675 231.531L25.2866 231.531L51.3822 186.254L103.573 186.254L129.669 231.531Z" fill="#D896FF" />
                    <path d="M285 231.996L255.798 231.996L209.199 231.996L180.618 231.996L206.713 186.719L258.904 186.719L285 231.996Z" fill="#D896FF" />
                </svg>

            </div>
        </section>
    );
}

export default Sponsors;