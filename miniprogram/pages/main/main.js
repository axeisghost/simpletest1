const db = wx.cloud.database();
import Notify from '../../miniprogram_npm/@vant/weapp/notify/notify';

Page({
  data: {
    activeKey: 0,
    list:[]
  },
  onLoad: function (options) {
    db.collection('emall').get({
      success:res =>{
        console.log(res.data)
      }
    })
  },
  onReady: function () {

  },
  onShow: function () {

  },
  onChange(event) {
    console.log(event);
    Notify({ type: 'primary', message: event.detail });
  },
})