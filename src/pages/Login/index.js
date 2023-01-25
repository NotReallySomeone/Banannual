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
          <input placeholder='Email address' />
          <input placeholder='Password' />
          <Bttn btntxt={'Login'} />
          <div>
            <Bttn
              onClick={handleClick}
              btntxt={'Register'}
            />
          </div>
          <div className='recovering'>
            <a className='recover'> - Forgot password?</a>
            <a className='recover'> - Forgot e-mail?</a>
            <a className='recover'> - Forgot where you parked your car?</a>
          </div>
        </div>
      </div>
    </div> //Wraps navbar
  )
}
// Card crashed on parked text
