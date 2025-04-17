import styled from "styled-components";
import { useContext } from "react";
import UserContext from "../context/UserContext";

export default function Header() {
    const [user, setUser] = useContext(UserContext);
    
    return (
        <HeaderContainer>
            <h1>TrackIt</h1>
            <img src={user.image} alt="photo" />
        </HeaderContainer>
    )
}

const HeaderContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items:center;
    justify-content: space-between;
    min-width: 100%;
    height: 75px;
    background-color: #126BA5;
    padding: 10px;
    box-sizing: border-box;
    position: fixed;
    top: 0;
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