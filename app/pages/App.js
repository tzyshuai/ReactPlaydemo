import React from 'react';
import {
  render,
} from 'react-dom';
import {
  Router,
  Route,
  Link,
  IndexRoute,
  hashHistory,
  withRouter,
} from 'react-router';

import {
  Container,
  TabBar,
} from 'amazeui-touch';


class App extends React.Component {

	shouldComponentUpdate(){
		console.log('shouldComponentUpdate.....',this.props.location);
		
		var key = this.props.location.key;
		if(!key){
			return true;
		}else{
			return false;
		}
		
//		return true;
	}

	// 页面渲染
  render() {
  	// 默认参数
    const {
      location, // 地址信息
      children // 子组件内容
    } = this.props;
   
   // 获取上下文路由
   const {
      router
    } = this.context;
    
    // 过渡
    const transition = children.props.transition || 'sfr'; //rfr
		//{React.cloneElement(children, {key: location.key})}
		console.log(location.key);
    return (
      <Container direction="column">
        <Container
          transition={transition}
          // fade transition example
          // transition='fade'
          // transitionEnterTimeout={450}
          // transitionLeaveTimeout={300}
        >
        
          {React.cloneElement(children, {key: location.key})}
        
        </Container>

        <TabBar
          amStyle="primary"
        >
          <TabBar.Item
            component={Link}
            icon="info"
            title="组件"
            selected={router.isActive('/', true)}
            to="/"
            onlyActiveOnIndex
          />
          <TabBar.Item
            component={Link}
            icon="home"
            title="关于"
            badge="404"
            // @see https://github.com/reactjs/react-router/blob/0616f6e14337f68d3ce9f758aa73f83a255d6db3/docs/API.md#isactivepathorloc-indexonly
            selected={router.isActive('/home', true)}
            to="/home"
            onlyActiveOnIndex
          />
          <TabBar.Item
            component={Link}
            icon="person"
            title="我的"
            selected={router.isActive('/personal', true)}
            to="/personal"
            onlyActiveOnIndex
          />
        </TabBar>
      </Container>
    );
  }
}

// 静态属性
App.contextTypes = {
    router: React.PropTypes.object.isRequired // 向模块组件中，注入路由
};

//================↑↑↑↑↑↑在定义App入口组件↑↑↑↑↑↑↑↑↑↑↑↑↑↑=====================












//================↓↓↓↓↓↓↓↓↓↓↓↓在定义全局路由↓↓↓↓↓↓↓↓↓↓↓↓↓↓=====================

// Pages
import LoginPage from './LoginPage';
import HomePage from './HomePage';
import PersonalPage from './PersonalPage';

// withRouter HoC
// @see https://github.com/reactjs/react-router/blob/0616f6e14337f68d3ce9f758aa73f83a255d6db3/upgrade-guides/v2.4.0.md#v240-upgrade-guide
// <IndexRedirect to='/login' />
const routes = (
    <Route path="/" component={App}>
      <IndexRoute component={LoginPage} />
      <Route path="/login" component={LoginPage} />
      <Route path="/home" component={HomePage} />
      <Route path="/personal" component={PersonalPage} />
    </Route>
);

 render(<Router routes={routes} history={hashHistory}/>, document.getElementById('root'));
