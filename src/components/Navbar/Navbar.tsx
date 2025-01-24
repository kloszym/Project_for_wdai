import React, { useEffect, useState } from "react";
import {
    Nav,
    NavLink,
    Bars,
    NavMenu,
    NavBtn,
    NavBtnLink,
    NavSearch,
} from "./NavbarElements.tsx";
import { TextField } from "@mui/material";
import logo from '../../pages/logo.svg';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import {grey} from "@mui/material/colors";
import {useNavigate} from "react-router-dom";


const Navbar = () => {
    const [search, setSearch] = useState('');
    const [nazwa, setNazwa] = useState("Zaloguj się");
    const navigate = useNavigate();

    useEffect(() =>{
        setNazwa(localStorage.getItem('login') || "Zaloguj się")
    },[localStorage.getItem('login')]);

    return (
        <>
            <Nav>
                <Bars />

                <NavMenu>
                    <NavLink to="/">
                    <Button size="large" startIcon={<Avatar sx={{ width: 56, height: 56 }} src={logo} />}></Button>
                    </NavLink>
                    <NavLink to="/shop" >
                        Przeglądaj
                    </NavLink>
                    <NavLink to="/contact">
                        Koszyk
                    </NavLink>
                </NavMenu>
                <NavSearch>
                    <TextField fullWidth id="search-bar" label="Czego szukasz?" variant="filled" sx={{bgcolor: grey['A100'], width:"100vw"}} value={search}
                                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                                    setSearch(event.target.value);}}
                                onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) => {
                                    if (e.key === 'Enter') {
                                        console.log('/search/'+search);
                                        if (search.trim() === '') return;
                                        navigate('/search/'+search);
                                    }
                                }}
                    />
                </NavSearch>
                <NavBtn>
                    <NavBtnLink to="/signin">
                        {nazwa}
                    </NavBtnLink>
                </NavBtn>
            </Nav>
        </>
    );
};

export default Navbar;