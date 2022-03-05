import React from "react";
import styled from "styled-components";
import Header from "./Header";
//  import PropTypes from 'prop-types'

const Login = () => {
  return (
    <Container>
      <Header />

      <Content>
        <Cta>
          <CtaLogo src="/images/cta-logo-one.svg" />
          <Description>
            {" "}
            Get Premier Access to Raya and the Last Dragon with a Disney+
            subscription. As of 03/26/21. and the Disney Bundle will increase by
            $1.
          </Description>
          <SignUp>Get started</SignUp>
        </Cta>
      </Content>
    </Container>
  );
};

// Login.propTypes = {}

const Container = styled.section`
  //   border: 2px solid white;
  display: flex;
  flex-direction: column;
  height: 100vh;
  overflow: hidden;
  //   padding: 1rem;
  background-image: url("/images/login-background.jpg");
  background-size: cover;
  background-repeat: no-repeat;
`;

const Content = styled.div`
  width: 100%;
  //   border: 2px solid red;

  height: 100%;
  display: flex;
  padding: 0 4rem;
  justify-content: center;
  align-items: center;
`;

const Cta = styled.div`
  max-width: 60rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 15rem;
`;
const CtaLogo = styled.img``;
const Description = styled.p`
  font-size: 1.2rem;
`;

const SignUp = styled.a`
  background-color: var(--blue);
  color: var(--color-white);
  display: inline-block;
  padding: 2rem 10rem;
  text-transform: uppercase;
  font-weight: 700;
  font-size: 1.6rem;
  transition: background 0.3s;

  &:hover {
    background-color: var(--blue-light);
  }
`;
export default Login;
