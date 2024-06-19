import { useState, useEffect } from "react";
function Effect(){
    let[count , setCount] = useState(0);
    let [count1, setCount1] = useState(0);

    useEffect(function(){
        console.log("count changed");
    },[count]);

    useEffect(function(){
        console.log("count1 changed");
    },[count1]);

    return(
        <div>
            <button onClick={() => {setCount(count+1)}}>ADD</button>
            <p>{count}</p>
            <button onClick={() => {setCount1(count1+1)}}>ADD</button>
            <p>{count1}</p>
        </div>
    )
}

export default Effect;