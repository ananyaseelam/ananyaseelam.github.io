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
          <TimelineDot color="primary" variant="filled">
            <ArticleIcon/>
          </TimelineDot >
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent > 
        
          <Typography variant="h6" component="span">
          <b className='timeline-subheading'> SPRING 2024</b>
          </Typography>
          <Typography>
            <p className='timeline-text-right'>Currently researching Ableism in LLMs with <a className='color-pop' href="https://mahikaphutane.com/">Mahika Phutane</a> and Ableism on Social Media with <a className='color-pop' href="https://www.sharonheung.com/">Sharon Hueng</a>!</p>
          </Typography>
         </TimelineContent>
      </TimelineItem>
      <TimelineItem position='left'>
        <TimelineSeparator>
          <TimelineDot  color="primary" variant="filled">
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
          <TimelineDot  color="primary" variant="filled">
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
          <TimelineDot  color="primary" variant="filled">
            <PageviewIcon/>
          </TimelineDot >
        </TimelineSeparator>
        <TimelineContent> 
        <Typography variant="h6" component="span">
          <b className='timeline-subheading'>SPRING 2021</b>
          </Typography>
          <Typography>
          <p className='timeline-text'> Started Research with Professor <a className='color-pop' href="https://www.adityavashistha.com/"> Aditya Vashistha! </a>  </p> 
          </Typography>
          </TimelineContent>
      </TimelineItem>
    </Timeline>
  );
}
