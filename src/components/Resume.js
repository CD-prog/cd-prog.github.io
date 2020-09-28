import React from 'react'
import resume from './resume.pdf'
import { Document } from 'react-pdf';

function Resume () {
    return (
    <div>
        <Document file='./resume.pdf'>
   
        </Document>
    <a href = {resume} >Download Resume</a> 
    </div>              
   )
}
export default Resume