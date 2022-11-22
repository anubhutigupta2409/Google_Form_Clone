import React, { useState} from "react";
import Questions_Form from "./Questions_Form";
import User_form from "./user_form";



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
            <div>
      <form >
        <label htmlFor="username">Username: </label>
        <input
          type="text"
          value={username}
          placeholder="enter a username"
          onChange={(e)=>{setUsername(e.target.value)}}
          
        />
        <div>
          <label htmlFor="password">password: </label>
          <input
            type="password"
            value={password}
            placeholder="enter a password"
            onChange={(e)=>{setPassword(e.target.value)}}
          />
        </div>
        <button type="submit" onClick={handleSubmit}>Login</button>
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