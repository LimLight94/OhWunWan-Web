import GoogleLogin from "react-google-login";
import { gapi } from "gapi-script";
import {useEffect} from "react";

const LoginGoogle = () => {
    const clientId = "747207187970-jjaise6kfhed5f51esqtj6mpgq5di4qe.apps.googleusercontent.com";
    useEffect(() => {
        function start() {
            gapi.client.init({
                clientId: clientId,
                scope: 'email',
            });
        }

        gapi.load('client:auth2', start);
    }, []);

    const onSuccess = async (response) => {
        console.log("response",response);

        const result = response.profileObj
        const token = response.tokenId
        let body = {
            data: {
                profile: result,
                tokenId: token
            }
        }

        // axios.post(BASE_URL+'/api/login/google', body)
        //     .then(response => {
        //         response.header
        //         // 본인 서비스 로직
        //     }).catch(err => alert(err))
    }

    const onFailure = (error) => {
        console.log(error);
    }

    return (
        <div>
            <GoogleLogin
                clientId={clientId}
                onSuccess={onSuccess}
                onFailure={onFailure}
                cookiePolicy="single_host_origin"
            />
        </div>
    )
}

export default LoginGoogle;