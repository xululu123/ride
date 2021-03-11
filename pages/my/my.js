// pages/my/my.js

Page({
 "usingComponents": {
    "mp-icon": "weui-miniprogram/icon/icon"
  },
  data:{
    list:[
      [{text:"创建团队",icon:"/pages/images/风景1.jpg"}],
      [{text:"LOGO上传",icon:"/pages/images/风景2.jpg"}],
     [{text:"背部荣耀榜",icon:"/pages/images/风景2.jpg"}],
     [{text:"我的设置",icon:"/pages/images/风景2.jpg"}]
    ]
     },
     goToUploading: function(options) {
      wx.navigateTo({
        url:'../uploading/uploading',
      })
   },
   bindViewTap: function(options) {
    wx.navigateTo({
      url:'../logo/logo',
    })
 }
  })
 

