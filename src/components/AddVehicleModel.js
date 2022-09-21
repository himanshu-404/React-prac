import React, { useState } from "react";
import store from "store";
import Model from "./Model";

const AddVehicleModel = ({ open, setOpen }) => {
  const allTolls = store.get("allTolls");
  const vehicleData = store.get("vehicles");

  const addVehicle = () => {
    let regex = /^[A-Z]{2}[0-9]{1,2}[A-Z]{1,2}[0-9]{1,4}$/;

    let checkNumber = regex.test(details.vehicleNumber);

    if (!checkNumber) {
      alert("Enter Valid Vehicle Number ");
    }

    if (vehicleData == undefined) {
      store.set("vehicles", [{ ...details, date: new Date() }]);
      alert("Vehicle Added Succsessfully");
      setOpen(false);
      setDetails({ toll: "", vehicle: "", tariff: "", vehicleNumber: "" });
    } else {
      store.set("vehicles", [...vehicleData, { ...details, date: new Date() }]);
      alert("Vehicle Added Succsessfully");
      setOpen(false);
      setDetails({ toll: "", vehicle: "", tariff: "", vehicleNumber: "" });
    }
  };

  const [details, setDetails] = useState({
    toll: "",
    vehicle: "",
    tariff: "",
    vehicleNumber: "",
  });

  function diff_hours(dt2, dt1) {
    dt2 = new Date(dt2);
    dt1 = new Date(dt1);
    let diff = (dt2.getTime() - dt1.getTime()) / 1000;
    diff /= 60 * 60;
    return Math.abs(Math.round(diff));
  }

  const change = (e) => {
    setDetails({
      ...details,
      [e.target.name]: e.target.value,
    });
  };

  const tariffValue = () => {
    let data = allTolls?.find((x) => {
      return x.name === details.toll;
    });

    let vehicle = vehicleData.filter((x) => {
      return (
        x.vehicleNumber === details.vehicleNumber && x.toll === details.toll
      );
    });

    if (
      vehicle?.length % 2 !== 0 &&
      vehicle[vehicle.length - 1].toll === details.toll
    ) {
      const hours = diff_hours(new Date(), vehicle[vehicle.length - 1]?.date);
      if (hours < 1) {
        if (details.vehicle === "CAR/JEEP/VAN") {
          setDetails({ ...details, tariff: data?.fare1?.return });
        }
        if (details.vehicle === "LCV") {
          setDetails({ ...details, tariff: data?.fare2?.return });
        }
        if (details.vehicle === "TRUCK/BUS") {
          setDetails({ ...details, tariff: data?.fare3?.return });
        }
        if (details.vehicle === "HEAVY VEHICLE") {
          setDetails({ ...details, tariff: data?.fare4?.return });
        }
      }
    } else {
      if (details.vehicle === "CAR/JEEP/VAN") {
        setDetails({ ...details, tariff: data?.fare1?.single });
      }
      if (details.vehicle === "LCV") {
        setDetails({ ...details, tariff: data?.fare2?.single });
      }
      if (details.vehicle === "TRUCK/BUS") {
        setDetails({ ...details, tariff: data?.fare3?.single });
      }
      if (details.vehicle === "HEAVY VEHICLE") {
        setDetails({ ...details, tariff: data?.fare4?.single });
      }
    }
  };

  React.useEffect(() => {
    tariffValue();
  }, [details.toll, details.vehicle, details.vehicleNumber]);

  return (
    <>
      {open && (
        <Model open={open} setOpen={setOpen} header="Add Vehicle">
          <div class="container">
            <hr />
            <label for="Select Toll">
              <b>Select Toll Name</b>
            </label>

            <div className="formSelect">
              <select onChange={change} name="toll">
                <option value="">Select Toll Name</option>

                {allTolls?.map((e) => {
                  return <option value={e.name}>{e.name}</option>;
                })}
              </select>
            </div>
          </div>
          <label for="Select Vehicle">
            <b>Select Vehicle Type</b>
          </label>

          <div className="formSelect">
            <select onChange={change} name="vehicle">
              <option value="">Select Vehicle type</option>

              <option value="CAR/JEEP/VAN">CAR/JEEP/VAN</option>
              <option value="LCV">LCV</option>
              <option value="TRUCK/BUS">TRUCK/BUS</option>
              <option value="HEAVY VEHICLE">HEAVY VEHICLE</option>
            </select>
          </div>

          <div>
            <label for="Vehicle Number">
              <b>Vehicle Number</b>
            </label>
          </div>
          <input
            type="text"
            pattern="^[A-Z]{2}[ -][0-9]{1,2}(?: [A-Z])?(?: [A-Z]*)? [0-9]{4}$"
            placeholder="Enter Vehicle Number"
            name="vehicleNumber"
            value={details.vehicleNumber}
            onChange={change}
            style={{ width: "30%" }}
          />

          <div>
            <label for="Tariff">
              <b>Tariff</b>
            </label>
          </div>
          <input
            disabled
            type="number"
            placeholder="Enter Toll Name"
            name="tariff"
            value={details.tariff}
          />
          <button class="submitbtn" onClick={() => addVehicle()}>
            Add Details
          </button>
        </Model>
      )}
    </>
  );
};

export default AddVehicleModel;
