/*eslint-disable *//**
 * @author jcxu
 * @description 系统介绍页
 */


import { connect } from 'dva';
import React, { Component } from 'react';
import { Icon, Grid } from 'antd-mobile';
import $ from 'jquery';
import {NavBar, List, Button, Radio, InputItem, Flex, Tabs} from 'antd-mobile';
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

class DaoQu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      CBZD:'',
      BCMC:'', 							
      DCDD:'', 
      DZLX:'', 	      					     					
      SYQ:'', 						
      LXT:'',  					
      DCTKBHS :'', 			
      DCDBHS:'',  

      DCCS1:0,  BSS1:0,  BSL1:0,  BZ1:'' ,
      DCCS2:0,  BSS2:0,  BSL2:0,  BZ2:'' ,
      DCCS3:0,  BSS3:0,  BSL3:0,  BZ3:'' ,
      DCCS4:0,  BSS4:0,  BSL4:0,  BZ4:'' ,
      DCCS5:0,  BSS5:0,  BSL5:0,  BZ5:'' ,

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
                        "BSS":this.state.BSS1,                               
                        "BSL":this.state.BSL1,                                        
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
                        "BSS":this.state.BSS2,                               
                        "BSL":this.state.BSL2,                                        
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
                        "BSS":this.state.BSS3,                               
                        "BSL":this.state.BSL3,                                        
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
                        "BSS":this.state.BSS4,                               
                        "BSL":this.state.BSL4,                                        
                        "BZ": this.state.BZ4
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
                        "BSS":this.state.BSS5,                               
                        "BSL":this.state.BSL5,                                        
                        "BZ": this.state.BZ5
                      }
                     
                    ]
          }
          console.log(databody)
          let url = 'mtc/wxreport/savereport';
              
                fetch(url, {
                      method: 'POST',
                      mode: 'cors',
                      headers: {
                          'Content-Type': 'application/json'
                      }, 
                      body: JSON.stringify(databody)
                  }) 
                .then(reponse=>reponse.json())
                .then(data=>console.log('123456',data))   
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
                  <span style={styles.setSpan}>病丛数(丛)</span><input type="text" style={styles.setInput} value={this.state.BSS1}	placeholder="请填写"	ref="BSS1"	data-name="BSS1"
                  onChange={this.defaultChange} />
                  </div>
                 <div style={styles.setDiv}>
                  <span style={styles.setSpan}>病丛率%</span><input type="text" style={styles.setInput} value={this.state.BSL1}	placeholder="请填写"	ref="BSL1"	data-name="BSL1"
                  onChange={this.defaultChange} />                 
                </div>            
                <div style={styles.setDiv}>
                  <span style={styles.setSpan}>备注</span><input type="text" style={styles.setInput} value={this.state.BZ1}	placeholder="请填写"	ref="BZ1"	data-name="BZ1"
                  onChange={this.defaultChange} />                 
                </div>
                
              </TabPane>
              <TabPane tab="取样点2" key="2" >
                <div style={styles.setDiv}>
                  <span style={styles.setSpan}>调查丛数(丛)</span><input type="text" style={styles.setInput} value={this.state.DCCS2}	placeholder="请填写"	ref="DCCS2"	data-name="DCCS2"
                  onChange={this.defaultChange} />
                </div> 
                <div style={styles.setDiv}>
                  <span style={styles.setSpan}>病丛数(丛)</span><input type="text" style={styles.setInput} value={this.state.BSS2}	placeholder="请填写"	ref="BSS2"	data-name="BSS2"
                  onChange={this.defaultChange} />
                  </div>
                 <div style={styles.setDiv}>
                  <span style={styles.setSpan}>病丛率%</span><input type="text" style={styles.setInput} value={this.state.BSL2}	placeholder="请填写"	ref="BSL2"	data-name="BSL2"
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
                  <span style={styles.setSpan}>病丛数(丛)</span><input type="text" style={styles.setInput} value={this.state.BSS3}	placeholder="请填写"	ref="BSS3"	data-name="BSS3"
                  onChange={this.defaultChange} />
                  </div>
                 <div style={styles.setDiv}>
                  <span style={styles.setSpan}>病丛率%</span><input type="text" style={styles.setInput} value={this.state.BSL3}	placeholder="请填写"	ref="BSL3"	data-name="BSL3"
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
                  <span style={styles.setSpan}>病丛数(丛)</span><input type="text" style={styles.setInput} value={this.state.BSS4}	placeholder="请填写"	ref="BSS4"	data-name="BSS4"
                  onChange={this.defaultChange} />
                  </div>
                 <div style={styles.setDiv}>
                  <span style={styles.setSpan}>病丛率%</span><input type="text" style={styles.setInput} value={this.state.BSL4}	placeholder="请填写"	ref="BSL4"	data-name="BSL4"
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
                  <span style={styles.setSpan}>病丛数(丛)</span><input type="text" style={styles.setInput} value={this.state.BSS5}	placeholder="请填写"	ref="BSS5"	data-name="BSS5"
                  onChange={this.defaultChange} />
                  </div>
                 <div style={styles.setDiv}>
                  <span style={styles.setSpan}>病丛率%</span><input type="text" style={styles.setInput} value={this.state.BSL5}	placeholder="请填写"	ref="BSL5"	data-name="BSL5"
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


export default DaoQu
