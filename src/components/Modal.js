import './Modal.css'

const Modal = ({ isShowing, hide, title, ...props }) => {
  return isShowing ? (
    <div className='modal-overlay'>
      <div className='modal-wrapper'>
        <div className='modal'>
          <div className='modal-header'>
            <h4>{title}</h4>
            <button type='button' className='modal-close-button' onClick={hide}>
              <span>&times;</span>
            </button>
          </div>
          <div className='modal-body'>{props.children}</div>
        </div>
      </div>
    </div>
  ) : null
}

export default Modal
