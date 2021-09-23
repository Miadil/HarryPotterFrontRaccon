import useModal from '../use/useModal'
import Modal from '../components/Modal'

const Home = () => {
  const { isShowing: isLoginFormShowed, toggle: toggleLoginForm } = useModal()

  return (
    <div className='App'>
      <button className='modal-toggle' onClick={toggleLoginForm}>
        Login
      </button>
      {/*<button className='modal-toggle' onClick={toggleRegistrationForm}>
        Register
      </button> */}

      <Modal isShowing={isLoginFormShowed} hide={toggleLoginForm} title='Login'>
        <form>
          <div className='form-group'>
            <input type='text' placeholder='Username' />
          </div>
          <div className='form-group'>
            <input type='text' placeholder='Password' />
          </div>
          <div className='form-group'>
            <input type='submit' value='Login' />
          </div>
        </form>
      </Modal>
    </div>
  )
}

export default Home
