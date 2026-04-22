import React from 'react'
import MacWindows from './MacWindows'
import './resume.scss'

const Resume = ({windowName, setWindowsState}) => {
  return (
    <MacWindows windowName={windowName} setWindowsState={setWindowsState}>
        <div className="resume-window">
            <embed src="/NitinShukla_Resume.pdf" frameborder="0"></embed>
        </div>
    </MacWindows>
  )
}

export default Resume