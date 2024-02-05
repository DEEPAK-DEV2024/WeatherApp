import React, { useEffect, useState } from "react";
import "./CSS/style.css";
import Ocean from "./Ocean";

const WeatherApp = () => {
  const [City, setCiTy] = useState(null);
  const [Search, setSearch] = useState("jaipur");

  useEffect(() => {
    const fetchApi = async () => {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${Search}&units=metric&appid=54cdb5252a21bc88965fd92d7f9fcf89`;
      const response = await fetch(url);
      // console.log(response);
      const result = await response.json();
      // console.log(result);
      setCiTy(result.main);
    };

    fetchApi();
  }, [Search]);

  return (
    <>
      <div className="box">
        <h1>Weather App</h1>
        <div className="inputBox">
          <label className="custom-field two">
            <input
              id="inputfield"
              type="search"
              onChange={(event) => {
                setSearch(event.target.value);
              }}
              name="cityName"
              placeholder="&nbsp;"
            />
            <span className="placeholder">Enter City Name</span>
          </label>
        </div>
        {!City ? (
          <p>No Data Found</p>
        ) : (
          <div className="infoBox">
            <div className="info">
              <h2 className="loction">
                <i className="fa-solid fa-street-view"></i> {Search}
              </h2>
              <h1 className="temp">{City.temp} &deg;C</h1>
              <h3 className="min_max">
                Min : {City.temp_min} &deg;C| Max : {City.temp_max} &deg;C
              </h3>
            </div>

            <Ocean />
          </div>
        )}
      </div>
    </>
  );
};

export default WeatherApp;
