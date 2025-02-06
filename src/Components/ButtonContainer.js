import { motion } from "framer-motion";
import { useState, useEffect } from "react";

function ButtonContainer({props}) {
    const [paddingXYesElement, setPaddingXYesElement] = useState(20);
    const [paddingYYesElement, setPaddingYYesElement] = useState(10);
    const [paddingXNoElement, setPaddingXNoElement] = useState(20);
    const [paddingYNoElement, setPaddingYNoElement] = useState(10);
    const [scaleNo, setScaleNo] = useState(1);
    const [key, setKey] = useState(1);
    const [key1, setKey1] = useState(0);
    const [noClicks, setNoClicks] = useState(0);
    const [rotateDeg, setRotateDeg] = useState(5);
    const [fontSizeYes, setFontSizeYes] = useState("1.2rem");
    const [fontSizeNo, setFontSizeNo] = useState("1.2rem");

    function handleYes() {
        props.yesButtonClickFunction(noClicks)
    }

    useEffect(()=>{
        if(paddingXNoElement !== 20 && paddingXYesElement !== 20 && paddingYYesElement !== 10 && paddingYNoElement !== 10){
            setFontSizeYes((1.2 + (paddingXYesElement + paddingYYesElement) * 0.05) + "rem");
            setFontSizeNo((1.2 - (paddingXNoElement + paddingYNoElement) * 0.02) + "rem");
        }
    },[paddingXNoElement,paddingXYesElement,paddingYYesElement,paddingYNoElement])

    useEffect(() => {
        if (paddingYNoElement < 0 || paddingXNoElement < 0) {
            setScaleNo(prevState => prevState - 0.05);
        }
    }, [paddingXNoElement, paddingYNoElement]);

    function handleNo() {
        setPaddingXYesElement(prevState => prevState + 7);
        setPaddingYYesElement(prevState => prevState + 7);
        setPaddingXNoElement(prevState => prevState - 3);
        setPaddingYNoElement(prevState => prevState - 3);
        setKey(prevState => prevState - 10);
        setKey1(prevState => prevState + 10);
        setRotateDeg(prevState => prevState * -1);
        setNoClicks(prevState => prevState + 1);
        props.noButtonClickFunction()

    }

    return (
        <div className="flex w-screen justify-center items-center flex-wrap">
            <motion.button
                key={key}
                style={{ fontSize: fontSizeYes }}
                className="bg-green-300 text-white m-2 border-solid border-green-600 border-2 rounded-xl"
                initial={{ opacity: 0, scale: 0 }}
                animate={{
                    paddingLeft: paddingXYesElement,
                    paddingRight: paddingXYesElement,
                    paddingTop: paddingYYesElement,
                    paddingBottom: paddingYYesElement,
                    opacity: 1,
                    x: [-20, 20, -20, 20, -20, 20, 0],
                    y: [20, -20, 20, -20, 20, -20, 0],
                    scale: 1,
                }}
                transition={{ duration: 0.3 }}
                whileHover={{ scale: 1.1, rotate: `${rotateDeg}deg` }}
                whileTap={{ scale: 0.9, rotate: `${-rotateDeg}deg` }}
                onClick={handleYes}
            >
                Yes !!
            </motion.button>

            <motion.button
                key={key1}
                className="bg-red-300 text-white m-2 border-solid border-red-600 border-2 rounded-xl"
                style={{ fontSize: fontSizeNo }}
                initial={{ opacity: 0, scale: 1 }}
                animate={{
                    paddingLeft: paddingXNoElement,
                    paddingRight: paddingXNoElement,
                    paddingTop: paddingYNoElement,
                    paddingBottom: paddingYNoElement,
                    opacity: 1,
                    x: [-20, 20, -20, 20, -20, 20, 0],
                    y: [20, -20, 20, -20, 20, -20, 0],
                    scale: scaleNo,
                }}
                transition={{ duration: 0.3 }}
                whileHover={{ scale: scaleNo + 0.1, rotate: `${rotateDeg}deg` }}
                whileTap={{ scale: scaleNo + 0.1, rotate: `${-rotateDeg}deg` }}
                onClick={handleNo}
            >
                No !!
            </motion.button>
        </div>
    );
}

export default ButtonContainer;
