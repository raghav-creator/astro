import React from 'react';

<<<<<<< Updated upstream
const Astrologer=()=>
{
  return <div>
    <div class="row astro-wrap">

    <div class="row">
        <div class="heading">
            <p>Talk To Best Astrologer In india</p>
=======
const Astrologer = () => {
  return (
    <div className="astro-wrap">
      <Container>
        <div class="row ">
          <div class="col-12">
            <div class="heading noeffect">
              <p>Talk To Best Astrologer In india</p>
            </div>
          </div>

          <form className="astro-form ">
            <div class="row justify-content-between gap-4 flex-column flex-md-row">
              <div class="col mar10">
                <input
                  type="text"
                  class="form-control searchFilter"
                  placeholder="Search"
                />
              </div>
              <div class="col mar10">
                <select id="inputState" class="form-control dropdownFilter">
                  <option selected>All</option>
                  <option>...</option>
                </select>
              </div>
              <div class="col mar10 form-group">
                <select id="inputState" class="form-control dropdownFilter">
                  <option selected>All</option>
                  <option>...</option>
                </select>
              </div>
            </div>
          </form>
>>>>>>> Stashed changes
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
  </div>
}
 
export default Astrologer;