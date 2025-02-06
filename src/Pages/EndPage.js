import BubbleCursor from "../Components/BubbleCursor";
import bgAudio from "../Assests/Audio/bgSound.mp3";
import {useEffect, useRef, useState} from "react";
import image1 from "../Assests/Images/End.png";
import stars from"../Assests/Images/stars.gif"
import {motion} from "framer-motion";

function EndPage(){
    const audioRef = useRef(null);
    let [positions,setPosition] = useState([]);
    useEffect(() => {
        playAudio();
        for (let i = 0; i < 10; i++) {
            const top = `${Math.random() * 200 - 100}vh`;  // Random top position between -100vh and 100vh
            const left = `${Math.random() * 200 - 100}vw` // Random left position between 0 and 100vw
            setPosition(prevState => [...prevState,{ top, left }]);
        }

    }, []);

    function handleClick(){
        window.location = "/"
    }

    const playAudio = () => {
        if (audioRef.current) {
            audioRef.current.play()
        }
    };
    return(
        <div className="w-screen min-h-screen bg-red-100 flex justify-center items-center flex-col relative " style={{overflow : "hidden"}}>
            <BubbleCursor />
            <div className=" flex justify-center items-center flex-wrap p-3 ">
                <img src={image1} alt="" className="w-[325px] lg:w-[25vw]"/>
            </div>
            <motion.button
                className="bg-violet-400 text-white m-2 border-solid border-violet-500 border-2 rounded-xl px-[20px] py-[10px] z-[999]"
                initial={{ opacity: 0, scale: 0 }}
                animate={{
                    opacity: 1,
                    x: [-20, 20, -20, 20, -20, 20, 0],
                    y: [20, -20, 20, -20, 20, -20, 0],
                    scale: 1,
                }}
                transition={{ duration: 0.3 }}
                whileHover={{ scale: 1.1, rotate: `5deg` }}
                whileTap={{ scale: 0.9, rotate: `-5deg` }}
                onClick={handleClick}
            >
                Homee !!
            </motion.button>
            {positions.map((pos, index) => (
                <img
                    key={index}
                    src={stars}
                    alt="Star"
                    className="absolute w-[50vw] lg:w-[15vw]"
                    style={{
                        top: pos.top,
                        left: pos.left
                    }}
                />
            ))}

            <audio ref={audioRef} src={bgAudio} type="audio/mp3" id="bgAudio" />
        </div>
    )
}
export default EndPage;