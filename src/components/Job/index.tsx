import './styles.css'
import { JobType } from '../../types/Job'

type Props = {
    data: JobType,
    onAddFilter: (skill: string) => void;
}

export const Job = ({ data, onAddFilter }: Props) => {
    const skills: string[] = [data.role, data.level, ...data.languages, ...data.tools]
    
    const jobClass = data.featured ? 'job job--featured' : 'job' 

    return (
        <div className={jobClass}>
            <div className="job__content">
                <div className="job__logo">
                    <img src={data.logo} alt="Company logo" />
                </div>
                <div className="job__description">
                    <div className="job__company">
                        <p className="job__company-name">{data.company}</p>
                        
                        {data.new && 
                            <span className="job__new">new!</span>
                        }
                        
                        {data.featured && 
                            <span className="job__featured">featured</span>
                        }
                    </div>
    
                    <a href="#" className="job__position">{data.position}</a>

                    <div className="job__info">
                        <p>{data.postedAt}</p>
                        <p>{data.contract}</p>
                        <p>{data.location}</p>
                    </div>
                </div>
                <div className="job__tags">
                    {skills.map( (skill, index) => (
                        <button 
                            className="job__tags__btn" 
                            key={index}
                            onClick={() => onAddFilter(skill)}
                        >{skill}</button>
                    ))}
                    
                    {/*
                    <button className="job__tags__btn">{data.role}</button>
                    
                    <button className="job__tags__btn">{data.level}</button>
                    
                    {data.languages.map( lang => (
                        <button className="job__tags__btn">{lang}</button>
                    ))}
                    
                    {data.tools.map( tool => (
                        <button className="job__tags__btn">{tool}</button>
                    ))}
                    */}
                </div>
            </div>
        </div>
    )
}