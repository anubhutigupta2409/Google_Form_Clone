import { Button, Typography } from '@material-ui/core'
import React ,{useState,useEffect} from 'react'
import Confetti from './Confetti';



import "./user_form.css"



function User_form(props) {

    const questions = props.questions
    const doc_desc = props.doc_desc
    const doc_name = props.doc_name

    const [date,setDate] = useState();
    const [active,setActive] = useState("false")


    var today = new Date();

    console.log(doc_name);
   
    //the following functions can be instanciated when backend is added to the project, to record user responses

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


    //function for extra feauture, of showing a confetti screen, if user's birth date is same as today's date
    function selectDateValue(Date_Value)
    {   
        setDate(Date_Value)
        
        var dateString = Date_Value.toString();
        
        if(today.getDate()===Number(dateString.slice(8,10)) && (today.getMonth()+1)===Number(dateString.slice(5,7)))
            setActive("true");
      
        
    }

    //for debugging purposes
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
              
                {/* mapping of type questions along with type of input, to be displayed in userform */}
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
                                          /><img src={props.image} />
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
                                        /><img className="photo" src={props.image}/>
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
                 
            {/* The submit button will be functional once recording user responses functionality is done */}
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

