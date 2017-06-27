import { NavBar, Button, InputItem, WhiteSpace, DatePicker, List, Modal } from 'antd-mobile';
import React, { Component } from 'react';
import moment from 'moment';


const alert = Modal.alert;
const minDate = moment('2013-01-01 00:00 +0800', 'YYYY-MM-DD HH:mm Z').utcOffset(8);
const maxDate = moment('2030-12-31 23:59 +0800', 'YYYY-MM-DD HH:mm Z').utcOffset(8);

class DzjymtjgeChart extends Component {
	constructor(props) {
		super(props);
		this.state = {
			sel: "",
			dcsj: "",
			data: ["", "", 0.0, 0, "", ""],
		};
	}

	onsubmitHanler = () => {
		let databody = {
			"cb_SD_R_DZJYMTJGEDCBs": [
				{
					"ID": "20170613DFSDTDCB12345",
					"CBZD": "平桥区",
					"DCSJ": this.state.dcsj.format("YYYY-MM-DD HH:mm:ss"),
					"ZYDZLX": this.state.data[0],
					"SYQ": this.state.data[1],
					"JQPJMEL": this.state.data[2],
					"ZGTJEL": this.state.data[3],
					"BZ": this.state.data[5],
					"REPORTINFOID": "2c9081ea4e44e90e014e6e2e45e20372",
				}
			]
		};

		let url = 'mtc/wxreport/savereport';
		console.log(databody);
		fetch(url, {
			method: 'POST',
			mode: 'cors',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(databody)
		})

			.then(response => response.json())
			.then(data => console.log('成功しました　おめでとう', data))
			.catch(e => console.log("予想外の問題が発生しました", e));
	};

	handleBack = () => {
		location.href = '#';
	};

	render() {
		return (
			<div>
				<NavBar leftContent=""
				        mode="light"
				        onLeftClick={() => alert('返回确认', '将清空已填写信息，确认要返回吗？', [
					        { text: '继续填写', onPress: () => console.log('cancel') },
					        { text: '确定返回', onPress: () => this.handleBack(), style: { fontWeight: 'bold' } },
				        ])}
				        rightContent={<Button type="primary" size="small" multipleLine
				                              onClick={() => alert('上传确认', '上传后无法再次修改，确定要上传吗？', [
					                              { text: '取消', onPress: () => console.log('cancel') },
					                              { text: '确定', onPress: () => this.onsubmitHanler(), style: { fontWeight: 'bold' } },
				                              ])}>上传</Button>}
				>稻纵卷叶螟田间赶蛾调查表</NavBar>
				<WhiteSpace size="lg"/>
				<DatePicker className="forss"
				            mode="datetime"
				            minDate={minDate}
				            maxDate={maxDate}
				            onChange={(date) => {this.setState({dcsj: date});}}
				            value={this.state.dcsj}
				>
					<List.Item arrow="horizontal">调查时间</List.Item>
				</DatePicker>
				<InputItem placeholder="请填写"
				           labelNumber={9}
				           defaultValue={this.state.data[0]}
				           onChange={ val => (this.state.data[0] = val) }
				>主要稻作类型</InputItem>
				<InputItem placeholder="请填写"
				           labelNumber={9}
				           defaultValue={this.state.data[1]}
				           onChange={ val => (this.state.data[1] = val) }
				>水稻生长时期</InputItem>
				<InputItem placeholder="请填写"
				           type="money"
				           labelNumber={9}
				           defaultValue={this.state.data[2]==0.0 ? null : this.state.data[2]}
				           onChange={ val => (this.state.data[2] = val) }
				>加权平均亩蛾量(头)</InputItem>
				<InputItem placeholder="请填写"
				           type="number"
				           labelNumber={9}
				           defaultValue={this.state.data[3]==0 ? null : this.state.data[3]}
				           onChange={ val => (this.state.data[3] = val) }
				>最高田间蛾量(头/亩)</InputItem>
				<InputItem placeholder="请填写"
				           labelNumber={9}
				           defaultValue={this.state.data[4]}
				           onChange={ val => (this.state.data[4] = val) }
				>天气情况</InputItem>
				<InputItem placeholder="请填写"
				           labelNumber={9}
				           defaultValue={this.state.data[5]}
				           onChange={ val => (this.state.data[5] = val) }
				>备注</InputItem>

			</div>
		);
	}
}

export default DzjymtjgeChart;
