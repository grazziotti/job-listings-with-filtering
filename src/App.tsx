import { useEffect, useState } from 'react'
import './App.css'
import { Job } from './components/Job'
import { JobType } from './types/Job'
import { Filter } from './components/Filter'
import { filterList } from './components/helpers/filter'

const App = () => {
  const [data, setData] = useState<JobType[]>([])
  const [filteredData, setFilteredData] = useState<JobType[]>([])
  const [filters, setFilters] = useState<string[]>([])

  useEffect(() => {
    fetch('../public/data/data.json')
      .then(res => res.json())
      .then(data => {
        setData(data)
        setFilteredData(data)
      })
  }, [])

  useEffect(() => {
    const arr: string[][] = data.map( job => [job.role, job.level, ...job.languages, ...job.tools])

    const newData = arr.reduce( (acc: JobType[], arr, index) => {
      if (filterList(arr, filters)) {
        acc.push(data[index])
      }
      return acc
    }, [])

    setFilteredData(newData)
  }, [filters])

  const handleAddFilter = (skill: string) => {
    if (!filters.includes(skill)) {
      setFilters([...filters, skill])
    }
  }

  const handleRemoveFilter = (index: number) => {
    filters.splice(index, 1)
    setFilters([...filters])
  }

  const handleClearFilters = () => {
    setFilters([])
  }

  return (
    <>
    <header className='header'>
      <div className="container">
        {filters.length > 0 &&
          <Filter filters={filters} onRemoveFilter={handleRemoveFilter} onClearFilters={handleClearFilters} />
        }   
      </div>
    </header>
    <main>
      <section className="jobs">
        <div className="container">    
          {filteredData.map( (data, index) => (
            <Job key={index} data={data} onAddFilter={handleAddFilter} />
          ))}
        </div>  
      </section>
    </main>
    </>
  )
}

export default App
