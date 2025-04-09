import React from 'react';
import styled from "styled-components";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import { useState } from "react";
import logo from "../images/Trackit logo.png";
import axios from "axios";
import BouncingDotsLoader from "./BouncingDotsLoader";


export default function Home () {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [disabled, setDisabled] = useState(false);
    const [loading, setLoading] = useState(false);

    function logIn(e) {
        e.preventDefault();
        setLoading(true);
        setDisabled(true);
        if (email === "" || password === "") {
            alert("Preencha todos os campos!");
            setLoading(false);
            setDisabled(false);
            return;
        }

        const user = { email, password }; 
        const promise = axios.post('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login', user);
        promise.then((response) => {
            localStorage.setItem("token", response.data.token);
            navigate('/habitos');
            setLoading(false);
            setDisabled(false);
        });
        promise.catch(err => {
            console.log(err.response.data)
            alert("Erro ao fazer login!");
            setLoading(false);
            setDisabled(false);
        });
    }

    return (
        <Body>
        <img src={logo} alt="TrackIt Logo" />
            <Form onSubmit={logIn}>
                <input 
                    type="email" 
                    placeholder="email" 
                    required 
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    disabled={disabled}/>
                <input 
                    type="password" 
                    placeholder="senha" 
                    required 
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    disabled={disabled}/>
                <button type="submit" disabled={disabled}>
                    {loading ? <BouncingDotsLoader /> : "Entrar"}
                </button>
            </Form>
            <Tosignup onClick={() => navigate('/signup')} >Não tem uma conta? Cadastre-se!</Tosignup>
        </Body>
    );
}

const Body = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    width: 100%;
    min-height: 100vh;
    background-color: #FFFFFF;
    img {
        width: 180px;
        height: 178px;
    }
    input:disabled {
    border: 1px solid #D4D4D4;
    background-color: #f2f2f2;
    color: #AFAFAF; 
    cursor: not-allowed;
    }
    button:disabled {
        background-color: #86ccff;
        cursor: not-allowed;
    }

`

const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    input {
        width: 100%;
        max-width: 303px;
        height: 45px;
        margin-bottom: 10px;
        border-radius: 5px;
        border: 1px solid #D4D4D4;
        background-color: #FFFFFF;
        padding: 10px;
        box-sizing: border-box;
        font-family: Lexend Deca;
        font-weight: 400;
        font-size: 19.98px;
        line-height: 100%;
        letter-spacing: 0%;
        color: #DBDBDB;

    }
    button {
        width: 100%;
        max-width: 303px;
        height: 45px;
        border-radius: 5px;
        padding: 0;
        font-family: Lexend Deca;
        font-weight: 400;
        font-size: 20.98px;
        line-height: 100%;
        letter-spacing: 0%;
        text-align: center;
        color: #FFFFFF;
        background-color: #52B6FF;
        border: none;
    }
`

const Tosignup = styled.div`
    font-family: Lexend Deca;
    font-weight: 400;
    font-size: 13.98px;
    line-height: 100%;
    letter-spacing: 0%;
    text-align: center;
    text-decoration: underline;
    text-decoration-style: solid;
    text-decoration-offset: 0%;
    text-decoration-thickness: 0%;
    color: #52B6FF;

`