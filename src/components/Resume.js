import React, {useState} from 'react'
import resume from './resume.pdf'
import { Document, Page } from 'react-pdf';
import { pdfjs } from 'react-pdf';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

function Resume () {
    console.log(resume)
    const [numPages, setNumPages] = useState(null);
    function onDocumentLoadSuccess({ numPages }) {
        setNumPages(numPages);
      }



    return (
    <div>
        <br/>
        <a href = {resume} >Download Resume</a> 
        <Document
        className="page-container"
        file={resume}
        onLoadSuccess={onDocumentLoadSuccess}
      >
          {Array.from({length: numPages}).map((_, idx) => {
              return <Page key={idx} pageNumber={idx + 1} />
          })}
      </Document>
    </div>              
   )
}
export default Resume