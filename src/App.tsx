import { useEffect, useState } from 'react'
import './App.css'
import { Job } from './components/Job'
import { JobType } from './types/Job'

const App = () => {
  const [data, setData] = useState<JobType[]>([])

  useEffect(() => {
    fetch('../public/data/data.json')
      .then(res => res.json())
      .then(data => setData(data))
  }, [])

  return (
    <>
    <header className='header'></header>
    <main>
      <section className="jobs">
        <div className="container">
          {/* Filter area */}
          
          {data.map( (job, index) => (
            <Job key={index} job={job} />
          ))}
        </div>  
      </section>
    </main>
    </>
  )
}

export default App
