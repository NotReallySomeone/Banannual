import './styles.css'
import {Bttn} from '../../components/Button'


export default function Login(){
    return(      

         <div className="lg">
             <a> Login to your account</a>

             <a> To enjoy all of our features</a>       

             <input placeholder="Email address" />

             <input placeholder="Password" /> 
                 
             <a> - Sign up </a>

             <a> - Forgot password?</a>

             <Bttn  />

         </div>
         
    )
}