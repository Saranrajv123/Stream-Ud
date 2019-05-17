import React, { useState, useEffect } from 'react';
import {connect} from 'react-redux';
import { signIn, signOut } from '../store/actions'

const GoogleAuth = (props) => {

    // const [isSignedIn, setIsSignedIn] = useState(null);

    useEffect(() => {
        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({
                clientId: '47231804431-76mask71lncr9npuhgbkm8rimdtr658o.apps.googleusercontent.com',
                scope: 'email'
            }).then(() => {
                const auth = window.gapi.auth2.getAuthInstance();
                // setIsSignedIn(auth.isSignedIn.get())
                onAuthChange(auth.isSignedIn.get())
                auth.isSignedIn.listen(onAuthChange)

            });
        });
    }, [])

    const onAuthChange = (isSignedIn) => { 
        const auth = window.gapi.auth2.getAuthInstance();
        // setIsSignedIn(auth.isSignedIn.get())
        if (isSignedIn) {
            props.signIn(auth.currentUser.get().getId());
        } else {
            props.signOut();
        }
    }

    const onSignIn = () => {
        const auth = window.gapi.auth2.getAuthInstance();
        auth.signIn()
    }

    const onSignOut = () => {
        const auth = window.gapi.auth2.getAuthInstance();
        auth.signOut();
    }
    const renderAuthButton = () => {
        if (props.isSignedIn === null) {
            // return <div>I dont know</div>;
            return;
        } else if (props.isSignedIn) {
            return (
                <button onClick={onSignOut}  className='btn btn-sm btn-danger'>
                    <i className="fab fa-google p-2"></i>
                    Signout
                </button>
            )
        } else {
            return (
                <button onClick={onSignIn} className='btn btn-success btn-sm'>
                    <i className='fab fa-google p-2'></i>
                    Sign in with Google
                </button>
            )
        }
    }

  return (
    <div className='pt-2 container'>
        {renderAuthButton()}
    </div>
  )
}

const mapStateToProps = (state) => {
    return {
        isSignedIn: state.auth.isSignedIn
    };
}

export default connect(mapStateToProps, {signIn, signOut}) (GoogleAuth);
