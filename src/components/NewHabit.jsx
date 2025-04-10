import { useState } from "react"
import styled from "styled-components"
import axios from "axios"

export default function NewHabit({ showForm, setShowForm }) {
    const [diasSelecionados, setDiasSelecionados] = useState([]);
    const [nomeHabito, setNomeHabito] = useState("");

    function criarHabito() {
        if (nomeHabito === "" || diasSelecionados.length === 0) {
            alert("Preencha todos os campos!");
            return;
        }   

        const novoHabito = { name: nomeHabito, days: diasSelecionados };
        console.log(novoHabito);

        const token = localStorage.getItem("token");

        const config = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        };
        
        const url = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits";
        const promise = axios.post(url, novoHabito, config);
        promise.then(() => console.log("ok"));
        promise.catch(() => console.log("erro"));
        setShowForm(false);
    }

    const dias = [
        { id: 0, nome: "D" },
        { id: 1, nome: "S" },
        { id: 2, nome: "T" },
        { id: 3, nome: "Q" },
        { id: 4, nome: "Q" },
        { id: 5, nome: "S" },
        { id: 6, nome: "S" }
    ]
     
    function selecionarDia(id) {
        if (diasSelecionados.includes(id)) {
            setDiasSelecionados(diasSelecionados.filter(dia => dia !== id));
        } else {
            setDiasSelecionados([...diasSelecionados, id]);
        }
    }

    if (!showForm) return null;

    return (
        <HabitContainer>
            <HabitName
                type="text" 
                placeholder="nome do hábito" 
                value={nomeHabito}
                onChange={(e) => {
                    setNomeHabito(e.target.value);
                }}
                disabled={false}
                required />
            <HabitDays>
            {dias.map((dia) => (
                <Day 
                    key={dia.id} 
                    selected={diasSelecionados.includes(dia.id)} 
                    onClick={() => {
                        selecionarDia(dia.id);
                    }}
                >
                    {dia.nome}
                </Day>
            ))}
            </HabitDays>
            <Buttons>
                <CancelButton onClick={() => setShowForm(false)}>
                    Cancelar
                </CancelButton>
                <SaveButton onClick={criarHabito}>Salvar</SaveButton>
            </Buttons>
        </HabitContainer>
    )
}

const HabitContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 340px;
    height: 180px;
    background-color: #FFFFFF;
    border-radius: 5px;
    margin-bottom: 10px;
    padding: 16px;
    box-sizing: border-box;
    position: relative;
`

const HabitName = styled.input`
    width: 303px;
    height: 45px;
    justify-content: center;
    align-items: center;
    background-color: #FFFFFF;
    border-radius: 5px;
    border: 1px solid #D5D5D5;
    padding: 10px;
    box-sizing: border-box;
    margin-bottom: 8px;
`
const HabitDays = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    gap: 4px;
    width: 100%;
    height: 30px;
    margin-bottom: 8px;
`
const Day = styled.div`
    width: 30px;
    height: 30px;
    background-color: ${({ selected }) => (selected ? "#CFCFCF" : "#FFFFFF")}; 
    border: 1px solid ${({ selected }) => (selected ? "#CFCFCF" : "#D5D5D5")}; 
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: Lexend Deca;
    font-weight: 400;
    font-size: 20px;
    line-height: 100%;
    letter-spacing: 0%;
    color: ${({ selected }) => (selected ? "#FFFFFF" : "#DBDBDB")}; // Cor do texto
    cursor: pointer;
`

const Buttons = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    gap: 23px;
    bottom: 16px;
    right: 16px;
    width: 100%;
    height: 35px;
    position: absolute;
`

const CancelButton = styled.button`
    width: 84px;
    height: 35px;
    background-color: #FFFFFF;
    border-radius: 4.64px;
    border: none;
    font-family: Lexend Deca;
    font-weight: 400;
    font-size: 16px;
    line-height: 100%;
    letter-spacing: 0%;
    color: #52B6FF;
`
const SaveButton = styled.button`
    width: 84px;
    height: 35px;
    background-color: #52B6FF;
    border-radius: 4.64px;
    border: none;
    font-family: Lexend Deca;
    font-weight: 400;
    font-size: 16px;
    line-height: 100%;
    letter-spacing: 0%;
    color: #FFFFFF;
`

