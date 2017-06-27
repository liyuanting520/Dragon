import React, {Component} from 'react';
import moment from 'moment';
import 'moment/locale/zh-cn';
import { Button, DatePicker } from 'antd-mobile';


const maxDate = moment('2016-12-31 +0800', 'YYYY-MM-DD Z').utcOffset(8);
const minDate = moment('2013-01-01 +0800', 'YYYY-MM-DD Z').utcOffset(8);

const CustomBotton = props => (
	<Button
		type="ghost"
		onClick={props.onClick}>
		{props.children}
	</Button>
);

class CalenderPick extends Component {
	state = {
		dpValue: null,
		dpValue1: moment('2016-01-01 +0800', 'YYYY-MM-DD Z'),
		dpValue2: moment('2016-02-01 +0800', 'YYYY-MM-DD Z'),
		dpValue3: moment('2016-03-01 +0800', 'YYYY-MM-DD Z'),
		dpValue4: moment('2016-04-01 +0800', 'YYYY-MM-DD Z'),
		dpValue5: moment('2016-05-01 +0800', 'YYYY-MM-DD Z'),
		dpValue6: moment('2016-06-01 +0800', 'YYYY-MM-DD Z'),
		dpValue7: moment('2016-07-01 +0800', 'YYYY-MM-DD Z'),
		dpValue8: moment('2016-08-01 +0800', 'YYYY-MM-DD Z'),
		dpValue9: moment('2016-09-01 +0800', 'YYYY-MM-DD Z'),
		dpValue10: moment('2016-10-01 +0800', 'YYYY-MM-DD Z'),
		dpValue11: moment('2016-11-01 +0800', 'YYYY-MM-DD Z'),
		dpValue12: moment('2016-12-01 +0800', 'YYYY-MM-DD Z'),
		dpValue2013: moment('2013-01-01 +0800', 'YYYY-MM-DD Z'),
		dpValue2014: moment('2014-01-01 +0800', 'YYYY-MM-DD Z'),
		dpValue2015: moment('2015-01-01 +0800', 'YYYY-MM-DD Z'),
	};

	render() {
		return (<div>
			<div style={{
				marginLeft: '0.2rem',
				marginBottom: '0.2rem',
				color: '#9c9c9c',
				height: '0.8rem',
				lineHeight: '0.8rem'
			}}>2016年任务
			</div>
			<div style={{
				marginLeft: '0.2rem',
				display: 'inline-block',
				marginBottom: '0.2rem',
				backgroundColor: '#ffffff',
				color: '#333333',
				height: '0.8rem',
				lineHeight: '0.8rem',
				width: '30%',
				border: '0.1rem'
			}}>
				<DatePicker
					mode="date"
					title="选择日期"
					extra="请选择"
					value={this.state.dpValue1}
					onChange={v => this.setState({dpValue: v})}
					minDate={minDate}
					maxDate={maxDate}
				>
					<CustomBotton name="1">1月</CustomBotton>
				</DatePicker>
			</div>

			<div style={{
				marginLeft: '0.2rem',
				display: 'inline-block',
				marginBottom: '0.2rem',
				backgroundColor: '#ffffff',
				color: '#333333',
				height: '0.8rem',
				lineHeight: '0.8rem',
				width: '30%',
				border: '0.1rem'
			}}>
				<DatePicker
					mode="date"
					title="选择日期"
					extra="请选择"
					value={this.state.dpValue2}
					onChange={v => this.setState({dpValue: v})}
					minDate={minDate}
					maxDate={maxDate}
				>
					<CustomBotton name="2">2月</CustomBotton>
				</DatePicker>
			</div>
			<div style={{
				marginLeft: '0.2rem',
				display: 'inline-block',
				marginBottom: '0.2rem',
				backgroundColor: '#ffffff',
				color: '#333333',
				height: '0.8rem',
				lineHeight: '0.8rem',
				width: '30%',
				border: '0.1rem'
			}}>
				<DatePicker
					mode="date"
					title="选择日期"
					extra="请选择"
					value={this.state.dpValue3}
					onChange={v => this.setState({dpValue: v})}
					minDate={minDate}
					maxDate={maxDate}
				>
					<CustomBotton name="3">3月</CustomBotton>
				</DatePicker>
			</div>
			<div style={{
				marginLeft: '0.2rem',
				display: 'inline-block',
				marginBottom: '0.2rem',
				backgroundColor: '#ffffff',
				color: '#333333',
				height: '0.8rem',
				lineHeight: '0.8rem',
				width: '30%',
				border: '0.1rem'
			}}>
				<DatePicker
					mode="date"
					title="选择日期"
					extra="请选择"
					value={this.state.dpValue4}
					onChange={v => this.setState({dpValue: v})}
					minDate={minDate}
					maxDate={maxDate}
				>
					<CustomBotton name="4">4月</CustomBotton>
				</DatePicker>
			</div>
			<div style={{
				marginLeft: '0.2rem',
				display: 'inline-block',
				marginBottom: '0.2rem',
				backgroundColor: '#ffffff',
				color: '#333333',
				height: '0.8rem',
				lineHeight: '0.8rem',
				width: '30%',
				border: '0.1rem'
			}}>
				<DatePicker
					mode="date"
					title="选择日期"
					extra="请选择"
					value={this.state.dpValue5}
					onChange={v => this.setState({dpValue: v})}
					minDate={minDate}
					maxDate={maxDate}
				>
					<CustomBotton name="5">5月</CustomBotton>
				</DatePicker>
			</div>
			<div style={{
				marginLeft: '0.2rem',
				display: 'inline-block',
				marginBottom: '0.2rem',
				backgroundColor: '#ffffff',
				color: '#333333',
				height: '0.8rem',
				lineHeight: '0.8rem',
				width: '30%',
				border: '0.1rem'
			}}>
				<DatePicker
					mode="date"
					title="选择日期"
					extra="请选择"
					value={this.state.dpValue6}
					onChange={v => this.setState({dpValue: v})}
					minDate={minDate}
					maxDate={maxDate}
				>
					<CustomBotton name="6">6月</CustomBotton>
				</DatePicker>
			</div>
			<div style={{
				marginLeft: '0.2rem',
				display: 'inline-block',
				marginBottom: '0.2rem',
				backgroundColor: '#ffffff',
				color: '#333333',
				height: '0.8rem',
				lineHeight: '0.8rem',
				width: '30%',
				border: '0.1rem'
			}}>
				<DatePicker
					mode="date"
					title="选择日期"
					extra="请选择"
					value={this.state.dpValue7}
					onChange={v => this.setState({dpValue: v})}
					minDate={minDate}
					maxDate={maxDate}
				>
					<CustomBotton name="7">7月</CustomBotton>
				</DatePicker>
			</div>
			<div style={{
				marginLeft: '0.2rem',
				display: 'inline-block',
				marginBottom: '0.2rem',
				backgroundColor: '#ffffff',
				color: '#333333',
				height: '0.8rem',
				lineHeight: '0.8rem',
				width: '30%',
				border: '0.1rem'
			}}>
				<DatePicker
					mode="date"
					title="选择日期"
					extra="请选择"
					value={this.state.dpValue8}
					onChange={v => this.setState({dpValue: v})}
					minDate={minDate}
					maxDate={maxDate}
				>
					<CustomBotton name="8">8月</CustomBotton>
				</DatePicker>
			</div>
			<div style={{
				marginLeft: '0.2rem',
				display: 'inline-block',
				marginBottom: '0.2rem',
				backgroundColor: '#ffffff',
				color: '#333333',
				height: '0.8rem',
				lineHeight: '0.8rem',
				width: '30%',
				border: '0.1rem'
			}}>
				<DatePicker
					mode="date"
					title="选择日期"
					extra="请选择"
					value={this.state.dpValue9}
					onChange={v => this.setState({dpValue: v})}
					minDate={minDate}
					maxDate={maxDate}
				>
					<CustomBotton name="9">9月</CustomBotton>
				</DatePicker>
			</div>
			<div style={{
				marginLeft: '0.2rem',
				display: 'inline-block',
				marginBottom: '0.2rem',
				backgroundColor: '#ffffff',
				color: '#333333',
				height: '0.8rem',
				lineHeight: '0.8rem',
				width: '30%',
				border: '0.1rem'
			}}>
				<DatePicker
					mode="date"
					title="选择日期"
					extra="请选择"
					value={this.state.dpValue10}
					onChange={v => this.setState({dpValue: v})}
					minDate={minDate}
					maxDate={maxDate}
				>
					<CustomBotton name="10">10月</CustomBotton>
				</DatePicker>
			</div>
			<div style={{
				marginLeft: '0.2rem',
				display: 'inline-block',
				marginBottom: '0.2rem',
				backgroundColor: '#ffffff',
				color: '#333333',
				height: '0.8rem',
				lineHeight: '0.8rem',
				width: '30%',
				border: '0.1rem'
			}}>
				<DatePicker
					mode="date"
					title="选择日期"
					extra="请选择"
					value={this.state.dpValue11}
					onChange={v => this.setState({dpValue: v})}
					minDate={minDate}
					maxDate={maxDate}
				>
					<CustomBotton name="11">11月</CustomBotton>
				</DatePicker>
			</div>
			<div style={{
				marginLeft: '0.2rem',
				display: 'inline-block',
				marginBottom: '0.2rem',
				backgroundColor: '#ffffff',
				color: '#333333',
				height: '0.8rem',
				lineHeight: '0.8rem',
				width: '30%',
				border: '0.1rem'
			}}>
				<DatePicker
					mode="date"
					title="选择日期"
					extra="请选择"
					value={this.state.dpValue12}
					onChange={v => this.setState({dpValue: v})}
					minDate={minDate}
					maxDate={maxDate}
				>
					<CustomBotton name="12">12月</CustomBotton>
				</DatePicker>
			</div>

			<div style={{
				marginLeft: '0.2rem',
				marginBottom: '0.2rem',
				color: '#9c9c9c',
				height: '0.8rem',
				lineHeight: '0.8rem'
			}}>往年任务
			</div>

			<div style={{
				marginLeft: '0.2rem',
				display: 'inline-block',
				marginBottom: '0.2rem',
				backgroundColor: '#ffffff',
				color: '#333333',
				height: '0.8rem',
				lineHeight: '0.8rem',
				width: '30%',
				border: '0.1rem'
			}}>
				<DatePicker
					mode="date"
					title="选择日期"
					extra="请选择"
					value={this.state.dpValue2013}
					onChange={v => this.setState({dpValue: v})}
					minDate={minDate}
					maxDate={maxDate}
				>
					<CustomBotton name="2013">2013年</CustomBotton>
				</DatePicker>
			</div>
			<div style={{
				marginLeft: '0.2rem',
				display: 'inline-block',
				marginBottom: '0.2rem',
				backgroundColor: '#ffffff',
				color: '#333333',
				height: '0.8rem',
				lineHeight: '0.8rem',
				width: '30%',
				border: '0.1rem'
			}}>
				<DatePicker
					mode="date"
					title="选择日期"
					extra="请选择"
					value={this.state.dpValue2014}
					onChange={v => this.setState({dpValue: v})}
					minDate={minDate}
					maxDate={maxDate}
				>
					<CustomBotton name="2014">2014年</CustomBotton>
				</DatePicker>
			</div>
			<div style={{
				marginLeft: '0.2rem',
				display: 'inline-block',
				marginBottom: '0.2rem',
				backgroundColor: '#ffffff',
				color: '#333333',
				height: '0.8rem',
				lineHeight: '0.8rem',
				width: '30%',
				border: '0.1rem'
			}}>
				<DatePicker
					mode="date"
					title="选择日期"
					extra="请选择"
					value={this.state.dpValue2015}
					onChange={v => this.setState({dpValue: v})}
					minDate={minDate}
					maxDate={maxDate}
				>
					<CustomBotton name="2015">2015年</CustomBotton>
				</DatePicker>
			</div>

		</div>);
	}
}

export default CalenderPick;
