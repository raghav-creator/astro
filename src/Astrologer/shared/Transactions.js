import React from "react";
import Layoutuser from "../../Components/shared/Layoutuser";
import Table from "react-bootstrap/Table";
import { useNavigate } from "react-router-dom";

const Transactions = () => {
  const navigate = useNavigate();
  return (
    <Layoutuser>
      <div className="container my-md-5">
        <div className="row ">
          <div className="col-12">
            <div className="d-flex align-items-center flex-wrap gap-3">
              <b>Available balance: ₹ 0.00</b>
              <button className="btn btn-green-two" onClick={()=> navigate('/Addmoney')}>Recharge</button>
            </div>
          </div>
        </div>
      </div>
      <div className="container my-5">
        <div className="row">
          <div className="col-12">
            <h2>Transactions</h2>
          </div>

          <div className="col-12">
            <Table responsive>
              <thead>
                <tr>
                  <th>Datetime</th>
                  <th className="text-center">Amount</th>
                  <th>Transactions ID</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Mar 21, 2023, 3:00 PM</td>
                  <td>
                    <div className="text-center fs-5 fw-semibold">
                      +100 <br />
                      <span className="gstFs"> (GST 18.00)</span>
                    </div>
                  </td>
                  <td>#AT-RA-1679392389325-MTkyNDEwNDQ=</td>
                  <td>
                    <span className="tstatus-failed">Failed</span>
                  </td>
                </tr>

                <tr>
                  <td>Mar 21, 2023, 3:00 PM</td>
                  <td>
                    <div className="text-center fs-5 fw-semibold">
                      +100 <br />
                      <span className="gstFs"> (GST 18.00)</span>
                    </div>
                  </td>
                  <td>#AT-RA-1679392389325-MTkyNDEwNDQ=</td>
                  <td>
                    <span className="tstatus-confirm">Confirm</span>
                  </td>
                </tr>
              </tbody>
            </Table>
          </div>
        </div>
      </div>
    </Layoutuser>
  );
};

export default Transactions;
