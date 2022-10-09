import React from 'react';
import Card from 'react-bootstrap/Card';
import {
  Facebook,
  Instagram,
  Pinterest,
  Twitter,
  YouTube,
  Room,
  Phone,
  Mail,
} from '@material-ui/icons';
import styled from 'styled-components';

const Footer = () => (
  <Contaniner>
    <Card className="card-footer">
      <Left>
        <Logo>Online-Shop</Logo>
        <LinksDes>FIND US ON:</LinksDes>
        <SocialContainer>
          <SocialIcon color="3B5999">
            <Facebook />
          </SocialIcon>
          <SocialIcon color="E4405F">
            <Instagram />
          </SocialIcon>
          <SocialIcon color="1DA1F2">
            <Twitter />
          </SocialIcon>
          <SocialIcon color="FF0000">
            <YouTube />
          </SocialIcon>
          <SocialIcon color="E60023">
            <Pinterest />
          </SocialIcon>
        </SocialContainer>
        <LinksDes> © All rights reserved</LinksDes>
      </Left>
    </Card>
    <Card className="card-footer">
      <Center>
        <Title>Links:</Title>
        <List>
          <ListItem>
            <a href="/">Home</a>
          </ListItem>
          <ListItem>
            <a href="/cart">Cart</a>
          </ListItem>
          <ListItem>
            <a href="/profile">Profile</a>
          </ListItem>
          <ListItem>
            <a href="/search">Search</a>
          </ListItem>
          <ListItem>
            <a href="/search?category=all&query=all&price=all&rating=4&order=newest&page=1">
              Top Reviewed
            </a>
          </ListItem>
          <ListItem>
            <a href="/orderhistory">Order History</a>
          </ListItem>
        </List>
      </Center>
    </Card>

    <Card className="card-footer">
      <Right>
        <Title>Contact us:</Title>
        <ContactItem>
          <Room style={{ marginRight: '10px' }} />
          62 Example st. tower B floor 2 Tel Aviv 67897
        </ContactItem>
        <ContactItem>
          <Phone style={{ marginRight: '10px' }} />
          Phone: +972-12-3456789
        </ContactItem>
        <ContactItem>
          <Mail style={{ marginRight: '10px' }} />
          Email: contact@onlineshop.co.il
        </ContactItem>
      </Right>
    </Card>
  </Contaniner>
);

const Contaniner = styled.div`
  padding-top: 30px;
  display: flex;
  background-color: #f2eeeb;
  font-family: urbanist;
  justify-content: space-evenly;
  align-content: stretch;
  @media (max-width: 800px) {
     {
      flex-direction: column;
    }
  }
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const Logo = styled.h1`
  font-weight: bold;
  font-size: 45px;
`;

const LinksDes = styled.h4`
  font-family: urbanist;
  font-size: 18px;
  padding-top: 15px;
`;

const SocialContainer = styled.div`
  display: flex;
  font-family: urbanist;
`;

const SocialIcon = styled.div`
  width: 35px;
  height: 35px;
  border-radius: 50%;
  color: white;
  background-color: #${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 5px;
`;

const Center = styled.div`
  flex: 1;
`;

const Title = styled.h3`
  margin-bottom: 10px;
  font-family: urbanist;
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  width: 70%;
  font-family: urbanist;
`;

const ListItem = styled.li`
  font-family: urbanist;
  width: 50%;
  margin-bottom: 5px;
`;

const Right = styled.div`
  flex: 1;
`;

const ContactItem = styled.div`
  font-family: urbanist;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
`;

export default Footer;
