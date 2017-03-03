// 引入
import React from 'react';

import {
	Container,
	NavBar,
	amStyles,
	Slider,
	Grid,
	Col,
	View
} from 'amazeui-touch';

import HeaderBar from '../components/HeaderBar';



import '../assets/styles/homePage.less';

// 定义
class HomePage extends React.Component{
	
	// 渲染
	render(){
		// 轮播操作事件
		const onAction = function(index, direction) {
		  console.log('激活的幻灯片编号：', index, '，滚动方向：', direction);
		};
		// 定义轮播数据
		const sliderIntance = (
			  <Slider
			    onAction={onAction}
			  >
				    <Slider.Item>
				      <img
				        src="http://s.amazeui.org/media/i/demos/bing-1.jpg" />
				    </Slider.Item>
				    <Slider.Item><img
				      src="http://s.amazeui.org/media/i/demos/bing-2.jpg" /></Slider.Item>
				    <Slider.Item>
				      <img
				        src="http://s.amazeui.org/media/i/demos/bing-3.jpg" /></Slider.Item>
				    <Slider.Item>
				      <img
				        src="http://s.amazeui.org/media/i/demos/bing-4.jpg" /></Slider.Item>
			  </Slider>
			);

		const featureImg1 = require('../assets/images/feature_1.png');
		const featureImg2 = require('../assets/images/feature_2.png');
		const featureImg3 = require('../assets/images/feature_3.png');
		const featureImg4 = require('../assets/images/feature_4.png');

		// 定义feature特色
		const features = ( 
				  <Grid avg={4} className='featureStyle'>
		            <Col>
		            	<img src={featureImg1} />
		            	<p>周边</p>
		            </Col>
		            <Col>
		            	<img src={featureImg2} />
		            	<p>外卖</p>
		            </Col>
		            <Col>
		            	<img src={featureImg3} />
		            	<p>生活超市</p>
		            </Col>
		            <Col>
		            	<img src={featureImg4} />
		            	<p>团购</p>
		            </Col>
		            <Col>
		            	<img src={featureImg1} />
		            	<p>周边</p>
		            </Col>
		            <Col>
		            	<img src={featureImg1} />
		            	<p>周边</p>
		            </Col>
		            <Col>
		            	<img src={featureImg1} />
		            	<p>周边</p>
		            </Col>
		            <Col>
		            	<img src={featureImg1} />
		            	<p>周边</p>
		            </Col>
		            <Col>
		            	<img src={featureImg1} />
		            	<p>周边</p>
		            </Col>
		            <Col>
		            	<img src={featureImg1} />
		            	<p>周边</p>
		            </Col>
		            <Col>
		            	<img src={featureImg1} />
		            	<p>周边</p>
		            </Col>
		            <Col>
		            	<img src={featureImg1} />
		            	<p>周边</p>
		            </Col>
		            <Col>
		            	<img src={featureImg1} />
		            	<p>周边</p>
		            </Col>
		            <Col>
		            	<img src={featureImg1} />
		            	<p>周边</p>
		            </Col>
		            <Col>
		            	<img src={featureImg1} />
		            	<p>周边</p>
		            </Col>
		            <Col>
		            	<img src={featureImg1} />
		            	<p>周边</p>
		            </Col>
		            <Col>
		            	<img src={featureImg1} />
		            	<p>周边</p>
		            </Col>
		            <Col>
		            	<img src={featureImg1} />
		            	<p>周边</p>
		            </Col>
		            <Col>
		            	<img src={featureImg1} />
		            	<p>周边</p>
		            </Col>
		            <Col>
		            	<img src={featureImg1} />
		            	<p>周边</p>
		            </Col>
		            <Col>
		            	<img src={featureImg1} />
		            	<p>周边</p>
		            </Col>
		            <Col>
		            	<img src={featureImg1} />
		            	<p>周边</p>
		            </Col>
		            <Col>
		            	<img src={featureImg1} />
		            	<p>周边</p>
		            </Col>
		          </Grid>
		         );
		
		
		return (
			<View>
				<HeaderBar title='购物'/>
				<Container scrollable={true}>
					{sliderIntance}
					{features}
				</Container>
			</View>
		);
	}
}

// 导出
export default HomePage;
