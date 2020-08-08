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
  onReady: 
    function() {
      let that = this;
      setTimeout(function() {
        that.calculateScrollViewHeight()
      }, 100)
      //calculateScrollViewHeight();
    },
    //     //console.log(e)
    // wx.hideLoading()
    //     let that = this

    //     let query = wx.createSelectorQuery()
    
    //     query.selectAll("#seriesLable1").boundingClientRect(function (res) {
    
    //       console.log(res[0])
    //       var a=res[0].height
    //       console.log("当前坐标是 position = "+a)
    
  
    //       that.setData({
      
    //       topBarSeriesHeight:a,
    //         
    //       })
    //       console.log("topBarSeriesHeight= "+topBarSeriesHeight)
    
    //     }).exec()
      
    calculateScrollViewHeight() {
      let that = this;
     // console.log(systemInfo)
      let query = wx.createSelectorQuery().in(this)
      //根据节点id查询节点部分的高度（px单位）
      query.select('#topBarSeries').boundingClientRect();
      query.select('#seriesLable1').boundingClientRect();

      
  
      query.exec((res) => {
        // 分别取出节点的高度
        let bar = res[0].height;
        let imageHeight = res[1].height;
        // 然后窗口高度（wx.getSystemInfoSync().windowHeight）减去其他不滑动界面的高度
        let scrollViewHeight = wx.getSystemInfoSync().windowHeight -
         imageHeight-bar ;
        console.log(scrollViewHeight)
        // 算出来之后存到data对象里面
        that.setData({
          scrollHeight: scrollViewHeight
        });
      })
    },
  tabSelect(e) {
    this.setData({
      TabCur: e.currentTarget.dataset.id,
      MainCur: e.currentTarget.dataset.id,
      VerticalNavTop: (e.currentTarget.dataset.id - 1) * 50
    })
  },
  VerticalMain(e) {
    let that = this;
    let SeriesList = this.data.SeriesList;
    let tabHeight = 0;
    if (this.data.load) {
      for (let i = 0; i < SeriesList.length; i++) {
        let view = wx.createSelectorQuery().select("#series-" + i);
        view.fields({
          size: true
        }, data => {
          SeriesList[i].top = tabHeight;
          tabHeight = tabHeight + data.height;
          SeriesList[i].bottom = tabHeight;     
        }).exec();
      }
      that.setData({
        load: false,
        SeriesList: SeriesList
      })
    }
    let scrollTop = e.detail.scrollTop + 20;
    for (let i = 0; i < SeriesList.length; i++) {
      if (scrollTop > SeriesList[i].top && scrollTop < SeriesList[i].bottom) {
        that.setData({
          VerticalNavTop: (SeriesList[i].id - 1) * 50,
          TabCur: SeriesList[i].id
        })
        return false
      }
    }
  }
   });
