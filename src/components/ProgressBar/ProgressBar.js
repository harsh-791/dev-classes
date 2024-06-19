import { useState } from "react";
import "./ProgressBar.css"
function ProgressBar({percentage}){
    // const[progress,setProgress] = useState(0);
    // setInterval(({percentage}) => {
    //     while(progress < percentage){
    //         setProgress(progress+10);
    //     }
    // },1000)
    return(
        <div className="progress-bar-container">
            <div className="progress">
                <div className="progress-bar" style={{width : `${percentage}%`}}>
                    <span className="progress-bar-text">{percentage}%</span>
                </div>
            </div>
            
        </div>
    )
}

export default ProgressBar;