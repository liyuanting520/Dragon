import { NavBar, List, Button, Radio, InputItem, Flex, Tabs, WhiteSpace, DatePicker, Modal} from 'antd-mobile';
import React, { Component } from 'react';
import moment from 'moment';


function getStyles() {
	return {
		setRadio: {
			padding: '0.05rem',
			border: '0 none',
			borderRadius: '50%',
			marginLeft: '0.1rem',
		},
	};
}
const alert = Modal.alert;
const TabPane = Tabs.TabPane;
const minDate = moment('2013-01-01 00:00 +0800', 'YYYY-MM-DD HH:mm Z').utcOffset(8);
const maxDate = moment('2030-12-31 23:59 +0800', 'YYYY-MM-DD HH:mm Z').utcOffset(8);

class McdtChart extends Component {
	constructor(props) {
		super(props);
		this.state = {
			input1: "", input2: "", input3: "",
			value: 0, value2: 0, value3: 0, value4: 0, value5: 0, value6: 0,
			dinput1_0: 0, dinput1_1: 0, dinput1_2: 0, dinput1_3: 0, dinput1_4: 0, dinput1_5: 0, dinput1_6: 0, dinput1_7: 0, dinput1_8: 0, dinput1_9: 0, dinput1_10: 0,
			dinput2_1: 0, dinput2_2: 0, dinput2_4: 0, dinput2_5: 0, dinput2_6: 0, dinput2_7: 0, dinput2_8: 0, dinput2_9: 0, dinput2_10: 0,
			dinput3_1: 0, dinput3_2: 0, dinput3_4: 0, dinput3_5: 0, dinput3_6: 0, dinput3_7: 0, dinput3_8: 0, dinput3_9: 0, dinput3_10: 0,
			dinput4_1: 0, dinput4_2: 0, dinput4_4: 0, dinput4_5: 0, dinput4_6: 0, dinput4_7: 0, dinput4_8: 0, dinput4_9: 0, dinput4_10: 0,
			dinput5_1: 0, dinput5_2: 0, dinput5_4: 0, dinput5_5: 0, dinput5_6: 0, dinput5_7: 0, dinput5_8: 0, dinput5_9: 0, dinput5_10: 0,
		};
	}

	onsubmitHanler = () => {
		let mel = this.state.dinput1_3 / (this.state.dinput1_1 + this.state.dinput2_1 + this.state.dinput3_1 + this.state.dinput4_1 + this.state.dinput5_1) * this.state.dinput1_0;
		let mlkl = (this.state.dinput1_4 + this.state.dinput2_4 + this.state.dinput3_4 + this.state.dinput4_4 + this.state.dinput5_4) / (this.state.dinput1_1 + this.state.dinput2_1 + this.state.dinput3_1 + this.state.dinput4_1 + this.state.dinput5_1) * this.state.dinput1_0;
		let mycl = (this.state.dinput1_6 + this.state.dinput2_6 + this.state.dinput3_6 + this.state.dinput4_6 + this.state.dinput5_6) / (this.state.dinput1_1 + this.state.dinput2_1 + this.state.dinput3_1 + this.state.dinput4_1 + this.state.dinput5_1) * this.state.dinput1_0;
		let kscl = (this.state.dinput1_7 + this.state.dinput2_7 + this.state.dinput3_7 + this.state.dinput4_7 + this.state.dinput5_7) / (this.state.dinput1_1 + this.state.dinput2_1 + this.state.dinput3_1 + this.state.dinput4_1 + this.state.dinput5_1) * 100;
		let kszl = (this.state.dinput1_8 + this.state.dinput2_8 + this.state.dinput3_8 + this.state.dinput4_8 + this.state.dinput5_8) / (this.state.dinput1_1 + this.state.dinput2_1 + this.state.dinput3_1 + this.state.dinput4_1 + this.state.dinput5_1) * 100;
		let kxzl = (this.state.dinput1_9 + this.state.dinput2_9 + this.state.dinput3_9 + this.state.dinput4_9 + this.state.dinput5_9) / (this.state.dinput1_1 + this.state.dinput2_1 + this.state.dinput3_1 + this.state.dinput4_1 + this.state.dinput5_1) * 100;

		let databody = {
			"ReportMain": [
				{
					"ID": "20170613DFSDTDCB12345",
					"DCSJ": this.state.input2.format("YYYY-MM-DD HH:mm:ss"),
					"CBZD": this.state.input1,
					"TBDWID": "411623",
					"REPORTINFOID": "2c9081ea4e44e90e014e6e2e45e20372",
					"tableName": "CB_SD_Z_DFSDTDCB"
				}
			],
			"cb_SD_Z_MCDTDCBMXs": [
				{
					"PARENT_ID": "2c9081ea4e44e90e014e6e2e45e20372",
					"ID": "20170613DFSDTDCB12345",
					"BCMC": this.state.input3,
					"DCDD": this.state.value6,
					"DZLX": this.state.value,
					"SYQ": this.state.value2,
					"SD": this.state.value3,
					"DCTKBHS": this.state.value4,
					"LXT": this.state.value5,
					"DCDBHS": "1",
					"MMSDZZCS": this.state.dinput1_0,
					"DCCS": this.state.dinput1_1,
					"DCZS": this.state.dinput1_2,
					"EL": this.state.dinput1_3,
					"MEL": mel,
					"LK": this.state.dinput1_4,
					"BJSLK": this.state.dinput1_5,
					"MLKL": mlkl,
					"YCL": this.state.dinput1_6,
					"MYCL": mycl,
					"KSCS": this.state.dinput1_7,
					"KSCL": kscl,
					"KSZS": this.state.dinput1_8,
					"KSZL": kszl,
					"KXZ": this.state.dinput1_9,
					"KXZL": kxzl,
					"BZ": this.state.dinput1_10
				}, {
					"PARENT_ID": "2c9081ea4e44e90e014e6e2e45e20372",
					"ID": "20170613DFSDTDCB12345",
					"BCMC": this.state.input3,
					"DCDD": this.state.value6,
					"DZLX": this.state.value,
					"SYQ": this.state.value2,
					"SD": this.state.value3,
					"DCTKBHS": this.state.value4,
					"LXT": this.state.value5,
					"DCDBHS": "1",
					"MMSDZZCS": this.state.dinput1_0,
					"DCCS": this.state.dinput2_1,
					"DCZS": this.state.dinput2_2,
					"EL": this.state.dinput1_3,
					"MEL": mel,
					"LK": this.state.dinput2_4,
					"BJSLK": this.state.dinput2_5,
					"MLKL": mlkl,
					"YCL": this.state.dinput2_6,
					"MYCL": mycl,
					"KSCS": this.state.dinput2_7,
					"KSCL": kscl,
					"KSZS": this.state.dinput2_8,
					"KSZL": kszl,
					"KXZ": this.state.dinput2_9,
					"KXZL": kxzl,
					"BZ": this.state.dinput2_10
				}, {
					"PARENT_ID": "2c9081ea4e44e90e014e6e2e45e20372",
					"ID": "20170613DFSDTDCB12345",
					"BCMC": this.state.input3,
					"DCDD": this.state.value6,
					"DZLX": this.state.value,
					"SYQ": this.state.value2,
					"SD": this.state.value3,
					"DCTKBHS": this.state.value4,
					"LXT": this.state.value5,
					"DCDBHS": "1",
					"MMSDZZCS": this.state.dinput1_0,
					"DCCS": this.state.dinput3_1,
					"DCZS": this.state.dinput3_2,
					"EL": this.state.dinput1_3,
					"MEL": mel,
					"LK": this.state.dinput3_4,
					"BJSLK": this.state.dinput3_5,
					"MLKL": mlkl,
					"YCL": this.state.dinput3_6,
					"MYCL": mycl,
					"KSCS": this.state.dinput3_7,
					"KSCL": kscl,
					"KSZS": this.state.dinput3_8,
					"KSZL": kszl,
					"KXZ": this.state.dinput3_9,
					"KXZL": kxzl,
					"BZ": this.state.dinput3_10
				}, {
					"PARENT_ID": "2c9081ea4e44e90e014e6e2e45e20372",
					"ID": "20170613DFSDTDCB12345",
					"BCMC": this.state.input3,
					"DCDD": this.state.value6,
					"DZLX": this.state.value,
					"SYQ": this.state.value2,
					"SD": this.state.value3,
					"DCTKBHS": this.state.value4,
					"LXT": this.state.value5,
					"DCDBHS": "1",
					"MMSDZZCS": this.state.dinput1_0,
					"DCCS": this.state.dinput4_1,
					"DCZS": this.state.dinput4_2,
					"EL": this.state.dinput1_3,
					"MEL": mel,
					"LK": this.state.dinput4_4,
					"BJSLK": this.state.dinput4_5,
					"MLKL": mlkl,
					"YCL": this.state.dinput4_6,
					"MYCL": mycl,
					"KSCS": this.state.dinput4_7,
					"KSCL": kscl,
					"KSZS": this.state.dinput4_8,
					"KSZL": kszl,
					"KXZ": this.state.dinput4_9,
					"KXZL": kxzl,
					"BZ": this.state.dinput4_10
				}, {
					"PARENT_ID": "2c9081ea4e44e90e014e6e2e45e20372",
					"ID": "20170613DFSDTDCB12345",
					"BCMC": this.state.input3,
					"DCDD": this.state.value6,
					"DZLX": this.state.value,
					"SYQ": this.state.value2,
					"SD": this.state.value3,
					"DCTKBHS": this.state.value4,
					"LXT": this.state.value5,
					"DCDBHS": "1",
					"MMSDZZCS": this.state.dinput1_0,
					"DCCS": this.state.dinput5_1,
					"DCZS": this.state.dinput5_2,
					"EL": this.state.dinput1_3,
					"MEL": mel,
					"LK": this.state.dinput5_4,
					"BJSLK": this.state.dinput5_5,
					"MLKL": mlkl,
					"YCL": this.state.dinput5_6,
					"MYCL": mycl,
					"KSCS": this.state.dinput5_7,
					"KSCL": kscl,
					"KSZS": this.state.dinput5_8,
					"KSZL": kszl,
					"KXZ": this.state.dinput5_9,
					"KXZL": kxzl,
					"BZ": this.state.dinput5_10
				}
			]
		}

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
			.then(reponse => reponse.json())
			.then(data => console.log('成功しました　おめでとう', data))
			.catch(e => console.log("予想外の問題が発生しました", e));
	};

	handleBack = () => {
		location.href = '#';
	};
	onChange = (value) => {
		this.setState({
			value,
		});
	};
	onChange2 = (value) => {
		this.setState({
			value2: value,
		});
	};
	onChange3 = (value) => {
		this.setState({
			value3: value,
		});
	};
	onChange4 = (value) => {
		this.setState({
			value4: value,
		});
	};
	onChange5 = (value) => {
		this.setState({
			value5: value,
		});
	};
	onChange6 = (value) => {
		this.setState({
			value6: value,
		});
	};

	render() {
		const { value, value2, value3, value4, value5, value6 } = this.state;
		const data = [
			{ value: 0, label: '早稻' },
			{ value: 1, label: '中稻' },
			{ value: 2, label: '晚稻' },
		];
		const data2 = [
			{ value: 0, label: '营养生长阶段' },
			{ value: 1, label: '营养生长,生殖生长' },
			{ value: 2, label: '生殖生长阶段' },
		];
		const data3 = [
			{ value: 0, label: '1' },
			{ value: 1, label: '2' },
			{ value: 2, label: '3' },
			{ value: 3, label: '4' },
			{ value: 4, label: '5' },
			{ value: 5, label: '6' },
		];
		const data4 = [
			{ value: 0, label: '1号田块' },
			{ value: 1, label: '2号田块' },
			{ value: 2, label: '3号田块' },
		];
		const data5 = [
			{ value: 0, label: '轻' },
			{ value: 1, label: '中' },
			{ value: 2, label: '重' },
		];
		const data6 = [
			{ value: 0, label: '二化螟' },
			{ value: 1, label: '三化螟' },
			{ value: 2, label: '大螟' },
		];
		const styles = getStyles();
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
				>螟虫大田调查表</NavBar>
				<WhiteSpace size="lg"/>
				<InputItem placeholder="请填写" onChange={(value) => {this.setState({input1: value});}}>调查站点</InputItem>
				<DatePicker className="forss"
				            mode="datetime"
				            minDate={minDate}
				            maxDate={maxDate}
				            onChange={(date) => {this.setState({input2: date});}}
				            value={this.state.input2}
				>
					<List.Item arrow="horizontal">调查时间</List.Item>
				</DatePicker>
				<InputItem placeholder="请填写" onChange={(value) => {this.setState({input3: value});}}>调查地点</InputItem>
				<Flex style={{ padding: '0.3rem' }}>
					<Flex.Item style={{ padding: '0.3rem 0', color: '#888', flex: 'none' }}>病虫名称</Flex.Item>
					<Flex.Item>
						<List>
							{data6.map(i => (
								<Radio style={styles.setRadio} key={i.value} checked={value6 === i.value} onChange={() => this.onChange6(i.value)}>
									{i.label}
								</Radio>
							))}
						</List>
					</Flex.Item>
				</Flex>
				<Flex style={{ padding: '0.3rem' }}>
					<Flex.Item style={{ padding: '0.3rem 0', color: '#888', flex: 'none' }}>稻作类型</Flex.Item>
					<Flex.Item>
						<List>
							{data.map(i => (
								<Radio style={styles.setRadio} key={i.value} checked={value === i.value} onChange={() => this.onChange(i.value)}>
									{i.label}
								</Radio>
							))}
						</List>
					</Flex.Item>
				</Flex>
				<Flex style={{ padding: '0.3rem' }}>
					<Flex.Item style={{ padding: '0.3rem 0', color: '#888', flex: 'none' }}>水稻生育期</Flex.Item>
					<Flex.Item>
						<List>
							{data2.map(i => (
								<Radio style={styles.setRadio} key={i.value} checked={value2 === i.value} onChange={() => this.onChange2(i.value)}>
									{i.label}
								</Radio>
							))}
						</List>
					</Flex.Item>
				</Flex>
				<Flex style={{ padding: '0.3rem' }}>
					<Flex.Item style={{ padding: '0.3rem 0', color: '#888', flex: 'none' }}>世代</Flex.Item>
					<Flex.Item>
						<List>
							{data3.map(i => (
								<Radio style={styles.setRadio} key={i.value} checked={value3 === i.value} onChange={() => this.onChange3(i.value)}>
									{i.label}
								</Radio>
							))}
						</List>
					</Flex.Item>
				</Flex>
				<Flex style={{ padding: '0.3rem' }}>
					<Flex.Item style={{ padding: '0.3rem 0', color: '#888', flex: 'none' }}>调查田块编号数</Flex.Item>
					<Flex.Item>
						<List>
							{data4.map(i => (
								<Radio style={styles.setRadio} key={i.value} checked={value4 === i.value} onChange={() => this.onChange4(i.value)}>
									{i.label}
								</Radio>
							))}
						</List>
					</Flex.Item>
				</Flex>
				<Flex style={{ padding: '0.3rem' }}>
					<Flex.Item style={{ padding: '0.3rem 0', color: '#888', flex: 'none' }}>类型田</Flex.Item>
					<Flex.Item>
						<List>
							{data5.map(i => (
								<Radio style={styles.setRadio} key={i.value} checked={value5 === i.value} onChange={() => this.onChange5(i.value)}>
									{i.label}
								</Radio>
							))}
						</List>
					</Flex.Item>
				</Flex>
				<Tabs defaultActiveKey="1">
					<TabPane tab="取样点1" key="1">
						<InputItem placeholder="请填写" labelNumber={11} onChange={(value) => {this.setState({dinput1_0: value});}}>每亩水稻种植丛数(丛/亩)</InputItem>
						<InputItem placeholder="请填写" labelNumber={11} onChange={(value) => {this.setState({dinput1_1: value});}}>调查丛数(丛)</InputItem>
						<InputItem placeholder="请填写" labelNumber={11} onChange={(value) => {this.setState({dinput1_2: value});}}>调查株数(株)</InputItem>
						<List renderHeader={() => '蛾量(头)'}>
						<InputItem placeholder="请填写" labelNumber={11} onChange={(value) => {this.setState({dinput1_3: value});}}>蛾量(头)</InputItem>
						</List>
						<List renderHeader={() => '卵量(块)'}>
						<InputItem placeholder="请填写" labelNumber={11} onChange={(value) => {this.setState({dinput1_4: value});}}>卵块(块)</InputItem>
						<InputItem placeholder="请填写" labelNumber={11} onChange={(value) => {this.setState({dinput1_5: value});}}>被寄生的卵块数(块)</InputItem>
						</List>
						<List renderHeader={() => '幼虫量(头)'}>
						<InputItem placeholder="请填写" labelNumber={11} onChange={(value) => {this.setState({dinput1_6: value});}}>幼虫量(头)</InputItem>
						</List>
						<InputItem placeholder="请填写" labelNumber={11} onChange={(value) => {this.setState({dinput1_7: value});}}>枯鞘丛数</InputItem>
						<List renderHeader={() => '被害株(株)'}>
						<InputItem placeholder="请填写" labelNumber={11} onChange={(value) => {this.setState({dinput1_8: value});}}>枯鞘株数</InputItem>
						<InputItem placeholder="请填写" labelNumber={11} onChange={(value) => {this.setState({dinput1_9: value});}}>枯心株</InputItem>
						</List>
						<WhiteSpace size="lg"/>
						<InputItem placeholder="请填写" labelNumber={11} onChange={(value) => {this.setState({dinput1_10: value});}}>备注</InputItem>
					</TabPane>
					<TabPane tab="取样点2" key="2">
						<InputItem placeholder="请填写" labelNumber={11} onChange={(value) => {this.setState({dinput1_0: value});}}>每亩水稻种植丛数(丛/亩)</InputItem>
						<InputItem placeholder="请填写" labelNumber={11} onChange={(value) => {this.setState({dinput2_1: value});}}>调查丛数(丛)</InputItem>
						<InputItem placeholder="请填写" labelNumber={11} onChange={(value) => {this.setState({dinput2_2: value});}}>调查株数(株)</InputItem>
						<List renderHeader={() => '蛾量(头)'}>
						<InputItem placeholder="请填写" labelNumber={11} onChange={(value) => {this.setState({dinput1_3: value});}}>蛾量(头)</InputItem>
						</List>
						<List renderHeader={() => '卵量(块)'}>
						<InputItem placeholder="请填写" labelNumber={11} onChange={(value) => {this.setState({dinput2_4: value});}}>卵块(块)</InputItem>
						<InputItem placeholder="请填写" labelNumber={11} onChange={(value) => {this.setState({dinput2_5: value});}}>被寄生的卵块数(块)</InputItem>
						</List>
						<List renderHeader={() => '幼虫量(头)'}>
						<InputItem placeholder="请填写" labelNumber={11} onChange={(value) => {this.setState({dinput2_6: value});}}>幼虫量(头)</InputItem>
						</List>
						<InputItem placeholder="请填写" labelNumber={11} onChange={(value) => {this.setState({dinput2_7: value});}}>枯鞘丛数</InputItem>
						<List renderHeader={() => '被害株(株)'}>
						<InputItem placeholder="请填写" labelNumber={11} onChange={(value) => {this.setState({dinput2_8: value});}}>枯鞘株数</InputItem>
						<InputItem placeholder="请填写" labelNumber={11} onChange={(value) => {this.setState({dinput2_9: value});}}>枯心株</InputItem>
					</List>
						<WhiteSpace size="lg"/>
						<InputItem placeholder="请填写" labelNumber={11} onChange={(value) => {this.setState({dinput2_10: value});}}>备注</InputItem>
					</TabPane>
					<TabPane tab="取样点3" key="3">
						<InputItem placeholder="请填写" labelNumber={11} onChange={(value) => {this.setState({dinput1_0: value});}}>每亩水稻种植丛数(丛/亩)</InputItem>
						<InputItem placeholder="请填写" labelNumber={11} onChange={(value) => {this.setState({dinput3_1: value});}}>调查丛数(丛)</InputItem>
						<InputItem placeholder="请填写" labelNumber={11} onChange={(value) => {this.setState({dinput3_2: value});}}>调查株数(株)</InputItem>
						<List renderHeader={() => '蛾量(头)'}>
						<InputItem placeholder="请填写" labelNumber={11} onChange={(value) => {this.setState({dinput1_3: value});}}>蛾量(头)</InputItem>
						</List>
						<List renderHeader={() => '卵量(块)'}>
						<InputItem placeholder="请填写" labelNumber={11} onChange={(value) => {this.setState({dinput3_4: value});}}>卵块(块)</InputItem>
						<InputItem placeholder="请填写" labelNumber={11} onChange={(value) => {this.setState({dinput3_5: value});}}>被寄生的卵块数(块)</InputItem>
						</List>
						<List renderHeader={() => '幼虫量(头)'}>
						<InputItem placeholder="请填写" labelNumber={11} onChange={(value) => {this.setState({dinput3_6: value});}}>幼虫量(头)</InputItem>
						</List>
						<InputItem placeholder="请填写" labelNumber={11} onChange={(value) => {this.setState({dinput3_7: value});}}>枯鞘丛数</InputItem>
						<List renderHeader={() => '被害株(株)'}>
						<InputItem placeholder="请填写" labelNumber={11} onChange={(value) => {this.setState({dinput3_8: value});}}>枯鞘株数</InputItem>
						<InputItem placeholder="请填写" labelNumber={11} onChange={(value) => {this.setState({dinput3_9: value});}}>枯心株</InputItem>
						</List>
						<WhiteSpace size="lg"/>
						<InputItem placeholder="请填写" labelNumber={11} onChange={(value) => {this.setState({dinput3_10: value});}}>备注</InputItem>
					</TabPane>
					<TabPane tab="取样点4" key="4">
						<InputItem placeholder="请填写" labelNumber={11} onChange={(value) => {this.setState({dinput1_0: value});}}>每亩水稻种植丛数(丛/亩)</InputItem>
						<InputItem placeholder="请填写" labelNumber={11} onChange={(value) => {this.setState({dinput4_1: value});}}>调查丛数(丛)</InputItem>
						<InputItem placeholder="请填写" labelNumber={11} onChange={(value) => {this.setState({dinput4_2: value});}}>调查株数(株)</InputItem>
						<List renderHeader={() => '蛾量(头)'}>
						<InputItem placeholder="请填写" labelNumber={11} onChange={(value) => {this.setState({dinput1_3: value});}}>蛾量(头)</InputItem>
						</List>
						<List renderHeader={() => '卵量(块)'}>
						<InputItem placeholder="请填写" labelNumber={11} onChange={(value) => {this.setState({dinput4_4: value});}}>卵块(块)</InputItem>
						<InputItem placeholder="请填写" labelNumber={11} onChange={(value) => {this.setState({dinput4_5: value});}}>被寄生的卵块数(块)</InputItem>
						</List>
						<List renderHeader={() => '幼虫量(头)'}>
						<InputItem placeholder="请填写" labelNumber={11} onChange={(value) => {this.setState({dinput4_6: value});}}>幼虫量(头)</InputItem>
						</List>
						<InputItem placeholder="请填写" labelNumber={11} onChange={(value) => {this.setState({dinput4_7: value});}}>枯鞘丛数</InputItem>
						<List renderHeader={() => '被害株(株)'}>
						<InputItem placeholder="请填写" labelNumber={11} onChange={(value) => {this.setState({dinput4_8: value});}}>枯鞘株数</InputItem>
						<InputItem placeholder="请填写" labelNumber={11} onChange={(value) => {this.setState({dinput4_9: value});}}>枯心株</InputItem>
						</List>
						<WhiteSpace size="md"/>
						<WhiteSpace size="lg"/>
						<InputItem placeholder="请填写" labelNumber={11} onChange={(value) => {this.setState({dinput4_10: value});}}>备注</InputItem>
					</TabPane>
					<TabPane tab="取样点5" key="5">
						<InputItem placeholder="请填写" labelNumber={11} onChange={(value) => {this.setState({dinput1_0: value});}}>每亩水稻种植丛数(丛/亩)</InputItem>
						<InputItem placeholder="请填写" labelNumber={11} onChange={(value) => {this.setState({dinput5_1: value});}}>调查丛数(丛)</InputItem>
						<InputItem placeholder="请填写" labelNumber={11} onChange={(value) => {this.setState({dinput5_2: value});}}>调查株数(株)</InputItem>
						<List renderHeader={() => '蛾量(头)'}>
						<InputItem placeholder="请填写" labelNumber={11} onChange={(value) => {this.setState({dinput1_3: value});}}>蛾量(头)</InputItem>
						</List>
						<List renderHeader={() => '卵量(块)'}>
						<InputItem placeholder="请填写" labelNumber={11} onChange={(value) => {this.setState({dinput5_4: value});}}>卵块(块)</InputItem>
						<InputItem placeholder="请填写" labelNumber={11} onChange={(value) => {this.setState({dinput5_5: value});}}>被寄生的卵块数(块)</InputItem>
						</List>
						<List renderHeader={() => '幼虫量(头)'}>
						<InputItem placeholder="请填写" labelNumber={11} onChange={(value) => {this.setState({dinput5_6: value});}}>幼虫量(头)</InputItem>
						</List>
						<InputItem placeholder="请填写" labelNumber={11} onChange={(value) => {this.setState({dinput5_7: value});}}>枯鞘丛数</InputItem>
						<List renderHeader={() => '被害株(株)'}>
						<InputItem placeholder="请填写" labelNumber={11} onChange={(value) => {this.setState({dinput5_8: value});}}>枯鞘株数</InputItem>
						<InputItem placeholder="请填写" labelNumber={11} onChange={(value) => {this.setState({dinput5_9: value});}}>枯心株</InputItem>
						</List>
						<WhiteSpace size="md"/>
						<WhiteSpace size="lg"/>
						<InputItem placeholder="请填写" labelNumber={11} onChange={(value) => {this.setState({dinput5_10: value});}}>备注</InputItem>
					</TabPane>
				</Tabs>
			</div>
		);
	}
}

export default McdtChart;
