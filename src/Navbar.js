import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    height: 60px;
`;

const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #fff;
    padding: 10px 20px;
`;

const Text = styled.div`
    font-size: 20px;
    font-weight: bold;
    `;

const Navbar = () => {
    return (
        <Container>
            <Wrapper>
                <Text/>
            </Wrapper>
        </Container>
    );
}

export default Navbar;