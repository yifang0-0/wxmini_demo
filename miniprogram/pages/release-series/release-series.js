// pages/release-series/release-series.js
const app = getApp();
Page({
  data: {
    StatusBar: app.globalData.StatusBar,
    CustomBar: app.globalData.CustomBar,
    hidden: true,
    indexS:0,
    topBarSeriesHeight:171,
    
    SeriesList:[
      {
        title: '气垫',
        name: 'red'
      },
      {
        title: '口红',
        name: 'red'
      },
      {
        title: '香水',
        name: 'red'
      },    
      {
        title: '防晒',
        name: 'red'
      },
      {
        title: '化妆刷',
        name: 'red'
      }, 
      {
        title: '防晒',
        name: 'red'
      },
      {
        title: '高光',
        name: 'red'
      },    {
        title: '化妆刷',
        name: 'red'
      }
    ]
  },

})