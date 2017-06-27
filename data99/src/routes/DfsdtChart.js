import {connect} from 'dva';
import {NavBar, List, Button, Radio, InputItem, Flex, Tabs, WhiteSpace, DatePicker, Modal} from 'antd-mobile';
import React, {Component} from 'react';
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

class DfsdtChart extends Component {
	constructor(props) {
		super(props);
		this.state = {
			input1: "", input2: "", input3: "", input4: "",
			value: 0, value2: 0, value4: 0, value5: 0,
			dinput1_0: 0, dinput1_1: 0, dinput1_2: 0, dinput1_3: 0, dinput1_4: 0, dinput1_5: 0, dinput1_6: 0, dinput1_7: 0, dinput1_8: 0, dinput1_9: 0,
			dinput2_0: 0, dinput2_1: 0, dinput2_2: 0, dinput2_3: 0, dinput2_4: 0, dinput2_5: 0, dinput2_6: 0, dinput2_7: 0, dinput2_8: 0, dinput2_9: 0,
			dinput3_0: 0, dinput3_1: 0, dinput3_2: 0, dinput3_3: 0, dinput3_4: 0, dinput3_5: 0, dinput3_6: 0, dinput3_7: 0, dinput3_8: 0, dinput3_9: 0,
			dinput4_0: 0, dinput4_1: 0, dinput4_2: 0, dinput4_3: 0, dinput4_4: 0, dinput4_5: 0, dinput4_6: 0, dinput4_7: 0, dinput4_8: 0, dinput4_9: 0,
			dinput5_0: 0, dinput5_1: 0, dinput5_2: 0, dinput5_3: 0, dinput5_4: 0, dinput5_5: 0, dinput5_6: 0, dinput5_7: 0, dinput5_8: 0, dinput5_9: 0,
		};
		this.onsubmitHanler = this.onsubmitHanler.bind(this);
	}

	onsubmitHanler = () => {
		let dfshj = this.state.dinput1_4 + this.state.dinput1_5 + this.state.dinput1_6 + this.state.dinput1_7 + this.state.dinput1_8 + this.state.dinput1_9
								+ this.state.dinput2_4 + this.state.dinput2_5 + this.state.dinput2_6 + this.state.dinput2_7 + this.state.dinput2_8 + this.state.dinput2_9
								+ this.state.dinput3_4 + this.state.dinput3_5 + this.state.dinput3_6 + this.state.dinput3_7 + this.state.dinput3_8 + this.state.dinput3_9
								+ this.state.dinput4_4 + this.state.dinput4_5 + this.state.dinput4_6 + this.state.dinput4_7 + this.state.dinput4_8 + this.state.dinput4_9
								+ this.state.dinput5_4 + this.state.dinput5_5 + this.state.dinput5_6 + this.state.dinput5_7 + this.state.dinput5_8 + this.state.dinput5_9;
		let hfsbl = (this.state.dinput1_7 + this.state.dinput1_8 + this.state.dinput1_9
								+ this.state.dinput2_7 + this.state.dinput2_8 + this.state.dinput2_9
								+ this.state.dinput3_7 + this.state.dinput3_8 + this.state.dinput3_9
								+ this.state.dinput4_7 + this.state.dinput4_8 + this.state.dinput4_9
								+ this.state.dinput5_7 + this.state.dinput5_8 + this.state.dinput5_9) / dfshj;
		let zcs = this.state.dinput1_0 + this.state.dinput2_0 + this.state.dinput3_0 + this.state.dinput4_0 + this.state.dinput5_0;
		let zll = this.state.dinput1_3 + this.state.dinput2_3 + this.state.dinput3_3 + this.state.dinput4_3 + this.state.dinput5_3;
		let bccl = dfshj / zcs * 100;
		let bcll = zll / zcs * 100;
		let dlzl = (this.state.dinput1_2 + this.state.dinput2_2 + this.state.dinput3_2 + this.state.dinput4_2 + this.state.dinput5_2) / (this.state.dinput1_1 + this.state.dinput2_1 + this.state.dinput3_1 + this.state.dinput4_1 + this.state.dinput5_1);

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
			"cb_SD_Z_DFSDTDCBMXs": [
				{
					"PARENT_ID": "2c9081ea4e44e90e014e6e2e45e20372",
					"ID": "20170613DFSDTDCB12345",
					"BCMC": this.state.input4,
					"DCDD": this.state.input3,
					"DZLX": this.state.value,
					"SYQ": this.state.value2,
					"DCTKBHS": this.state.value4,
					"LXT": this.state.value5,
					"DCDBHS": "1",
					"DCCS": this.state.dinput1_0,
					"DCZS": this.state.dinput1_1,
					"YLZS": this.state.dinput1_2,
					"LL": this.state.dinput1_3,
					"BBFSCC": this.state.dinput1_4,
					"BBFSDC": this.state.dinput1_5,
					"BBFSRC": this.state.dinput1_6,
					"BBFSHJ": this.state.dinput1_4 + this.state.dinput1_5 + this.state.dinput1_6,
					"HFSCC": this.state.dinput1_7,
					"HFSDC": this.state.dinput1_8,
					"HFSRC": this.state.dinput1_9,
					"HFSHJ": this.state.dinput1_7 + this.state.dinput1_8 + this.state.dinput1_9,
					"DFSHJ": dfshj,
					"HFSBL": hfsbl,
					"BCCL": bccl,
					"BCLL": bcll,
					"DLZL": dlzl
				}, {
					"PARENT_ID": "2c9081ea4e44e90e014e6e2e45e20372",
					"ID": "20170613DFSDTDCB12345",
					"BCMC": this.state.input4,
					"DCDD": this.state.input3,
					"DZLX": this.state.value,
					"SYQ": this.state.value2,
					"DCTKBHS": this.state.value4,
					"LXT": this.state.value5,
					"DCDBHS": "1",
					"DCCS": this.state.dinput2_0,
					"DCZS": this.state.dinput2_1,
					"YLZS": this.state.dinput2_2,
					"LL": this.state.dinput2_3,
					"BBFSCC": this.state.dinput2_4,
					"BBFSDC": this.state.dinput2_5,
					"BBFSRC": this.state.dinput2_6,
					"BBFSHJ": this.state.dinput2_4 + this.state.dinput2_5 + this.state.dinput2_6,
					"HFSCC": this.state.dinput2_7,
					"HFSDC": this.state.dinput2_8,
					"HFSRC": this.state.dinput2_9,
					"HFSHJ": this.state.dinput2_7 + this.state.dinput2_8 + this.state.dinput2_9,
					"DFSHJ": dfshj,
					"HFSBL": hfsbl,
					"BCCL": bccl,
					"BCLL": bcll,
					"DLZL": dlzl
				}, {
					"PARENT_ID": "2c9081ea4e44e90e014e6e2e45e20372",
					"ID": "20170613DFSDTDCB12345",
					"BCMC": this.state.input4,
					"DCDD": this.state.input3,
					"DZLX": this.state.value,
					"SYQ": this.state.value2,
					"DCTKBHS": this.state.value4,
					"LXT": this.state.value5,
					"DCDBHS": "1",
					"DCCS": this.state.dinput3_0,
					"DCZS": this.state.dinput3_1,
					"YLZS": this.state.dinput3_2,
					"LL": this.state.dinput3_3,
					"BBFSCC": this.state.dinput3_4,
					"BBFSDC": this.state.dinput3_5,
					"BBFSRC": this.state.dinput3_6,
					"BBFSHJ": this.state.dinput3_4 + this.state.dinput3_5 + this.state.dinput3_6,
					"HFSCC": this.state.dinput3_7,
					"HFSDC": this.state.dinput3_8,
					"HFSRC": this.state.dinput3_9,
					"HFSHJ": this.state.dinput3_7 + this.state.dinput3_8 + this.state.dinput3_9,
					"DFSHJ": dfshj,
					"HFSBL": hfsbl,
					"BCCL": bccl,
					"BCLL": bcll,
					"DLZL": dlzl
				}, {
					"PARENT_ID": "2c9081ea4e44e90e014e6e2e45e20372",
					"ID": "20170613DFSDTDCB12345",
					"BCMC": this.state.input4,
					"DCDD": this.state.input3,
					"DZLX": this.state.value,
					"SYQ": this.state.value2,
					"DCTKBHS": this.state.value4,
					"LXT": this.state.value5,
					"DCDBHS": "1",
					"DCCS": this.state.dinput4_0,
					"DCZS": this.state.dinput4_1,
					"YLZS": this.state.dinput4_2,
					"LL": this.state.dinput4_3,
					"BBFSCC": this.state.dinput4_4,
					"BBFSDC": this.state.dinput4_5,
					"BBFSRC": this.state.dinput4_6,
					"BBFSHJ": this.state.dinput4_4 + this.state.dinput4_5 + this.state.dinput4_6,
					"HFSCC": this.state.dinput4_7,
					"HFSDC": this.state.dinput4_8,
					"HFSRC": this.state.dinput4_9,
					"HFSHJ": this.state.dinput4_7 + this.state.dinput4_8 + this.state.dinput4_9,
					"DFSHJ": dfshj,
					"HFSBL": hfsbl,
					"BCCL": bccl,
					"BCLL": bcll,
					"DLZL": dlzl
				}, {
					"PARENT_ID": "2c9081ea4e44e90e014e6e2e45e20372",
					"ID": "20170613DFSDTDCB12345",
					"BCMC": this.state.input4,
					"DCDD": this.state.input3,
					"DZLX": this.state.value,
					"SYQ": this.state.value2,
					"DCTKBHS": this.state.value4,
					"LXT": this.state.value5,
					"DCDBHS": "1",
					"DCCS": this.state.dinput5_0,
					"DCZS": this.state.dinput5_1,
					"YLZS": this.state.dinput5_2,
					"LL": this.state.dinput5_3,
					"BBFSCC": this.state.dinput5_4,
					"BBFSDC": this.state.dinput5_5,
					"BBFSRC": this.state.dinput5_6,
					"BBFSHJ": this.state.dinput5_4 + this.state.dinput5_5 + this.state.dinput5_6,
					"HFSCC": this.state.dinput5_7,
					"HFSDC": this.state.dinput5_8,
					"HFSRC": this.state.dinput5_9,
					"HFSHJ": this.state.dinput5_7 + this.state.dinput5_8 + this.state.dinput5_9,
					"DFSHJ": dfshj,
					"HFSBL": hfsbl,
					"BCCL": bccl,
					"BCLL": bcll,
					"DLZL": dlzl
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

	render() {
		const {value, value2, value4, value5} = this.state;
		const data = [
			{value: 0, label: '早稻'},
			{value: 1, label: '中稻'},
			{value: 2, label: '晚稻'},
		];
		const data2 = [
			{value: 0, label: '营养生长阶段'},
			{value: 1, label: '营养生长,生殖生长'},
			{value: 2, label: '生殖生长阶段'},
		];
		const data4 = [
			{value: 0, label: '1号田块'},
			{value: 1, label: '2号田块'},
			{value: 2, label: '3号田块'},
		];
		const data5 = [
			{value: 0, label: '轻'},
			{value: 1, label: '中'},
			{value: 2, label: '重'},
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
				>稻飞虱大田调查表</NavBar>
				<WhiteSpace size="lg" />
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
				<InputItem placeholder="请填写" onChange={(value) => {this.setState({input4: value});}}>病虫名称</InputItem>
				<div style={styles.setDiv}>
                  <span style={styles.setSpan}>稻作类型</span>  <select style={styles.setSel} value={this.state.DZLX} 	ref="DZLX"	data-name="DZLX" id="rice" 
                  onChange={this.defaultChange} ><option>早稻</option><option>中稻</option><option>晚稻</option></select>
                </div>
				<Flex style={{padding: '0.3rem'}}>
					<Flex.Item style={{padding: '0.3rem 0', color: '#888', flex: 'none'}}>水稻生育期</Flex.Item>
					<Flex.Item>
						<List>
							{data2.map(i => (
								<Radio style={styles.setRadio} key={i.value} checked={value2 === i.value}
								       onChange={() => this.onChange2(i.value)}>
									{i.label}
								</Radio>
							))}
						</List>
					</Flex.Item>
				</Flex>
				<Flex style={{padding: '0.3rem'}}>
					<Flex.Item style={{padding: '0.3rem 0', color: '#888', flex: 'none'}}>调查田块编号数</Flex.Item>
					<Flex.Item>
						<List>
							{data4.map(i => (
								<Radio style={styles.setRadio} key={i.value} checked={value4 === i.value}
								       onChange={() => this.onChange4(i.value)}>
									{i.label}
								</Radio>
							))}
						</List>
					</Flex.Item>
				</Flex>
				<Flex style={{padding: '0.3rem'}}>
					<Flex.Item style={{padding: '0.3rem 0', color: '#888', flex: 'none'}}>类型田</Flex.Item>
					<Flex.Item>
						<List>
							{data5.map(i => (
								<Radio style={styles.setRadio} key={i.value} checked={value5 === i.value}
								       onChange={() => this.onChange5(i.value)}>
									{i.label}
								</Radio>
							))}
						</List>
					</Flex.Item>
				</Flex>
				<Tabs defaultActiveKey="1">
					<TabPane tab="取样点1" key="1">
						<InputItem placeholder="请填写" type="number" labelNumber={6} onChange={(value) => {this.setState({dinput1_0: value});}}>调查丛数(株)</InputItem>
						<InputItem placeholder="请填写" type="number" labelNumber={6} onChange={(value) => {this.setState({dinput1_1: value});}}>调查株数(株)</InputItem>
						<InputItem placeholder="请填写" type="number" labelNumber={6} onChange={(value) => {this.setState({dinput1_2: value});}}>有卵株数(株)</InputItem>
						<InputItem placeholder="请填写" type="number" labelNumber={6} onChange={(value) => {this.setState({dinput1_3: value});}}>卵量(粒)</InputItem>
						<List renderHeader={() => '白背飞虱'}>
							<InputItem placeholder="请填写" type="number" labelNumber={6} onChange={(value) => {this.setState({dinput1_4: value});}}>长翅成虫(头)</InputItem>
							<InputItem placeholder="请填写" type="number" labelNumber={6} onChange={(value) => {this.setState({dinput1_5: value});}}>短翅成虫(头)</InputItem>
							<InputItem placeholder="请填写" type="number" labelNumber={6} onChange={(value) => {this.setState({dinput1_6: value});}}>若虫</InputItem>
						</List>
						<List renderHeader={() => '褐飞虱'}>
							<InputItem placeholder="请填写" type="number" labelNumber={6} onChange={(value) => {this.setState({dinput1_7: value});}}>长翅成虫(头)</InputItem>
							<InputItem placeholder="请填写" type="number" labelNumber={6} onChange={(value) => {this.setState({dinput1_8: value});}}>短翅成虫(头)</InputItem>
							<InputItem placeholder="请填写" type="number" labelNumber={6} onChange={(value) => {this.setState({dinput1_9: value});}}>若虫</InputItem>
						</List>
					</TabPane>
					<TabPane tab="取样点2" key="2">
						<InputItem placeholder="请填写" type="number" labelNumber={6} onChange={(value) => {this.setState({dinput2_0: value});}}>调查丛数(株)</InputItem>
						<InputItem placeholder="请填写" type="number" labelNumber={6} onChange={(value) => {this.setState({dinput2_1: value});}}>调查株数(株)</InputItem>
						<InputItem placeholder="请填写" type="number" labelNumber={6} onChange={(value) => {this.setState({dinput2_2: value});}}>有卵株数(株)</InputItem>
						<InputItem placeholder="请填写" type="number" labelNumber={6} onChange={(value) => {this.setState({dinput2_3: value});}}>卵量(粒)</InputItem>
						<List renderHeader={() => '白背飞虱'}>
							<InputItem placeholder="请填写" type="number" labelNumber={6} onChange={(value) => {this.setState({dinput2_4: value});}}>长翅成虫(头)</InputItem>
							<InputItem placeholder="请填写" type="number" labelNumber={6} onChange={(value) => {this.setState({dinput2_5: value});}}>短翅成虫(头)</InputItem>
							<InputItem placeholder="请填写" type="number" labelNumber={6} onChange={(value) => {this.setState({dinput2_6: value});}}>若虫</InputItem>
						</List>
						<List renderHeader={() => '褐飞虱'}>
							<InputItem placeholder="请填写" type="number" labelNumber={6} onChange={(value) => {this.setState({dinput2_7: value});}}>长翅成虫(头)</InputItem>
							<InputItem placeholder="请填写" type="number" labelNumber={6} onChange={(value) => {this.setState({dinput2_8: value});}}>短翅成虫(头)</InputItem>
							<InputItem placeholder="请填写" type="number" labelNumber={6} onChange={(value) => {this.setState({dinput2_9: value});}}>若虫</InputItem>
						</List>
					</TabPane>
					<TabPane tab="取样点3" key="3">
						<InputItem placeholder="请填写" type="number" labelNumber={6} onChange={(value) => {this.setState({dinput3_0: value});}}>调查丛数(株)</InputItem>
						<InputItem placeholder="请填写" type="number" labelNumber={6} onChange={(value) => {this.setState({dinput3_1: value});}}>调查株数(株)</InputItem>
						<InputItem placeholder="请填写" type="number" labelNumber={6} onChange={(value) => {this.setState({dinput3_2: value});}}>有卵株数(株)</InputItem>
						<InputItem placeholder="请填写" type="number" labelNumber={6} onChange={(value) => {this.setState({dinput3_3: value});}}>卵量(粒)</InputItem>
						<List renderHeader={() => '白背飞虱'}>
							<InputItem placeholder="请填写" type="number" labelNumber={6} onChange={(value) => {this.setState({dinput3_4: value});}}>长翅成虫(头)</InputItem>
							<InputItem placeholder="请填写" type="number" labelNumber={6} onChange={(value) => {this.setState({dinput3_5: value});}}>短翅成虫(头)</InputItem>
							<InputItem placeholder="请填写" type="number" labelNumber={6} onChange={(value) => {this.setState({dinput3_6: value});}}>若虫</InputItem>
						</List>
						<List renderHeader={() => '褐飞虱'}>
							<InputItem placeholder="请填写" type="number" labelNumber={6} onChange={(value) => {this.setState({dinput3_7: value});}}>长翅成虫(头)</InputItem>
							<InputItem placeholder="请填写" type="number" labelNumber={6} onChange={(value) => {this.setState({dinput3_8: value});}}>短翅成虫(头)</InputItem>
							<InputItem placeholder="请填写" type="number" labelNumber={6} onChange={(value) => {this.setState({dinput3_9: value});}}>若虫</InputItem>
						</List>
					</TabPane>
					<TabPane tab="取样点4" key="4">
						<InputItem placeholder="请填写" type="number" labelNumber={6} onChange={(value) => {this.setState({dinput4_0: value});}}>调查丛数(株)</InputItem>
						<InputItem placeholder="请填写" type="number" labelNumber={6} onChange={(value) => {this.setState({dinput4_1: value});}}>调查株数(株)</InputItem>
						<InputItem placeholder="请填写" type="number" labelNumber={6} onChange={(value) => {this.setState({dinput4_2: value});}}>有卵株数(株)</InputItem>
						<InputItem placeholder="请填写" type="number" labelNumber={6} onChange={(value) => {this.setState({dinput4_3: value});}}>卵量(粒)</InputItem>
						<List renderHeader={() => '白背飞虱'}>
							<InputItem placeholder="请填写" type="number" labelNumber={6} onChange={(value) => {this.setState({dinput4_4: value});}}>长翅成虫(头)</InputItem>
							<InputItem placeholder="请填写" type="number" labelNumber={6} onChange={(value) => {this.setState({dinput4_5: value});}}>短翅成虫(头)</InputItem>
							<InputItem placeholder="请填写" type="number" labelNumber={6} onChange={(value) => {this.setState({dinput4_6: value});}}>若虫</InputItem>
						</List>
						<List renderHeader={() => '褐飞虱'}>
							<InputItem placeholder="请填写" type="number" labelNumber={6} onChange={(value) => {this.setState({dinput4_7: value});}}>长翅成虫(头)</InputItem>
							<InputItem placeholder="请填写" type="number" labelNumber={6} onChange={(value) => {this.setState({dinput4_8: value});}}>短翅成虫(头)</InputItem>
							<InputItem placeholder="请填写" type="number" labelNumber={6} onChange={(value) => {this.setState({dinput4_9: value});}}>若虫</InputItem>
						</List>
					</TabPane>
					<TabPane tab="取样点5" key="5">
						<InputItem placeholder="请填写" type="number" labelNumber={6} onChange={(value) => {this.setState({dinput5_0: value});}}>调查丛数(株)</InputItem>
						<InputItem placeholder="请填写" type="number" labelNumber={6} onChange={(value) => {this.setState({dinput5_1: value});}}>调查株数(株)</InputItem>
						<InputItem placeholder="请填写" type="number" labelNumber={6} onChange={(value) => {this.setState({dinput5_2: value});}}>有卵株数(株)</InputItem>
						<InputItem placeholder="请填写" type="number" labelNumber={6} onChange={(value) => {this.setState({dinput5_3: value});}}>卵量(粒)</InputItem>
						<List renderHeader={() => '白背飞虱'}>
							<InputItem placeholder="请填写" type="number" labelNumber={6} onChange={(value) => {this.setState({dinput5_4: value});}}>长翅成虫(头)</InputItem>
							<InputItem placeholder="请填写" type="number" labelNumber={6} onChange={(value) => {this.setState({dinput5_5: value});}}>短翅成虫(头)</InputItem>
							<InputItem placeholder="请填写" type="number" labelNumber={6} onChange={(value) => {this.setState({dinput5_6: value});}}>若虫</InputItem>
						</List>
						<List renderHeader={() => '褐飞虱'}>
							<InputItem placeholder="请填写" type="number" labelNumber={6} onChange={(value) => {this.setState({dinput5_7: value});}}>长翅成虫(头)</InputItem>
							<InputItem placeholder="请填写" type="number" labelNumber={6} onChange={(value) => {this.setState({dinput5_8: value});}}>短翅成虫(头)</InputItem>
							<InputItem placeholder="请填写" type="number" labelNumber={6} onChange={(value) => {this.setState({dinput5_9: value});}}>若虫</InputItem>
						</List>

					</TabPane>
				</Tabs>


			</div>
		);
	}
}


DfsdtChart.propTypes = {};

function mapStateToProps() {
	return {};
}

export default connect(mapStateToProps)(DfsdtChart);
