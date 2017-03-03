// 引入
import React from 'react';


import '../assets/styles/smartFormInput.less';

// 定义
class SmartFormInput extends React.Component {
	// 构造器
	constructor(props){
		super(props);
		
		this.state ={
			value : ''
		};
		
		// 修改方法的this
		this.changeHandler = this.changeHandler.bind(this);
	}
	
	
	getValue(){
//		return this.refs.inputField.value;
		return this.state.value;
	}
	
	changeHandler(event){
		// 获取输入框的新内容
		var content = event.target.value;
		
		// 修改状态
		this.setState({
			value : content
		});
	}
	
	
	//<input ref='inputField' className='form-group-field' type={inputType}/>
	// 渲染
	render() {
		var inputType = this.props.type||'text';
		
		return (
			<div className='smart-form-group'>
				<span className='form-group-icon'><i className={this.props.iconCls}></i></span>
				<input value={this.state.value}  onChange={this.changeHandler} className='form-group-field' type={inputType} />
			</div>
		);
	}
}


// 定义当前组件的参数约束
SmartFormInput.propTypes ={
	// 属性名称 ： 属性值的类型
	type : React.PropTypes.string,
	iconCls : React.PropTypes.string
	
};

// 导出
export default SmartFormInput;
