import React from 'react';
import './Current_weather.css'

const Current_weather = ({data}) => {
    return (
        <div className='weather'>
            <div className='top_we'>
                <div>
                    <p className='city'>{data.city}</p>
                    <p className='weather_description'>{data.weather[0].description}</p>
                </div>
                <img src={`icons/${data.weather[0].icon}.png`} alt='Weather' className='weather_icon'></img>
            </div>
            <div className='bottom_we'>
                <p className='temperature'>{Math.round(data.main.temp)}°C</p>
                <div className='tempdetails'>
                    <div className='parameter'>
                        <span className='parameter_label det_top'>Details</span>
                    </div>
                    <div className='parameter'>
                        <span className='parameter_label'>Feels like</span>
                        <span className='parameter_value'>{Math.round(data.main.feels_like)}°C</span>
                    </div>
                    <div className='parameter'>
                        <span className='parameter_label'>Wind</span>
                        <span className='parameter_value'>{data.wind.speed} m/s</span>
                    </div>
                    <div className='parameter'>
                        <span className='parameter_label'>Humidity</span>
                        <span className='parameter_value'>{data.main.humidity}%</span>
                    </div>
                    <div className='parameter'>
                        <span className='parameter_label'>Pressure</span>
                        <span className='parameter_value'>{data.main.pressure} hPa</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Current_weather;