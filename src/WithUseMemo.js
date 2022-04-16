import React, { useState, useMemo } from "react";

const WithUseMemo = () =>{
    const [increment, setIncrement] = useState(0);
    const [initialVal, setInitialVal] = useState(2);
    console.log("Function called again");

    const complexCalculation = (initalVal) =>{
        let mul = parseInt(initalVal);
        console.log(`initial sum value  ${null}`);
        for(let i=1; i<4; i++){
            mul = mul * i;
            console.log("ran");
        }
        console.log('mul calcualted again = ', mul);
        return mul;
    }

    const increase = () =>{
        setIncrement(increment + 1);
    };
    const OptimizedCalculation = useMemo(()=>{
        return complexCalculation(initialVal);
    },[initialVal]);

    return (
        <React.Fragment>
           <button onClick={increase}>Increment</button>
            <div>{increment}</div>
            <button onClick={() => setInitialVal(initialVal + 1)}>
            Increase Initial Value
            </button>
            <div>Initial value = {initialVal}</div>
            <p>value = {OptimizedCalculation}</p>
        </React.Fragment>
    );
}
export default WithUseMemo;