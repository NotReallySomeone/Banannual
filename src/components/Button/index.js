import { useNavigate } from 'react-router-dom'
import styles from './styles.css'

export default function Bttn(props) {
  const navigate = useNavigate()

  function handleClick() {
    navigate('/Dashboard')
  }

  return (
    <button
      className='Btun'
      onClick={handleClick}>
      {props.btntxt}
    </button>
  )
}
