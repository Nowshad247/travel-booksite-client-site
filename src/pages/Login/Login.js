import React, { useEffect } from 'react';
import { Button } from 'react-bootstrap';
import { FcGoogle } from "react-icons/fc";
import { useHistory, useLocation } from 'react-router';
import useFirebase from '../../hooks/useFirebase';
const Login = () => {
    const { signInUsinggoogle, error, user } = useFirebase();
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/';
    const handelGoogleSignin = () => {
        signInUsinggoogle()
            .then(result => {
                history.push(redirect_uri.pathname);
            })
    }
    useEffect(() => {
        if (user.email) {
            history.push('/');
        }
    }, user.email)
    return (
        <div className='container'>
            <div className="row justify-content-center m-5">
                <div className="col-md-8 text-center">
                    <Button variant="warning" onClick={handelGoogleSignin}><FcGoogle />  Sign in With Google</Button>
                </div>
            </div>

        </div>
    );
};

export default Login;