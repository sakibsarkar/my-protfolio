import "./Cursor.css";
import { useEffect, useState } from "react";

const Cursor = () => {

    const [cursorX, setCursorX] = useState(0)
    const [cursorY, setCursorY] = useState(0)
    const [isMouseOnscreen, setIsMouseOnscreen] = useState(false)
    useEffect(() => {

        window.addEventListener('mousemove', function (e) {
            setCursorX(e.clientX)
            setCursorY(e.clientY)
            setIsMouseOnscreen(true)


            // cursor.setAttribute("style", `transform :translate(${e.clientX}px, ${e.clientY}px);display:inline`)

        })

        window.addEventListener("mouseout", () => {
            setIsMouseOnscreen(false)
        })
    }, [])







    return (
        <>
            {
                isMouseOnscreen && <div className="cursor" style={{ transform: `translate(${cursorX - 250}px,${cursorY}px)`, }}></div >
            }
        </>
    );
};

export default Cursor;