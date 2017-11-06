import classNames from "classnames";
import DocumentTitle from "react-document-title";
import PropTypes from "prop-types";
import React from "react";
import { connect } from "dva";
import { ContainerQuery } from "react-container-query";
import { Layout, Menu, Icon, Avatar, Dropdown, Tag, message, Spin } from "antd";
import { Link, Route, Redirect, Switch } from "dva/router";

import GlobalFooter from "../components/GlobalFooter";
import styles from "./BasicLayout.less";
import { getNavData } from "../common/nav";
import { getRouteData } from "../utils/utils";

const { Header, Sider, Content } = Layout;
const { SubMenu } = Menu;

const query = {
  "screen-lg": {
    maxWidth: 1199,
    minWidth: 992
  },
  "screen-md": {
    maxWidth: 991,
    minWidth: 768
  },
  "screen-sm": {
    maxWidth: 767,
    minWidth: 576
  },
  "screen-xl": {
    minWidth: 1200
  },
  "screen-xs": {
    maxWidth: 575
  }
};

class BasicLayout extends React.PureComponent {
  static childContextTypes = {
    breadcrumbNameMap: PropTypes.object,
    location: PropTypes.object
  };

  constructor (props) {
    super(props);
    this.menus = getNavData().reduce((arr, current) => arr.concat(current.children), []);

    this.state = {
      openKeys: this.getDefaultOpenSubMenus(props)
    };
  }

  getChildContext () {
    const { location } = this.props;
    const routeData = getRouteData("BasicLayout");
    const menuData = getNavData().reduce((arr, current) => arr.concat(current.children), []);
    const breadcrumbNameMap = {};
    routeData.concat(menuData).forEach((item) => {
      breadcrumbNameMap[item.path] = item.name;
    });
    return { breadcrumbNameMap, location };
  }

  componentDidMount () {
    //this.props.dispatch({
    //  type: "user/fetchCurrent"
    //});
  }

  componentWillUnmount () {
    clearTimeout(this.resizeTimeout);
  }

  onCollapse = (collapsed) => {
    this.props.dispatch({
      payload: collapsed,
      type: "global/changeLayoutCollapsed"
    });
  };
  //onMenuClick = ({ key }) => {
  //  if (key === "logout") {
  //    this.props.dispatch({
  //      type: "login/logout"
  //    });
  //  }
  //};

  getDefaultOpenSubMenus (props) {
    const currentMenuSelectedKeys = [...this.getCurrentMenuSelectedKeys(props)];
    currentMenuSelectedKeys.splice(-1, 1);
    if (currentMenuSelectedKeys.length === 0) {
      return ["home"];
    }
    return currentMenuSelectedKeys;
  }

  getCurrentMenuSelectedKeys (props) {
    const { location } = props || this.props;
    const { pathname } = location;
    const keys = pathname.split("/").slice(1);
    if (keys.length === 1 && keys[0] === "") {
      return ["home"];
    }
    return [pathname];
  }

  getNavMenuItems (menusData, parentPath = "") {
    if (!menusData) {
      return [];
    }
    return menusData.map((item) => {
      if (!item.name) {
        return null;
      }
      let itemPath;
      if (item.path.indexOf("http") === 0) {
        itemPath = item.path;
      } else {
        itemPath = `${parentPath}/${item.path || ""}`.replace(/\/+/g, "/");
      }
      if (item.children && item.children.some(child => child.name)) {
        return (
          <SubMenu
            title={
              item.icon ? (
                <span>
                  <Icon type={item.icon} />
                  <span>{item.name}</span>
                </span>
              ) : item.name
            }
            key={item.key || item.path}
          >
            {this.getNavMenuItems(item.children, itemPath)}
          </SubMenu>
        );
      }
      const icon = item.icon ? <Icon type={item.icon} /> : null;
      return (
        <Menu.Item key={[parentPath, item.path].join("/")}>
          {
            /^https?:\/\//.test(itemPath) ? (
              <a href={itemPath} target={item.target}>
                {icon}<span>{item.name}</span>
              </a>
            ) : (
              <Link to={itemPath} target={item.target}>
                {icon}<span>{item.name}</span>
              </Link>
            )
          }
        </Menu.Item>
      );
    });
  }

  getPageTitle () {
    const { location } = this.props;
    const { pathname } = location;
    let title = "8888ACC";
    getRouteData("BasicLayout").forEach((item) => {
      if (item.path === pathname) {
        title = `${item.name} - 8888ACC`;
      }
    });
    return title;
  }

  handleOpenChange = (openKeys) => {
    const latestOpenKey = openKeys.find(key => this.state.openKeys.indexOf(key) === -1);
    this.setState({
      openKeys: latestOpenKey ? [latestOpenKey] : []
    });
  };

  toggle = () => {
    const { collapsed } = this.props;
    this.props.dispatch({
      payload: !collapsed,
      type: "global/changeLayoutCollapsed"
    });
    this.resizeTimeout = setTimeout(() => {
      const event = document.createEvent("HTMLEvents");
      event.initEvent("resize", true, false);
      window.dispatchEvent(event);
    }, 600);
  };

  render () {
    const { collapsed } = this.props;
    const currentUser = { name: "test" };
    const menu = (
      <Menu className={styles.menu} selectedKeys={[]} onClick={this.onMenuClick}>
        <Menu.Item disabled><Icon type="user" />个人中心</Menu.Item>
        <Menu.Item disabled><Icon type="setting" />设置</Menu.Item>
        <Menu.Divider />
        <Menu.Item key="logout"><Icon type="logout" />退出登录</Menu.Item>
      </Menu>
    );
    //const noticeData = this.getNoticeData();

    // Don't show popup menu when it is been collapsed
    const menuProps = collapsed ? {} : {
      openKeys: this.state.openKeys
    };
    const layout = (
      <Layout>
        <Sider
          trigger={null}
          collapsible
          collapsed={collapsed}
          breakpoint="md"
          onCollapse={this.onCollapse}
          width={256}
          className={styles.sider}
        >
          <div className={styles.logo}>
            <Link to="/">
              <img src="https://gw.alipayobjects.com/zos/rmsportal/iwWyPinUoseUxIAeElSx.svg" alt="logo" />
              <h1>8888ACC</h1>
            </Link>
          </div>
          <Menu
            theme="dark"
            mode="inline"
            {...menuProps}
            onOpenChange={this.handleOpenChange}
            selectedKeys={this.getCurrentMenuSelectedKeys()}
            style={{ margin: "16px 0", width: "100%" }}
          >
            {this.getNavMenuItems(this.menus)}
          </Menu>
        </Sider>
        <Layout>
          <Header className={styles.header}>
            <Icon
              className={styles.trigger}
              type={collapsed ? "menu-unfold" : "menu-fold"}
              onClick={this.toggle}
            />
            <div className={styles.right}>
              {currentUser.name ? (
                <Dropdown overlay={menu}>
                  <span className={`${styles.action} ${styles.account}`}>
                    <Avatar size="small" className={styles.avatar} src="" />
                    {currentUser.name}
                  </span>
                </Dropdown>
              ) : <Spin size="small" style={{ marginLeft: 8 }} />}
            </div>
          </Header>
          <Content style={{ height: "100%", margin: "24px 24px 0" }}>
            <Switch>
              {
                getRouteData("BasicLayout").map(item =>
                  (
                    <Route
                      exact={item.exact}
                      key={item.path}
                      path={item.path}
                      component={item.component}
                    />
                  )
                )
              }
              <Redirect to="/" />
            </Switch>
            <GlobalFooter
              links={[{
                title: "Pro 首页",
                href: "http://pro.ant.design",
                blankTarget: true
              }, {
                title: "GitHub",
                href: "https://github.com/ant-design/ant-design-pro",
                blankTarget: true
              }, {
                title: "Ant Design",
                href: "http://ant.design",
                blankTarget: true
              }]}
              copyright={
                <div>
                  Copyright <Icon type="copyright" /> 2017 蚂蚁金服体验技术部出品
                </div>
              }
            />
          </Content>
        </Layout>
      </Layout>
    );

    return (
      <DocumentTitle title={this.getPageTitle()}>
        <ContainerQuery query={query}>
          {params => <div className={classNames(params)}>{layout}</div>}
        </ContainerQuery>
      </DocumentTitle>
    );
  }
}

export default connect(state => ({
  collapsed: state.global.collapsed
}))(BasicLayout);
