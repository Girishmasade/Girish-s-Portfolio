import React from 'react'
import { Link } from 'react-scroll'
import { Menu} from "antd";
import {
    HomeOutlined,
    UserOutlined,
    RiseOutlined,
    FolderOutlined,
    PhoneOutlined,
    CheckCircleOutlined,
  } from "@ant-design/icons";
function MenuItems() {
  return (
    <>
       <Menu.Item key="home" icon={<HomeOutlined />}>
          <Link
              to="home"
              smooth={true}
              duration={500}
              className="cursor-pointer hover:text-blue-400"
            >
              Home
              </Link>
          </Menu.Item>
          <Menu.Item key="about" icon={<UserOutlined />}>
          <Link
              to="about"
              smooth={true}
              duration={500}
              className="cursor-pointer hover:text-blue-400"
            >
              About
              </Link>
          </Menu.Item>
          <Menu.Item key="skill" icon={<RiseOutlined />}>
          <Link
              to="skill"
              smooth={true}
              duration={500}
              className="cursor-pointer hover:text-blue-400"
            >
              Skill
              </Link>
          </Menu.Item>
          <Menu.Item key="services" icon={<CheckCircleOutlined />}>
          <Link
              to="services"
              smooth={true}
              duration={500}
              className="cursor-pointer hover:text-blue-400"
            >
              Services
              </Link>
          </Menu.Item>
          <Menu.Item key="projects" icon={<FolderOutlined />}>
          <Link
              to="projects"
              smooth={true}
              duration={500}
              className="cursor-pointer hover:text-blue-400"
            >
              Projects
              </Link>
          </Menu.Item>
          <Menu.Item key="contact" icon={<PhoneOutlined />}>
          <Link
              to="contact"
              smooth={true}
              duration={500}
              className="cursor-pointer hover:text-blue-400"
            >
              Contact
              </Link>
          </Menu.Item>
    </>
  )
}

export default MenuItems
