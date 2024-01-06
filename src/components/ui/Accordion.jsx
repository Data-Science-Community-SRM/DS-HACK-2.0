import PropTypes from "prop-types"

const Accordion = ({question, answer}) => {
    return (
        <div className="max-w-5xl ml-8 collapse collapse-arrow bg-secondary text-white">
            <input type="radio" name="my-accordion-2" />  
            <div className="collapse-title text-xl font-extralight">{question}</div>
            <div className="collapse-content"> 
                <p>{answer}</p>
            </div>
        </div>
    )
}

Accordion.propTypes = {
    question: PropTypes.string.isRequired,
    answer: PropTypes.string.isRequired
}

export default Accordion;