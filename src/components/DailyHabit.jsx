import styled from "styled-components";
import { useState } from "react";


export default function DailyHabit ({habit}) {    

    return (
    <HabitContainer>
        <div>
        <HabitName>{habit.name}</HabitName>
        <HabitStats>
            Sequência atual: {habit.currentSequence} dias
            <br/>
            Seu recorde: {habit.highestSequence} dias
            <br/>
        </HabitStats>
        </div>
        <HabitCheck>
            <ion-icon name="checkmark-outline"></ion-icon>
        </HabitCheck>
    </HabitContainer>
    )
}

const HabitCheck = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    width: 69px;
    height: 69px;
    border-radius: 5px;
    border: 1px solid #E7E7E7;
    background-color: #EBEBEB;
    ion-icon {
        width: 35px;
        height: 28px;
        color: white;
    }
`

const HabitContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
    width: 340px;
    height: 91px;
    background-color: #FFFFFF;
    border-radius: 5px;
    margin-bottom: 10px;
    padding: 16px;
    box-sizing: border-box;
`

const HabitName = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    box-sizing: border-box;
    margin-bottom: 8px;
    font-family: Lexend Deca;
    font-weight: 400;
    font-size: 19.98px;
    line-height: 100%;
    letter-spacing: 0%;
    color: #666666;
`;

const HabitStats = styled.div`
    font-family: Lexend Deca;
    font-weight: 400;
    font-size: 12.98px;
    line-height: 100%;
    letter-spacing: 0%;

`

