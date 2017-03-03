// 引入
import React from 'react';


import '../assets/styles/your.less';

// 定义
class HeaderBar extends React.Component{
	// 渲染
	render(){
		var dataAll = {
			  title: this.props.title
	//		  leftNav: [{ icon: 'left-nav'}],
//			  onAction: this.clickHandler
		};
		
		// 如果指定了左边的图标名称
		if(this.props.leftIcon){
			dataAll.leftNav =  [{ icon: this.props.leftIcon}],
		}
		
		// 如果指定了右边的图标名称
		if(this.props.rightIcon){
			dataAll.rightNav =  [{ icon: this.props.rightIcon}],
		}
		
		return (
			<NavBar {...dataAll}
					amStyle='secondary' 
				/>
		);
	}
}

// 导出
export default HeaderBar;
