import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    position:relative;
    align-items:flex-start;
    padding: 3px 4px;
`

const Label = styled.label.attrs({for:'checkbox'})`
    background-color: #fff;
    border: 1px solid #ccc;
    border-radius: 50%;
    cursor: pointer;
    height: 28px;
    left: 0;
    position: absolute;
    top: 0;
    width: 28px;
    :after{
        border: 2px solid #fff;
        border-top: none;
        border-right: none;
        content: "";
        height: 6px;
        left: 7px;
        opacity: 0;
        position: absolute;
        top: 8px;
        transform: rotate(-45deg);
        width: 12px;
    }
`;

const Input = styled.input.attrs({type:'checkbox'})`
    visibility: hidden;
    &:checked + label {
        background-color: #66bb6a;
        border-color: #66bb6a;
      }
    &:checked + label:after {
        opacity: 1;
      }
`

const Checkbox = props => (
    <Container>
        <Input {...props}/>
        <Label/>
    </Container>
)

export default Checkbox;