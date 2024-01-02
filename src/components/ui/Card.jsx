import PropTypes from 'prop-types';
import Dialog from './Dialog';

const Card = ({title, description, details}) => {
    return (
        <div className="card w-64 p-4 bg-secondary shadow-xl" onClick={()=>document.getElementById(title).showModal()}>
            <figure><img src={`/tracks/${title}.png`} width={100} alt={title} /></figure>
            <div className="card-body p-2 text-white">
                <h2 className="card-title">{title}</h2>
                <p>{description}</p>
            </div>
            <Dialog key={title} title={title} description={details}/>
        </div>
    )
}

Card.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    details: PropTypes.string.isRequired,
};

export default Card;