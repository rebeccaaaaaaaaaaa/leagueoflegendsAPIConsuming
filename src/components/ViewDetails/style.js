import styled from 'styled-components';

export const ContentArea = styled.div`
    background: #ffffffde;
    padding: 2rem;
    margin: 16rem;
    box-shadow: 0px 3px 6px #00000016;
    position: relative;
    top: -5rem;

    @media (max-width: 768px) {
        margin: 1rem;
        top: 5rem;
    }
`;