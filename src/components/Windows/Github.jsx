import React from 'react'
import githubData from "../../assets/github.json"
import MacWindows from './MacWindows'
import './Github.scss'


const GitCard= ({data={id:1,image:"",description:"",tags:[],repoLink:"",demoLink:""}}) =>{
    return <div className="card">

    <img src={data.image} alt="" />
    <h1>{data.title}</h1>
    <p className='description'>{data.description}</p>

    <div className="tags">
        {data.tags.map(tag=> <p className='tag'>{tag}</p>)}
    </div>

    <div className="url">
        <a href={data.repoLink}>Repository</a>
        {data.demoLink && <a href={data.demoLink}>Demo Link</a>}
    </div>

</div>
}

const Github = () => {
    
  return (
    <MacWindows>
        <div className="cards">
            {githubData.map(project=>{
                    return  <GitCard data = {project} />
            })}
        </div>
    </MacWindows>
  )
}

export default Github