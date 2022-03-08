import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { saveAs } from "file-saver";
import Button from '@mui/material/Button';


const saveFile = () => {
   
  saveAs(
    "https://navigoo.se/wp-content/uploads/2022/02/Utbildningsplan-webbutvecklare-2020.pdf"
  );
};

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 5 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider', bgcolor: '#042c54', color: 'white'}}>
      <Tabs
  value={value}
  onChange={handleChange}
  variant="scrollable"
  indicatorColor="secondary"
  textColor="white"
  scrollButtons
  allowScrollButtonsMobile
  aria-label="scrollable force tabs example"
>
          <Tab label="Wordpress" {...a11yProps(0)} />
          <Tab label="PHP" {...a11yProps(1)} />
          <Tab label="Javascript" {...a11yProps(2)} />
          <Tab label="Others" {...a11yProps(3)} />
          <Tab label="Marketing" {...a11yProps(4)} />
          <Tab label="Educationdetails" {...a11yProps(5)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        Have been working with Wordpress CMS since 2018 and also graduated from <br/>
        IT Högskolan with A in Advanced CMS Management.<br/>
        Plugins Development, Testing, API,<br/>
        Woocommerce and Database development.<br/>
        I have also produced many Webpages for several companies.<br/>
      </TabPanel>
      <TabPanel value={value} index={1}>
        Graduated with A in 2 courses in both PHP and Laravel and have experienced <br/>a lot of back-end jobs toghether with
        Wordpress first of all.<br/>
      </TabPanel>
      <TabPanel value={value} index={2}>
        Have studied and worked with Javascript mostly pure vanilla.js and ES6,jQuery and done<br/>
        many projects. React is my preferred framework with js.<br/>
      </TabPanel>
      <TabPanel value={value} index={3}>
        Other technicues that has been a big part of my development is working with mySql, mongoDB, Node.js, express<br/>
        and of course working with GitHub.
      </TabPanel>
      <TabPanel value={value} index={4}>
       As competition is high the knowledge in SEO is critical and this includes all the social platforms<br/>
       and if course Google.<br/>
       I have experince in working with Google Ads, Google Business, Facebbook and Instagram<br/>
       </TabPanel>
      <TabPanel value={value} index={5}>
       ITHS (IT Högskolan) 2020-2022 (Higher vocational degree)<br/>
       Courses:<br/>
       - Agile development, graduated with an A<br/>
       - Advanced WebDesign, graduated with an A<br/> 
       - CMS-Develeopment part 1, graduated with an A<br/>
       - CMS-Development part 2, graduated with an A<br/>
       - Exam, ongoing<br/>
       - LIA, graduated with an A<br/>
       - PHP and databases, graduated with an A<br/>
       - Webdevelopment with Javascript, graduated with an A<br/><br/>
       <br/>
       <p>More details here:</p><br/>
       <Button color="secondary" onClick={saveFile} type="button">Download</Button>
       <br/>
       <hr/><br/>
       NTI School 2020,Spring<br/>
       Courses:<br/>
       - Webdevelopment, graduated with an A<br/><br/>
       <hr/><br/>
       Jensen Education 2020,Spring<br/>
       Courses:<br/>
       - Java, graduated with an A<br/><br/>
      </TabPanel>

    </Box>
  );
}



