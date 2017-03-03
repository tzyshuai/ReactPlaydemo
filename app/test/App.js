import React,{Component} from 'react';

import {Link} from 'react-router';

class App extends Component{
	// 路由地址发生变化时，组件会自动重新渲染
	render(){
		console.log(this.props);
		return (
			<div>
				<nav>
					<ul>
						<li><a href='#/home'>首页0</a></li>
						<li><a href='#/about'>关于我们0</a></li>
						<li><Link to='/home' activeStyle={{color:'orange'}} >首页</Link></li>
						<li><Link to='/about' activeStyle={{color:'orange'}} >关于我们</Link></li>
					</ul>
				</nav>
				<section style={{height:200,backgroundColor:'red'}}></section>
				<main>
					{this.props.children}
				</main>
			</div>
		);
	}
}
export default App;