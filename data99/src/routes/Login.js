import { List, InputItem, WhiteSpace,Toast, WingBlank, Button } from 'antd-mobile';
import React,{Component} from 'react'
import './style.css'
import request from '../utils/request';

function getstyle(){
  return {
     InputItem:{
        height:'1rem',
        width:'100%',
        borderBottom:'1px solid #ccc',

     },
     SpanItem:{
        width:'20%',
       height:'1rem',
       lineHeight:'1rem',
       fontSize:'0.36rem',
       color:'rgb(161,161,161)',
       display:'inlineBlock',
     },
     inputItem:{
        width:'70%',
        textAlign:'right',
        border:'none' ,
        display:'inlineBlock',
        color:'rgb(161,161,161)',  
        height:'0.8rem', 
        lineHeight:'1rem',
        fontSize:'0.36rem',
        
    
     }
  }
}
class Login extends Component{
    constructor(props){
        super(props);
        this.state = {
            username : "",
            pwd:''
        };
        this.handleUsername = this.handleUsername.bind(this);
        this.handlepwd = this.handlepwd.bind(this);
    }
    handleUsername(event){
        this.setState({
            username : event.target.value
        })
    }
    handlepwd(event){
      this.setState({
            pwd : event.target.value
        })
    }
    submitHanlder(){
      
        // let data1 = 'username=' + this.state.username + '&password=' + this.state.pwd;
        // console.log(data1);
        let username11 = this.state.username;
        let password11 = this.state.pwd;
        let url = 'mtc/wxuser/login?username='+username11+'&pwd='+password11;
        console.log(url);
        fetch(url)
        .then(reponse=>reponse.json())
        .then(data=>console.log('123456',data))
    }
    render(){
      
        const styles=getstyle();
        return(
           <div style={{width:'80%',backgroundColor:'#fff',margin:'0 auto'}}>
              <div style={styles.InputItem}>
                <span style={styles.SpanItem}>姓&nbsp;&nbsp;&nbsp;名</span> 
                <input style={styles.inputItem}  placeholder="请输入您的姓名" value={this.state.username} 
                onChange={this.handleUsername} />
              </div>
              <div style={styles.InputItem}>
                <span style={styles.SpanItem}>密&nbsp;&nbsp;&nbsp;码</span> 
                <input style={styles.inputItem} placeholder="请输入您的密码" value={this.state.pwd} onChange={this.handlepwd} />
              </div>
              <div style={styles.InputItem}>
                <span style={styles.SpanItem}>验证码</span> 
               <input style={styles.inputItem} placeholder="请输入您的验证码"  />
              </div>
              <div style={{marginTop:'30px',backgroundColor:'rgb(235,235,235)'}}>
                <input type="submit" onClick={(e)=>this.submitHanlder(e)} style={{width:'100%',height:'1rem',backgroundColor:'rgb(93,183,93)',textAlign:'center',fontSize:'0.36rem',color:'white', }} value="提交"/>                      
              </div>
           </div>
        )
    }
}
export default Login;
