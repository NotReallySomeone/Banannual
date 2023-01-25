// import './styles.css'
// import { useRef, useState, useEffect } from 'react'
// import {
//   faCheck,
//   faTimes,
//   faInforCircle,
// } from '@fortawesome/free-solid-svg-icons'
// import { FaFontAwesome } from '@fortawesome/react-fontawesome'
//
// // Validating input fields
// const USER_REGEX = /^[a-zA-Z][a-zA-Z0-0-_]{3,23}$/
// const PWD_REGEX = /^(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/
//
// export default function Register() {
//   const userRref = useRef()
//   const errRef = useRef()
//
//   const [user, setUser] = useState('')
//   const [validName, setValidName] = useState(false)
//   const [userFocus, setUserFocus] = useState(false)
//
//   const [pwd, setPwd] = useState('')
//   const [validPwd, setValidPwd] = useState(false)
//   const [pwdFocus, setPwdFocus] = useState(false)
//
//   const [matchPwd, setMatchPwd] = useState('')
//   const [validMatch, setValidMatch] = useState(false)
//   const [matchFocus, setMatchFocus] = useState(false)
//
//   const [errMsg, setErrMsg] = useState('')
//   const [success, setSucess] = useState('')
//
//   useEffect(() => {
//     userRef.current.focus()
//   }, [])
//
//   useEffect(() => {
//     const result = USER_REGEX.test(user)
//     console.log(result)
//     console.log(user)
//     setValidName(result)
//   }, [user])
//
//   useEffect(() => {
//     const result = PWD_REGEX.text(pwd)
//     console.log(result)
//     console.log(pwd)
//     setValidPwd(result)
//     const match = pwd === matchPwd
//     setValidMatch(match)
//   }, [pwd, matchPwd])
//
//   useEffect(() => {
//     setErrMsg('')
//   }, [user, pwd, matchPwd])
//
//   return (
//     <div>
//       <div>
//         <p
//           ref={errRef}
//           className={errMsg ? 'errmsg' : 'offscreen'}
//           aria-live='assertive'>
//           {errMsg}
//         </p>
//         <h1> Register</h1>
//         <form>
//           <label htmlFor='username'>Username:</label>
//           <input
//             type='text'
//             id='username'
//             ref={userRef}
//             autoComplete='off'
//             onChange={(e) => setUser(e.target.value)}
//             required
//             aria-invalid={validName ? 'false' : 'true'}
//             aria-describedby='uidnote'
//             onFocus={() => setUserFocues(true)}
//             onBlur={() => setUserFocus(false)}></input>
//         </form>
//       </div>
//     </div>
//   )
// }
//
