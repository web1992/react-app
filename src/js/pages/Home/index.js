
import React, { Component } from 'react';  
import ReactDOM from 'react-dom'; 
import { TabBar, Icon } from 'antd-mobile';
import 'antd-mobile/dist/antd-mobile.css';  // or 'antd-mobile/dist/antd-mobile.less'

import filmNormal from './resources/film_normal.png';
import filmSelected from './resources/film_selected.png';

import discoveryNormal from './resources/discovery_normal.png';
import discoverySelected from './resources/discovery_selected.png';

import cinemaNormal from './resources/cinema_normal.png';
import cinemaSelected from './resources/cinema_selected.png';

import mineNormal from './resources/mine_normal.png';
import mineSelected from './resources/mine_selected.png';


class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'filmTab',
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
    
          icon={{ uri: filmNormal}}
          selectedIcon={{ uri: filmSelected }}
          
          selected={this.state.selectedTab === 'filmTab'}
          /**
           * badge={1}
           */
          onPress={() => {
            this.setState({
              selectedTab: 'filmTab',
            });
          }}
          data-seed="logId"
        >
          {this.renderContent('电影')}
        </TabBar.Item>
        <TabBar.Item
          icon={{uri:cinemaNormal}}
          selectedIcon={{uri:cinemaSelected}}
          title="影院"
          key="影院"
          /**badge={'new'}**/
          selected={this.state.selectedTab === 'cinemaTab'}
          onPress={() => {
            this.setState({
              selectedTab: 'cinemaTab',
            });
          }}
          data-seed="logId1"
        >
          {this.renderContent('影院')}
        </TabBar.Item>
        <TabBar.Item
             icon={{uri:discoveryNormal}}
          selectedIcon={{uri:discoverySelected}}
          title="发现"
          key="发现"
          /**
           * dot
           */
          selected={this.state.selectedTab === 'discoveryTab'}
          onPress={() => {
            this.setState({
              selectedTab: 'discoveryTab',
            });
          }}
        >
          {this.renderContent('发现')}
        </TabBar.Item>
        <TabBar.Item
          icon={{ uri: mineNormal }}
          selectedIcon={{ uri: mineSelected }}
          title="我的"
          key="我的"
          selected={this.state.selectedTab === 'mineTab'}
          onPress={() => {
            this.setState({
              selectedTab: 'mineTab',
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