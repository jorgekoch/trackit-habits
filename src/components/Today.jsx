import React from 'react';
import styled from "styled-components";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import Header from "./Header";
import FooterToday from "./FooterToday";
import DailyHabit from "./DailyHabit";
import UserContext from "../context/UserContext";
import { useContext } from "react";


export default function Today() {
    const [user, setUser] = useContext(UserContext);
    const [habits, setHabits] = useState([]);
    const navigate = useNavigate();
    const date = new Date();
    const weekday = date.getDay();
    const weekdays = ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"];
    const weekdayName = weekdays[weekday];
    const opcoesFormatacao = { day: 'numeric', month: '2-digit' };
    const dataFormatada = date.toLocaleDateString('pt-BR', opcoesFormatacao);

    useEffect(() => {
        updateHabits();
    }, []);

    function updateHabits() {
        const token = localStorage.getItem("token");
        if (!token) {
            navigate("/");
        }
        const config = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        };

        axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today", config)
        .then(response => setHabits(response.data))
        .catch(error => console.log(error.response.data));
    }

    return (
        <Body>
            <Header />
            <Titles>
                {weekdayName}, {dataFormatada}
            </Titles>
            <MyHabits>
                {habits.map((habit) => (
                    <DailyHabit
                    key={habit.id} 
                    habit={habit} 
                    updateHabits={updateHabits}
                    />
                ))}
            </MyHabits>
            <FooterToday />
        </Body>
    )
}

const Body = styled.div`
    display: flex;
    flex-direction: column;
    min-width: 100%;
    min-height: 100vh;
    background-color: #f2f2f2;
    position: relative;
    top: 75px;
`

const Titles = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    min-width: 375px;
    height: 75px;
    padding: 10px;
    box-sizing: border-box;
    font-family: Lexend Deca;
    font-weight: 400;
    font-size: 22.98px;
    line-height: 100%;
    letter-spacing: 0%;
    color: #126BA5;

`
const MyHabits = styled.div`
    font-family: Lexend Deca;
    font-weight: 400;
    font-size: 17.98px;
    line-height: 100%;
    letter-spacing: 0%;
    color: #666666;
    padding: 10px;
    box-sizing: border-box;
    padding-bottom: 65px;
`
