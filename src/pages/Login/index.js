import './styles.css'
// Components
import { Btn } from '../../components/Elements/Button'
import Inpt from '../../components/Elements/Input'

export default function Login(){
    return(      

         <div className="lg">
             <a> Login to your account</a>

             <a> To enjoy all of our features</a>

             <a> - Register </a>

             <a> - Forgot password?</a>

             <a> Email address</a>

             <a> Password </a>

             <Btn /> 

             <Inpt />

             <Inpt />

         </div>
         
    )
}