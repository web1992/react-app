
import React, { Component } from 'react';  
import ReactDOM from 'react-dom'; 
import { TabBar, Icon } from 'antd-mobile';

import film_normal from './resources/film_normal.png';
import film_selected from './resources/film_selected.png';

import discovery_normal from './resources/discovery_normal.png';
import discovery_selected from './resources/discovery_selected.png';

import cinema_normal from './resources/cinema_normal.png';
import cinema_selected from './resources/cinema_selected.png';


import mine_normal from './resources/mine_normal.png';
import mine_selected from './resources/mine_selected.png';


class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'redTab',
      hidden: false,
    };
  }

  renderContent(pageText) {
    return (
      <div style={{ backgroundColor: 'white', height: '100%', textAlign: 'center' }}>
        <div style={{ paddingTop: 60 }}>你已点击“{pageText}” tab， 当前展示“{pageText}”信息</div>
        <a style={{ display: 'block', marginTop: 40, marginBottom: 600, color: '#108ee9' }}
          onClick={(e) => {
            e.preventDefault();
            this.setState({
              hidden: !this.state.hidden,
            });
          }}
        >
          点击切换 tab-bar 显示/隐藏
        </a>
      </div>
    );
  }

  render() {
    return (
      <TabBar
        unselectedTintColor="#949494"
        tintColor="#33A3F4"
        barTintColor="white"
        hidden={this.state.hidden}
      >
        <TabBar.Item
          title="电影"
          key="电影"
    
          icon={{ uri: film_normal}}
          selectedIcon={{ uri: film_selected }}
          
          selected={this.state.selectedTab === 'blueTab'}
          badge={1}
          onPress={() => {
            this.setState({
              selectedTab: 'blueTab',
            });
          }}
          data-seed="logId"
        >
          {this.renderContent('电影')}
        </TabBar.Item>
        <TabBar.Item
          icon={{uri:cinema_normal}}
          selectedIcon={{uri:cinema_selected}}
          title="影院"
          key="影院"
          badge={'new'}
          selected={this.state.selectedTab === 'redTab'}
          onPress={() => {
            this.setState({
              selectedTab: 'redTab',
            });
          }}
          data-seed="logId1"
        >
          {this.renderContent('影院')}
        </TabBar.Item>
        <TabBar.Item
             icon={{uri:discovery_normal}}
          selectedIcon={{uri:discovery_selected}}
          title="发现"
          key="发现"
          dot
          selected={this.state.selectedTab === 'greenTab'}
          onPress={() => {
            this.setState({
              selectedTab: 'greenTab',
            });
          }}
        >
          {this.renderContent('发现')}
        </TabBar.Item>
        <TabBar.Item
          icon={{ uri: mine_normal }}
          selectedIcon={{ uri: mine_selected }}
          title="我的"
          key="我的"
          selected={this.state.selectedTab === 'yellowTab'}
          onPress={() => {
            this.setState({
              selectedTab: 'yellowTab',
            });
          }}
        >
          {this.renderContent('我的')}
        </TabBar.Item>
      </TabBar>
    );
  }
}

//ReactDOM.render(<TabBarExample />, document.getElementById('root'));
export default Home;