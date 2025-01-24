import { FaBars } from "react-icons/fa";
import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";

export const Nav = styled.nav`
    background-image: linear-gradient(rgb(231, 221, 77) 90%, rgba(0, 0, 0, 0));
    width: 100%;
    height: 15vh;
    display: flex;
    position: sticky;
    top: 0;
    justify-content: space-around;
    align-items: center;
`;

export const NavLink = styled(Link)`
    color:rgb(7, 7, 7);
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;
    &.active {
        color: #15cdfc;
    }
`;

export const Bars = styled(FaBars)`
    display: none;
    color: #808080;
    @media screen and (max-width: 768px) {
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 75%);
        font-size: 1.8rem;
        cursor: pointer;
    }
`;

export const NavMenu = styled.div`
    display: flex;
    align-items: center;
`;

export const NavSearch = styled.div`
    display: flex;
    align-items: center;
    width: 50%;
`;

export const NavBtn = styled.nav`
    display: flex;
    align-items: center;
    margin-right: 24px;
`;

export const NavBtnLink = styled(Link)`
    border-radius: 4px;
    background:rgb(143, 70, 70);
    padding: 10px 22px;
    color:rgb(255, 255, 255);
    outline: none;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;
    margin-left: 24px;
    &:hover {
        transition: all 0.2s ease-in-out;
        background: #fff;
        color: #808080;
    }
`;