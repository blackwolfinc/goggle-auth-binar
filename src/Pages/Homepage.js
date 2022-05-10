import React from 'react'
import { getAuth, signInWithPopup ,GoogleAuthProvider } from 'firebase/auth'
import GoogleButton from 'react-google-button'
import { auth } from '../firebase'


export const Homepage = () => {
    const authHandle = auth
    const provider = new GoogleAuthProvider();

    const handleGoggle = ()=>{
        // function dari firebase 
        // then = menghendle data yang di datpat dari fungsi yang di jalankan 
        signInWithPopup(authHandle ,provider).then((data)=>{
        // ketika data ada maka akan menjalankan create user pada api mas william 
            if (data) {
                SignUpToApi(data.user)
            }
            
        }).catch((err)=>{
            console.log(err , "ini adalah err")
        })
    }


    const SignUpToApi = (data)=>{
        var axios = require('axios');
        var data = JSON.stringify({
        "username": data.displayName,
        "email": data.email,
        "password": data.uid,
        "fullName":  data.displayName,
        "address": "Dumai",
        "phone": "082278001173",
        "gender": "Male"
        });

        var config = {
        method: 'post',
        url: `${process.env.REACT_APP_API_URL}/api/member/create-member`,
        headers: { 
            'Content-Type': 'application/json'
        },
        data : data
        };

        axios(config)
        .then(function (response) {
        console.log(response.data , "ini dari mas william");
        })
        .catch(function (error) {
        console.log(error);
        });

    }

  return (
    <div>
        <h1>Login To Goggle </h1>
        <GoogleButton onClick={handleGoggle}/>
    </div>
  )
}
