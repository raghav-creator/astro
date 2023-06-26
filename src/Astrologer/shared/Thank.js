import React from 'react'
import Layout from '../layout/layout' 
import thanku from'../../Assets/imgs/thanku.png'
import { useNavigate } from 'react-router-dom';

const Thank = () => {
  const navigate = useNavigate();
  
  return (
   <Layout> 
    <div className='container' style={{padding:"2rem"}}>
   <div className='row justify-content-center'>
     <div className='col-md-6'>
       <div className='card bg-white w-100 borderRounded-50 p-60'>
         <div className='card-body'>
          <img src={thanku} className='img-fluid d-block mx-auto mb-4'/>
           <p>Thanks for submitting your details with Astrodevam, your token number is
112048. Please log into our hiring application from your registered mobile
number to know the status of your candidature. Please download this
application from the below-given link.
App Link- djejnsusnzns<br/>
For any other issue please drop a mail on <a href="mailto:onboarding@astrodevam.com">onboarding@astrodevam.com</a>
<a onClick={()=>navigate('/astrologin')}>Login</a></p>
         </div>
       </div>
     </div>
   </div>
 </div>
    
   </Layout>
  )
}

export default Thank;