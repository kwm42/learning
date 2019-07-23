import React, { Component } from 'react';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import SampleEcharts from '../sampleEcharts';
import Page1 from '../page1';
import Page2 from '../page2';
import Page3 from '../page3';

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

class MyLayout extends Component {
    state = {
        collapsed: false,
    };

    onCollapse = collapsed => {
        console.log(collapsed);
        this.setState({ collapsed });
    };

    render() {
        return (
            <Router>
                <Layout style={{ minHeight: '100vh' }}>
                    <Sider collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse}>
                        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
                            <Menu.Item key="1">
                                <Link to="/page1">Page 1</Link>
                            </Menu.Item>
                            <Menu.Item key="2">
                                <Link to="/page2">Page 2</Link>
                            </Menu.Item>
                            <Menu.Item key="3">
                                <Link to="/page3">page 3</Link>
                            </Menu.Item>
                            <Menu.Item key="4">
                                <Link to="/sampleEcharts">sampleEcharts</Link>
                            </Menu.Item>
                        </Menu>
                    </Sider>
                    <Layout>
                        <Header style={{ background: '#fff', padding: 0 }} />
                        <Content style={{ margin: '0 16px' }}>
                            <Breadcrumb style={{ margin: '16px 0' }}>
                                <Breadcrumb.Item>User</Breadcrumb.Item>
                                <Breadcrumb.Item>Bill</Breadcrumb.Item>
                            </Breadcrumb>
                            <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
                                <Route path="/page1" component={Page1} />
                                <Route path="/page2" component={Page2} />
                                <Route path="/page3" component={Page3} />
                                <Route path="/sampleEcharts" component={SampleEcharts} />
                            </div>
                        </Content>
                        <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
                    </Layout>
                </Layout>
            </Router>
        );
    }
}

export default MyLayout;