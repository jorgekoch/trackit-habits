import React from 'react';
import styled from "styled-components";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import NewHabit from "./NewHabit";
import Habit from "./Habit";

export default function Habitos() {
    const [showForm, setShowForm] = useState(false);
    
    return (
        <Body>
            <Header />
            <Titles>
                <h1>Meus Hábitos</h1>
                <button onClick={() => setShowForm(true)}>
                    <h1>+</h1>
                </button>
            </Titles>
            <MyHabits>
               <NewHabit showForm={showForm} setShowForm={setShowForm}/>
                <Habit />
                <h1>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</h1>
            </MyHabits>
            <Footer />
        </Body>
    )
}


const Body = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100vh;
    background-color: #f2f2f2;
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
    h1 {
        font-family: Lexend Deca;
        font-weight: 400;
        font-size: 22.98px;
        line-height: 100%;
        letter-spacing: 0%;
        color: #126BA5;
    }
    button {
        width: 40px;
        height: 35px;
        border-radius: 4.64px;
        background-color: #52B6FF;
        border: none;
        h1 {
            font-family: Lexend Deca;
            font-weight: 400;
            font-size: 26.98px;
            line-height: 100%;
            letter-spacing: 0%;
            text-align: center;
            color: #FFFFFF;
        }
    }
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
`

