import { Link } from 'react-router-dom'
import '../../css/Products/Products.css'
import { Button,useTheme } from '@mui/material'
export default function Products(){
    const theme = useTheme();
    return(
        <div className="container-products">
            <Link to="https://www.koperasikms.com/" className="kms-product">
                <Button variant="contained" style={{backgroundColor: theme.palette.background.default ,color: theme.palette.text.primary}}>
                    Kita Makmur Sejati
                </Button>
            </Link>
            <Link to="https://qonnectiq.com" className="qonnectiq-product">
                <Button variant="contained" style={{backgroundColor: theme.palette.background.default ,color: theme.palette.text.primary}}>
                    Qonnectiq
                </Button>
            </Link>
            <Link to="https://www.instagram.com/goldendairy.id/" className="golden-diary-product">
                <Button variant="contained" style={{backgroundColor: theme.palette.background.default ,color: theme.palette.text.primary}}>
                    Golden Dairy
                </Button>
            </Link>
            <Link to="https://www.crowncar.id" className="crown-car-product">
                <Button variant="contained" style={{backgroundColor: theme.palette.background.default ,color: theme.palette.text.primary}}>
                    Crown Car Rental
                </Button>
            </Link>
        </div>
    )
}