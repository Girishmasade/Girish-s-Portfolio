import React, { useState } from "react";
import { FaFacebook, FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import ArrowPage from "../ArrowPage";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
} from "@ant-design/icons";
import { Button, Layout, Menu, theme } from "antd";
import HomeSection from "../../pages/HomeSection";
import About from "../../pages/About";
import Skill from "../../pages/Skill";
import Services from "../../pages/Services";
import Projects from "../../pages/Projects";
import MenuItems from "./MenuItems";
import Contact from "../../pages/Contact";
import Footer from "../Footer";
import Logo from "./Logo";
const { Header, Sider, Content } = Layout;
const Navbar = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  return (
    <>
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="demo-logo-vertical" />
        <Logo/>
        <Menu className="min-h-screen items-center flex flex-col justify-center pl-3" theme="dark" mode="inline" >
         <MenuItems/>
        </Menu>
      </Sider>
      <Layout>
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
          }}
        >
           <div className="flex flex-wrap gap-2 justify-end relative top-5 right-7">
        <ul className="flex gap-4 text-2xl">
              <li>
                <a href="https://www.facebook.com/girish.masade.9" target="_blank" className="hover:text-blue-900"><FaFacebook/></a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/girish-masade" target="_blank" className="hover:text-blue-900"><FaLinkedin/></a>
              </li>
              <li>
                <a href="https://github.com/Girishmasade" target="_blank" className="hover:text-blue-900"><FaGithub/></a>
              </li>
              <li>
                <a href="https://www.instagram.com/girish_masade" target="_blank" className="hover:text-blue-900"><FaInstagram/></a>
              </li>
            </ul>
        </div>
          <Button
          className="relative bottom-5"
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: "16px",
              width: 64,
              height: 64,
            }}
          />
       
        </Header>
        <Content
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
            background: 'rgb(17 24 39)',
            borderRadius: borderRadiusLG,
          }}
        >
          <HomeSection />
        </Content>
        <Content
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 310,
            background: ' rgb(55 65 81)',
            borderRadius: borderRadiusLG,
          }}
        >
           <About/>
        </Content>
        <Content
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 180,
            background: 'rgb(17 24 39)',
            borderRadius: borderRadiusLG,
          }}
        >
           <Skill/>
        </Content>
        <Content
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 310,
            background: ' rgb(55 65 81)',
            borderRadius: borderRadiusLG,
          }}
        >
           <Services/>
        </Content>
        <Content
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 310,
            background: ' rgb(55 65 81)',
            borderRadius: borderRadiusLG,
          }}
        >
           <Projects/>
        </Content>
        <Content
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 310,
            background: ' rgb(55 65 81)',
            borderRadius: borderRadiusLG,
          }}
        >
           <Contact/>
        </Content>
        <Content
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 310,
            background: ' white',
            borderRadius: borderRadiusLG,
          }}
        >
           <Footer/>
        </Content>
      <ArrowPage/>
      </Layout>
    </Layout>
    </>
  );
};
export default Navbar;
