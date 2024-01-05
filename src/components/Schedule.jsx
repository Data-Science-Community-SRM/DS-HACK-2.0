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
            time: "2:00 PM",
            title: "Break 1",
            description: "Lunch"
        },
        {
            time: "4:00 PM",
            title: "Mentor review 1",
            description: ""
        },
        {
            time: "8:00 PM",
            title: "Break 2 ",
            description: "Dinner"
        },
        {
            time: "12:00 AM",
            title: "Mentor review 2",
            description: ""
        },
        {
            time: "6:00 AM",
            title: "Mentor review 3",
            description: ""
        },
        {
            time: "8:00 AM",
            title: "Shortlisted teams announcement",
            description: ""
        },
        {
            time: "9:00 AM",
            title: "Break 3",
            description: "breakfast"
        },
        {
            time: "10:00 AM",
            title: "Final Submissions",
            description: ""
        },
        {
            time: "10:15 AM",
            title: "Judges Assessment",
            description: ""
        },
        {
            time: "11:00 AM",
            title: "Hackathon ends",
            description: ""
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