import { Divider } from '@mui/material'
import logo from '../../assets/Logo.png'
import '../../css/Contactus/Contactus.css'
import Chip from '@mui/material/Chip';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import EmailIcon from '@mui/icons-material/Email';
export default function Contactus(){
    return(
        <div className="container-contactus">
            <div className="wrapper-contactus">
                <div className="top-contactus">
                    <img src={logo} alt="" />
                </div>
                <div className="middle-contactus">
                    <Divider><span>Thank you for your interest in Indigo Sarana Abadi</span></Divider>
                    <Divider><span>Please Contact us On</span></Divider>
                </div>
                <div className="bottom-contactus">
                    <InstagramIcon className='icon'/>
                    <LinkedInIcon className='icon'/>
                    <WhatsAppIcon className='icon'/>
                    <EmailIcon className='icon'/>
                </div>
            </div>
        </div>
    )
}