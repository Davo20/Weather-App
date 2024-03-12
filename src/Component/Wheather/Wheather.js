import React, { useState, useEffect } from "react";
import { BsSearch } from "react-icons/bs";
import { MdLocationOn } from "react-icons/md";
import clear from "../../img/clear.png";
import clouds from "../../img/clouds.png";
import rain from "../../img/rain.png";
import drizzle from "../../img/drizzle.png";
import snow from "../../img/snow.png";
import mist from "../../img/mist.png";
import humidityIcon from "../../img/humidity.png";
import windIcon from "../../img/wind.png"
import "../wheather.scss"

export default function Wheather() {
    const [cloudy, setCloudy] = useState({})
    const [cloudyIcon, setCloudyIcon] = useState()
    const [locationCity, setLocationCity] = useState()
    const inputValue = document.getElementsByClassName("search")
    let apikey = "06bade8d8bc5be9845c0f9c00643b255"
   
    const temp = document.getElementsByClassName("temp")
    const humidity = document.getElementsByClassName("humidity")
    const wind = document.getElementsByClassName("wind")
    const location = document.getElementsByClassName("location")
    useEffect(()=>{
        let url = `https://api.openweathermap.org/data/2.5/weather?q=Yerevan&units=Metric&appid=${apikey}`
        fetch(url)
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                temp[0].innerHTML = `${Math.round(data.main.temp)}°C`
                setLocationCity(data.name)
                humidity[0].innerHTML = `${data.main.humidity}%`
                wind[0].innerHTML = `${data.wind.speed}km/h`
                console.log(data)
                if(data.weather[0].main == "Clear"){
                    setCloudyIcon(clear)
                }
                else if(data.weather[0].main == "Clouds"){
                    setCloudyIcon(clouds)
                }
                else if(data.weather[0].main == "Rain"){
                    setCloudyIcon(rain)
                }
                else if(data.weather[0].main == "Snow"){
                    setCloudyIcon(snow)
                }
                else if(data.weather[0].main == "Drizzle"){
                    setCloudyIcon(drizzle)
                }
                else if(data.weather[0].main == "Mist"){
                    setCloudyIcon(mist)
                }
            });
    }, [])

    const search = () => {
        console.log(inputValue[0].value)
        if(inputValue[0].value == ""){
            return 0
        }
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${inputValue[0].value}&units=Metric&appid=${apikey}`
        fetch(url)
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                temp[0].innerHTML = `${Math.round(data.main.temp)}°C`
                setLocationCity(data.name)
                humidity[0].innerHTML = `${data.main.humidity}%`
                wind[0].innerHTML = `${data.wind.speed}km/h`
                if(data.weather[0].main == "Clear"){
                    setCloudyIcon(clear)
                }
                else if(data.weather[0].main == "Clouds"){
                    setCloudyIcon(clouds)
                }
                else if(data.weather[0].main == "Rain"){
                    setCloudyIcon(rain)
                }
                else if(data.weather[0].main == "Snow"){
                    setCloudyIcon(snow)
                }
                else if(data.weather[0].main == "Drizzle"){
                    setCloudyIcon(drizzle)
                }
                else if(data.weather[0].main == "Mist"){
                    setCloudyIcon(mist)
                }
                console.log(data)
            });
    }
    // console.log(cloudy)
    return (
        <div className="wheatherCard">
            <div className="wheatherCardCont">
                <div className="locationSearch">
                    <input type="text" className="search" ></input>
                    <div onClick={search}>
                        <BsSearch></BsSearch>
                    </div>
                </div>
                <div className="cloudy">
                    <img src={cloudyIcon}></img>
                    <h2 className="temp"></h2>
                    <h3 className="location">
                        <MdLocationOn></MdLocationOn>
                        {locationCity}
                    </h3>
                </div>
                <div className="weatherInfo">
                    <div>
                        <img src={humidityIcon}></img>
                        <div>
                            <span className="humidity"></span>
                            <span>Humidity</span>
                        </div>
                    </div>
                    <div>
                        <img src={windIcon}></img>
                        <div>
                            <span className="wind"></span>
                            <span>Wind</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}