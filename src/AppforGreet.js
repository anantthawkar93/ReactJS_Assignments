import { useState } from "react";
import Greet from "./Greet";
import { SimpleComponent, SimpleComponentOne } from "./Greet";

function AppforGreet() {
    let [message, setMessage] = useState("message default value");
    let [date, setDate] = useState(new Date());
    
    return (
      <div className="App">
          <input 
            type="text" 
            value={message} 
            onInput = {(event)=> setMessage(event.target.value)}/>
          <input 
            type="date" 
            value={date} 
            onInput = {(event)=> setDate(event.target.value)}/>
        <Greet message = {message} timeValue={date} no = "xyz" />
        <SimpleComponent/>
        <SimpleComponentOne/>
      </div>
    );
  }
  
  export default AppforGreet;
  