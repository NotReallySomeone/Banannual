import './styles.css'
import { useNavigate } from 'react-router-dom'
/* Components */
import {Bttn} from '../../components/Button'
 
export default function Login(){

return(      
    <div className="lg">
    <a> Login to your account</a>
    <br/>
    <a> To enjoy all of our features</a>       
    <br/>
    <input placeholder="Email address" />
    <input placeholder="Password" />
    <br/>
    <a className="Fakelink" title=" Your information it's safe with us, just click login to enter"> - Need an account? </a>
    <a> - Forgot password?</a>
    <br/>
    <Bttn   /> 
    </div>            
    )
}

