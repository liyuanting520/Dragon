/*eslint-disable *//**
 * @author jcxu
 * @description 系统介绍页
 */

import { routerRedux } from 'dva/router';
import { connect } from 'dva';
import React, { Component } from 'react';
import $ from 'jquery';
import {NavBar, List, Button, Radio, InputItem, Flex, Tabs,Icon, Grid} from 'antd-mobile';
import SelTime from '../components/SelTime'
function getStyles() {
  return {
 
    setSpan:{
      fontSize:'0.3rem',
      height:'0.6rem',
      lineHeight:'0.6rem',
    },
    setInput:{
      height:'0.6rem',
      lineHeight:'0.6rem',
      border:'none',
      float:'right',
      textAlign:'right'
    },
    setSel:{
      height:'0.6rem',
      lineHeight:'0.6rem',
      border:'none',
      float:'right',
      textAlign:'right'
    },
    setDiv:{
      marginTop:'0.2rem'
    },
    spespan:{
      width:'50%',
      height:'1rem',
      display:'block',
      backgroundColor:'rgb(43,175,250)',
      fontSize:'0.3rem',
      textAlign:'center',
      lineHeight:'1rem',
      color:'white',
      float:'right'
    }
  };
}
const TabPane = Tabs.TabPane;

class Daowen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      CBZD:'',
      BCMC:'', 							
      DCDD:'', 
      DCSJ:'',						
      DZLX:'', 						
      SYQ:'', 						
      LXT:'',  					
      DCTKBHS :'', 			
      DCDBHS:'',  

      DCCS1:0,  BCS1:0,  BCL1:0,  DCZS1:0, BZS1:0,  BZL1:0,  DCYS1:0,  BYS1:0, BYL1 :0, DCSS1:0,BSS1 :0, BSL1:0,BZ1:'' ,
      DCCS2:0,  BCS2:0,  BCL2:0,  DCZS2:0, BZS2:0,  BZL2:0,  DCYS2:0,  BYS2:0, BYL2 :0, DCSS2 :0,BSS2 :0, BSL2:0,BZ2:'' ,
      DCCS3:0,  BCS3:0,  BCL3:0,  DCZS3:0, BZS3:0,  BZL3:0,  DCYS3:0,  BYS3:0, BYL3 :0, DCSS3 :0,BSS3 :0, BSL3:0,BZ3:'' ,
      DCCS4:0,  BCS4:0,  BCL4:0,  DCZS4:0, BZS4:0,  BZL4:0,  DCYS4:0,  BYS4:0, BYL4 :0, DCSS4 :0,BSS4 :0, BSL4:0,BZ4:'' ,
      DCCS5:0,  BCS5:0,  BCL5:0,  DCZS5:0, BZS5:0,  BZL5:0,  DCYS5:0,  BYS5:0, BYL5 :0, DCSS5 :0,BSS5 :0, BSL5:0,BZ5:'' ,

    };
    this.defaultChange=this.defaultChange.bind(this);
    this.submitHanlder = this.submitHanlder.bind(this);                                            
    this.handleTabClick =this.handleTabClick.bind(this);

}
 defaultChange(event) {
	this.setState(
		function (ob) {
			ob[$(event.target).data('name')] = event.target.value;
			return ob;
		}({})
	);
}

handleTabClick(key){

 }
 submitHanlder(){

          const databody={
                    "ReportMain": [
                      {
                        "ID": "20170613DFSDTDCB12345",
                        "DCSJ": "2017-06-13 15:06:52",
                        "CBZD": "平桥区",
                        "TBDWID": "411426",
                        "REPORTINFOID": "2c9081ea4bcde420014bce06c0rf090c",
                        "tableName": "CB_SD_Z_DWBDTDCB"
                      }
                    ],
                    "cb_SD_Z_DWBDTDCBMXs": [
                       {
                        "PARENT_ID": "2c9081ea4bcde420014bce06c0rf090c",
                        "ID": "daowen",
                        "BCMC": this.state.BCMC,
                        "DCDD": this.state.DCDD,
                        "DZLX": this.state.DZLX,               
                        "SYQ":this.state.SYQ,
                        "LXT": this.state.LXT,
                        "DCTKBHS": this.state.DCTKBHS,
                        "DCDBHS": this.state.DCDBHS,
                    

                        "DCSS": this.state.DCSS1,
                        "BCS":this.state.BCS1,                               
                        "BCL":this.state.BCL1,                  
                        "DCZS":this.state.DCZS1,
                        "BZS":this.state.BZS1,
                        "BZL":this.state.BZL1,
                        "DCYS":this.state.DCYS1,                     
                        "BYS":this.state.BYS1,
                        "BYL":this.state.BYL1,               
                        "DCSS":this.state.DCSS1,                
                        "BSS": this.state.BSS1,
                        "BSL": this.state.BSL1,
                        "BZ": this.state.BZ1
                      },
                     {
                        "PARENT_ID": "2c9081ea4bcde420014bce06c0rf090c",
                        "ID": "daowen",
                        "BCMC": this.state.BCMC,
                        "DCDD": this.state.DCDD,
                        "DZLX": this.state.DZLX,               
                        "SYQ":this.state.SYQ,
                        "LXT": this.state.LXT,
                        "DCTKBHS": this.state.DCTKBHS,
                         "DCDBHS": this.state.DCDBHS,
                        


                        "DCSS": this.state.DCSS2,
                        "BCS":this.state.BCS2,                               
                        "BCL":this.state.BCL2,                  
                        "DCZS":this.state.DCZS2,
                        "BZS":this.state.BZS2,
                        "BZL":this.state.BZL2,
                        "DCYS":this.state.DCYS2,                     
                        "BYS":this.state.BYS2,
                        "BYL":this.state.BYL2,               
                        "DCSS":this.state.DCSS2,                
                        "BSS": this.state.BSS2,
                        "BSL": this.state.BSL2,
                        "BZ": this.state.BZ2
                      },
                      {
                        "PARENT_ID": "2c9081ea4bcde420014bce06c0rf090c",
                        "ID": "daowen",
                        "BCMC": this.state.BCMC,
                        "DCDD": this.state.DCDD,
                        "DZLX": this.state.DZLX,               
                        "SYQ":this.state.SYQ,
                        "LXT": this.state.LXT,
                        "DCTKBHS": this.state.DCTKBHS,
                         "DCDBHS": this.state.DCDBHS,
                    

                        "DCSS": this.state.DCSS3,
                        "BCS":this.state.BCS3,                               
                        "BCL":this.state.BCL3,                  
                        "DCZS":this.state.DCZS3,
                        "BZS":this.state.BZS3,
                        "BZL":this.state.BZL3,
                        "DCYS":this.state.DCYS3,                     
                        "BYS":this.state.BYS3,
                        "BYL":this.state.BYL3,               
                        "DCSS":this.state.DCSS3,                
                        "BSS": this.state.BSS3,
                        "BSL": this.state.BSL3,
                        "BZ": this.state.BZ3
                      },
                      {
                        "PARENT_ID": "2c9081ea4bcde420014bce06c0rf090c",
                        "ID": "daowen",
                        "BCMC": this.state.BCMC,
                        "DCDD": this.state.DCDD,
                        "DZLX": this.state.DZLX,               
                        "SYQ":this.state.SYQ,
                        "LXT": this.state.LXT,
                        "DCTKBHS": this.state.DCTKBHS,
                         "DCDBHS": this.state.DCDBHS,
                      

                        "DCSS": this.state.DCSS4,
                        "BCS":this.state.BCS4,                               
                        "BCL":this.state.BCL4,                  
                        "DCZS":this.state.DCZS4,
                        "BZS":this.state.BZS4,
                        "BZL":this.state.BZL4,
                        "DCYS":this.state.DCYS4,                     
                        "BYS":this.state.BYS4,
                        "BYL":this.state.BYL4,               
                        "DCSS":this.state.DCSS4,                
                        "BSS": this.state.BSS4,
                        "BSL": this.state.BSL4,
                        "BZ": this.state.BZ34
                      },
                      {
                        "PARENT_ID": "2c9081ea4bcde420014bce06c0rf090c",
                        "ID": "daowen",
                        "BCMC": this.state.BCMC,
                        "DCDD": this.state.DCDD,
                        "DZLX": this.state.DZLX,               
                        "SYQ":this.state.SYQ,
                        "LXT": this.state.LXT,
                        "DCTKBHS": this.state.DCTKBHS,
                         "DCDBHS": this.state.DCDBHS,
                     

                        "DCSS": this.state.DCSS5,
                        "BCS":this.state.BCS5,                               
                        "BCL":this.state.BCL5,                  
                        "DCZS":this.state.DCZS5,
                        "BZS":this.state.BZS5,
                        "BZL":this.state.BZL5,
                        "DCYS":this.state.DCYS5,                     
                        "BYS":this.state.BYS5,
                        "BYL":this.state.BYL5,               
                        "DCSS":this.state.DCSS5,                
                        "BSS": this.state.BSS5,
                        "BSL": this.state.BSL5,
                        "BZ": this.state.BZ5
                      }
                     
                    ]
          }
          this.props.dispatch({
            type: 'daowen/daowenquery',
            paylod: { databody },
          });
          console.log(databody)
 
 }
  render(){
     const styles = getStyles(); 
      return (
        <div style={{width:'90%',margin:'0 auto',backgroundColor:'#fff'}}>
                {/*<div style={styles.setDiv}>
                  <span style={styles.setSpan}>调查站点</span><input type="text" style={styles.setInput} value={this.state.CBZD}	placeholder="请填写"	ref="CBZD "	data-name="CBZD "
                  onChange={this.defaultChange} />
                </div>*/}
                <div style={styles.setDiv}>
                  <span style={styles.setSpan}>调查地点</span><input type="text" style={styles.setInput} value={this.state.DCDD}	placeholder="请填写"	ref="DCDD"	data-name="DCDD"
                  onChange={this.defaultChange} />
                </div>
                <div style={styles.setDiv}>
                  <SelTime />
                </div>
                <div style={styles.setDiv}>
                  <span style={styles.setSpan}>病虫名称</span><input type="text" style={styles.setInput} value={this.state.BCMC}	placeholder="请填写"	ref="BCMC"	data-name="BCMC"
                  onChange={this.defaultChange} />
                </div>
                <div style={styles.setDiv}>
                  <span style={styles.setSpan}>稻作类型</span>  <select style={styles.setSel} value={this.state.DZLX} 	ref="DZLX"	data-name="DZLX" id="rice" 
                  onChange={this.defaultChange} ><option>早稻</option><option>中稻</option><option>晚稻</option></select>
                </div>
                <div style={styles.setDiv}>
                  <span style={styles.setSpan}>水稻生育期</span><select style={styles.setSel} value={this.state.SYQ} 	ref="SYQ"	data-name="SYQ" 
                  onChange={this.defaultChange} ><option>营养生长阶段</option><option>营养生长,生殖生长</option><option>生殖生长阶段</option></select>
                </div>
                <div style={styles.setDiv}>
                  <span style={styles.setSpan}>类型田</span>    <select style={styles.setSel} value={this.state.LXT} 	ref="LXT"	data-name="LXT"  
                  onChange={this.defaultChange} ><option>轻</option><option>中</option><option>重</option></select>
                </div>
                <div style={styles.setDiv}>
                  <span style={styles.setSpan}>田块编号</span>  <select style={styles.setSel} value={this.state.DCTKBHS} 	ref="DCTKBHS"	data-name="DCTKBHS"
                  onChange={this.defaultChange}><option>田块1号</option><option>田块2号</option><option>田块3号</option></select>
            </div> 
{/*----------------------------------------------------------------我是分割线-------------------------------------------------------------------------------       */}
            <Tabs defaultActiveKey="1" onTabClick={this.handleTabClick} onChange={this.handleTabChange}>
              <TabPane tab="取样点1" key="1" >
                <div style={styles.setDiv}>
                  <span style={styles.setSpan}>调查丛数(丛)</span><input type="text" style={styles.setInput} value={this.state.DCCS1}	placeholder="请填写"	ref="DCCS1"	data-name="DCCS1"
                  onChange={this.defaultChange} />
                </div> 
                <div style={styles.setDiv}>
                  <span style={styles.setSpan}>病丛数(丛)</span><input type="text" style={styles.setInput} value={this.state.BCS1}	placeholder="请填写"	ref="BCS1"	data-name="BCS1"
                  onChange={this.defaultChange} />
                  </div>
                 <div style={styles.setDiv}>
                  <span style={styles.setSpan}>病丛率%</span><input type="text" style={styles.setInput} value={this.state.BCL1}	placeholder="请填写"	ref="BCL1"	data-name="BCL1"
                  onChange={this.defaultChange} />                 
                </div>
                 <div style={styles.setDiv}>
                  <span style={styles.setSpan}>调查株数(株)</span><input type="text" style={styles.setInput} value={this.state.DCZS1}	placeholder="请填写"	ref="DCZS1"	data-name="DCZS1"
                  onChange={this.defaultChange} />                 
                </div>
                 <div style={styles.setDiv}>
                  <span style={styles.setSpan}>病株数(株)</span><input type="text" style={styles.setInput} value={this.state.BZS1}	placeholder="请填写"	ref="BZS1"	data-name="BZS1"
                  onChange={this.defaultChange} />                 
                </div>
                 <div style={styles.setDiv}>
                  <span style={styles.setSpan}>病株率%</span><input type="text" style={styles.setInput} value={this.state.BZL1}	placeholder="请填写"	ref="BZL1"	data-name="BZL1"
                  onChange={this.defaultChange} />                 
                </div>

                 <div style={styles.setDiv}>
                  <span style={styles.setSpan}>调查叶数(片)</span><input type="text" style={styles.setInput} value={this.state.DCYS1}	placeholder="请填写"	ref="DCYS1"	data-name="DCYS1"
                  onChange={this.defaultChange} />                 
                </div>
                 <div style={styles.setDiv}>
                  <span style={styles.setSpan}>病叶数(片)</span><input type="text" style={styles.setInput} value={this.state.BYS1}	placeholder="请填写"	ref="BYS1"	data-name="BYS1"
                  onChange={this.defaultChange} />                 
                </div>
                 <div style={styles.setDiv}>
                  <span style={styles.setSpan}>病叶率%</span><input type="text" style={styles.setInput} value={this.state.BYL1}	placeholder="请填写"	ref="BYL1"	data-name="BYL1"
                  onChange={this.defaultChange} />                 
                </div>
                <div style={styles.setDiv}>
                  <span style={styles.setSpan}>调查穗数(穗)</span><input type="text" style={styles.setInput} value={this.state.DCSS1}	placeholder="请填写"	ref="DCSS1"	data-name="DCSS1"
                  onChange={this.defaultChange} />                 
                </div>
                 <div style={styles.setDiv}>
                  <span style={styles.setSpan}>病穗数(穗)</span><input type="text" style={styles.setInput} value={this.state.BSS1}	placeholder="请填写"	ref="BSS1"	data-name="BSS1"
                  onChange={this.defaultChange} />                 
                </div>
                 <div style={styles.setDiv}>
                  <span style={styles.setSpan}>病穗率%</span><input type="text" style={styles.setInput} value={this.state.BSL1}	placeholder="请填写"	ref="BSL1"	data-name="BSL1"
                  onChange={this.defaultChange} />                 
                </div>
                <div style={styles.setDiv}>
                  <span style={styles.setSpan}>备注</span><input type="text" style={styles.setInput} value={this.state.BZ1}	placeholder="请填写"	ref="BZ1"	data-name="BZ1"
                  onChange={this.defaultChange} />                 
                </div>
                
              </TabPane>
               {/*第二个*/}
               <TabPane tab="取样点2" key="2" >
                <div style={styles.setDiv}>
                  <span style={styles.setSpan}>调查丛数(丛)</span><input type="text" style={styles.setInput} value={this.state.DCCS2}	placeholder="请填写"	ref="DCCS2"	data-name="DCCS2"
                  onChange={this.defaultChange} />
                </div> 
                <div style={styles.setDiv}>
                  <span style={styles.setSpan}>病丛数(丛)</span><input type="text" style={styles.setInput} value={this.state.BCS2}	placeholder="请填写"	ref="BCS2"	data-name="BCS2"
                  onChange={this.defaultChange} />
                  </div>
                 <div style={styles.setDiv}>
                  <span style={styles.setSpan}>病丛率%</span><input type="text" style={styles.setInput} value={this.state.BCL2}	placeholder="请填写"	ref="BCL2"	data-name="BCL2"
                  onChange={this.defaultChange} />                 
                </div>
                 <div style={styles.setDiv}>
                  <span style={styles.setSpan}>调查株数(株)</span><input type="text" style={styles.setInput} value={this.state.DCZS2}	placeholder="请填写"	ref="DCZS2"	data-name="DCZS2"
                  onChange={this.defaultChange} />                 
                </div>
                 <div style={styles.setDiv}>
                  <span style={styles.setSpan}>病株数(株)</span><input type="text" style={styles.setInput} value={this.state.BZS2}	placeholder="请填写"	ref="BZS2"	data-name="BZS2"
                  onChange={this.defaultChange} />                 
                </div>
                 <div style={styles.setDiv}>
                  <span style={styles.setSpan}>病株率%</span><input type="text" style={styles.setInput} value={this.state.BZL2}	placeholder="请填写"	ref="BZL2"	data-name="BZL2"
                  onChange={this.defaultChange} />                 
                </div>

                 <div style={styles.setDiv}>
                  <span style={styles.setSpan}>调查叶数(片)</span><input type="text" style={styles.setInput} value={this.state.DCYS2}	placeholder="请填写"	ref="DCYS2"	data-name="DCYS2"
                  onChange={this.defaultChange} />                 
                </div>
                 <div style={styles.setDiv}>
                  <span style={styles.setSpan}>病叶数(片)</span><input type="text" style={styles.setInput} value={this.state.BYS2}	placeholder="请填写"	ref="BYS2"	data-name="BYS2"
                  onChange={this.defaultChange} />                 
                </div>
                 <div style={styles.setDiv}>
                  <span style={styles.setSpan}>病叶率%</span><input type="text" style={styles.setInput} value={this.state.BYL2}	placeholder="请填写"	ref="BYL2"	data-name="BYL2"
                  onChange={this.defaultChange} />                 
                </div>
                <div style={styles.setDiv}>
                  <span style={styles.setSpan}>调查穗数(穗)</span><input type="text" style={styles.setInput} value={this.state.DCSS2}	placeholder="请填写"	ref="DCSS2"	data-name="DCSS2"
                  onChange={this.defaultChange} />                 
                </div>
                 <div style={styles.setDiv}>
                  <span style={styles.setSpan}>病穗数(穗)</span><input type="text" style={styles.setInput} value={this.state.BSS2}	placeholder="请填写"	ref="BSS2"	data-name="BSS2"
                  onChange={this.defaultChange} />                 
                </div>
                 <div style={styles.setDiv}>
                  <span style={styles.setSpan}>病穗率%</span><input type="text" style={styles.setInput} value={this.state.BSL2}	placeholder="请填写"	ref="BSL2"	data-name="BSL2"
                  onChange={this.defaultChange} />                 
                </div>
                <div style={styles.setDiv}>
                  <span style={styles.setSpan}>备注</span><input type="text" style={styles.setInput} value={this.state.BZ2}	placeholder="请填写"	ref="BZ2"	data-name="BZ2"
                  onChange={this.defaultChange} />                 
                </div>
                
              </TabPane>
              {/*第三个*/}
              <TabPane tab="取样点3" key="3" >
                <div style={styles.setDiv}>
                  <span style={styles.setSpan}>调查丛数(丛)</span><input type="text" style={styles.setInput} value={this.state.DCCS3}	placeholder="请填写"	ref="DCCS3"	data-name="DCCS3"
                  onChange={this.defaultChange} />
                </div> 
                <div style={styles.setDiv}>
                  <span style={styles.setSpan}>病丛数(丛)</span><input type="text" style={styles.setInput} value={this.state.BCS3}	placeholder="请填写"	ref="BCS3"	data-name="BCS3"
                  onChange={this.defaultChange} />
                  </div>
                 <div style={styles.setDiv}>
                  <span style={styles.setSpan}>病丛率%</span><input type="text" style={styles.setInput} value={this.state.BCL3}	placeholder="请填写"	ref="BCL3"	data-name="BCL3"
                  onChange={this.defaultChange} />                 
                </div>
                 <div style={styles.setDiv}>
                  <span style={styles.setSpan}>调查株数(株)</span><input type="text" style={styles.setInput} value={this.state.DCZS3}	placeholder="请填写"	ref="DCZS3"	data-name="DCZS3"
                  onChange={this.defaultChange} />                 
                </div>
                 <div style={styles.setDiv}>
                  <span style={styles.setSpan}>病株数(株)</span><input type="text" style={styles.setInput} value={this.state.BZS3}	placeholder="请填写"	ref="BZS3"	data-name="BZS3"
                  onChange={this.defaultChange} />                 
                </div>
                 <div style={styles.setDiv}>
                  <span style={styles.setSpan}>病株率%</span><input type="text" style={styles.setInput} value={this.state.BZL3}	placeholder="请填写"	ref="BZL3"	data-name="BZL3"
                  onChange={this.defaultChange} />                 
                </div>

                 <div style={styles.setDiv}>
                  <span style={styles.setSpan}>调查叶数(片)</span><input type="text" style={styles.setInput} value={this.state.DCYS3}	placeholder="请填写"	ref="DCYS3"	data-name="DCYS3"
                  onChange={this.defaultChange} />                 
                </div>
                 <div style={styles.setDiv}>
                  <span style={styles.setSpan}>病叶数(片)</span><input type="text" style={styles.setInput} value={this.state.BYS3}	placeholder="请填写"	ref="BYS3"	data-name="BYS3"
                  onChange={this.defaultChange} />                 
                </div>
                 <div style={styles.setDiv}>
                  <span style={styles.setSpan}>病叶率%</span><input type="text" style={styles.setInput} value={this.state.BYL3}	placeholder="请填写"	ref="BYL3"	data-name="BYL3"
                  onChange={this.defaultChange} />                 
                </div>
                <div style={styles.setDiv}>
                  <span style={styles.setSpan}>调查穗数(穗)</span><input type="text" style={styles.setInput} value={this.state.DCSS3}	placeholder="请填写"	ref="DCSS3"	data-name="DCSS3"
                  onChange={this.defaultChange} />                 
                </div>
                 <div style={styles.setDiv}>
                  <span style={styles.setSpan}>病穗数(穗)</span><input type="text" style={styles.setInput} value={this.state.BSS3}	placeholder="请填写"	ref="BSS3"	data-name="BSS3"
                  onChange={this.defaultChange} />                 
                </div>
                 <div style={styles.setDiv}>
                  <span style={styles.setSpan}>病穗率%</span><input type="text" style={styles.setInput} value={this.state.BSL3}	placeholder="请填写"	ref="BSL3"	data-name="BSL3"
                  onChange={this.defaultChange} />                 
                </div>
                <div style={styles.setDiv}>
                  <span style={styles.setSpan}>备注</span><input type="text" style={styles.setInput} value={this.state.BZ3}	placeholder="请填写"	ref="BZ3"	data-name="BZ3"
                  onChange={this.defaultChange} />                 
                </div>
                
              </TabPane>
              {/*第四个*/}
              <TabPane tab="取样点4" key="4" >
                <div style={styles.setDiv}>
                  <span style={styles.setSpan}>调查丛数(丛)</span><input type="text" style={styles.setInput} value={this.state.DCCS4}	placeholder="请填写"	ref="DCCS4"	data-name="DCCS4"
                  onChange={this.defaultChange} />
                </div> 
                <div style={styles.setDiv}>
                  <span style={styles.setSpan}>病丛数(丛)</span><input type="text" style={styles.setInput} value={this.state.BCS4}	placeholder="请填写"	ref="BCS4"	data-name="BCS4"
                  onChange={this.defaultChange} />
                  </div>
                 <div style={styles.setDiv}>
                  <span style={styles.setSpan}>病丛率%</span><input type="text" style={styles.setInput} value={this.state.BCL4}	placeholder="请填写"	ref="BCL4"	data-name="BCL4"
                  onChange={this.defaultChange} />                 
                </div>
                 <div style={styles.setDiv}>
                  <span style={styles.setSpan}>调查株数(株)</span><input type="text" style={styles.setInput} value={this.state.DCZS4}	placeholder="请填写"	ref="DCZS4"	data-name="DCZS4"
                  onChange={this.defaultChange} />                 
                </div>
                 <div style={styles.setDiv}>
                  <span style={styles.setSpan}>病株数(株)</span><input type="text" style={styles.setInput} value={this.state.BZS4}	placeholder="请填写"	ref="BZS4"	data-name="BZS4"
                  onChange={this.defaultChange} />                 
                </div>
                 <div style={styles.setDiv}>
                  <span style={styles.setSpan}>病株率%</span><input type="text" style={styles.setInput} value={this.state.BZL4}	placeholder="请填写"	ref="BZL4"	data-name="BZL4"
                  onChange={this.defaultChange} />                 
                </div>

                 <div style={styles.setDiv}>
                  <span style={styles.setSpan}>调查叶数(片)</span><input type="text" style={styles.setInput} value={this.state.DCYS4}	placeholder="请填写"	ref="DCYS4"	data-name="DCYS4"
                  onChange={this.defaultChange} />                 
                </div>
                 <div style={styles.setDiv}>
                  <span style={styles.setSpan}>病叶数(片)</span><input type="text" style={styles.setInput} value={this.state.BYS4}	placeholder="请填写"	ref="BYS4"	data-name="BYS4"
                  onChange={this.defaultChange} />                 
                </div>
                 <div style={styles.setDiv}>
                  <span style={styles.setSpan}>病叶率%</span><input type="text" style={styles.setInput} value={this.state.BYL4}	placeholder="请填写"	ref="BYL4"	data-name="BYL4"
                  onChange={this.defaultChange} />                 
                </div>
                <div style={styles.setDiv}>
                  <span style={styles.setSpan}>调查穗数(穗)</span><input type="text" style={styles.setInput} value={this.state.DCSS4}	placeholder="请填写"	ref="DCSS4"	data-name="DCSS4"
                  onChange={this.defaultChange} />                 
                </div>
                 <div style={styles.setDiv}>
                  <span style={styles.setSpan}>病穗数(穗)</span><input type="text" style={styles.setInput} value={this.state.BSS4}	placeholder="请填写"	ref="BSS4"	data-name="BSS4"
                  onChange={this.defaultChange} />                 
                </div>
                 <div style={styles.setDiv}>
                  <span style={styles.setSpan}>病穗率%</span><input type="text" style={styles.setInput} value={this.state.BSL4}	placeholder="请填写"	ref="BSL4"	data-name="BSL4"
                  onChange={this.defaultChange} />                 
                </div>
                <div style={styles.setDiv}>
                  <span style={styles.setSpan}>备注</span><input type="text" style={styles.setInput} value={this.state.BZ4}	placeholder="请填写"	ref="BZ4"	data-name="BZ4"
                  onChange={this.defaultChange} />                 
                </div>
                
              </TabPane>
              {/*第五个*/}
              <TabPane tab="取样点5" key="5" >
                <div style={styles.setDiv}>
                  <span style={styles.setSpan}>调查丛数(丛)</span><input type="text" style={styles.setInput} value={this.state.DCCS5}	placeholder="请填写"	ref="DCCS5"	data-name="DCCS5"
                  onChange={this.defaultChange} />
                </div> 
                <div style={styles.setDiv}>
                  <span style={styles.setSpan}>病丛数(丛)</span><input type="text" style={styles.setInput} value={this.state.BCS5}	placeholder="请填写"	ref="BCS5"	data-name="BCS5"
                  onChange={this.defaultChange} />
                  </div>
                 <div style={styles.setDiv}>
                  <span style={styles.setSpan}>病丛率%</span><input type="text" style={styles.setInput} value={this.state.BCL5}	placeholder="请填写"	ref="BCL5"	data-name="BCL5"
                  onChange={this.defaultChange} />                 
                </div>
                 <div style={styles.setDiv}>
                  <span style={styles.setSpan}>调查株数(株)</span><input type="text" style={styles.setInput} value={this.state.DCZS5}	placeholder="请填写"	ref="DCZS5"	data-name="DCZS5"
                  onChange={this.defaultChange} />                 
                </div>
                 <div style={styles.setDiv}>
                  <span style={styles.setSpan}>病株数(株)</span><input type="text" style={styles.setInput} value={this.state.BZS5}	placeholder="请填写"	ref="BZS5"	data-name="BZS5"
                  onChange={this.defaultChange} />                 
                </div>
                 <div style={styles.setDiv}>
                  <span style={styles.setSpan}>病株率%</span><input type="text" style={styles.setInput} value={this.state.BZL5}	placeholder="请填写"	ref="BZL5"	data-name="BZL5"
                  onChange={this.defaultChange} />                 
                </div>

                 <div style={styles.setDiv}>
                  <span style={styles.setSpan}>调查叶数(片)</span><input type="text" style={styles.setInput} value={this.state.DCYS5}	placeholder="请填写"	ref="DCYS5"	data-name="DCYS5"
                  onChange={this.defaultChange} />                 
                </div>
                 <div style={styles.setDiv}>
                  <span style={styles.setSpan}>病叶数(片)</span><input type="text" style={styles.setInput} value={this.state.BYS5}	placeholder="请填写"	ref="BYS5"	data-name="BYS5"
                  onChange={this.defaultChange} />                 
                </div>
                 <div style={styles.setDiv}>
                  <span style={styles.setSpan}>病叶率%</span><input type="text" style={styles.setInput} value={this.state.BYL5}	placeholder="请填写"	ref="BYL5"	data-name="BYL5"
                  onChange={this.defaultChange} />                 
                </div>
                <div style={styles.setDiv}>
                  <span style={styles.setSpan}>调查穗数(穗)</span><input type="text" style={styles.setInput} value={this.state.DCSS5}	placeholder="请填写"	ref="DCSS5"	data-name="DCSS5"
                  onChange={this.defaultChange} />                 
                </div>
                 <div style={styles.setDiv}>
                  <span style={styles.setSpan}>病穗数(穗)</span><input type="text" style={styles.setInput} value={this.state.BSS5}	placeholder="请填写"	ref="BSS5"	data-name="BSS5"
                  onChange={this.defaultChange} />                 
                </div>
                 <div style={styles.setDiv}>
                  <span style={styles.setSpan}>病穗率%</span><input type="text" style={styles.setInput} value={this.state.BSL5}	placeholder="请填写"	ref="BSL5"	data-name="BSL5"
                  onChange={this.defaultChange} />                 
                </div>
                <div style={styles.setDiv}>
                  <span style={styles.setSpan}>备注</span><input type="text" style={styles.setInput} value={this.state.BZ5}	placeholder="请填写"	ref="BZ5"	data-name="BZ5"
                  onChange={this.defaultChange} />                 
                </div>
                
              </TabPane>
            </Tabs>

          <div style={styles.setDiv} onClick={this.submitHanlder}><p style={styles.spespan}>上传</p></div>
        </div>
      );
  }
}



function mapStateToProps({ daowen }) {
  return {daowen};
}

// 建立数据关联关系
export default connect(mapStateToProps)(Daowen);