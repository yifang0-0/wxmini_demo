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
  onLoad() {
    var query = wx.createSelectorQuery();

        //选择id

        query.select('topBarSeries').boundingClientRect()
        
       query.select('seriesLable').boundingClientRect()

        query.exec(function (res) {

          //res就是 所有标签为mjltest的元素的信息 的数组

          console.log('所有：',res);

          //取高度

          that.setData({

            storyHeight:that.data.detailHeight -(res[0].height+res[1].height)

          })

        });

  }
});
