import { Button, Divider, TextField, useTheme } from '@mui/material'
import logo from '../../assets/Logo.png'
import '../../css/Contactus/Contactus.css'
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import EmailIcon from '@mui/icons-material/Email';

export default function Contactus(){
    const theme = useTheme();
    return(
        <div className={`container-contactus`} style={{ backgroundColor: theme.palette.background.plain , color:theme.palette.text.primary}}>
            <div className="wrapper-contactus">
                <div className="left-contactus">
                    <img src="" alt="" />
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