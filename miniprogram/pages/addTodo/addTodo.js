const db = wx.cloud.database();
const todos = db.collection('todos');

Page({
  data: {
    image: null
  },
  pageData: {
    locationObj:{}
  },
  selectImage: function (e) {
    wx.chooseImage({
      success: res => {
        console.log(res.tempFilePaths[0])
        wx.cloud.uploadFile({
          cloudPath: `${Math.floor(Math.random()*10000000)}.png`,
          filePath: res.tempFilePaths[0]
        }).then(res => {
          console.log(res.fileID)
          this.setData({
            image: res.fileID
          })
        }).catch(err => {
          console.error(err)
        })
      },
    })
  },
  onSubmit: function (event) {
    console.log(event.detail.value.title)
    todos.add({
      data: {
        image: this.data.image,
        title: event.detail.value.title,
        location:this.pageData.locationObj

      }
    }).then(res => {
      wx.showToast({
        title: '添加成功',
        icon: 'Success',
        success: res2 => {
          wx.redirectTo({
            url: `../todoInfo/todoInfo?id=${res._id}`,
          })
        }
      })
    })
  },
  chooseLocation: function (e) {
    wx.chooseLocation({
      success: res => {
        let locationObj = {
          latitude: res.latitude,
          longitude: res.longitude,
          name: res.name,
          address: res.address
        }
        this.pageData.locationObj = locationObj
      }
    })
  }
})