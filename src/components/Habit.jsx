import styled from "styled-components";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

export default function Habit ({habit}) {

    const [selectedDays, setSelectedDays] = useState(habit.days);
    const [habitName, setHabitName] = useState(habit.name);

    console.log(habit.name);
    return (
    <HabitContainer>
        <HabitName>{habit.name}</HabitName>
        <HabitDays>
            {habit.days.map((day, index) => (
                <Day key={index} selected={selectedDays.includes(day)}>
                    {day}
                </Day>
            ))} 
        </HabitDays>
    </HabitContainer>
    )
}


const HabitContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 340px;
    height: 91px;
    background-color: #FFFFFF;
    border-radius: 5px;
    margin-bottom: 10px;
    padding: 16px;
    box-sizing: border-box;
    position: relative;
`

const HabitName = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    margin-bottom: 8px;
    font-family: Lexend Deca;
    font-weight: 400;
    font-size: 19.98px;
    line-height: 100%;
    letter-spacing: 0%;
    color: #666666;
`;

const HabitDays = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    gap: 4px;
    width: 100%;
    height: 30px;
    margin-bottom: 8px;
`
const Day = styled.div`
    width: 30px;
    height: 30px;
    background-color: ${({ selected }) => (selected ? "#CFCFCF" : "#FFFFFF")}; 
    border: 1px solid ${({ selected }) => (selected ? "#CFCFCF" : "#D5D5D5")}; 
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: Lexend Deca;
    font-weight: 400;
    font-size: 20px;
    line-height: 100%;
    letter-spacing: 0%;
    color: ${({ selected }) => (selected ? "#FFFFFF" : "#DBDBDB")}; // Cor do texto
    cursor: pointer;
`