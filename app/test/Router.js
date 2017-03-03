// 引入
import React, {Component}  from 'react';
import ReactDOM  from 'react-dom';


import {Router,Route, hashHistory,IndexRoute,IndexRedirect}  from 'react-router';


//import '../assets/styles/your.less';

import Home from './Home';
import About from './About';
import App from './App';

// 定义
class MyRouter extends Component{
	
	// 渲染
	render(){
		// 最简单的路由
		const router1  =  (
				<Router history={hashHistory}>
					<Route path='/' component={Home}/>
					<Route path='/about' component={About}/>
				</Router>
				);
		
		/**
		 * http://www.itsource.cn:80/xxxxx\
		 * 
		 * URL：统一资源定位器。  http://211.12.1.120:8080/xx/getUser
		 * URI：统一资源标识符。 /getUser
		 * 
		 *  以'/'打头的路径，这种路径叫“绝对路径”。path='/home' ===> /home . 就是完整（URL）地址的第三根斜杠
		 * 	不以'/'开头的路径，叫做‘相对’路径 。 path='about' ==> /xxx/about
		 * 
		 */
		// 嵌套路由
		const router2  =  (
				<Router history={hashHistory}>
					<Route path='/' component={App}>
						<Route path='home' component={Home}/>
						<Route path='about' component={About}/>
					</Route>
				</Router>
				);
////		
			// 默认路由
		const router3  =  (
				<Router history={hashHistory}>
					<Route path='/' component={App}>
						<IndexRoute component={Home}/>
						<Route path='about' component={About}/>
					</Route>
				</Router>
				);
		// 重定向 路由
		const router4  =  (
				<Router history={hashHistory}>
					<Route path='/' component={App}>
						<IndexRedirect to='about'/>
						<Route path='home' component={Home}/>
						<Route path='about' component={About}/>
					</Route>
				</Router>
				);
		
		return router4;
	}
}

// 导出
//export default LoginPage;


ReactDOM.render(
		<MyRouter/>, 
		document.getElementById('root'));
