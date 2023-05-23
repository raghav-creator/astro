import React from "react";
import { Container } from "react-bootstrap";

const Astrologer = () => {
  return (
    <div className="astro-wrap">
      <Container>
        <div class="row ">
          <div class="row">
            <div class="heading noeffect">
              <p>Talk To Best Astrologer In india</p>
            </div>
          </div>

          <form className="astro-form">
            <div class="row">
              <div class="col-md-4 mar10">
                <input type="text" class="form-control" placeholder="Search" />
              </div>
              <div class="col-md-4 mar10">
                <select id="inputState" class="form-control">
                  <option selected>All</option>
                  <option>...</option>
                </select>
              </div>
              <div class="col-md-4 mar10 form-group">
                <select id="inputState" class="form-control">
                  <option selected>All</option>
                  <option>...</option>
                </select>
              </div>
            </div>
          </form>
        </div>
      </Container>
    </div>
  );
};

export default Astrologer;
