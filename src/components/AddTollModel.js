import React, { useState } from "react";
import Model from "./Model";
import store from "store";
import "../css/form.css";

const AddTollModel = ({ open, setOpen }) => {
  const [tollName, setTollName] = useState("");
  const [fare1, setFare1] = useState({
    vehicle: "CAR/JEEP/VAN",
    single: null,
    return: null,
  });
  const [fare2, setFare2] = useState({
    vehicle: "LCV",
    single: null,
    return: null,
  });
  const [fare3, setFare3] = useState({
    vehicle: "TRUCK/BUS",
    single: null,
    return: null,
  });
  const [fare4, setFare4] = useState({
    vehicle: "HEAVY VEHICLE",
    single: null,
    return: null,
  });

  let ad = store.get("allTolls");

  const addToll = () => {
    if (tollName === "") {
      alert("Toll Name is Required");
    } else if (
      !fare1.single ||
      !fare1.return ||
      !fare2.return ||
      !fare2.single ||
      !fare3.single ||
      !fare3.return ||
      !fare4.single ||
      !fare4.return
    ) {
      alert("All Flieds are required");
    } else {
      if (ad === undefined) {
        store.set("allTolls", [{ name: tollName, fare1, fare2, fare3, fare4 }]);
        alert("Toll Added Succsessfully");
        setOpen(false);
        setTollName("");
        setFare1({ vehicle: "CAR/JEEP/VAN", single: null, return: null });
        setFare2({ vehicle: "LCV", single: null, return: null });
        setFare3({ vehicle: "TRUCK/BUS", single: null, return: null });
        setFare4({ vehicle: "HEAVY VEHICLE", single: null, return: null });
      }

      store.set("allTolls", [
        ...ad,
        { name: tollName, fare1, fare2, fare3, fare4 },
      ]);
      alert("Toll Added Succsessfully");
      setOpen(false);
      setTollName("");
      setFare1({ vehicle: "CAR/JEEP/VAN", single: null, return: null });
      setFare2({ vehicle: "LCV", single: null, return: null });
      setFare3({ vehicle: "TRUCK/BUS", single: null, return: null });
      setFare4({ vehicle: "HEAVY VEHICLE", single: null, return: null });
    }
  };

  return (
    <>
      {open && (
        <Model open={open} setOpen={setOpen} header="Add Toll">
          <div class="container">
            <hr />

            <label for="Toll name">
              <b>Toll Name</b>
            </label>
            <input
              type="text"
              placeholder="Enter Toll Name"
              name="tollName"
              value={tollName}
              onChange={(e) => setTollName(e.target.value)}
            />

            <label for="Fare Details">
              <b>Vehicle fare details</b>
            </label>

            <div className="formSelect">
              <input type="input" value={"CAR/JEEP/VAN"} />
              <input
                type="number"
                placeholder="Single Fare"
                value={fare1.single}
                onChange={(e) => {
                  setFare1({ ...fare1, single: Number(e.target.value) });
                }}
              />
              <input
                type="number"
                placeholder="Return Fare"
                value={fare1.return}
                onChange={(e) => {
                  setFare1({ ...fare1, return: Number(e.target.value) });
                }}
              />
            </div>
            <div className="formSelect">
              <input type="input" value={"LCV"} />
              <input
                type="number"
                placeholder="Single Fare"
                value={fare2.single}
                onChange={(e) => {
                  setFare2({ ...fare2, single: Number(e.target.value) });
                }}
              />
              <input
                type="number"
                placeholder="Return Fare"
                value={fare2.return}
                onChange={(e) => {
                  setFare2({ ...fare2, return: Number(e.target.value) });
                }}
              />
            </div>
            <div className="formSelect">
              <input type="input" value={"TRUCK/BUS"} />
              <input
                type="number"
                placeholder="Single Fare"
                value={fare3.single}
                onChange={(e) => {
                  setFare3({ ...fare3, single: Number(e.target.value) });
                }}
              />
              <input
                type="number"
                placeholder="Return Fare"
                value={fare3.return}
                onChange={(e) => {
                  setFare3({ ...fare3, return: Number(e.target.value) });
                }}
              />
            </div>
            <div className="formSelect">
              <input type="input" value={"HEAVY-VEHICLE"} />
              <input
                type="number"
                placeholder="Single Fare"
                value={fare4.single}
                onChange={(e) => {
                  setFare4({ ...fare4, single: Number(e.target.value) });
                }}
              />
              <input
                type="number"
                placeholder="Return Fare"
                value={fare4.return}
                onChange={(e) => {
                  setFare4({ ...fare4, return: Number(e.target.value) });
                }}
              />
            </div>

            <button class="submitbtn" onClick={() => addToll()}>
              Add Details
            </button>
          </div>
        </Model>
      )}
    </>
  );
};

export default AddTollModel;
