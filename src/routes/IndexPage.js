import React from "react";
import { connect } from "dva";
import { Router, Route, Switch, Redirect } from "dva/router";
import { Layout, Menu, Breadcrumb, Icon } from "antd";
import styles from "./IndexPage.css";

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

const { Header, Content, Footer } = Layout;

function IndexPage () {
  return (
    <Layout>
      <Header style={{ position: "fixed", width: "100%" }}>
        <div className="logo" />
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={["2"]}
          style={{ lineHeight: "64px" }}>
          <Menu.Item key="1">nav 1</Menu.Item>
          <Menu.Item key="2">nav 2</Menu.Item>
          <Menu.Item key="3">nav 3</Menu.Item>
          <SubMenu title={<span><Icon type="setting" />Navigation Three - Submenu</span>}>
            <Menu.Item key="setting:1">Option 1</Menu.Item>
            <Menu.Item key="setting:2">Option 2</Menu.Item>
          </SubMenu>
        </Menu>

      </Header>
      <Content style={{ padding: "0 50px", marginTop: 64 }}>
        <Breadcrumb style={{ margin: "16px 0" }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb>
        <div style={{ background: "#fff", padding: 24, minHeight: 380 }}>Content</div>
      </Content>
      <Footer style={{ textAlign: "center" }}>
        Ant Design ©2016 Created by Ant UED
      </Footer>
    </Layout>
  );
}

IndexPage.propTypes = {};

export default connect()(IndexPage);
