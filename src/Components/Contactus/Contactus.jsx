import React, { useState, useEffect } from 'react';
import { Button, TextField, useTheme } from '@mui/material';
import '../../css/Contactus/Contactus.css';
import ContactUs from '../../assets/contact-us.png';
import ContactUsMobile from '../../assets/contact-us-mobile.png';

export default function Contactus() {
    const theme = useTheme();
    const [currentImage, setCurrentImage] = useState(ContactUs);

    const updateImageSource = () => {
        const width = window.innerWidth;
        if (width < 728) {
            setCurrentImage(ContactUsMobile);
        } else {
            setCurrentImage(ContactUs);
        }
    };

    useEffect(() => {
        updateImageSource();
        window.addEventListener('resize', updateImageSource);
        return () => window.removeEventListener('resize', updateImageSource);
    }, []);

    return (
        <div className={`container-contactus`} style={{ backgroundColor: theme.palette.background.plain, color: theme.palette.text.primary }}>
            <div className="wrapper-contactus">
                <div className="left-contactus">
                    <img src={currentImage} alt="Contact Us" />
                </div>
                <div className="right-contactus">
                    <h1>Let's Connect with us</h1>
                    <form action="mailto:admin@groupisa.com" className="container-text-contactus">
                        <div className="identity-text-contactus">
                            <TextField style={{ width: '50%' }} label="Name" />
                            <TextField style={{ width: '50%' }} label="Email" />
                        </div>
                        <TextField multiline rows={4} label="Pesan/Komentar" style={{ width: '100%' }} />
                        <Button type="submit" style={{ width: '10%' }} variant='outlined'>Kirim</Button>
                    </form>
                </div>
            </div>
        </div>
    );
}
