import Timestamp from "./ui/Timestamp";
import schedule from "../data/schedule";

const Schedule = () => {

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