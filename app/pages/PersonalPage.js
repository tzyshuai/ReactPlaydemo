// 引入
import React from 'react';
import {
	Container
} from 'amazeui-touch';
import HeaderBar from '../components/HeaderBar';


// 定义
class PersonalPage extends React.Component{
	
	// 渲染
	render(){
		return (
			<Container>
				<HeaderBar title='我的'/>
			</Container>
		);
	}
}

// 导出
export default PersonalPage;
