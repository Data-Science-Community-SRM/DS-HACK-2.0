const Sponsors = () => {
    return (
        <section id="sponsors" className="bg-scroll section-bg">
            <div>
                <h2 className="section-title text-4xl text-center p-16 ">Sponsors</h2>
            </div>
            <div>
                <h3 className="tier-title text-center">Platinum tier</h3>
                <div className="flex grid grid-col-1 justify-around">
                    <div className="  w-36 h-36">
                        <img
                            src="./assets/placeholder.png"
                            alt="placeholder"
                        ></img>
                    </div>
                </div>
            </div>
            <div className="items-center">
                <h3 className="tier-title text-center">Gold tier</h3>
                <div className="grid gap-2 grid-cols-1 place-items-center sm:grid-cols-3 grid-rows-1">
                    <div className="w-36 h-36">
                        <img
                            src="./assets/placeholder.png"
                            alt="placeholder"
                        ></img>
                    </div>
                    <div className="w-36 h-36">
                        <img
                            src="./assets/placeholder.png"
                            alt="placeholder"
                        ></img>
                    </div>
                    <div className="w-36 h-36">
                        <img
                            src="./assets/placeholder.png"
                            alt="placeholder"
                        ></img>
                    </div>
                </div>
            </div>
            <div>
                <h3 className="tier-title text-center">Silver tier</h3>
                <div className="grid gap-2 grid-cols-1 place-items-center sm:grid-cols-3 grid-rows-1">
                    <div className="w-36 h-36">
                        <img
                            src="./assets/placeholder.png"
                            alt="placeholder"
                        ></img>

                    </div>
                    <div className="w-36 h-36">
                        <img
                            src="./assets/placeholder.png"
                            alt="placeholder"
                        ></img>

                    </div>
                    <div className="w-36 h-36">
                        <img
                            src="./assets/placeholder.png"
                            alt="placeholder"
                        ></img>

                    </div>
                </div>
            </div>

        </section>
    );
}

export default Sponsors;