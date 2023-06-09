import React from "react";
import styled from "styled-components";
import { IoMoonOutline, IoMoon } from "react-icons/io5";

import { Container } from "./Container";


const HeaderEl = styled.header`

`;

const Wrapper = styled.div``;

const Title = styled.a.attrs({
    href: '/',
})``;

const ModeSwitcher = styled.div``;

function Header() {
    return (
        <HeaderEl>
            <Container>
                <Wrapper>
                    <Title>Where is the world?</Title>
                    <ModeSwitcher>
                        <IoMoon />Light theme
                    </ModeSwitcher>
                </Wrapper>
            </Container>
        </HeaderEl>
    )
};

export default Header;