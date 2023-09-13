import React from 'react';
import styled from "styled-components";


const Container = styled.div`
display: flex;
`;
const Pane = styled.div`
flex: 1;
`;


const SplitScreen = ({ left: Left, right: Right }) => {
    //renaming the components
    return (
        <Container>
            <Pane>
                <Left />
            </Pane>
            <Pane >
                <Right />
            </Pane>
        </Container>
    )
}

export default SplitScreen