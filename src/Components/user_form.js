import { Button, Typography } from '@material-ui/core'
import React ,{useState,useEffect} from 'react'
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Radio from '@material-ui/core/Radio';



import "./user_form.css"



function User_form(props) {

    const questions = props.questions
    const doc_desc = props.doc_desc
    const doc_name = props.doc_name

    //doc name, doc desc from questions form
    //questions from Question form


  

  








    return (  
      <div className="submit">
        <div className="user_form">
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
                                           
                                          />
                                      {ques.optionText}
                                        </label>)

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
        </div>
    )
}

export default User_form

