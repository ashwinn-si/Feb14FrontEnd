import BubbleCursor from "../Components/BubbleCursor";
import img from "../Assests/Images/first.png"
import {motion} from "framer-motion";

function FirstPage(){
    const backendURL = "https://feb14backend.onrender.com";
    function handleClick(){
        fetch(`${backendURL}/login`,{
            method: "POST",
            headers:{
                'Content-Type': 'application/json'
            }
        }).then(res => {
            window.location = "./main";
        })

    }
    return(
        <div className="w-screen min-h-screen bg-red-100 flex justify-center items-center flex-col">
            <BubbleCursor />
            <div className="flex justify-center items-center flex-col relative">
                <img src={img} alt="" className="w-[300px] lg:w-[30vw] "/>
                <motion.button
                    className="bg-violet-400 text-white m-2 border-solid border-violet-500 border-2 rounded-xl px-[20px] py-[10px] absolute bottom-5 lg:bottom-10"
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
                    View !!
                </motion.button>
            </div>

        </div>
    )
}
export default FirstPage;
