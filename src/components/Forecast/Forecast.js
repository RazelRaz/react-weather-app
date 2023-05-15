import React from 'react';
import './Forecast.css'
import { Accordion, AccordionItem, AccordionItemButton, AccordionItemHeading, AccordionItemPanel } from 'react-accessible-accordion';

// array of days
const WEEK_DAYS = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];


const Forecast = ({data}) => {

    const dayInAWeek = new Date().getDay();
    const forcastDays = WEEK_DAYS.slice(dayInAWeek, WEEK_DAYS.length).concat(WEEK_DAYS.slice(0, dayInAWeek));
    // console.log(forcastDays);
    

    return (
        <>
            <label className='d_title'>Daily - Next 7 days </label>
            <Accordion allowZeroExpanded>
                {data.list.splice(0, 7).map((item, idx) => (
                   
                    
                    <AccordionItem key={idx}>
                        <AccordionItemHeading>
                            <AccordionItemButton>
                                <div className='daily_item'>
                                    <img src={`icons/${item.weather[0].icon}.png`} alt='weather' className='icon_small'></img>
                                    <label className='day'> {forcastDays[idx]} </label>
                                    <label className='description'> {item.weather[0].description} </label>
                                    <label className='min_max'> {Math.round(item.main.temp_min)}°C / {Math.round(item.main.temp_max)}°C </label>
                                </div>
                            </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel></AccordionItemPanel>
                    </AccordionItem>
                ))}
            </Accordion>
        </>
    );
};

export default Forecast;