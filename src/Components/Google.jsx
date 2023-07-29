import {GoogleLogin} from "react-google-login";
const clientId = "1014276340059-orscm84ijkimm5vp5qkemp1kmjl4cvpe.apps.googleusercontent.com";
import axios from "axios";
import { useNavigate } from "react-router-dom";
function Login(){
    const navigate = useNavigate();
    const onSuccess = async (response) => {
        console.log('response will be sved in ls')
        console.log(response);
        const res = await axios.post("http://localhost:8081/auth/google", response);
        localStorage.setItem("token", res.data.jwt);
        // setTimeout(()=>{
        //     navigate("/cart")
        // }, 200)
    };

    const onFailure = (response) => {
        console.log("failure response is: ", response);
    }

    return (
        <div>
            <GoogleLogin
                clientId={clientId}
                buttonText="Continue with Google"
                onSuccess={onSuccess}
                onFailure={onFailure}
                cookiePolicy={'single_host_origin'}
                isSignedIn={true}
                />
        </div>
    )
}
export default Login