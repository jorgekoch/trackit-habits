import { useNavigate } from "react-router-dom";
import styled from "styled-components";

export default function FooterToday() {
    const navigate = useNavigate();

    function handleClick() {
        navigate("/habitos");
    }
    return (
        <FooterContainer>
            <HabitsList onClick={handleClick}>
                <h1>Hábitos</h1>
            </HabitsList>
            <TodayList>
                <h1>Hoje</h1>
            </TodayList>
        </FooterContainer>
    )
}

const FooterContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 65px;
    position: fixed;
    bottom: 0;
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