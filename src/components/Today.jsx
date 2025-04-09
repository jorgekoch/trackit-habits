import React from 'react';
import styled from "styled-components";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Header from "./Header";


export default function Today() {
    return (
        <Body>
            <Header />
            <Titles>
                <h1>DATA</h1>
            </Titles>
            <MyHabits>
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
    background-color: #f2f2f2;
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

const TodayList = styled.div`
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