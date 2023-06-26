import React from "react";
import Layoutuser from "../../Components/shared/Layoutuser";

import BankCards from "../../Assets/imgs/BankCards.png";
import CardWallet from "../../Assets/imgs/CardWallet.png";
import UPILogo from "../../Assets/imgs/UPI-Logo.png";
import BankBuilding from "../../Assets/imgs/BankBuilding.png";

const PaymentDetails = () => {
  return (
    <Layoutuser>
      <div className="container my-5">
        <div className="row">
          <div className="col-12 text-center">
            <h2>
              <u>Payment Details</u>
            </h2>
          </div>
        </div>
        <div className="row justify-content-center mt-5">
          <div className="col-md-7">
            <div className="row my-3 justify-content-between RechargeAmount">
              <div className="col-md-6">Recharge Amount</div>
              <div className="col-md-3 text-end"> ₹ 100.00</div>
            </div>
            <div className="row my-3 justify-content-between gstAmount">
              <div className="col-md-3">Recharge Amount</div>
              <div className="col-md-3 text-end"> ₹ 18.00</div>
            </div>

            <div className="row my-3 py-3 justify-content-between totalAmount fw-semibold bg-lightmud">
              <div className="col-md-6">Recharge Amount</div>
              <div className="col-md-3 text-end"> ₹ 18.00</div>
            </div>
          </div>
        </div>

        <div className="row justify-content-center mt-5">
          <div className="col-12 text-center">
            <h2>Payment Method</h2>
          </div>

          <div className="mt-4 col-md-12">
            <div className="row justify-content-center">
              <div className="col-md-5">
                <ul className="paymentMethod d-flex flex-column gap-3">
                  <li className="d-flex align-items-center justify-content-between">
                    <div>1 Credit/Debit Card</div>
                    <img src={BankCards} className="img-fluid" />
                  </li>
                  <li className="d-flex align-items-center justify-content-between">
                    <div>2 Net Banking</div>
                    <img src={BankBuilding} className="img-fluid" />
                  </li>
                  <li className="d-flex align-items-center justify-content-between">
                    <div>3 UPI</div>
                    <img src={UPILogo} className="img-fluid" />
                  </li>
                  <li className="d-flex align-items-center justify-content-between">
                    <div>4 Other Wallets</div>
                    <img src={CardWallet} className="img-fluid" />
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layoutuser>
  );
};

export default PaymentDetails;
