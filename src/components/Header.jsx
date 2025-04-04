import styled from "styled-components";

export default function Header() {
    return (
        <HeaderContainer>
            <h1>TrackIt</h1>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Cathartes_aura_-Florida_-USA_-upper_body-8.jpg/220px-Cathartes_aura_-Florida_-USA_-upper_body-8.jpg" alt="photo" />
        </HeaderContainer>
    )
}

const HeaderContainer = styled.div`
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