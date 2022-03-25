import styled, {css} from 'styled-components';

const ListItem = styled.div`
    border-radius: 10px;
    background-color: #FFF;
    width: 20rem;
    height: 2rem
    align-items: center;
    justify-content: space-between;
    display: flex;
    margin-bottom: 1rem;
    color:#000;
    font-family: 'Open Sans', sans-serif;
    padding:0.5rem;
    ${props=>props.status === 'done' && css`
        text-decoration: line-through;
        background-color: rgba(1,1,1,0.1);
    `}
    p{
        margin:0;
    }
    cursor: pointer;
`

export default ListItem;