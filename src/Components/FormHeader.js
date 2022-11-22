import React from 'react';
import "./FormHeader.css"
import MenuIcon from "@material-ui/icons/Menu"
import {IconButton} from "@material-ui/core"
import Avatar from "@material-ui/core/Avatar";

function FormHeader() {
  
        return (
        <div className='form_header'>
            <div className='header_info'>
                <IconButton>
                    <MenuIcon/>
                </IconButton>

                <div>
                    <input type="text" placeholder='Untitled Form' className='form_name' />
                </div>
                
            </div>
            
            <div className='header_right'>
               
                <IconButton>
                    <Avatar src=""/>
                </IconButton>
            </div>
        
        </div>
        );
    
}

export default FormHeader;