import styled from 'styled-components';

const StyledCardsContainer = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: none;
    flex-direction: row;
    width: 100%;
    margin-top: 16px;
    flex-wrap: wrap;
    @media (min-width: 1200px) {
        width: 1200px;
    }
`;

export default StyledCardsContainer;
