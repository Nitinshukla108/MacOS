import React from 'react'
import Terminal from 'react-console-emulator'
import "./cli.scss"
import MacWindows from './MacWindows'

const Cli = ({ windowName, setWindowsState }) => {
    const commands = {
        about: {
            description: 'About me',
            usage: 'about',
            fn: () => 'I am Nitin Shukla, a B.Tech CSE student and aspiring software developer. I am passionate about building modern web applications using React and continuously improving my problem-solving skills. I am also preparing for GATE 2026.'
        },
        skills: {
            description: 'List technical skills',
            usage: 'skills',
            fn: () => `Frontend: React, JavaScript, HTML, CSS, Tailwind
Backend: Node.js (Basics)
Database: MongoDB (Basics)
Programming: Java, C
Tools: Git, GitHub, VS Code
Other: Problem Solving, DSA (Learning), GATE Preparation`
        },
        projects: {
            description: 'View my projects',
            usage: 'projects',
            fn: () => `1. Portfolio Website - React + Vite
2. Guptaji Furniture Website - React Project
3. Product Listing App - React + API
4. CLI Portfolio - React Console Emulator
5. Learning Projects - Java & DSA`
        },
        experience: {
            description: 'Display work experience',
            usage: 'experience',
            fn: () => `Fresher (Currently Pursuing B.Tech CSE)
  - Building real-world React projects
  - Learning Full Stack Development
  - Preparing for internships and GATE 2026`
        },
        contact: {
            description: 'Get contact information',
            usage: 'contact',
            fn: () => `Email: shuklanitin299@gmail.com
Phone: +91 XXXXX XXXXX
Location: Surat, Gujarat`
        },
        github: {
            description: 'Open GitHub profile',
            usage: 'github',
            fn: () => {
                window.open('https://github.com/Nitinshukla108', '_blank')
                return 'Opening GitHub...'
            }
        },
        resume: {
            description: 'Download resume',
            usage: 'resume',
            fn: () => 'Resume download started... (Add your resume link here)'
        },
        social: {
            description: 'View social media links',
            usage: 'social',
            fn: () => `LinkedIn: linkedin.com/in/your-profile
GitHub: github.com/Nitinshukla108
Portfolio: your-portfolio-link`
        },
        echo: {
            description: 'Echo a passed string',
            usage: 'echo <string>',
            fn: (...args) => args.join(' ')
        }
    }

    const welcomeMessage = `
╔════════════════════════════════════════╗
║     Welcome to Nitin's CLI Portfolio!  ║
╚════════════════════════════════════════╝

Hello! 👋 I am Nitin Shukla.

I am a B.Tech CSE student, React Developer, and GATE 2026 aspirant.

You can explore my skills, projects, and journey using terminal commands.

Type 'help' to see all available commands, or try:
  • about     
  • skills    
  • projects  
  • experience 
  • contact   

Happy exploring! 🚀
`

    return (
        <MacWindows windowName={windowName} setWindowsState={setWindowsState} >
            <div className="cli-window">
                <Terminal
                    commands={commands}
                    welcomeMessage={welcomeMessage}
                    promptLabel={'nitinshukla:~$'}
                    promptLabelStyle={{ color: '#00ff00' }}
                />
            </div>
        </MacWindows>
    )
}

export default Cli