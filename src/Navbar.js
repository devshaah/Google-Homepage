import React, { useEffect, useState } from "react";
import "./style.scss";
import more from "./more.png";
import profile from "./profile.png";
import axios from "axios";

const Navbar = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchdata = async () => {
      const options = {
        method: 'GET',
        url: 'https://weatherapi-com.p.rapidapi.com/current.json',
        params: {q: '19.0760, 72.8777'},
        headers: {
          'X-RapidAPI-Key': '1e957e3163msh038748693f59828p1e1110jsn375aa4699a71',
          'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
        }
      };
      
      try {
        const response = await axios.request(options);
        setData(response.data.current);
        console.log(response.data.current);
      } catch (error) {
        console.log(error);
      }
    };
    fetchdata();
  }, []);

  return (
    <div className="navbar">
      <div className="weather">
          <h3>Temp : {data.feelslike_c}°C </h3>
          {/* <p>{data}</p> */}
      </div>
      <div className="elem">
        <p className="nav-items">Gmail</p>
        <p className="nav-items">Images</p>
        <img src={more} className=" navlogo more" />
        <img src={profile} className="navlogo" />
      </div>
    </div>
  );
};

export default Navbar;
