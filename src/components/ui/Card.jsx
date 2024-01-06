import PropTypes from 'prop-types';
import Dialog from './Dialog';

const Card = ({ title, description, details }) => {
  return (
    <div className="card-container w-64 h-64 p-4 bg-secondary shadow-xl clip-2 flex justify-center items-center">
      <div className="card">
        <div className="card-content flex flex-col justify-center items-center">
          <h2 className="card-title text-white mb-2">{title}</h2>
          <figure>
            <img src={`/tracks/${title}.png`} width={100} alt={title} />
          </figure>
        </div>
        <div className="card-content card-back flex flex-col justify-center items-center">
          <div className="card-body p-2 text-white">
            <p className="text-left max-w-md">{description}</p>
          </div>
          <Dialog key={title} title={title} description={details} />
        </div>
      </div>
    </div>
  );
};

Card.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  details: PropTypes.string.isRequired,
};

export default Card;
