const app = getApp();
Page({
  data: {
    StatusBar: app.globalData.StatusBar,
    CustomBar: app.globalData.CustomBar,
    hidden: true,
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
      },    {
        title: '防晒',
        name: 'red'
      },
      {
        title: '高光',
        name: 'red'
      },    {
        title: '化妆刷',
        name: 'red'
      },{
        title: 'ARMANI/阿玛尼',
        name: 'null'
      }
    ]
  },

});