import Timestamp from "./ui/Timestamp";

const Schedule = () => {

    const schedule = [
        {
            time: "1st January 2024",
            title: "Round 1 - Registrations Open",
            description: ""
        },
        {
            time: "20th January 2024",
            title: "PPT Submission Deadline",
            description: ""
        },
        {
            time: "25th January 2024",
            title: "Shortlisted Teams Announcement",
            description: ""
        },
        {
            time: "1st February 2024",
            title: "Round 2 - 24Hr Offline Hackathon",
            description: "at SRM Institute of Science and Technology, Kattankulathur Campus"
        },
        {
            time: "2nd February 2024",
            title: "Winners Announcement",
            description: ""
        }
    ]


    return (
        <section id="schedule" className="bg-primary text-secondary p-4">
            <h1 className="text-5xl md:text-7xl font-extrabold text-center mb-12 heading">Schedule</h1>
            <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
                {schedule.map((item, index) => <Timestamp key={index} id={index+1} time={item.time} title={item.title} description={item.description} /> )}
            </ul>
        </section>
    )
}

export default Schedule;