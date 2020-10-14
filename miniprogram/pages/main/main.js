const db = wx.cloud.database();
import Notify from '../../miniprogram_npm/@vant/weapp/notify/notify';

Page({
  data: {
    activeKey: 0,
    list:[]
  },
  onLoad: function (options) {
    db.collection('todos').count({
      success: function(res) {
        // res.data 包含该记录的数据
        console.log(res.total)
      }
    })
    db.collection('emall').where({_id: 'd782d4875f7c6ec200f2008613940691'}).get({
      success:res =>{
        console.log(res)
      }
    })
  },
  onReady: function () {

  },
  onShow: function () {

  },
  onChange(event) {
    db.collection('todos').count({
      success: function(res) {
        // res.data 包含该记录的数据
        console.log(res.total)
      }
    })
    console.log(event);
    Notify({ type: 'primary', message: event.detail });
  },
})