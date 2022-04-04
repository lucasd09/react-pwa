import React from 'react'

import ProfilePage from '../ProfilePage'

import { 
    Container, 
    Header, 
    BackIcon, 
    ProfileInfo, 
    HomeIcon, 
    SearchIcon, 
    BellIcon, 
    EmailIcon, 
    BottomMenu 
} from './styles'

export default function Main() {
  return (
    <Container>
        <Header>
            <button>
                <BackIcon />
            </button>
            
            <ProfileInfo>
                <strong>Lucas Dalan</strong>
                <span>600 tweets</span>
            </ProfileInfo>
        </Header>

        <ProfilePage />

        <BottomMenu>
            <HomeIcon className='active' />
            <SearchIcon />
            <BellIcon />
            <EmailIcon />
        </BottomMenu>
    </Container>
  )
}
