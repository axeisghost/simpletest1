const db = wx.cloud.database();
const todos = db.collection('todos');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    task:{}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  pageData:{

  },
  onLoad: function (options) {
    this.pageData.id = options.id;
    todos.doc(options.id).get().then(res =>{
      this.setData({
        task:res.data
      })
    })
  },
  viewLocation:function(){
    wx.openLocation({
      latitude: this.data.task.location.latitude,
      longitude: this.data.task.location.latitude,
      name: this.data.task.location.name,
      address:this.data.task.location.address
    })
  }
  /**
   * 生命周期函数--监听页面初次渲染完成
   */

})