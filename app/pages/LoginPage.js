// 引入
import React from 'react';

import {
	Notification
} from 'amazeui-touch';

import '../assets/styles/loginPage.less';


import logoImg from '../assets/images/logo.jpg';
import SmartFormInput from '../components/SmartFormInput.js';
import SmartButton from '../components/SmartButton.js';

// 定义
class LoginPage extends React.Component{
	
	// 构造器
	constructor(props){
		// 第一步都应该调用super
		super(props);
		
//		console.log(context);
		// 初始化状态
		this.state = {
			visible : false
		}
		
		/*
		 * 初始化逻辑
		 */
		this.loginHandler = this.loginHandler.bind(this);
		this.closeNotification = this.closeNotification.bind(this);
		
		
	}
	
	getValue(key){
		return this.refs[key].getValue();
	}
	
	// 打开对话框
    openNotification() {
	    this.setState({
	      visible: true
	    });
    }
	
	// 关闭对话框
	closeNotification() {
		console.log('closeNotification....');
	    // 判断是否需要清除定时器
	    if(this.state.timeId){
	    	clearTimeout(this.state.timeId);
	    }
	    
	    this.setState({
	      visible: false,
	      timeId : null
	    });
	    
	}
	
	// 登录逻辑
	loginHandler(){
		// 获取输入框（组件）的值
//		console.log(this.getValue('username'),this.getValue('password'));
		
		var username = this.getValue('username');
		var password = this.getValue('password');
		
//		console.log(this.context.router);
		if(username && password){
			// 发ajax成功，然后进行页面跳转
			this.context.router.push('/home'); // 手动路由
		}else{
			// 如果失败，提示！！
			this.openNotification();	
			
			//  callback
			var timeId = setTimeout(this.closeNotification,3000);
			
			this.setState({
				timeId : timeId
			});
		}
		
	}
	
	// 渲染
	render(){
		return (
			<div className='page-container'>
				 <Notification
			          title="通知"
			          amStyle='alert'
			          visible={this.state.visible}
			          animated
			          onDismiss={this.closeNotification}
			        >
			          用户名或密码错误!!
			        </Notification>
			
			
				<section className='login-title'>
					<img className='login-title-img' src={logoImg}/>
					<p className='login-title-text'>智天下</p>
				</section>
				
				<section className='login-form'>
					<SmartFormInput ref='username' iconCls='icomoon-icon-mobile'/>
					<SmartFormInput ref='password'  type='password' iconCls='icomoon-icon-lock'/>
					<SmartButton value='登陆' isBlock  onClick={this.loginHandler}/>
					<p className='forgetPsw'>忘记密码?</p>
					<SmartButton  value='免费注册'/>&emsp;<SmartButton  value='游客登陆'/>
				</section>
			</div>
		);
	}
}

// 静态属性
LoginPage.contextTypes = {
    router: React.PropTypes.object.isRequired // 向模块组件中，注入路由
};
// 默认参数
LoginPage.defaultProps = {
    transition: 'rfr'
};

// 导出
export default LoginPage;
