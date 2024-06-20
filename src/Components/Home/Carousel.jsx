import { useState, useRef } from 'react';
import '../../css/Home/Carousel.css';
import video from '../../assets/Video.mp4';
import VolumeDownIcon from '@mui/icons-material/VolumeDown';
import VolumeOffIcon from '@mui/icons-material/VolumeOff';
export default function Carousel() {
    const videoRef = useRef(null);
    const [isMuted, setIsMuted] = useState(true);

    const handleToggleMute = () => {
        if (videoRef.current) {
            videoRef.current.muted = !isMuted;
            setIsMuted(!isMuted);
            if (!isMuted) {
                videoRef.current.play();
            }
        }
    };

    return (
        <div className="container-carousel">
            <video ref={videoRef} src={video} autoPlay muted={isMuted} loop></video>
            <button className="mute-button" onClick={handleToggleMute}>
                {isMuted ? <VolumeDownIcon/> : <VolumeOffIcon/> }
            </button>
            {/* <img src={photo} alt="" /> */}
        </div>
    );
}
