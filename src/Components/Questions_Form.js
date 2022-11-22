import React ,{useState, useEffect} from 'react';

import  CropOriginalIcon  from '@material-ui/icons/CropOriginal';
import  Select  from '@material-ui/core/Select';
import  Switch  from '@material-ui/core/Switch';
import CheckBoxIcon from "@material-ui/icons/CheckBox"
import  ShortTextIcon  from '@material-ui/icons/ShortText';
import  SubjectIcon  from '@material-ui/icons/Subject';
import  MoreVertIcon  from '@material-ui/icons/MoreVert';
import {BsTrash} from "react-icons/bs"
import { IconButton } from '@material-ui/core';
import  FilterNoneIcon  from '@material-ui/icons/FilterNone';
import  AddCircleOutlineIcon  from '@material-ui/icons/AddCircleOutline';
import  OndemandVideoIcon  from '@material-ui/icons/OndemandVideo';
import TextFieldsIcon from '@material-ui/icons/TextFields';
import {BsFileText} from "react-icons/bs"
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Button from '@material-ui/core/Button';
import {FcRightUp} from "react-icons/fc"
import  CloseIcon  from '@material-ui/icons/Close';
import Radio from '@material-ui/core/Radio';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Typography from '@material-ui/core/Typography';
import MenuItem from '@material-ui/core/MenuItem';


import "./Questions_Form.css"


function Questions_Form() {

    const[questions, setQuestions] = useState(
        [
            {
                questionText : "Untitled Question",
                questionType : "radio",
                options : [
                    {optionText : "Option 1"}
                ],
                open : true,
                required : false
            }
        ]

    )
        function changeQuestion(text,i)
        {
            var newQuestion = [...questions];
            newQuestion[i].questionText = text;
            setQuestions(newQuestion);
            console.log(newQuestion);
        }

        function changeOptionValue(text,i,j)
        {
            var optionsQuestion = [...questions];
            optionsQuestion[i].options[j].optionText = text;
            setQuestions(optionsQuestion);
            console.log(optionsQuestion);
        }

        function addQuestionType(i,type)
        {
            let qs = [...questions];
            console.log(type);
            qs[i].questionType = type;
            setQuestions(qs);
        }

        function removeOption(i,j)
        {
            var RemoveOptionQuestion= [...questions];
            if(RemoveOptionQuestion[i].options.length >1){
                RemoveOptionQuestion[i].options.splice(j,1);
                setQuestions(RemoveOptionQuestion);
                console.log(i+"___"+j);
            }
        }

        function addOption(i)
        {
            var optionsOfQuestion = [...questions];
            if(optionsOfQuestion[i].options.length <5){
                optionsOfQuestion[i].options.push({optionText:"Option "+(optionsOfQuestion[i].options.length +1)})
            }
            else{
                console.log("Max 5 options");
            }

            setQuestions(optionsOfQuestion);
        }

        function copyQuestion(i)
        {
        
            let qs = [...questions];
            var newQuestion = {...qs[i]};
            setQuestions([...questions, newQuestion]);
        }

        function deleteQuestion(i){
            let qs = [...questions];
            if(questions.length > 1){
                qs.splice(i,1);
            }
            setQuestions(qs);
        }

        function requiredQuestion(i)
        {
            var reqQuestion = [...questions];
            reqQuestion[i].required = ! reqQuestion[i].required;
            console.log(reqQuestion[i].required+" "+i);
            setQuestions(reqQuestion);
        }

        function addMoreQuestionField(){
            var newlyAddedQuestion = [...questions];
         
            newlyAddedQuestion.questionText = "Untitled Question";
            newlyAddedQuestion.questionType = "radio";
            newlyAddedQuestion.options=[
                {optionText : "Option 1"}
            ];
            newlyAddedQuestion.open = true;
            newlyAddedQuestion.required = false;
            
            console.log(newlyAddedQuestion);
            setQuestions([...questions, newlyAddedQuestion]);
        }

       
  
        function questionsUI()
        {  
            
            return questions.map((ques,i)=>(
                <div>
                    <Accordion expanded={questions.open} className={questions[i].open ? 'add_border' : ""}>
                      

                          
                        {/* <AccordionSummary 
                            aria-controls='panel1a-content'
                            id="panel1a-header"
                            elevation={1} style={{width:'100%'}}>

                            {
                                questions[i].open ? (
                                    <div className='saved_questions'>
                                       
                                       <Typography style={{fontSize:"15px", fontWeight:"400", letterSpacing:'.1px',lineHeight:"24px",paddingBottom:"8px" }}>
                                            {i+1}.{questions[i].questionText}
                                        </Typography>

                                        {ques.options.map((op,j) => (

                                            <div key={j}>
                                                <div style={{display:"flex",}}>
                                                    <FormControlLabel style={{marginLeft:"5px", marginBottom:"5px"}} disabled control={<input type={ques.questionType}
                                                    color="primary" style={{marginRight:"3px",}} required={ques.type}/>} label={
                                                        <Typography style={{fontSize:"13px",
                                                        fontWeight:"400",
                                                        letterSpacing:".2px",
                                                        lineHeight:"20px",
                                                        color:"#202124"}}>
                                                            {ques.options[j].optionText}
                                                        </Typography>
                                                    }/>
                                                   
                                                </div>
                                            </div>
                                        )

                                        )

                                        }
                                    </div>
                                ):""}

                        </AccordionSummary> */}
                        <div className='question_boxes'>
                            <AccordionDetails className='add_question'>
                                <div className='add_question_top'>
                                    <input type="text" className="question"  placeholder='Untitled Question' value={ques.questionText} onChange={(e)=>{changeQuestion(e.target.value,i)}}/>
                                    <CropOriginalIcon style={{color:"#5f6368"}}/>
                                    <Select className='select' style={{color:"#5f6368", fontSize:"13px"}}>
                                        <MenuItem id="text" value="Text" onClick={()=>{addQuestionType(i,"text")}}>Paragraph</MenuItem>
                                        <MenuItem id="shortText" value="Text" onClick={()=>{addQuestionType(i,"text")}}>Short Text</MenuItem>
                                        <MenuItem id="number" value="Number" onClick={()=>{addQuestionType(i,"number")}}>Number</MenuItem>
                                        <MenuItem id="checkbox" value="Checkbox" checked onClick={()=>{addQuestionType(i,"checkbox")}}>CheckBox</MenuItem>
                                        <MenuItem id="radio" value="Radio" checked onClick={()=>{addQuestionType(i,"radio")}}>Multiple Choice</MenuItem>
                                    </Select>
                                </div>

                        {
                            ques.options.map((op,j)=> (

                                <div className='add_question_body' key={j}>
                                    {
                                        (ques.questionType!="text" ) ?
                                        <input type={ques.questionType} style={{marginRight:"10px"}}/> :
                                        <ShortTextIcon style={{marginRight:"10px"}}/>
                                    }
                                    <div>
                                        <input type="text" className='text_input' placeholder='Option' value={ques.options[j].optionText} onChange={(e)=>{changeOptionValue(e.target.value,i,j)}}/>
                                    </div>
                                    <IconButton>
                                    <CropOriginalIcon style={{color:"#5f6368"}}/>
                                    </IconButton>
                                    <IconButton aria-label='delete'>
                                        <CloseIcon onClick={()=>{removeOption(i,j)}}/>
                                    </IconButton>
                                </div>
                        ))}

                    {ques.options.length < 5 ? (
                        <div className='add_question_body'>
                            <FormControlLabel disabled control={
                                (ques.questionType!="text") ?
                                <input type={ques.questionType} color="primary" inputProps={{'aria-label' : 'secondary checkbox'}}
                                    style={{marginLeft:"10px",marginRight:"10px"}} disabled  /> :
                                <ShortTextIcon style={{marginRight:"10px"}}/>
                            } label={
                                <div>
                                    <Button size="small" onClick={()=>{addOption(i)}} style={{textTransform:"none", color:"#4285f4", fontSize:"13px",fontWeight:"600"}}>Add Option</Button>
                                    <input type="text" className='text_input' style={{fontSize:"13px",width:"60px"}} placeholder="add Other"></input>
                                    
                                </div>
                            }
                            />

                        </div>

                    ): ""}
                    <div className='add_footer'>
                        <div className='add_question_bottom'>
                            <IconButton aria-label='Copy' onClick={()=>{copyQuestion(i)}}>
                                <FilterNoneIcon />
                            </IconButton>

                            <IconButton aria-label='delete' onClick={()=>{deleteQuestion(i)}}>
                                <BsTrash/>
                            </IconButton>
                                <span style={{color:"#5f6368" ,fontSize:"13px"}}>Required</span> <Switch name='checkedA' color="primary" onClick={()=>{requiredQuestion(i)}}></Switch>
                            <IconButton>
                                <MoreVertIcon/>
                            </IconButton>
                        </div>
                    </div>
                            </AccordionDetails>
                            <div className='question_edit'>
                                <IconButton><AddCircleOutlineIcon onClick={addMoreQuestionField} className='edit'/></IconButton>
                                <OndemandVideoIcon className='edit'/>
                                <CropOriginalIcon className='edit'/>
                                <TextFieldsIcon className='edit'/>
                            </div>
                            
                        </div>
                    </Accordion>
                </div>
            ))
        }

        return (
            <div>

                <div className='question_form'>
                    <br></br>
                    <div className='section'>
                        <div className='question_title_section'>
                            <div className='question_form_top'>
                                <input type="text" className='question_form_top_name' style={{color:"black"}} placeholder="Untitled Document"/>
                                <input type="text" className='question_form_top_desc' style={{color:"black"}} placeholder="Form Description"/>
                            </div>
                        </div>

                        {questionsUI()}
                    </div>
                </div>
                
            </div>
        );
    
}

export default Questions_Form;