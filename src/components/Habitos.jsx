import React from 'react';
import styled from "styled-components";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

export default function Habitos() {
    return (
        <Body>
            <Head>
                <h1>TrackIt</h1>
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Cathartes_aura_-Florida_-USA_-upper_body-8.jpg/220px-Cathartes_aura_-Florida_-USA_-upper_body-8.jpg" alt="photo" />
            </Head>
            <Titles>
                <h1>Meus Hábitos</h1>
                <button>
                    <h1>+</h1>
                </button>
            </Titles>
            <MyHabits>
                <h1>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</h1>
            </MyHabits>
            <Foot>
                <HabitsList>
                    <h1>Hábitos</h1>
                </HabitsList>
                <TodayList>
                    <h1>Hoje</h1>
                </TodayList>
            </Foot>
        </Body>
    )
}

const Body = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100vh;
`

const Head = styled.div`
    display: flex;
    flex-direction: row;
    align-items:center;
    justify-content: space-between;
    min-width: 375px;
    height: 75px;
    background-color: #126BA5;
    padding: 10px;
    box-sizing: border-box;
    h1 {
        font-family: Playball;
        font-weight: 400;
        font-size: 38.98px;
        line-height: 100%;
        letter-spacing: 0%;
        color: #FFFFFF;
    }
    img {
        width: 51px;
        height: 51px;
        border-radius: 98.5px;
    }
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
const Foot = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 65px;
    position: fixed;
    bottom: 0;
`

const HabitsList = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 50%;
    height: 100%;
    background-color: #52B6FF;
    h1 {
        font-family: Lexend Deca;
        font-weight: 400px;
        font-size: 18.98px;
        line-height: 100%;
        letter-spacing: 0%;
        color: #FFFFFF;
    }
`

const TodayList = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 50%;
    height: 100%;
    background-color: #FFFFFF;
    h1 {
        font-family: Lexend Deca;
        font-weight: 400px;
        font-size: 18.98px;
        line-height: 100%;
        letter-spacing: 0%;
        color: #52B6FF;
    }
`