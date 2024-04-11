import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as RiIcons from "react-icons/ri";
import { MdSupportAgent } from "react-icons/md";

const SidebarData = [
  {
    title: "About Us",
    path: "/about-us",
    icon: <AiIcons.AiFillHome />,
    iconClosed: <RiIcons.RiArrowDownFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    SubNav: [
      {
        title: "Aim",
        path: "/about-us/aim",
        icon: <IoIcons.IoIosPaper />,
      },
      {
        title: "Vision",
        path: "/about-us/vision",
        icon: <IoIcons.IoIosPaper />,
      },
    ],
  },
  {
    title: "Services",
    path: "/services",
    icon: <AiIcons.AiFillCustomerService />,
    iconClosed: <RiIcons.RiArrowDownFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    SubNav: [
      {
        title: "Service 1",
        path: "/services/services1",
        icon: <IoIcons.IoIosPaper />,
     
      },
      {
        title: "Service 2",
        path: "/services/services2",
        icon: <IoIcons.IoIosPaper />,
        
      },
      {
        title: "Service 3",
        path: "/services/services3",
        icon: <IoIcons.IoIosPaper />,
      },
      {
        title: "Service 4",
        path: "/services/services4",
        icon: <IoIcons.IoIosPaper />,
      },
      {
        title: "Service 5",
        path: "/services/services5",
        icon: <IoIcons.IoIosPaper />,
      },
    ],
  },

  {
    title: "Contact",
    path: "/contact",
    icon: <FaIcons.FaPhone />,
  },
  {
    title: "Events",
    path: "/events",
    icon: <FaIcons.FaEnvelopeOpenText />,
    iconClosed: <RiIcons.RiArrowDownFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    SubNav: [
      {
        title: "Event 1",
        path: "/events/events1",
        icon: <IoIcons.IoIosPaper />,
      },
      {
        title: "Event 2",
        path: "/events/events2",
        icon: <IoIcons.IoIosPaper />,
      },
      {
        title: "Event 3",
        path: "/events/events3",
        icon: <IoIcons.IoIosPaper />,
      },
      {
        title: "Event 4",
        path: "/events/events4",
        icon: <IoIcons.IoIosPaper />,
      },
      {
        title: "Event 5",
        path: "/events/events5",
        icon: <IoIcons.IoIosPaper />,
      },
    ],
  },
  {
    title: "Support",
    path: "/support",
    icon: <MdSupportAgent />,
  },
];
const SidebarLink = styled(Link)`
  display: flex;
  color: #ffffff;
  justify-content: space-between; /* Adjust as needed */
  align-items: center; /* Adjust as needed */
  padding: 5px;
  height: 40px;
  width: auto;
  text-decoration: none;
  font-size: 18px;

  &:hover {
    background: #252831;
    border-left: 4px solid green;
    cursor: pointer;
  }
`;

const DropdownLink = styled(Link)`
  
  display: flex;
  color: #ffffff;
  justify-content: left; /* Adjust as needed */
  align-items: center; /* Adjust as needed */
  padding: 20px;
  height: 30px;
  width:auto;
  text-decoration: none;
  font-size: 18px;
  
  &:hover {
    background: #252831;
    cursor: pointer;
  }
`;
const SidebarLabel = styled.span`
  margin-left: 10px;
`;



const SideMenu = ({ item }) => {
  console.log("item", JSON.stringify(item));
  const [subnav, setSubnav] = useState(false);

  const showSubnav = () => setSubnav(!subnav);
  const [subnavStates, setSubnavStates] = useState({});

  const toggleSubnav = (title) => {
    setSubnavStates((prevState) => ({
      ...prevState,
      [title]: !prevState[title],
    }));
  };
  return (
    <>
     {SidebarData.map((item, index) => (
        <div key={index}>
          <SidebarLink to={item.path} onClick={() => toggleSubnav(item.title)}>
            <div>
              {item.icon}
              <SidebarLabel>{item.title}</SidebarLabel>
            </div>
            <div>
              {item.SubNav && subnavStates[item.title]
                ? item.iconOpened
                : item.SubNav
                ? item.iconClosed
                : null}
            </div>

          </SidebarLink>
          {item.SubNav && subnavStates[item.title] && (
            <div>
              {item.SubNav.map((subItem, subIndex) => (
                <DropdownLink key={subIndex} to={subItem.path}>
                  {subItem.icon}
                  <SidebarLabel>{subItem.title}</SidebarLabel>
                </DropdownLink>
              ))}
            </div>
          )}
        </div>
      ))}
     </>
  );
};

export default SideMenu;
