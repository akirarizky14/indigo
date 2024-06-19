import { Button, TextField, useTheme } from '@mui/material'
import '../../css/Contactus/Contactus.css'
import ContactUs from '../../assets/contact-us.png'
export default function Contactus(){
    const theme = useTheme();
    return(
        <div className={`container-contactus`} style={{ backgroundColor: theme.palette.background.plain , color:theme.palette.text.primary}}>
            <div className="wrapper-contactus">
                <div className="left-contactus">
                    <img src={ContactUs} alt="Contact Us" />
                </div>
                <div className="right-contactus">
                    <h1>Let's Connect with us</h1>
                    <div className="container-text-contactus">
                        <div className="identity-text-contactus">
                            <TextField style={{width:'50%'}} label="Name"/>
                            <TextField style={{width:'50%'}} label="Email"/>
                        </div>
                        <TextField multiline rows={4} label="Pesan/Komentar"/>
                        <Button style={{width:'10%'}} variant='outlined'>Kirim</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}