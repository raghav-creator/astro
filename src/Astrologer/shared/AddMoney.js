import React from "react";
import Layoutuser from "../../Components/shared/Layoutuser";

import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";
const AddMoney = () => {
  const navigate = useNavigate();
  return (
    <Layoutuser>
      <div className="container my-md-5">
        <div className="row ">
          <div className="col-12 text-end">
            <b>Available balance: ₹ 0.00</b>
          </div>
        </div>
      </div>
      <div className="container my-5">
        <div className="row">
          <div className="col-12 text-center">
            <h2>
              <u>Add Money to Wallet</u>
            </h2>
            <p className="mt-3">
              Your recharge pack can be used for multiple astrologers.
            </p>
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-4 mx-auto ">
            <Form className="text-center">
              <div>
                <Form.Label
                  className="enterAmount-label"
                  htmlFor="inputPassword5"
                >
                  Enter Amount
                </Form.Label>
                <Form.Control
                  type="text"
                  id="amount"
                  className="enterAmount-input bg-lightmud text-center fs-3 fw-semibold mt-3"
                  aria-describedby="passwordHelpBlock"
                />
              </div>

              <button className="btn btn-danger btn-lg mt-4" onClick={()=> navigate('/paymentdetails')}>Continue</button>
            </Form>
          </div>
        </div>
      </div>
    </Layoutuser>
  );
};

export default AddMoney;
