import './styles.css'
import { useNavigate } from 'react-router-dom'
/* Components */
import {Bttn} from '../../components/Button'
 
export default function Login(){

  
   
return(      
         <div className="lg">
             <a> Login to your account</a>

             <a> To enjoy all of our features</a>       

             <a> We would never share your data with anyone (¬‿¬) </a>

             <input placeholder="Email address" />

             <input placeholder="Password" /> 
                 
             <a> - Need an account? </a>

             <a> - Forgot password?</a>
  
             <Bttn   />
         </div>
         
    )
}

