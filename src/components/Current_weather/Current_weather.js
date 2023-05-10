import React from 'react';
import './Current_weather.css'

const Current_weather = () => {
    return (
        <div className='weather'>
            <div className='top_we'>
                <div>
                    <p className='city'>Belgrade</p>
                    <p className='weather_description'>Sunny</p>
                </div>
                <img src='icons/01d.png' alt='Weather' className='weather_icon'></img>
            </div>
            <div className='bottom_we'>
                <p className='temperature'>18°C</p>
                <div className='tempdetails'>
                    <div className='parameter'>
                        <span className='parameter_label'>Details</span>
                    </div>
                    <div className='parameter'>
                        <span className='parameter_label'>Feels like</span>
                        <span className='parameter_value'>22°C</span>
                    </div>
                    <div className='parameter'>
                        <span className='parameter_label'>Wind</span>
                        <span className='parameter_value'>2.06 m/s</span>
                    </div>
                    <div className='parameter'>
                        <span className='parameter_label'>Humidity</span>
                        <span className='parameter_value'>78%</span>
                    </div>
                    <div className='parameter'>
                        <span className='parameter_label'>Pressure</span>
                        <span className='parameter_value'>1015 hPa</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Current_weather;