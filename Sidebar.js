import React from 'react'
import { Link } from 'react-router-dom';
export default function Sidebar() { 
  return (
    <>
      
            <div class="col-md-2" style={{height:'750px', background:'black',color:'white',position:'fixed'}}>
            <i class="fa fa-bars" aria-hidden="true"></i>

<img src="https://financialsamachar.com/wp-content/uploads/2020/07/sharechat.jpg" style={{height:'100px',width:'200px'}}></img>
       <div className='menu'>
<ul>

<Link to="/Home"><li><i class="fa fa-home" aria-hidden="true" ></i>Home</li></Link>
<Link to="/Profile"><li><i class="fa fa-user" aria-hidden="true"></i>Profile</li></Link> 
<Link to="/Videos"><li><i class="fa fa-video-camera" aria-hidden="true"></i>Videos</li></Link>  
<Link to="/Wallet"><li><i class="fa fa-video-camera" aria-hidden="true"></i>Wallet</li></Link>
<Link to="/Explore"><li><i class="fa fa-clock-o" aria-hidden="true"></i>Explore</li></Link>
<Link to="/Searchbar"><li><i class="fa fa-video-camera" aria-hidden="true"></i>Searchbar</li></Link>
</ul>



</div>
        
    </div>
    
   
    
    </>
  )
}