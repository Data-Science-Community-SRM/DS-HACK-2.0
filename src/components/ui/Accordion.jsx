import PropTypes from "prop-types"

const Accordion = ({question, answer}) => {
    return (
        <div className="max-w-md md:ml-8 collapse collapse-arrow bg-secondary text-white">
            <input type="radio" name="my-accordion-2" />  
            <div className="collapse-title text-xl font-bold">{question}</div>
            <div className="collapse-content overflow-y-scroll"> 
                <p className="">{answer}</p>
            </div>
        </div>
    )
}

Accordion.propTypes = {
    question: PropTypes.string.isRequired,
    answer: PropTypes.string.isRequired
}

export default Accordion;