import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import SubMenu from "./SubMenu";
import { IconContext } from "react-icons";

const Nav = styled.div`
  background: #15171c;
  height: 80px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const NavIcon = styled(Link)`
  margin-left: 8rem;
  font-size: 3rem;
  height: 80px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const SearchIcon = styled.div`
  margin-left: auto;
  margin-right: 4rem;
  font-size: 1.5rem;
  cursor: pointer;
`;

const SearchInput = styled.input`
  padding: 0.5rem;
  border: none;
  border-radius: 4px;
`;

const SidebarNav = styled.nav`
  background: #15171c;
  width: 200px;
  height: 100vh;
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  left: ${({ sidebar }) => (sidebar ? "0" : "-100%")};
  transition: 350ms;
  z-index: 10;
  overflow-y: auto; 
  padding: 18px;
`;

const SidebarWrap = styled.div`
  width: 100%;
`;



const Sidebar = () => {
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);

  const [searchActive, setSearchActive] = useState(false);
  const toggleSearch = () => {
    setSearchActive(!searchActive);
  };


  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <Nav>
        
             <h1  style={{
              textAlign: "left",
              marginLeft: "-200px",
              color: "green"
            }}> Logo</h1>
              <NavIcon to="#">
            <FaIcons.FaBars onClick={showSidebar} />
           
          </NavIcon>
          
          <h1
            style={{
              textAlign: "center",
              marginLeft: "350px",
              color: "green"
            }}
          >
            Sidebar Menu and Sub menu using React js
          </h1>
          <SearchIcon onClick={toggleSearch}>
            <FaIcons.FaSearch />
          </SearchIcon>
        </Nav>
        <SidebarNav sidebar={sidebar}>
          <SidebarWrap>
            <NavIcon to="#" >
              <AiIcons.AiOutlineClose onClick={showSidebar}  style/>
            </NavIcon>
            {searchActive && (
              <SearchInput
                type="text"
                placeholder="Search..."
                autoFocus
              />
            )}
           

             <SubMenu/>
          </SidebarWrap>
        </SidebarNav>
      </IconContext.Provider>
    </>
  );
};

export default Sidebar;
