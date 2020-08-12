// pages/searchID/searchID.js
const app = getApp();
Page({
  data: {
    StatusBar: app.globalData.StatusBar,
    CustomBar: app.globalData.CustomBar,
    hidden: true,
    BrandList:[
      {
        title: 'TOMFORD/汤姆福德',
        name: 'red'
      },
      {
        title: 'DIOR/迪奥',
        name: 'red'
      },
      {
        title: 'Ysl/圣罗兰',
        name: 'red'
      },    {
        title: 'ARMANI/阿玛尼',
        name: 'red'
      },{
        title: 'ARMANI/阿玛尼',
        name: 'null'
      }
    ]
  },

});