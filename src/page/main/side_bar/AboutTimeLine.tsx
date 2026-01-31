import React from 'react'
import { TimelineConnector, TimelineContent, TimelineSeparator } from '@mui/lab'
import { Description, DotLineConnector, DotStyle, ImageItem, LaptopIcon, TimelineContainer, TimelineContentStyle, TimelineItemStyle, LinkedIn } from './AboutTimeLine.style';

export const TimeLine: React.FC<{}> = (props) => {
  return (
    <TimelineContainer>
      <ImageItem>
        <TimelineSeparator>
          <DotStyle color="primary" >
            <LaptopIcon />
          </DotStyle>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent/>
      </ImageItem>
      <TimelineItemStyle>
        <TimelineSeparator>
          <DotStyle variant="outlined" color="primary" />
          <DotLineConnector />
        </TimelineSeparator>
        <TimelineContentStyle><Description variant="subtitle1" ><b>Name:</b> Nicholaus Marsden</Description> </TimelineContentStyle>
      </TimelineItemStyle>
      <TimelineItemStyle>
        <TimelineSeparator>
          <DotStyle variant="outlined" color="primary" />
          <DotLineConnector />
        </TimelineSeparator>
        <TimelineContentStyle><Description variant="subtitle1" ><b>Job:</b> Senior Software Engineer</Description></TimelineContentStyle>
      </TimelineItemStyle>
      <TimelineItemStyle>
        <TimelineSeparator>
          <DotStyle variant="outlined" color="primary" />
          <DotLineConnector />
        </TimelineSeparator>
        <TimelineContentStyle><Description variant="subtitle1" ><b>Email:</b>Nicholausmarsden.career1@gmail.com</Description></TimelineContentStyle>
      </TimelineItemStyle>
      <TimelineItemStyle>
        <TimelineSeparator>
          <DotStyle variant="outlined" color="primary"/>
        </TimelineSeparator>
        <TimelineContentStyle>
          <Description variant="subtitle1" ><b>LinkedIn</b>: 
            <a href='https://www.linkedin.com/in/nicholausmarsden' target="_black">
              <LinkedIn/>
            </a>
          </Description>
        </TimelineContentStyle>
      </TimelineItemStyle>
      
      
    </TimelineContainer>
  )
}
