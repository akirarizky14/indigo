import React, { useState, useEffect } from 'react';
import { Button, TextField, useTheme, useMediaQuery } from '@mui/material';
import '../../css/Contactus/Contactus.css';
import ContactUs from '../../assets/contact-us.png';
import ContactUsMobile from '../../assets/contact-us-mobile.png';

export default function Contactus() {
    const theme = useTheme();
    const isMobile = useMediaQuery('(max-width:728px)');
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

    const fontSize = isMobile ? 10 : 14;
    const labelFontSize = isMobile ? 8 : 12;

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
                            <TextField 
                                className='TextField' 
                                style={{ width: '50%' }} 
                                label="Name" 
                                InputProps={{ sx: { fontSize: fontSize } }}
                                InputLabelProps={{ sx: { fontSize: labelFontSize } }}
                            />
                            <TextField 
                                className='TextField' 
                                style={{ width: '50%' }} 
                                label="Email" 
                                InputProps={{ sx: { fontSize: fontSize } }}
                                InputLabelProps={{ sx: { fontSize: labelFontSize } }}
                            />
                        </div>
                        <TextField 
                            className='TextField' 
                            multiline rows={4} 
                            label="Pesan/Komentar" 
                            style={{ width: '100%' }} 
                            InputProps={{ sx: { fontSize: fontSize } }}
                            InputLabelProps={{ sx: { fontSize: labelFontSize } }}
                        />
                        <Button 
                            InputProps={{ sx: { fontSize: fontSize } }}
                            InputLabelProps={{ sx: { fontSize: labelFontSize } }}
                            className='TextField' 
                            type="submit" 
                            style={{ width: '10%' }} 
                            variant='outlined'
                        >
                            Kirim
                        </Button>
                    </form>
                </div>
            </div>
        </div>
    );
}
