import { Button, Typography } from '@material-ui/core'
import React ,{useState,useEffect} from 'react'
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Radio from '@material-ui/core/Radio';
import Confetti from './Confetti';



import "./user_form.css"



function User_form(props) {

    const questions = props.questions
    const doc_desc = props.doc_desc
    const doc_name = props.doc_name

    const [date,setDate] = useState();
    const [active,setActive] = useState("false")

    //for debugging purposes
    //if(props.questions.questionTypeName==="dob")
       // console.log(questions[0].questionTypeName);

    var today = new Date();
   

    function selectcheck(Check)
    {
        console.log(Check);
    } 

    function selectinput(Input)
    {
        console.log(Input);
    }

    function select(Select)
    {
        console.log(Select);
    }

    function selectDateValue(Date_Value)
    {   
        setDate(Date_Value)
        
        var dateString = Date_Value.toString();
        
        if(today.getDate()===Number(dateString.slice(8,10)) && (today.getMonth()+1)===Number(dateString.slice(5,7)))
            setActive("true");
      
        
    }

    for(let i=0;i<questions.length;i++)
        if(questions[i].questionTypeName=="dob")
            console.log("yes")


    return ( 

      <div className="submit">
        {
        <div className="user_form">
            
            {active==="true" && <Confetti />}
            
            <div className="user_form_section">
                <div className="user_title_section">
                    <Typography style={{fontSize:"26px"}} >{doc_name}</Typography>
                    <Typography style={{fontSize:"15px"}} >{doc_desc}</Typography>

                </div>
              
                {
                questions.map((question,qindex)=>(
                    <div className="user_form_questions">
                    <Typography  style={{fontSize:"15px",fontWeight:"400",letterSpacing: '.1px',lineHeight:'24px',paddingBottom:"8px",fontSize:"14px"}} >{qindex+1}.  {question.questionText}</Typography>
                    {
                            question.options.map((ques,index)=>(
                              
                              <div key={index} style={{marginBottom:"5px"}}>
                                  <div style={{display: 'flex'}}>
                                  <div className="form-check">
                                    
                                      {
                                     
                                       question.questionType != "date" ? (
                                        question.questionType != "radio" ? (  
                                          question.questionType != 'text' ? (
                                        <label>
                                        <input
                                        
                                        type={question.questionType}
                                        name={qindex}
                                        value= {ques.optionText}
                                        className="form-check-input"
                                        required={question.required}
                                        style={{margnLeft:"5px",marginRight:"5px"}}
                                        onChange={(e)=>{selectcheck(e.target.checked)}}
                                        /> {ques.optionText}
                                        </label>): (

                                        <label>
                                        <input

                                        type={question.questionType}
                                        name={qindex}
                                        value= {ques.optionText}
                                        className="form-check-input"
                                        required={question.required}
                                        style={{margnLeft:"5px",marginRight:"5px"}}
                                        onChange={(e)=>{selectinput(e.target.value)}}
                                        /> {ques.optionText}
                                        </label>
                                        )
                                        
                                        )
                                        
                                        :(  <label>
                                          <input
                                            
                                            type={question.questionType}
                                            name={qindex}
                                            value= {ques.optionText}
                                            className="form-check-input"
                                            required={question.required}
                                            style={{margnLeft:"5px",marginRight:"5px"}}
                                            onChange={(e)=>{select(e.target.value)}}
                                          />
                                      {ques.optionText}
                                        </label>)
                                       ) :(<label>
                                        <input
                                          
                                          type={question.questionType}
                                          name={qindex}
                                          
                                          className="form-check-input"
                                          required={question.required}
                                          style={{margnLeft:"5px",marginRight:"5px"}}
                                          onChange={(e)=>{selectDateValue(e.target.value)}}
                                          value={date}
                                        />
                                    {ques.optionText}
                                      </label>
                                        
                                       )

                                      }
                                  
                                  </div>
                                  </div>
                                </div>
                            ))
                    }
                    </div>
                ))
                
                }         
                 
            <div className="user_form_submit">
            <Button  variant="contained" color="primary"  style={{fontSize:"14px"}}>Submit</Button>

            </div>
       
            <div className="user_footer">
                Google Forms
            </div>
            </div>
            
        </div>  
        }
        </div>
    )
}

export default User_form

