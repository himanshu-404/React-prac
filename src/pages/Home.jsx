import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import AddTollModel from "../components/AddTollModel";
import store from "store";
import AddVehicleModel from "../components/AddVehicleModel";
import "../css/table.css";

const Home = () => {
  const [open, setOpen] = useState(false);
  const [vehicleModel, setVehicleModel] = useState(false);
  const vehicleData = store.get("vehicles");

  const navigate = useNavigate();

  return (
    <>
      <h2>Toll Managmnet Application</h2>
      <button onClick={() => setOpen(true)}>add TOll</button>
      <button onClick={() => navigate("allTolls")}>view toll</button>
      <button onClick={() => setVehicleModel(true)}>Add Vehicle</button>
      <div class="tblcontainer">
        <table class="rwd-table">
          <tbody>
            <tr>
              <th>VEHICLE TYPE</th>
              <th>VEHICLE NUMBER</th>
              <th>DATE TIME</th>
              <th>TOLL NAME</th>
              <th>TARIFF</th>
            </tr>

            {vehicleData?.map((x) => {
              return (
                <>
                  <tr>
                    <td data-th="Vehicle Type">{x.vehicle}</td>
                    <td data-th="Vehicle Number">{x.vehicleNumber}</td>
                    <td data-th="Date Time">
                      {new Date(x.date).toLocaleDateString() +
                        " / " +
                        new Date(x.date).toLocaleTimeString()}
                    </td>
                    <td data-th="Toll Name">{x.toll}</td>
                    <td data-th="Tariff">{x.tariff}</td>
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

export default Home;
