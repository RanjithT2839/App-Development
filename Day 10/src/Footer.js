import React from 'react'
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook'
import  PinterestIcon  from '@mui/icons-material/Pinterest';
import './Footer.css'
import { Link } from 'react-router-dom';

function  Footer(){
    return(
        <div>
        <footer className="homefooter">
      <div className="homefooter-content">
      <div className='homeicon'>
      <FacebookIcon/>
        <WhatsAppIcon/>
        <TwitterIcon/>
        <PinterestIcon/></div>
        <Link to={"/tac"}><h6 className='hometerms'>TERMS AND CONDITIONS</h6></Link>
        <p className='homecon'> User Generated<br/><br/>
        Submission<br/><br/>
        Licenses <br/><br/>
        Trademarks<br/><br/>
        Ownership Rights<br/><br/>
        </p>
        <Link to={"/policy"}><h6 className='homepolicy'>PRIVACY POLICY</h6></Link>
        <p className='homecon2'>Information we Collect<br/><br/>
        Use of Information<br/><br/>
        Information Sharing<br/><br/>
        Links on Social Media<br/><br/>
        Analytics</p>
        <p className='homenew'>Contact<br/><br/>
        About<br/><br/>
        New Arrival</p>
        </div>
        <button className='sub'>Subscribe</button>

       <p className='homecopy'>&copy; 2023 StorySeeds.all rights reserved</p>
       
     
    </footer>
        </div>
    )
}
export default Footer