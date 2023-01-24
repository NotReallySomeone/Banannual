import './styles.css'
import { useNavigate } from 'react-router-dom'
/* Components */
import { Bttn } from '../../components/Button'

export default function Login() {
  const navigate = useNavigate()

  function handleClick() {
    navigate('/Dashboard')
  }

  return (
    <div className='gblg'>
      <div className='lg'>
        <a> Login to your account, to enjoy all of our features</a>
        <br />
        <input placeholder='Email address' />
        <input placeholder='Password' />
        <br />
        <Bttn title='asdsad' />
        <br />
        <a
          className='acc'
          onClick={handleClick}>
          {' '}
          - Need an account?
        </a>
        <br />
        <a> - Forgot password?</a>
      </div>
    </div>
  )
}
