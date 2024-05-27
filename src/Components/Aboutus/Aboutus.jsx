import { useTheme } from '@mui/material/styles';
import '../../css/Aboutus/Aboutus.css'
import '../../css/Loading/Loading.css'

export default function Aboutus(){
    const theme = useTheme();

    return(
        <div className={`container-aboutus`} style={{ backgroundColor: theme.palette.background.plain , color:theme.palette.text.primary }}>
            <div className="content-aboutus">
                <div className="title-aboutus">
                    <h2>PT. Indigo Sarana Abadi</h2>
                </div>
                <div className="p-aboutus">
                    <p>
                        PT Indigo Sarana Abadi is a distinguished company that prides itself on a diverse portfolio of business ventures. 
                        With a strong commitment to innovation and excellence, PT Indigo Sarana Abadi has established itself as a leader in various industries. 
                        The company’s vision is to drive progress and deliver exceptional value through its wide range of services. 
                        From providing financial solutions to offering innovative rental services, PT Indigo Sarana Abadi consistently strives to meet the evolving needs of its customers and stakeholders.
                    </p>
                    <p>
                        At the core of PT Indigo Sarana Abadi’s success is its focus on four key businesses: Koperasi, Qonnectiq, Crown Rental, and Golden Diary (produksusu). 
                        Koperasi offers cooperative financial services aimed at empowering communities with accessible financial solutions. 
                        Qonnectiq is a cutting-edge technology platform designed to enhance connectivity and streamline business processes. 
                        Crown Rental provides top-notch rental services for a variety of needs, ensuring quality and reliability. 
                        Golden Diary, the dairy production unit, focuses on delivering high-quality dairy products under the brand name produksusu, catering to the nutritional needs of the market.
                    </p>
                    <p>
                        Each of these ventures plays a crucial role in PT Indigo Sarana Abadi’s overarching mission to foster growth and deliver superior products and services. 
                        By maintaining a diverse yet focused approach, the company not only meets the demands of its varied clientele but also contributes significantly to the economic development of the regions it operates in. 
                        PT Indigo Sarana Abadi’s commitment to quality, innovation, and customer satisfaction continues to drive its success and reputation in the industry.
                    </p>
                </div>
            </div>
        </div>
    )
}