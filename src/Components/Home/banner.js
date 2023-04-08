import React from 'react';

const Banner=()=>
{
  return <div>
    <div class="row banner-wrap">
     <div class="col-md-6 banner-wrap-content">
        
        <p>Ask An Astrologer</p>
        <p class="button-wrap">
            <button class="button-chat">Chat Now</button>
            <button class="button-call">Call Now</button>
        </p>
     </div>
     <div class="col-md-6 banner-wrap-image">
      <img src="./banner.png" />
     </div>
    </div>
  </div>;
}
 
export default Banner;