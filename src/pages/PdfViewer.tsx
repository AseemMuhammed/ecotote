import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Document, Page } from 'react-pdf';
import SBS from '../assets/pdf/SBS.pdf'
import annapolymers_com from '../assets/pdf/annapolymers_com.pdf' //change this path


const PdfViewer = () => {
    const {slug} = useParams()
    const navigate = useNavigate()
    
    const pdf= ()=>{
      if(slug === 'general')return SBS
      else if (slug === 'biodegrable') return annapolymers_com //change this file
      else navigate("/not-found")
    }
  return (
    <div className='w-full h-auto bg-white'> 
<div style={{ width: '100%', height: '100vh' }}>
      <iframe
        src={pdf()}
        width='100%'
        height='100%'
        title='PDF Viewer'
        style={{ border: 'none' }}
      />
      </div>
    </div>
     
  )
}

export default PdfViewer
