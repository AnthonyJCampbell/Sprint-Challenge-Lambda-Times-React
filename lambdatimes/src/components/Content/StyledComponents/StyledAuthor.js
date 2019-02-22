import styled from 'styled-components';

const StyledAuthor = styled.div`
    display: flex;
    justify-content: none;
    align-items: center;
    flex-direction: row;
    margin-top: 15px;
    div {
        padding-right: 10px;
        border-right: 1px solid lightgrey;
        height: 40px;
        img {
            width: 40px;
        }
    }
    span {
        padding-left: 10px;
        font-size: 12px;
        letter-spacing: 1px;
        font-weight: bold;
    }
`;

export default StyledAuthor;
