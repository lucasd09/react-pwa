import React from 'react';

import {
  Container,
  Retweeted,
  RocketseatIcon,
  Body,
  Avatar,
  Content,
  Header,
  Dot,
  Description,
  ImageContent,
  Icons,
  Status,
  CommentIcon,
  RetweetIcon,
  LikeIcon,
} from './styles';

const Tweet: React.FC = () => {
  return (
    <Container>
      <Retweeted>
        <RocketseatIcon />
        Você retweetou
      </Retweeted>

      <Body>
        <Avatar />

        <Content>
          <Header>
            <strong>Univem - Marília</strong>
            <span>@Univem</span>
            <Dot />
            <time>27 de jun</time>
          </Header>

          {/* eslint-disable-next-line jsx-a11y/accessible-emoji */}
          <Description>PWA Funcionando 🚀</Description>

          <ImageContent />

          <Icons>
            <Status>
              <CommentIcon />
              24
            </Status>
            <Status>
              <RetweetIcon />
              69
            </Status>
            <Status>
              <LikeIcon />
              420
            </Status>
          </Icons>
        </Content>
      </Body>
    </Container>
  );
};

export default Tweet;
