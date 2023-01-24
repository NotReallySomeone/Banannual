import { useNavigate } from 'react-router-dom'
import styles from './styles.css'

export function Bttn() {
  const navigate = useNavigate()

  function handleClick() {
    navigate('/Dashboard')
  }

  return (
    <>
      <button
        className='Btun'
        onClick={handleClick}>
        Login
      </button>
    </>
  )
}
