import React from 'react';
import styled from "styled-components";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import logo from "../images/Trackit logo.png";


export default function Signup () {
    return (
        <Body>
        <img src={logo} alt="TrackIt Logo" />
            <Form>
                <input type="email" placeholder="email" required />
                <input type="password" placeholder="senha" required />
                <input type="name" placeholder="nome" required />
                <input type="picture" placeholder="foto" required />
                <button type="submit">Cadastrar</button>
            </Form>
            <Login>Já tem uma conta? Faça login!</Login>
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

const Login = styled.div`
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