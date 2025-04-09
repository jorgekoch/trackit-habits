import styled from "styled-components";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

export default function Habit () {
    const [habits, setHabits] = useState([]);
 

    useEffect(() => {
        const token = localStorage.getItem("token");
        const config = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        };

        axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits", config)
        .then(response => {
            setHabits(response.data);
        })
        .catch(error => console.log(error.response.data));
    }, []);


    return (
        <HabitContainer>
        <HabitName
            type="text" 
            placeholder="nome do hábito"
            value={habits.name}
            />
        <HabitDays>
            <Day>
            </Day>
        </HabitDays>
    </HabitContainer>
    )
}

// [
// 	{
// 		id: 1,
// 		name: "Nome do hábito",
// 		days: [1, 3, 5]
// 	},
// 	{
// 		id: 2,
// 		name: "Nome do hábito 2",
// 		days: [1, 3, 4, 6]
// 	}
// ]

const HabitContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 340px;
    height: 180px;
    background-color: #FFFFFF;
    border-radius: 5px;
    margin-bottom: 10px;
    padding: 16px;
    box-sizing: border-box;
    position: relative;
`

const HabitName = styled.input`
    width: 303px;
    height: 45px;
    justify-content: center;
    align-items: center;
    background-color: #FFFFFF;
    border-radius: 5px;
    border: 1px solid #D5D5D5;
    padding: 10px;
    box-sizing: border-box;
    margin-bottom: 8px;
`
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