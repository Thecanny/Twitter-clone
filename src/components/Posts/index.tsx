import React from 'react';
import { 
  Post,
  Retweeted,
  RetweetIconTop,
  Body,
  Avatar,
  Content,
  Header,
  Description,
  ImageContent,
  Icons,
  Status,
  CommentIcon,
  LikeIcon,
  RetweetIcon,
  Dot
} from './style';

interface Props {
  name: string;
  nickname: string;
  time: string;
  description: string;
  comentNumber: number;
  retweetNumber: number;
  likeNumber: number;
}

const Posts: React.FC<Props> = ({
  name,
  nickname,
  time,
  description,
  comentNumber,
  retweetNumber,
  likeNumber
}) => {
  return (
    <Post>
   <Retweeted>
        <RetweetIconTop/>
        Você retweetou
      </Retweeted>
      <Body>
        <Avatar />
        <Content>
          <Header>
            <strong>{name}</strong>
            <span>{nickname}</span>
            <Dot />
            <time>{time}</time>
          </Header>
          <Description>
            {description}
          </Description>
          <ImageContent />
          <Icons>
            <Status>
              <CommentIcon />
              {comentNumber}
            </Status>

            <Status>
              <RetweetIcon />
              {retweetNumber}
            </Status>

            <Status>
              <LikeIcon />
              {likeNumber}
            </Status>

          </Icons>
        </Content>
      </Body>
    </Post>
  )
}

export default Posts
