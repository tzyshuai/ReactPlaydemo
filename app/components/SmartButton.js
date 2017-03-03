// 引入
import React from 'react';
import assign from 'object-assign';


import '../assets/styles/smartButton.less';

// 定义
class SmartButton extends React.Component {
	// 渲染
render() {
//		console.log(this.props);
		// 动态添加样式
  var btnCls = 'smart-btn';
  if (this.props.isBlock) {
    btnCls = btnCls.concat(' block');
  }
//console.log(this.props.value);
		
		// 数据流中，props属性的内容是不能直接修改或删除
//		delete this.props.isBlock;
		
		// 方式一：
//		var props = {
//			value : this.props.value
//		}

		// 方式二 ： object-assign 属性拷贝
		var props = {};
		assign(props, this.props);
		delete props.isBlock;
		
		return (
			<input className={btnCls} type='button' {...props}/>
		);
	}
}

// 定义当前组件的参数约束
SmartButton.propTypes ={
	// 属性名称 ： 属性值的类型
	isBlock : React.PropTypes.bool,
	value : React.PropTypes.string
};

// 导出
export default SmartButton;
