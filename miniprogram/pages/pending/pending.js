// pages/pending/pending.js
const app = getApp();
Page({
    data: {
        imgList: ["https://image.weilanwl.com/color2.0/plugin/cjkz2329.jpg",
        "https://ossweb-img.qq.com/images/lol/web201310/skin/big10001.jpg",
        "https://ossweb-img.qq.com/images/lol/web201310/skin/big10002.jpg",
        "https://ossweb-img.qq.com/images/lol/web201310/skin/big10003.jpg",
        "https://ossweb-img.qq.com/images/lol/web201310/skin/big10004.jpg",
        "https://ossweb-img.qq.com/images/lol/web201310/skin/big10005.jpg",
        "https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg",
        "https://ossweb-img.qq.com/images/lol/web201310/skin/big10007.jpg",
        "https://ossweb-img.qq.com/images/lol/web201310/skin/big10008.jpg",
        "https://ossweb-img.qq.com/images/lol/web201310/skin/big10009.jpg"]
    },

    // 放大图片
    ViewImage(e) {
        wx.previewImage({
          urls: this.data.imgList,
          current: e.currentTarget.dataset.url
        });
    }

})