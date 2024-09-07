import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import logo from '../assests/logo.png'
import './styles/Redirect.css'

function RedirectUser() {
    const { shortid } = useParams();

    useEffect(() => {
        console.log("redirect component");
        
        const fetchUrlAndRedirect = async () => {
            try {
                // Replace with your actual API endpoint
                const response = await axios.get(`http://www.localhost:8000/redirect/${shortid}`);
                const destinationUrl = response.data.redirectURL;

                console.log(shortid);
                
                console.log(response);

                window.location.href = destinationUrl;
            } catch (error) {
                console.error('Error fetching the URL:', error);
            }
        };

        fetchUrlAndRedirect();
    }, [shortid]);
  return (
    <div className='redirect-box'>
        <img src={logo} alt="logo" />
        <div>Redirecting ...</div>
    </div>
  )
}

export default RedirectUser