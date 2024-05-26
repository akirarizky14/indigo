
import { Link } from 'react-router-dom'
import '../../css/Products/Products.css'
import qonnectiq from '../../assets/Qonnectiq.png'
import koperasi from '../../assets/koperasi.png'
export default function Products(){
    return(
        <div className="container-products">
            <Link to="https://www.koperasikms.com/" className="kms-product">
                <img src={koperasi} alt="" />
            </Link>
            <Link to="https://www.qonnectiq.com/" className="qonnectiq-product">
                <img src={qonnectiq} alt="" />
            </Link>
            <Link to="https://www.google.com" className="golden-diary-product">
                <h1>Golden Diary</h1>
            </Link>
            <Link to="https://www.crowncar.id" className="crown-car-product">
                <h1>Crown Car Rental</h1>
            </Link>
        </div>
    )
}