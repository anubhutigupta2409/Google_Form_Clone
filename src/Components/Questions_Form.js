import React ,{useState, useEffect, useParams} from 'react';

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
import FaApple from "react-icons/fa"

import UserAuthentication from './UserAuthentication';


import "./Questions_Form.css"
import axios from 'axios';
import FormHeader from './FormHeader';
import CenterTabs from './CenterTabs';
import EditButton from './EditButton';
import User_form from './user_form';



function Questions_Form() {

   
    const[image, setImage] = useState();
    const [active, setActive] = useState("admin");
    const[questions, setQuestions] = useState(
        [
            {
                questionText : "Untitled Question",
                questionType : "radio",
                questionTypeName : "radio",
                options : [
                    {optionText : "Option 1"}
                ],
                open : true,
                required : false
            }
        ]

    )
    
    const[documentName, setDocName] = useState("Untitled Document");
    const[documentDescription, setDocDesc] = useState("Add Description");
    
    React.useEffect(()=>{
        const data = localStorage.getItem("my_questions");
        if(data){
            setQuestions(JSON.parse(data));
        }
    },[]);

    React.useEffect(()=>{
        localStorage.setItem("my_questions", JSON.stringify(questions));
    });

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

        function addQuestionType(i,type,typeName)
        {
            let qs = [...questions];
            console.log(type);
            qs[i].questionType = type;
            qs[i].questionTypeName = typeName;
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
            newlyAddedQuestion.questionTypeName = "radio";
            newlyAddedQuestion.options=[
                {optionText : "Option 1"}
            ];
            newlyAddedQuestion.open = true;
            newlyAddedQuestion.required = false;
            
            console.log(newlyAddedQuestion);
            setQuestions([...questions, newlyAddedQuestion]);
        }

        
        
        function myHandler(files) {

            console.log(files[0]);
            setImage(URL.createObjectURL(files[0]));
        }

       

        function saveQues()
        {
         
            setActive("user");
        }

        function editForm()
        {
            setActive("admin");
        }

        function saveQuesExit()
        {
            setActive("login");
        }

        function questionsUI()
        {  
            
            return questions.map((ques,i)=>(
                <div>
                    <Accordion expanded={questions.open} className={questions[i].open ? 'add_border' : ""}>
                      

                    
                        <div className='question_boxes'>
                            <AccordionDetails className='add_question'>
                                <div className='add_question_top'>
                                    <input type="text" className="question"  placeholder='Untitled Question' value={ques.questionText} onChange={(e)=>{changeQuestion(e.target.value,i)}}/>
                                    <IconButton ><CropOriginalIcon style={{color:"#5f6368"}} /></IconButton>
                                    
                                    <Select className='select' style={{color:"#5f6368", fontSize:"13px"}}>
                                        <MenuItem id="text" value="Text" onClick={()=>{addQuestionType(i,"text","text")}}>Paragraph</MenuItem>
                                        <MenuItem id="shortText" value="Text" onClick={()=>{addQuestionType(i,"text","text")}}>Short Text</MenuItem>
                                        <MenuItem id="number" value="Number" onClick={()=>{addQuestionType(i,"number","number")}}>Number</MenuItem>
                                        <MenuItem id="checkbox" value="Checkbox" checked onClick={()=>{addQuestionType(i,"checkbox","checkbox")}}>CheckBox</MenuItem>
                                        <MenuItem id="radio" value="Radio" checked onClick={()=>{addQuestionType(i,"radio","radio")}}>Multiple Choice</MenuItem>
                                        <MenuItem id="date" value="Date" checked onClick={()=>{addQuestionType(i,"date","date")}}>Date</MenuItem>
                                        <MenuItem id="dob" value="DOB" checked onClick={()=>{addQuestionType(i,"date","dob")}}>DOB</MenuItem>
                                        
                                    </Select>
                                </div>
                                <input type="file" onChange={(e)=>{myHandler(e.target.files)}} className="image" />
                                <img src={image} />

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
                { active === "admin" &&
                 <div>
                <FormHeader/>
                <CenterTabs/>
                
                <div className='question_form'>
                    <br></br>
                    <div className='section'>
                        <div className='question_title_section'>
                            <div className='question_form_top'>
                                <input type="text" className='question_form_top_name' style={{color:"black"}} placeholder="Untitled Document" onChange={(e)=>{setDocName(e.target.value)}}/>
                                <input type="text" className='question_form_top_desc' style={{color:"black"}} placeholder="Form Description" onChange={(e)=>{setDocDesc(e.target.value)}}/>
                            </div>
                        </div>

                        {questionsUI()}

                        <div className='save_form'>
                            <Button variant="contained" color="primary" onClick={saveQues} style={{fontSize:"14px" ,marginRight:"10px"}}>Save</Button>
                            <Button variant="contained" color="primary" onClick={saveQuesExit} style={{fontSize:"14px"}}>Save & Exit</Button>
                        </div>
                    </div>
                </div>
            
                </div>
            }

            { active === "user"
            &&
                <div>
                <Button variant="contained" color="primary" onClick={editForm} style={{fontSize:"14px"}}>Edit</Button>
                <User_form questions={questions} ques_desc={documentDescription} ques_name={documentName}/>
                </div>
                
            } 

            {
                active === "login"
                &&
               
                <UserAuthentication questions={questions} doc_desc={documentDescription} doc_name={documentName}/>
            }
            </div>
        );
    
}

export default Questions_Form;