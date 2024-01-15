import PropTypes from 'prop-types';
import Dialog from './Dialog';

const Card = ({ title, description }) => {
  return (
    <div className="card bg-secondary p-4 w-64 h-64 grid place-items-center text-center hover:scale-110" onClick={()=>document.getElementById(title).showModal()}>
      <div className="card-content">
        <h2 className="card-title text-white mb-4 heading">{title}</h2>
        <figure>
          <img src={`/tracks/${title}.png`} width={100} alt={title} />
        </figure>
      </div>
      <Dialog key={title} title={title} description={description} />
    </div>
  );
};

Card.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default Card;
