import React from "react";

const Banner = () => {
  return (
    <div className="container-lg container-mg banner-wrap">
      <div class="row ">
        <div class="col-md-6 banner-wrap-content ">
          <p className="centerTitle">Ask An Astrologer</p>
          <p className="button-wrap justify-content-center justify-content-md-start">
            <button class="button-chat">Chat Now</button>
            <button class="button-call">Call Now</button>
          </p>
        </div>
        <div class="col-md-6 banner-wrap-image">
          <img className="img-fluid" src="./banner.png" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
