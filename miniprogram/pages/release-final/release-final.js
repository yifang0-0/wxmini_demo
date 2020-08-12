// pages/release-final/release-final.js
const app = getApp();
Page({
  data: {
    StatusBar: app.globalData.StatusBar,
    CustomBar: app.globalData.CustomBar,
    hidden: true,
    index: null,
    modalName: 'default',
    picker: ['喵喵喵', '汪汪汪', '哼唧哼唧'],
    Must_imgList: ["https://image.weilanwl.com/color2.0/plugin/cjkz2329.jpg",
    "https://ossweb-img.qq.com/images/lol/web201310/skin/big10001.jpg",
    "https://ossweb-img.qq.com/images/lol/web201310/skin/big10002.jpg",
    "https://ossweb-img.qq.com/images/lol/web201310/skin/big10003.jpg",
    "https://ossweb-img.qq.com/images/lol/web201310/skin/big10004.jpg",
    "https://ossweb-img.qq.com/images/lol/web201310/skin/big10005.jpg",
    "https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg",
    "https://ossweb-img.qq.com/images/lol/web201310/skin/big10007.jpg",
    "https://ossweb-img.qq.com/images/lol/web201310/skin/big10008.jpg",
    "https://ossweb-img.qq.com/images/lol/web201310/skin/big10009.jpg"],

    Chosen_imgList: ["https://ossweb-img.qq.com/images/lol/web201310/skin/big10001.jpg",
    "https://ossweb-img.qq.com/images/lol/web201310/skin/big10002.jpg",
    "https://ossweb-img.qq.com/images/lol/web201310/skin/big10003.jpg",],

    multiArray: [
      ['无脊柱动物', '脊柱动物'],
      ['扁性动物', '线形动物', '环节动物', '软体动物', '节肢动物'],
      ['猪肉绦虫', '吸血虫']
    ],
    objectMultiArray: [
      [{
          id: 0,
          name: '无脊柱动物'
        },
        {
          id: 1,
          name: '脊柱动物'
        }
      ],
      [{
          id: 0,
          name: '扁性动物'
        },
        {
          id: 1,
          name: '线形动物'
        },
        {
          id: 2,
          name: '环节动物'
        },
        {
          id: 3,
          name: '软体动物'
        },
        {
          id: 3,
          name: '节肢动物'
        }
      ],
      [{
          id: 0,
          name: '猪肉绦虫'
        },
        {
          id: 1,
          name: '吸血虫'
        }
      ]
    ],
    multiIndex: [0, 0, 0],

  },

  // modal
  showModal(e) {
    this.setData({
      modalName: e.currentTarget.dataset.target
    })
  },

  hideModal(e) {
    this.setData({
      modalName: null
    })
  },

  // 放大图片
  ViewImage(e) {
    wx.previewImage({
      urls: this.data.Must_imgList,
      current: e.currentTarget.dataset.url
    });
  },
  
  // 选择图片
  ChooseImage() {
    wx.chooseImage({
      count: 4, //默认9
      sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
      sourceType: ['album'], //从相册选择
      success: (res) => {
        if (this.data.imgList.length != 0) {
          this.setData({
            imgList: this.data.Must_imgList.concat(res.tempFilePaths)
          })
        } else {
          this.setData({
            imgList: res.tempFilePaths
          })
        }
      }
    });
  },

  // 删除图片
  DelImg(e) {
    wx.showModal({
      title: '确认',
      content: '确认要删除此照片吗？',
      cancelText: '不了',
      confirmText: '是的',
      success: res => {
        if (res.confirm) {
          this.data.Must_imgList.splice(e.currentTarget.dataset.index, 1);
          this.setData({
            imgList: this.data.Must_imgList
          })
        }
      }
    })
  },

  // 卖家多列选择
  MultiChange(e) {
    this.setData({
      multiIndex: e.detail.value
    })
  },

  MultiColumnChange(e) {
    let data = {
      multiArray: this.data.multiArray,
      multiIndex: this.data.multiIndex
    };
    data.multiIndex[e.detail.column] = e.detail.value;
    switch (e.detail.column) {
      case 0:
        switch (data.multiIndex[0]) {
          case 0:
            data.multiArray[1] = ['扁性动物', '线形动物', '环节动物', '软体动物', '节肢动物'];
            data.multiArray[2] = ['猪肉绦虫', '吸血虫'];
            break;
          case 1:
            data.multiArray[1] = ['鱼', '两栖动物', '爬行动物'];
            data.multiArray[2] = ['鲫鱼', '带鱼'];
            break;
        }
        data.multiIndex[1] = 0;
        data.multiIndex[2] = 0;
        break;
      case 1:
        switch (data.multiIndex[0]) {
          case 0:
            switch (data.multiIndex[1]) {
              case 0:
                data.multiArray[2] = ['猪肉绦虫', '吸血虫'];
                break;
              case 1:
                data.multiArray[2] = ['蛔虫'];
                break;
              case 2:
                data.multiArray[2] = ['蚂蚁', '蚂蟥'];
                break;
              case 3:
                data.multiArray[2] = ['河蚌', '蜗牛', '蛞蝓'];
                break;
              case 4:
                data.multiArray[2] = ['昆虫', '甲壳动物', '蛛形动物', '多足动物'];
                break;
            }
            break;
          case 1:
            switch (data.multiIndex[1]) {
              case 0:
                data.multiArray[2] = ['鲫鱼', '带鱼'];
                break;
              case 1:
                data.multiArray[2] = ['青蛙', '娃娃鱼'];
                break;
              case 2:
                data.multiArray[2] = ['蜥蜴', '龟', '壁虎'];
                break;
            }
            break;
        }
        data.multiIndex[2] = 0;
        break;
    }
    this.setData(data);
  },

  // 鉴定师普通选择
  PickerChange(e) {
    console.log(e);
    this.setData({
      index: e.detail.value
    })
  },

})