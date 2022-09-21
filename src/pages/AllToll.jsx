import React from "react";
import store from "store";
import "../css/table.css";

const AllToll = () => {
  const allTolls = store.get("allTolls");
  console.log("allTolls", allTolls);
  return (
    <div>
      <h1>Toll List</h1>
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
    </div>
  );
};

export default AllToll;
