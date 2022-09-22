import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import store from "store";
import AddTollModel from "../components/AddTollModel";
import AddVehicleModel from "../components/AddVehicleModel";
import "../css/table.css";

const AllToll = () => {
  const allTolls = store.get("allTolls");
  const [open, setOpen] = useState(false);
  const [vehicleModel, setVehicleModel] = useState(false);

  const navigate = useNavigate();
  return (
    <>
      <h1 style={{ color: "black" }}>Toll List</h1>
      <div
        style={{
          display: "flex",
          flexDirection: " row-reverse",
          gap: "10px",
          marginRight: "30%",
          marginBottom: " 15px",
        }}
      >
        <button className="btnCss" onClick={() => setOpen(true)}>
          Add Toll
        </button>
        <button className="btnCss" onClick={() => navigate("/")}>
          View All Vehicles
        </button>
        <button className="btnCss" onClick={() => setVehicleModel(true)}>
          Add Vehicle Details
        </button>
      </div>
      <div class="container">
        <table class="rwd-table">
          <tbody>
            <tr>
              <th>TOLL NAME</th>
              <th>CAR/JEEP/VAN</th>
              <th>LCV</th>
              <th>TRUCK/BUS</th>
              <th>HEAVY-VEHICLE</th>
            </tr>

            {allTolls?.map((x) => {
              return (
                <>
                  <tr>
                    <td data-th="Vehicle Type">{x.name}</td>
                    <td data-th="Vehicle Number">
                      {x.fare1.single} / {x.fare1.return}
                    </td>
                    <td data-th="Date Time">
                      {x.fare2.single} / {x.fare2.return}
                    </td>
                    <td data-th="Toll Name">
                      {x.fare3.single} / {x.fare3.return}
                    </td>
                    <td data-th="Tariff">
                      {x.fare4.single} / {x.fare4.return}
                    </td>
                  </tr>
                </>
              );
            })}
          </tbody>
        </table>
      </div>
      <AddTollModel open={open} setOpen={setOpen} />
      <AddVehicleModel open={vehicleModel} setOpen={setVehicleModel} />
    </>
  );
};

export default AllToll;
