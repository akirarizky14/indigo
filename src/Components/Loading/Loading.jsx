import logo from '../../assets/Logo.png'
import '../../css/Loading/Loading.css'

export default function Loading(){
    return(
        <div className="container-loading">
            <img src={logo} alt="" />
        </div>
    )
}