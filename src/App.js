import React, { Component } from 'react';
import styled, { injectGlobal } from "styled-components";

/* Typography */ 
import Typography from '@material-ui/core/Typography';

/* Icon */
import { FaInstagram } from 'react-icons/fa';
import { FaFacebookSquare } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';

import './App.css';

injectGlobal`
    body{
        font-family: 'typeface-roboto';
    }
    a{
        text-decoration: none;
    }
    
`;

const Container = styled.div`
  width: 98vw;
  height: 98vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

`;

const LinkSite = styled.a`
    margin-right: 3%;
    margin-left: 3%;
    margin-bottom: 5px;
`
const LinkContainer = styled.div`
    width: 50%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`

const Separate = styled.div`
    background-color: grey;
    opacity: 0.7;
    height: 2px;
    width: 500px;
    border-radius: 90px;
    margin-bottom: 5px;
`

const Name = styled.div`
    margin-bottom: 5px;
`


class App extends Component {
  render() {
    return (
      <div className="App">
       <Container>
        <Name>
            <Typography variant="display2">
                <div>Santiago Serrano Márquez</div>
            </Typography>
        </Name>
        <Separate>
        </Separate>
        <LinkContainer>
            <LinkSite href="https://www.facebook.com/santiago.serrano.marquez" target="blank">
                <Typography variant="display1">
                    <FaFacebookSquare/>
                </Typography>
            </LinkSite>
            <LinkSite href="https://www.instagram.com/stgosm/?hl=es-la" target="blank">
                <Typography variant="display1">
                        <FaInstagram/>
                </Typography>
            </LinkSite>
            <LinkSite href="https://github.com/stgosm" target="blank">
                <Typography variant="display1">
                    <FaGithub/>
                </Typography>
            </LinkSite>
            <LinkSite href="https://twitter.com/stgo_sm" target="blank">
                <Typography variant="display1">
                    <FaTwitter/>
                </Typography>
            </LinkSite>
        </LinkContainer>
    </Container>
      </div>
    );
  }
}

export default App;
