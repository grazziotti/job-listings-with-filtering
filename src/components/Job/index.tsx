import './styles.css'
import { JobType } from '../../types/Job'

type Props = {
    job: JobType
}

export const Job = ({ job }: Props) => {
    const skills: string[] = [job.role, job.level, ...job.languages, ...job.tools]

    const jobClass = job.featured ? 'job job--featured' : 'job' 
    
    return (
        <div className={jobClass}>
            <div className="job__content">
                <div className="job__logo">
                    <img src={job.logo} alt="company logo" />
                </div>
                <div className="job__description">
                    <div className="job__company">
                        <p className="job__company-name">{job.company}</p>
                        
                        {job.new && 
                            <span className="job__new">new!</span>
                        }
                        
                        {job.featured && 
                            <span className="job__featured">featured</span>
                        }
                    </div>
    
                    <a href="#" className="job__position">{job.position}</a>

                    <div className="job__info">
                        <p>{job.postedAt}</p>
                        <p>{job.contract}</p>
                        <p>{job.location}</p>
                    </div>
                </div>
                <div className="job__tags">
                    {skills.map( (skill, index) => (
                        <button key={index} className="job__tags__btn">{skill}</button>
                    ))}
                </div>
            </div>
        </div>
    )
}