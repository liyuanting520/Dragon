import {NavBar, List, Button, InputItem, Grid, WhiteSpace, Popup, Icon, DatePicker, Modal, Toast} from 'antd-mobile';
import React, {Component} from 'react';
import moment from 'moment';


let maskProps;
const alert = Modal.alert;
const minDate = moment('2013-01-01 00:00 +0800', 'YYYY-MM-DD HH:mm Z').utcOffset(8);
const maxDate = moment('2030-12-31 23:59 +0800', 'YYYY-MM-DD HH:mm Z').utcOffset(8);

class SdhcdyzrChart extends Component {
	constructor(props) {
		super(props);
		this.state = {
			sel: "",
			name: ["白背飞虱", "褐飞虱", "灰飞虱", "稻纵卷叶螟", "二化螟雌蛾", "二化螟雄蛾", "大螟雌蛾", "大螟雄蛾", "三化螟雌蛾", "三化螟雄蛾", "稻螟蛉", "稻象甲", "稻水象甲", "稻瘿蚊", "粘虫", "其它"],
			dcsj: "",
			data0: [0, "", ""],
			data1: [0, "", ""],
			data2: [0, "", ""],
			data3: [0, "", ""],
			data4: [0, "", ""],
			data5: [0, "", ""],
			data6: [0, "", ""],
			data7: [0, "", ""],
			data8: [0, "", ""],
			data9: [0, "", ""],
			data10: [0, "", ""],
			data11: [0, "", ""],
			data12: [0, "", ""],
			data13: [0, "", ""],
			data14: [0, "", ""],
			data15: [0, "", ""],
		};
	}

	showuploading = () => {
		Toast.info('上传中，收到完成提示前请勿进行任何操作……', 3);
	};
	showuploadsuccess = () => {
		Toast.success('上传成功！', 2);
	};
	showuploadfailure = () => {
		Toast.fail('上传失败，请尝试重新上传', 2);
	};
	onsubmitHanler = () => {

		let databody = {
			"cb_SD_R_SDHCDYZRJZBs": [
				{
					"ID": "20170613DFSDTDCB12345",
					"DCSJ": this.state.dcsj.format("YYYY-MM-DD HH:mm:ss"),
					"CBZD": "平桥区",
					"BHZL": this.state.name[0],
					"SL": this.state.data0[0],
					"DDSTQZK": this.state.data0[1],
					"BZ": this.state.data0[2],
					"REPORTINFOID": "2c9081ea4e44e90e014e6e2e45e20372",
					"tableName": "CB_SD_R_SDHCDYZRJZB",
				}, {
					"ID": "20170613DFSDTDCB12345",
					"DCSJ": this.state.dcsj.format("YYYY-MM-DD HH:mm:ss"),
					"CBZD": "平桥区",
					"BHZL": this.state.name[1],
					"SL": this.state.data1[0],
					"DDSTQZK": this.state.data1[1],
					"BZ": this.state.data1[2],
					"REPORTINFOID": "2c9081ea4bcde420014bce06c0rf090c",
					"tableName": "CB_SD_R_SDHCDYZRJZB",
				}, {
					"ID": "20170613DFSDTDCB12345",
					"DCSJ": this.state.dcsj.format("YYYY-MM-DD HH:mm:ss"),
					"CBZD": "平桥区",
					"BHZL": this.state.name[2],
					"SL": this.state.data2[0],
					"DDSTQZK": this.state.data2[1],
					"BZ": this.state.data2[2],
					"REPORTINFOID": "2c9081ea4bcde420014bce06c0rf090c",
					"tableName": "CB_SD_R_SDHCDYZRJZB",
				}, {
					"ID": "20170613DFSDTDCB12345",
					"DCSJ": this.state.dcsj.format("YYYY-MM-DD HH:mm:ss"),
					"CBZD": "平桥区",
					"BHZL": this.state.name[3],
					"SL": this.state.data3[0],
					"DDSTQZK": this.state.data3[1],
					"BZ": this.state.data3[2],
					"REPORTINFOID": "2c9081ea4bcde420014bce06c0rf090c",
					"tableName": "CB_SD_R_SDHCDYZRJZB",
				}, {
					"ID": "20170613DFSDTDCB12345",
					"DCSJ": this.state.dcsj.format("YYYY-MM-DD HH:mm:ss"),
					"CBZD": "平桥区",
					"BHZL": this.state.name[4],
					"SL": this.state.data4[0],
					"DDSTQZK": this.state.data4[1],
					"BZ": this.state.data4[2],
					"REPORTINFOID": "2c9081ea4bcde420014bce06c0rf090c",
					"tableName": "CB_SD_R_SDHCDYZRJZB",
				}, {
					"ID": "20170613DFSDTDCB12345",
					"DCSJ": this.state.dcsj.format("YYYY-MM-DD HH:mm:ss"),
					"CBZD": "平桥区",
					"BHZL": this.state.name[5],
					"SL": this.state.data5[0],
					"DDSTQZK": this.state.data5[1],
					"BZ": this.state.data5[2],
					"REPORTINFOID": "2c9081ea4bcde420014bce06c0rf090c",
					"tableName": "CB_SD_R_SDHCDYZRJZB",
				}, {
					"ID": "20170613DFSDTDCB12345",
					"DCSJ": this.state.dcsj.format("YYYY-MM-DD HH:mm:ss"),
					"CBZD": "平桥区",
					"BHZL": this.state.name[6],
					"SL": this.state.data6[0],
					"DDSTQZK": this.state.data6[1],
					"BZ": this.state.data6[2],
					"REPORTINFOID": "2c9081ea4bcde420014bce06c0rf090c",
					"tableName": "CB_SD_R_SDHCDYZRJZB",
				}, {
					"ID": "20170613DFSDTDCB12345",
					"DCSJ": this.state.dcsj.format("YYYY-MM-DD HH:mm:ss"),
					"CBZD": "平桥区",
					"BHZL": this.state.name[7],
					"SL": this.state.data7[0],
					"DDSTQZK": this.state.data7[1],
					"BZ": this.state.data7[2],
					"REPORTINFOID": "2c9081ea4bcde420014bce06c0rf090c",
					"tableName": "CB_SD_R_SDHCDYZRJZB",
				}, {
					"ID": "20170613DFSDTDCB12345",
					"DCSJ": this.state.dcsj.format("YYYY-MM-DD HH:mm:ss"),
					"CBZD": "平桥区",
					"BHZL": this.state.name[8],
					"SL": this.state.data8[0],
					"DDSTQZK": this.state.data8[1],
					"BZ": this.state.data8[2],
					"REPORTINFOID": "2c9081ea4bcde420014bce06c0rf090c",
					"tableName": "CB_SD_R_SDHCDYZRJZB",
				}, {
					"ID": "20170613DFSDTDCB12345",
					"DCSJ": this.state.dcsj.format("YYYY-MM-DD HH:mm:ss"),
					"CBZD": "平桥区",
					"BHZL": this.state.name[9],
					"SL": this.state.data9[0],
					"DDSTQZK": this.state.data9[1],
					"BZ": this.state.data9[2],
					"REPORTINFOID": "2c9081ea4bcde420014bce06c0rf090c",
					"tableName": "CB_SD_R_SDHCDYZRJZB",
				}, {
					"ID": "20170613DFSDTDCB12345",
					"DCSJ": this.state.dcsj.format("YYYY-MM-DD HH:mm:ss"),
					"CBZD": "平桥区",
					"BHZL": this.state.name[10],
					"SL": this.state.data10[0],
					"DDSTQZK": this.state.data10[1],
					"BZ": this.state.data10[2],
					"REPORTINFOID": "2c9081ea4bcde420014bce06c0rf090c",
					"tableName": "CB_SD_R_SDHCDYZRJZB",
				}, {
					"ID": "20170613DFSDTDCB12345",
					"DCSJ": this.state.dcsj.format("YYYY-MM-DD HH:mm:ss"),
					"CBZD": "平桥区",
					"BHZL": this.state.name[11],
					"SL": this.state.data11[0],
					"DDSTQZK": this.state.data11[1],
					"BZ": this.state.data11[2],
					"REPORTINFOID": "2c9081ea4bcde420014bce06c0rf090c",
					"tableName": "CB_SD_R_SDHCDYZRJZB",
				}, {
					"ID": "20170613DFSDTDCB12345",
					"DCSJ": this.state.dcsj.format("YYYY-MM-DD HH:mm:ss"),
					"CBZD": "平桥区",
					"BHZL": this.state.name[12],
					"SL": this.state.data12[0],
					"DDSTQZK": this.state.data12[1],
					"BZ": this.state.data12[2],
					"REPORTINFOID": "2c9081ea4bcde420014bce06c0rf090c",
					"tableName": "CB_SD_R_SDHCDYZRJZB",
				}, {
					"ID": "20170613DFSDTDCB12345",
					"DCSJ": this.state.dcsj.format("YYYY-MM-DD HH:mm:ss"),
					"CBZD": "平桥区",
					"BHZL": this.state.name[13],
					"SL": this.state.data13[0],
					"DDSTQZK": this.state.data13[1],
					"BZ": this.state.data13[2],
					"REPORTINFOID": "2c9081ea4bcde420014bce06c0rf090c",
					"tableName": "CB_SD_R_SDHCDYZRJZB",
				}, {
					"ID": "20170613DFSDTDCB12345",
					"DCSJ": this.state.dcsj.format("YYYY-MM-DD HH:mm:ss"),
					"CBZD": "平桥区",
					"BHZL": this.state.name[14],
					"SL": this.state.data14[0],
					"DDSTQZK": this.state.data14[1],
					"BZ": this.state.data14[2],
					"REPORTINFOID": "2c9081ea4bcde420014bce06c0rf090c",
					"tableName": "CB_SD_R_SDHCDYZRJZB",
				}, {
					"ID": "20170613DFSDTDCB12345",
					"DCSJ": this.state.dcsj.format("YYYY-MM-DD HH:mm:ss"),
					"CBZD": "平桥区",
					"BHZL": this.state.name[15],
					"SL": this.state.data15[0],
					"DDSTQZK": this.state.data15[1],
					"BZ": this.state.data15[2],
					"REPORTINFOID": "2c9081ea4bcde420014bce06c0rf090c",
					"tableName": "CB_SD_R_SDHCDYZRJZB",
				}
			]
		};

		let controller = document.getElementById("confirm");
		console.log(controller);
		controller.className = "am-button am-button-primary am-button-small am-button-disabled";

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

	onClick = (el, index, data) => {
		let thisdata = eval("this.state.data" + index);
		console.log(thisdata);
		Popup.show(<div>
			<List renderHeader={() => (
				<div style={{position: 'relative'}}>
					{el.text}
					<span
						style={{
							position: 'absolute', right: 3, top: -5,
						}}
						onClick={() => this.onClose('cancel', thisdata, index)}
					>
						<Icon type="cross"/>
          </span>
				</div>)}
			      className="popup-list"
			>
				<InputItem placeholder="请填写"
				           type="number"
				           labelNumber={7}
				           defaultValue={thisdata[0]==0 ? null : thisdata[0]}
				           onChange={ val => (thisdata[0] = val) }
				>数量(头)</InputItem>
				<InputItem placeholder="请填写"
				           labelNumber={7}
				           defaultValue={thisdata[1]}
				           onChange={ val => (thisdata[1] = val) }
				>点灯时天气状况</InputItem>
				<InputItem placeholder="请填写"
				           labelNumber={7}
				           defaultValue={thisdata[2]}
				           onChange={ val => (thisdata[2] = val) }
				>备注</InputItem>
			</List>
			<Button type="primary" onClick={() => this.onClose('cancel', thisdata, index)}>确认</Button>
		</div>, {animationType: 'slide-up', maskProps, maskClosable: false});
	};

	onClose = (sel, thisdata, index) => {
		this.setState({sel});
		let k = document.getElementById(index);
		if (thisdata[0] != "" && thisdata[1] != "" && thisdata[2] != "") {
			k.src = "http://i2.muimg.com/592536/e26759d5fc66c958.png";
		} else {
			k.src = "http://i2.muimg.com/592536/d75a21ea3472d879.png";
		}
		Popup.hide();
	};

	handleBack = () => {
		location.href = '#';
	};


	render() {
		let name = ['白背飞虱', '褐飞虱', '灰飞虱', '稻纵卷叶螟', '二化螟雌蛾', '二化螟雄蛾', '大螟雌蛾', '大螟雄蛾', '三化螟雌蛾', '三化螟雄蛾', '稻螟蛉', '稻象甲', '稻水象甲', '稻瘿蚊', '粘虫', '其它'];
		let data = Array.from(new Array(16)).map((_val, i) => ({
			img: 'http://i2.muimg.com/592536/d75a21ea3472d879.png',
			text: name[i]
		}));
		return (
			<div>
				<NavBar leftContent=""
				        mode="light"
				        onLeftClick={() => alert('返回确认', '将清空已填写信息，确认要返回吗？', [
					        { text: '继续填写', onPress: () => console.log('cancel') },
					        { text: '确定返回', onPress: () => this.handleBack(), style: { fontWeight: 'bold' } },
				        ])}
				        rightContent={<Button id="confirm" type="primary" size="small" multipleLine
				                              onClick={() => alert('上传确认', '上传后无法再次修改，确定要上传吗？', [
					                              { text: '取消', onPress: () => console.log('cancel') },
					                              { text: '确定', onPress: () => this.onsubmitHanler(), style: { fontWeight: 'bold' } },
				                              ])}>上传</Button>}
				>水稻害虫灯诱逐日记载表</NavBar>
				<WhiteSpace size="lg"/>
				<DatePicker className="forss"
				            mode="datetime"
				            minDate={minDate}
				            maxDate={maxDate}
				            onChange={(date) => {this.setState({dcsj: date});}}
				            value={this.state.dcsj}
				>
					<List.Item arrow="horizontal">日期+时间</List.Item>
				</DatePicker>
				<Grid data={data} columnNum={3} hasLine={false}
				      onClick={(_el, index) => this.onClick(_el, index, data[index])}
				      renderItem={(dataItem, index) => (
					      <div style={{margin: '0.16rem', background: '#f7f7f7', textAlign: 'center'}}>
						      <div style={{background: 'rgba(0, 0, 0, 0.1)', padding: '0.08rem'}}>
							      <span>{dataItem.text}</span>
						      </div>
						      <img id={index} src={dataItem.img} style={{width: '80%', margin: '0.12rem'}} alt="icon"/>
					      </div>
				      )}/>
			</div>
		);
	}
}

export default SdhcdyzrChart;
