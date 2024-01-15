import PropTypes from 'prop-types';
import Dialog from './Dialog';

const Card2 = ({title, description}) => {
  return (
    <div className="carousel-item w-full md:w-1/2 card-bordered border-secondary card h-52 text-secondary bg-primary grid place-items-center animate-infinite-scroll" onClick={()=>document.getElementById(title).showModal()}>
        <div className="card-body">
            <h2 className="card-title heading">{title}</h2>
        </div>
        <Dialog key={title} title={title} description={description} />
    </div>
  )
}

Card2.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default Card2