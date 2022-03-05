import React from "react";
import styled from "styled-components";
// import { auth, provider } from "../firebase";

const Header = () => {
  //   const handleAuth = () => {
  //     auth
  //       .signInWithPopup(provider)
  //       .then((result) => {
  //         console.log(result);
  //       })
  //       .catch((error) => {
  //         alert(error.message);
  //       });
  //   };
  return (
    <Nav>
      {" "}
      <Logo src="/images/logo.svg" alt="Logo" />
      <Menu>
        <ul>
          <li>
            <a href="/">
              <img src="/images/home-icon.svg" alt="home icon" />
              <span>Home</span>
            </a>
          </li>
          {/* <li>
                            <a href="/">
                                <img src="/images/home-icon.svg" alt="home icon"/>
                                <span>Home</span>
                            </a>
                        </li> */}
          <li>
            <a href="/">
              <img src="/images/search-icon.svg" alt="home icon" />
              <span>Search</span>
            </a>
          </li>
          <li>
            <a href="/">
              <img src="/images/watchlist-icon.svg" alt="home icon" />
              <span>Watchlist</span>
            </a>
          </li>
          <li>
            <a href="/">
              <img src="/images/original-icon.svg" alt="home icon" />
              <span>Originals</span>
            </a>
          </li>
          <li>
            <a href="/">
              <img src="/images/movie-icon.svg" alt="home icon" />
              <span>Movies</span>
            </a>
          </li>
          <li>
            <a href="/">
              <img src="/images/series-icon.svg" alt="home icon" />
              <span>Series</span>
            </a>
          </li>
        </ul>
      </Menu>
      <LoginBtn>Login</LoginBtn>
    </Nav>
  );
};

const Nav = styled.nav`
  padding: 3rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: rgba(4, 7, 20, 0.55);
  text-transform: uppercase;
`;
const Logo = styled.img`
  width: 10rem;
`;
const LoginBtn = styled.a`
  border: 1px solid var(--color-white);
  border-radius: 5px;
  padding: 1rem;
  font-weight: bold;
  transition: 0.3s ease-in-out;

  &:hover {
    background-color: var(--color-white);
    color: var(--bg-color);
  }
`;

const Menu = styled.div`
  margin-right: auto;
  margin: 0 auto 0 3rem;
  ul {
    display: flex;
    align-items: center;
  }

  li {
    padding: 1rem;
  }

  a {
    display: flex;
    align-items: center;
    /* color: var(--color-white-2); */

    img {
      min-width: 2rem;
      /* padding-right: 0.5rem; */
    }

    span {
      font-size: 1.4rem;
      color: var(--color-white);

      margin-top: 3px;
      padding: 2px 0;
      border-bottom: 2px solid transparent;
      transition: all 0.3s ease-in-out;

      &:hover {
        border-bottom: 2px solid var(--color-white);
      }
    }
  }

  @media (max-width: 60em) {
    display: none;
  }
`;

export default Header;
