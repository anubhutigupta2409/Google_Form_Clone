import React, { useState} from "react";
import Questions_Form from "./Questions_Form";
import User_form from "./user_form";
import "./UserAuthentication.css"
import { Button } from "@material-ui/core";




const UserAuthentication = (props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [active, setActive] = useState("form");




 
  function handleSubmit()
  {
        console.log(username);
        console.log(password);

        if(username === "admin")
            setActive("admin");
        else
            setActive('user');
  }
 
 
  // if there's no user, show the login form
  return (
    <div>
        {
            active === "form"
            &&
            <div className="page">
      <form className="cover">
        <h1>Login</h1>
       
        <input
          type="text"
          value={username}
          placeholder="Enter Username"
          onChange={(e)=>{setUsername(e.target.value)}}
          
        />
        
         
          <input
            type="password"
            value={password}
            placeholder="Enter Password"
            onChange={(e)=>{setPassword(e.target.value)}}
          />
        
        <Button  variant="contained" color="primary"  onClick={handleSubmit} style={{fontSize:"14px", width:"80%"}}>Login</Button>

        
      </form>
      </div>
    }
    {
        active==="admin"
        &&
        <Questions_Form/>
    }
    {
        active ==="user"
        &&
        <User_form questions={props.questions} ques_desc={props.ques_desc} ques_name={props.ques_name}/>
    }
    </div>
  );
};

export default UserAuthentication;