import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import TitleHeadBroadcasts from '../TitleHeadBroadcasts';
import axios from 'axios'
export default function SimpleAccordion() {
  const [faqList, setFaqList] = React.useState([])

  React.useEffect(() => {
    axios.get('api/v1/faq/')
    .then(({data: faqs}) => {
      setFaqList(faqs || [])
    })
    .catch(e => console.log(e))
  }, [])

  return ( 
    <div className='container accordion-frequently-questions'>
      <div className="title-Broadcasts-box text-center" id='faq'>
        <h4 className='text-white'>Frequently Asked Questions</h4>
        <svg xmlns="http://www.w3.org/2000/svg" width="82.4" height="23.183" viewBox="918.767 1192.85 82.4 23.183"><path d="M919.788 1196.653c2.09-3.62 6.731-4.863 10.35-2.773 3.278 1.892 4.58 5.878 3.242 9.301l17.998 10.39 36.939-9.895a6.377 6.377 0 0 1 .833-3.751 6.432 6.432 0 0 1 8.79-2.356 6.43 6.43 0 0 1 2.353 8.789 6.432 6.432 0 0 1-8.788 2.356 6.411 6.411 0 0 1-2.597-2.832l-37.854 10.142-18.816-10.864c-2.296 2.87-6.4 3.735-9.676 1.843-3.62-2.09-4.863-6.73-2.774-10.35m11.145 6.434a5.298 5.298 0 0 0-1.937-7.229 5.298 5.298 0 0 0-7.229 1.937 5.298 5.298 0 0 0 1.937 7.23 5.298 5.298 0 0 0 7.23-1.938" fill="#ff861f" fillRule="evenodd" data-name="Path 300" /></svg>

      </div>
      {faqList.sort((a,b) => a.sequence - b.sequence).map((faq, idx) => {
        return <Accordion key={faq.id}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls={`panel${idx+1}a-content`}
        >
          <Typography>{faq.title}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            {faq.content}
          </Typography>
        </AccordionDetails>
      </Accordion>
      })}

    </div>
  );
}
