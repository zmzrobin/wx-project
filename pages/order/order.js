// pages/order/order.js
const date = new Date()
const years = []
const months = []
const days = []

years.push(date.getFullYear())

for (let i = date.getMonth()+1; i <= 12; i++) {
  months.push(i)
}

for (let i = 1; i <= 31; i++) {
  days.push(i)
}

Page({

  /**
   * 页面的初始数据
   */
  data: {
    list: [{
      id:'01',
      src: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1540811276439&di=94d6238c54963f9723343aa52c50ccce&imgtype=0&src=http%3A%2F%2Fpic.qiantucdn.com%2F58pic%2F13%2F12%2F22%2F98H58PICdGV_1024.jpg',
      title: '黑框无边眼镜',
      pinpai: 'llll'
    },
      {
        id: '02',
        src: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1540811276439&di=94d6238c54963f9723343aa52c50ccce&imgtype=0&src=http%3A%2F%2Fpic.qiantucdn.com%2F58pic%2F13%2F12%2F22%2F98H58PICdGV_1024.jpg',
        title: '黑框无边眼镜',
        pinpai: 'llll'
      },
      {
        id: '03',
        src: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1540811276439&di=94d6238c54963f9723343aa52c50ccce&imgtype=0&src=http%3A%2F%2Fpic.qiantucdn.com%2F58pic%2F13%2F12%2F22%2F98H58PICdGV_1024.jpg',
        title: '黑框无边眼镜',
        pinpai: 'llll'
      },
    ],
    years: years,
    year: date.getFullYear(),
    months: months,
    month: 2,
    days: days,
    day: 2,
    value: [9999, 1, 1],
    loading:false,
    disabled:false
  },
  bindChange: function (e) {
    const val = e.detail.value
    this.setData({
      year: this.data.years[val[0]],
      month: this.data.months[val[1]],
      day: this.data.days[val[2]]
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})