// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    yjlist:[
      { src:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1540811276439&di=94d6238c54963f9723343aa52c50ccce&imgtype=0&src=http%3A%2F%2Fpic.qiantucdn.com%2F58pic%2F13%2F12%2F22%2F98H58PICdGV_1024.jpg'},
      { src: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3393703287,240323007&fm=26&gp=0.jpg' },
      { src: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1540811276438&di=a374c5324962f35dc53a5fa18fe73a2c&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimgad%2Fpic%2Fitem%2F838ba61ea8d3fd1f1fd9dc1c3a4e251f94ca5fc7.jpg' },
      { src: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2204646449,3294292425&fm=26&gp=0.jpg' },
      { src: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2218806753,2474260697&fm=26&gp=0.jpg' },
      { src: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1220889495,746440826&fm=26&gp=0.jpg' },
      { src: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1905471274,415453652&fm=26&gp=0.jpg' },
      { src: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=811404489,3192706625&fm=26&gp=0.jpg' },
      { src: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3131429480,2023472332&fm=26&gp=0.jpg' },
      { src: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2212205078,2737107689&fm=26&gp=0.jpg' },
      { src: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=4166026320,2346769614&fm=26&gp=0.jpg' },
      
    ]
  },
  upper: function (e) {
    console.log(e)
  },
  lower: function (e) {
    console.log(e)
  },
  scroll: function (e) {
    console.log(e)
  },
  goDetail:function(e){
    wx.navigateTo({
      url: '../detail/detail?id=1'
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})