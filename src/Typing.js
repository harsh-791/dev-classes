import { useEffect } from "react";
import { useState } from "react";
function Typing({
    text,
    typingSpeed =100,
    deletingSpeed = 50,
    duration = 1000
}){
    const[displayText,setDisplayText] = useState("");
    const[isDeleting, setDeleting] = useState(false);
    const[index,setIndex] = useState(0);
    useEffect(() => {
        const handleTyping = () => {
            if(!isDeleting){
                if(displayText.length < text[index].length){
                    setDisplayText((prev) => prev + text[index].charAt(displayText.length));
                }
                else{
                    setDeleting(true);
                }
            }
            else{
                if(displayText.length > 0){
                    setDisplayText((prev) => prev.slice(0,-1));
                }
                else{
                    setDeleting(false);
                    setIndex((prev) => (prev+1) % text.length) 
                }
            }

        };

        const timeout = setTimeout(handleTyping, isDeleting ? deletingSpeed : typingSpeed);
        return() => clearTimeout(timeout);
    },[displayText, isDeleting, index, text, typingSpeed, deletingSpeed, duration]);
    
    return(
        <div className="typing-effect">
            <span className="caret">{displayText}</span>
        </div>
    )
}

export default Typing;