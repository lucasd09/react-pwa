import React from 'react'

import Main from '../Main'

import { Container, Wrapper } from './styles'

export default function Layout() {
  return (
    <Container>
        <Wrapper>
            {/* <Menubar /> */}
            <Main />
            {/* <Sidebar /> */}
        </Wrapper>
    </Container>
  )
}