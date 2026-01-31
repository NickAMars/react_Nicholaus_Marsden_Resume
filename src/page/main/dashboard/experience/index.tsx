import React from 'react'
import { BulletList, BulletPoint, CompanyContainer, CompanyDescription, CompanyDetails, ExperienceContainer, JobStyle, Title } from './experience.style'
import { JOB_EXPERIENCE, DESCRIBE_EXPEIENCE, COMPANIES_POINTS} from './util/constants'


export const Experience: React.FC<{}> = (props) => {
    return <ExperienceContainer>
            <Title variant='h5'>
                Experience:
            </Title>
            {
                JOB_EXPERIENCE.map(job =>(
                    <JobStyle key={job.Company}>
                        <CompanyContainer> <CompanyDetails>{job.Company}</CompanyDetails> <CompanyDetails>{job.Location}</CompanyDetails>  </CompanyContainer>
                        <CompanyContainer> <CompanyDetails>{job.JobTitle}</CompanyDetails> <CompanyDetails>{job.Years}</CompanyDetails>  </CompanyContainer>
                        {/* <CompanyDescription>
                            {DESCRIBE_EXPEIENCE[job.Company]}
                        </CompanyDescription> */}
                        <BulletList>
                            {COMPANIES_POINTS[job.Company].map(point => (<BulletPoint>{point}</BulletPoint>))}
                        </BulletList>
                    </JobStyle>
                ))
            }
        </ExperienceContainer>
}