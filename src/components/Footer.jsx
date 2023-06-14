import React from 'react';
import { BsInstagram } from 'react-icons/bs';
import { BsLinkedin } from 'react-icons/bs';
import './footer.css'
const Footer = () => {
    return (
        <div className='footer'>
            <div className='social'>
                <a href="https://www.instagram.com/pavel.mrzv/">
                    <BsInstagram />
                </a>
                <a href="#">
                    <BsLinkedin className='linkedin' />
                </a>
            </div>
            <div className='copyright'>
                <p>Copyright &copy; 2023, Pavel Morozov</p>
            </div>
        </div>
    );
}

export default Footer;
