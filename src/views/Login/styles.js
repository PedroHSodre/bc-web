import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    height: 100vh;
    justify-content: center;
    align-items: center;
    background: linear-gradient(180deg, #2A6CB9 0%, rgba(42, 108, 185, 0.12) 100%);
`
export const Header = styled.header`
    margin: auto;
    text-align: center;
    width: 80%;
`
export const Modal = styled.section`
    display: flex;
    background: rgba(255, 252, 252, 0.2);
    flex-direction: column;
    border-radius: 10px;
    padding: 5px;
    height: 70%;
    width: 40%;
`

export const InputsContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 80%;
    margin: auto;
`

export const ButtonsContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 50%;
    margin: auto;

    button {
        border-radius: 25px;
        padding: 10px;
    }
`