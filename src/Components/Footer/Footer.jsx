import { useTheme } from '@mui/material'
import '../../css/Footer/Footer.css'

export default function Footer(){
    const theme = useTheme();
    return(
        <div className={`container-footer`} style={{ backgroundColor: theme.palette.background.plain , color:theme.palette.text.primary}}>
            <h1>Powered By Indigo Sarana Abadi </h1>
        </div>
    )
}