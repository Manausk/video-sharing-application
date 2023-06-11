import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  gap: 10px;
  margin: 30px 0px;
`;

const Avatar = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  object-fit: cover;
`;
const Details = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Name = styled.span`
  font-size: 13px;
  font-weight: 500;
  color: ${({ theme }) => theme.text};
`;
const Date = styled.span`
  font-size: 12px;
  font-weight: 400;
  margin-left: 5px;
  color: ${({ theme }) => theme.textSoft};
`;
const Text = styled.span`
  font-size: 14px;
  color: ${({ theme }) => theme.text};
`;

const Comment = () => {
  return (
    <Container>
      <Avatar src="https://images.pexels.com/photos/6353746/pexels-photo-6353746.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />
      <Details>
        <Name>
          Manash Kamal<Date>1 day ago</Date>
        </Name>
        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis
          eveniet, impedit fugiat iure culpa et maxime vitae! Suscipit hic
          blanditiis ea repellendus voluptatem possimus libero sit ipsa, aperiam
          non voluptates?
        </Text>
      </Details>
    </Container>
  );
};

export default Comment;
