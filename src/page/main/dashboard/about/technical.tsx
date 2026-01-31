import React from 'react'
import { Title, SubTitle, TechnicalContainer, SkillContainer, SkillOutline, SecondarySkillGroup, SkillStyle, SubjectStyle } from './about.style'
import { Rating } from '@mui/material'
import { PRIMARY_SKILLS } from './util/constants'


export const Technical: React.FC<{}> = (props) => {

    return<TechnicalContainer>
                <Title variant='h4'>
                    Core Technologies:
                </Title>
                <SkillContainer>
                    <SkillOutline>
                        {/* <SubTitle variant='h6'>Core Technologies:</SubTitle> */}
                        <SecondarySkillGroup>
                            {PRIMARY_SKILLS.map((skill, index) => (
                                <SkillStyle key={skill.subject}>
                                    {
                                        index === PRIMARY_SKILLS.length -1 ? <SubjectStyle>{skill.subject} </SubjectStyle> : <SubjectStyle>{skill.subject},&nbsp;</SubjectStyle>
                                    }
                                    {/* <SubjectStyle>{skill.subject}, </SubjectStyle> */}
                                </SkillStyle>
                            ))}
                        </SecondarySkillGroup>
                    </SkillOutline>
                </SkillContainer>
            </TechnicalContainer>
}