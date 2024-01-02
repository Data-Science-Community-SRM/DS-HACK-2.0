import Timestamp from "./ui/Timestamp";

const Schedule = () => {

    const schedule = [
        {
            time: "10:00 AM",
            title: "Opening Ceremony",
            description: "Opening Ceremony"
        },
        {
            time: "10:30 AM",
            title: "Keynote",
            description: "Keynote"
        },
        {
            time: "11:00 AM",
            title: "Hackathon Begins",
            description: "Hackathon Begins"
        },
        {
            time: "12:00 PM",
            title: "Workshop",
            description: "Workshop"
        },
    ]


    return (
        <section id="schedule" className="bg-primary text-secondary p-4">
            <h1 className="text-5xl md:text-7xl font-extrabold text-center mb-12">Schedule</h1>
            <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
                {schedule.map((item, index) => <Timestamp key={index} id={index+1} time={item.time} title={item.title} description={item.description} /> )}
            </ul>
        </section>
    )
}

export default Schedule;