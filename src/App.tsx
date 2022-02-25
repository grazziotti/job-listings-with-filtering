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
  const [loading, setLoading] = useState(false)
  const [animate, setAnimate] = useState('')

  useEffect(() => {
    setLoading(true)
    fetch('../data/data.json')
      .then(res => res.json())
      .then(data => {
        setData(data)
        setFilteredData(data)
      })
    setLoading(false)
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

  useEffect(() => {
    if (!loading) {
      setTimeout(() => {
        setAnimate('animate')
      }, 301)
    }
  }, [loading])

  return (
    <>
    <header className="header">
    </header>
    <main>
      <section className="jobs">
        <div className="container"> 
          <div className="filter-area">   
            {filters.length > 0 &&
              <Filter filters={filters} onRemoveFilter={handleRemoveFilter} onClearFilters={handleClearFilters} />
            }   
          </div>
          {!loading &&
            <div className={`jobs-area ${animate}`} data-anime="left">
              {filteredData.map( (data, index) => (
                <Job key={index} data={data} onAddFilter={handleAddFilter} />
              ))}
            </div>
          }
        </div>  
      </section>
    </main>
    </>
  )
}

export default App
