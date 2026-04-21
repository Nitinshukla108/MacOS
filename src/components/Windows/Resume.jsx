import React from 'react'
import MacWindows from './MacWindows'
import './resume.scss'

const Resume = () => {
  return (
    <MacWindows>
        <div className="resume-window">
            <embed src="/NitinShukla_Resume.pdf" frameborder="0"></embed>
        </div>
    </MacWindows>
  )
}

export default Resume