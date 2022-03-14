import React from 'react';
import { InputText } from 'primereact/inputtext';
import { Checkbox } from 'primereact/checkbox';
import NavBarCM from './NavBarCM'

function Week9_03_PrimeForms() {
  return (
    <div className='app-container'>
        <NavBarCM/>
        <div className='content'>
        <form action='#'>
        <lable htmlFor ="input">First Name</lable>
        <InputText id="input2" /><br/><br/>
        {/* <input type="text" id ="input1" /><br/><br/> */}
        <lable htmlFor ="input2">Last Name</lable> 
        {/* <input type="text" id = "input2"/> */}
        <InputText id="input1" /><br/>
        <br/>
        
        <Checkbox id='checked'></Checkbox>
        <button type='submit'>Submit</button>
 
        </form>
        </div>
    </div>
  )
}

export default Week9_03_PrimeForms
