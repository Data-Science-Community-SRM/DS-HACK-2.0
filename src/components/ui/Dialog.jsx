import PropTypes from 'prop-types';

const Dialog = ({title, description}) => {
    return (
        <dialog id={title} className="modal">
        <div className="modal-box bg-secondary text-white">
            <h3 className="font-bold text-lg">{title}</h3>
            <p className="py-4">{description}</p>
        </div>
        <form method="dialog" className="modal-backdrop">
            <button>close</button>
        </form>
        </dialog>
    );
}

Dialog.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
};
    
export default Dialog;