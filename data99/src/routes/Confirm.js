/*eslint-disable */
/**
 * @author jcxu
 * @description 订单确认页
 */

import React, { } from 'react';
import { connect } from 'dva';
import { ActivityIndicator, DatePicker, List, TextareaItem, Flex, Icon, Radio } from 'antd-mobile';
import { createForm } from 'rc-form'
import GoodItem from '../../components/GoodItem';
import ItemTitle from '../../components/ItemTitle';
import PageTitle from '../../components/PageTitle';
import ItemMessage from '../../components/ItemMessage';
import styles from '../styles/Confirm.less';
import addressItem from '../styles/AddressItem.less';
import bottomButton from '../styles/BottomButton.less';
import { payTypes } from '../Config';
import moment from 'moment';

const RadioItem = Radio.RadioItem;

const AddressItem = ({ addcontact, contactsex, sexname, addmobile, addprov, addcity, addcounty, addroad, adddetail }) => (
  <div className={addressItem.addressItem}>
    <div className={addressItem.container}>
      <div className={addressItem.left}>
        <div className={addressItem.top}>{addcontact}    {addmobile}</div>
        <div className={addressItem.bottom}><Icon type={require('../../svg/position.svg')} />  {`${addprov} ${addcity} ${addcounty} ${addroad} ${adddetail}`}</div>
      </div>
      <div className={addressItem.right}><Icon type={require('../../svg/right.svg')} /></div>
    </div>
  </div>
);

function Confirm({ orderConfirm, shoppingCart, loading, form, dispatch }) {
  // 订单确认页地址
  const { confirmAddress, defaultTime, payType } = orderConfirm;
  const { getFieldProps, getFieldError } = form;
  const data = [
    { value: 0, label: 'Doctor' },
    { value: 1, label: 'Bachelor' },
  ];
  // 购物车中的商品
  const { cartList } = shoppingCart;
  function onChange(date) {
    // console.log('onChange', date);
    dispatch({
      type: 'orderConfirm/changeTime',
      payload: date
    })
  }
  //切换支付方式
	function changePayType(value) {
		dispatch({
			type: 'orderConfirm/changePayType',
			payload: value
		})
	}
  //订单提交
  function submit() {
    // TODO
    console.log("订单提交了");

  }
  const maxDate = moment('2016-12-03 +0800', 'YYYY-MM-DD Z').utcOffset(8);
  const minDate = moment('2015-08-06 +0800', 'YYYY-MM-DD Z').utcOffset(8);

  const maxTime = moment('22:00 +0800', 'HH:mm Z').utcOffset(8);
  const minTime = moment('08:30 +0800', 'HH:mm Z').utcOffset(8);
  return (
    <div className={styles.confirm}>
      <PageTitle
        title="订单确认"
      />
      {
        AddressItem(confirmAddress)
      }
      {
        cartList.map((item, i) => {
          return (
            <GoodItem key={i} isEdit={false} goodDetail={item} goodsInCart={cartList} />
          );
        })
      }

      <DatePicker
        mode="date"
        {...getFieldProps('date1', {

        }) }
        minDate={minDate}
        maxDate={maxDate}
      >
        <List.Item arrow="horizontal">配送日期</List.Item>
      </DatePicker>
      <DatePicker mode="time" {...getFieldProps('time1') } minuteStep={5}>
        <List.Item arrow="horizontal">配送事件</List.Item>
      </DatePicker>

      <TextareaItem
        {...getFieldProps('note1') }
        rows={3}
        placeholder="备注信息"
      />
      <div className={styles.couponContainer}>使用优惠券 <span>单词次购物时只能使用一次优惠券  </span> <Icon style={{ lineHeight: '0.6rem', float: 'right' }} type={require('../../svg/right.svg')} /></div>
      <List>
        {payTypes.map(i => (
          <RadioItem key={i.value} checked={payType === i.value} onChange={() => changePayType(i.value)}>
            <Icon style={{ lineHeight: '0.6rem', float: 'left' }} type={require('../../svg/'+i.icon+'.svg')} />{i.label}
          </RadioItem>
        ))}
      </List>
      <div className={bottomButton.bottomButton}>
        支付款：500 <a onClick={submit}>提交订单</a>
      </div>
      <ActivityIndicator
        toast
        text="正在加载"
        animating={loading}
      />
    </div>
  );
}

Confirm = createForm()(Confirm);

function mapStateToProps({ orderConfirm, shoppingCart, loading }) {
  return { orderConfirm, shoppingCart, loading: loading.models.orderConfirm };
}

export default connect(mapStateToProps)(Confirm);
