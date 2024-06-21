import { useState, useRef, useEffect } from 'react';
import '../../css/Home/Carousel.css';
import video from '../../assets/Video.mp4';
import video_tab from '../../assets/Video_tab.mp4';
import video_phone from '../../assets/Video_phone.mp4';
import VolumeDownIcon from '@mui/icons-material/VolumeDown';
import VolumeOffIcon from '@mui/icons-material/VolumeOff';

export default function Carousel() {
    const videoRef = useRef(null);
    const [isMuted, setIsMuted] = useState(false);
    const [currentVideo, setCurrentVideo] = useState(video);

    const handleToggleMute = () => {
        if (videoRef.current) {
            if (isMuted) {
                videoRef.current.muted = false;
                videoRef.current.play();
            } else {
                videoRef.current.muted = true;
            }
            setIsMuted(!isMuted);
        }
    };

    const updateVideoSource = () => {
        const width = window.innerWidth;
        if (width < 728) {
            setCurrentVideo(video_phone);
        } else if (width < 1024) {
            setCurrentVideo(video_tab);
        } else {
            setCurrentVideo(video);
        }
    };

    useEffect(() => {
        updateVideoSource();
        window.addEventListener('resize', updateVideoSource);
        return () => window.removeEventListener('resize', updateVideoSource);
    }, []);

    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.load();
            videoRef.current.play().catch(error => {
                console.log('Autoplay was prevented:', error);
            });
        }
    }, [currentVideo]);

    return (
        <div className="container-carousel">
            <video ref={videoRef} src={currentVideo} autoPlay muted={isMuted} loop playsInline></video>
            <button className="mute-button" onClick={handleToggleMute}>
                {isMuted ? <VolumeOffIcon/> : <VolumeDownIcon/> }
            </button>
        </div>
    );
}
