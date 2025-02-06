import { useEffect, useRef, useState } from "react";
import BubbleCursor from "../Components/BubbleCursor";
import image1 from "../Assests/Images/front.png";
import bgAudio from "../Assests/Audio/bgSound.mp3";
import noAudio from "../Assests/Audio/noSound.mp3";
import ButtonContainer from "../Components/ButtonContainer";

function FrontPage() {
    const audioRef = useRef(null);
    const noAudioRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const backendURL = "https://feb14backend.onrender.com";

    useEffect(() => {
        playAudio();
    }, []);  // The empty dependency array ensures this runs once when the component mounts


    const playAudio = () => {
        if (audioRef.current) {
            audioRef.current.play().then(() => {
                setIsPlaying(true);
            }).catch(error => {
                console.error("Autoplay blocked:", error);
            });
        }
    };

    const playNoAudio = () => {
        if (noAudioRef.current) {
            // audioRef.current.pause()
            noAudioRef.current.play();
            // setTimeout(() => audioRef.current.play(), 1201);
        }
    }
    function noButtonClickFunction(){
        playNoAudio();
    }

    function yesButtonClickFunction(clicks){
        fetch(`${backendURL}/logout`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                clicks: clicks
            }),
        }).then(()=>{
            window.location = "/end"
        })
    }

    return (
        <div className="w-screen min-h-screen bg-red-100 flex justify-center items-center flex-col">
            <BubbleCursor />
            <div className="relative flex justify-center items-center flex-wrap p-3">
                <img src={image1} alt="" className="w-[300px] lg:w-[25vw]"/>
            </div>

            <audio ref={audioRef} src={bgAudio} type="audio/mp3" id="bgAudio" />

            <audio ref={noAudioRef} src={noAudio} type="audio/mp3" id="bgAudio" />

            <ButtonContainer props={{noButtonClickFunction : noButtonClickFunction, yesButtonClickFunction : yesButtonClickFunction}}/>
        </div>
    );
}

export default FrontPage;
