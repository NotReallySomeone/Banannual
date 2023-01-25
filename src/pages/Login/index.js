import './styles.css'
import { useNavigate } from 'react-router-dom'
/* Components */
import Bttn from '../../components/Button'
import Navbar from '../../components/Navbar/Navbar'

export default function Login() {
  const navigate = useNavigate()

  function handleClick() {
    navigate('/Dashboard')
  }

  return (
    <div>
      <Navbar />
      <div className='gblg'>
        <div className='lg'>
          <a> Login to your account, to enjoy all the features</a>
          <br />
          <input placeholder='Email address' />
          <input placeholder='Password' />
          <br />
          <Bttn btntxt={'Login'} />
          <br />
          <div>
            <Bttn
              onClick={handleClick}
              btntxt={'Register'}
            />
          </div>
          <br />
          <a> - Forgot password?</a>
        </div>
      </div>
    </div> //Wraps navbar
  )
}
