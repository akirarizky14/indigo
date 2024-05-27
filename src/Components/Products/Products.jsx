
import { Link } from 'react-router-dom'
import '../../css/Products/Products.css'
import qonnectiq from '../../assets/Qonnectiq.png'
import koperasi from '../../assets/koperasi.png'
import golden from '../../assets/golden.png'
import { Button } from '@mui/material'
export default function Products(){
    return(
        <div className="container-products">
            <Link to="https://www.koperasikms.com/" className="kms-product">
                <h1>Koperasi</h1>
                <h1>Kita Makmur Sejati</h1>
                <Button>Selengkapnya</Button>
            </Link>
            <Link to="https://www.qonnectiq.com/" className="qonnectiq-product">
                <h1>Qonnectiq</h1>
            </Link>
            <Link to="https://www.google.com" className="golden-diary-product">
                <h1>Golden Dairy</h1>
            </Link>
            <Link to="https://www.crowncar.id" className="crown-car-product">
                <h1>Crown Car Rental</h1>
            </Link>
        </div>
    )
}