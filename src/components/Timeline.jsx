import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import CelebrationIcon from '@mui/icons-material/Celebration';
import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';
import ArticleIcon from '@mui/icons-material/Article';
import PageviewIcon from '@mui/icons-material/Pageview';
import Typography from '@mui/material/Typography';
import '../pages/Page.css'


export default function BasicTimeline() {
  return (
    <Timeline sx={{fontFamily:'Rubik'}}>
      <TimelineItem>
        <TimelineSeparator >
          <TimelineDot >
            <ArticleIcon/>
          </TimelineDot >
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent > 
        
          <Typography variant="h6" component="span">
          <b className='timeline-subheading'> SPRING 2024</b>
          </Typography>
          <Typography>
            <p className='timeline-text-right'>Currently working with <a className='color-pop' href="https://mahikaphutane.com/">Mahika Phutane</a> about Ableism in LLMs and <a className='color-pop' href="https://www.sharonheung.com/">Sharon Hueng</a> about Ableism on Social Media </p>

          </Typography>
         </TimelineContent>
      </TimelineItem>
      <TimelineItem position='left'>
        <TimelineSeparator>
          <TimelineDot>
            <CelebrationIcon/>
          </TimelineDot >
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent> 
        <Typography variant="h6" component="span">
          <b className='timeline-subheading'> FALL 2023</b>
          </Typography>
          <Typography><p className='timeline-text'>Recieved CSCW Acceptance! </p></Typography>
       </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot>
            <AssignmentTurnedInIcon/>
          </TimelineDot >
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent> 
        <Typography variant="h6" component="span">
          <b className='timeline-subheading'> SPRING 2023</b>
          </Typography>
          <Typography><p className='timeline-text'>Submitted <b > <a className='color-pop' href="https://dl.acm.org/doi/10.1145/3637333"> Fact-Checking Paper</a> </b> to CSCW! </p></Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem position='left'>
        <TimelineSeparator>
          <TimelineDot>
            <PageviewIcon/>
          </TimelineDot >
        </TimelineSeparator>
        <TimelineContent> 
        <Typography variant="h6" component="span">
          <b className='timeline-subheading'>SPRING 2021</b>
          </Typography>
          <Typography>
          <p className='timeline-text'> Started Research with Professor <a className='color-pop' href="https://www.adityavashistha.com/"> Aditya Vashista! </a>  </p> 
          </Typography>
          </TimelineContent>
      </TimelineItem>
    </Timeline>
  );
}
