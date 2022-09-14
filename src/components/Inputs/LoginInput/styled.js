import styled from "styled-components";

export const Input = styled.input`
    border-radius: 10px;
    padding: 15px;
    height: 65px;
    border: none;
    background: rgba(255, 255, 255, 0.46);
    margin-bottom: 30px;
    ::-webkit-input-placeholder {
        font-size: 20px;
        color: white;
    }
    &:focus {
        border: none;
        outline: none;
    }
`