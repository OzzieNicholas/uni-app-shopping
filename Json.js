/* 用户 */
const userInfo = {
	status: 1,
	data: {
		id: 1,
		mobile: 18888888888,
		nickname: 'ozzie',
		portrait: 'http://img.61ef.cn/news/201409/28/2014092805595807.jpg'
	},
	msg: '提示'
}
/* 首页轮播图 */
const carouselList = [{
		src: "/static/temp/banner3.jpg",
		background: "rgb(203, 87, 60)",
	},
	{
		src: "/static/temp/banner2.jpg",
		background: "rgb(205, 215, 218)",
	},
	{
		src: "/static/temp/banner4.jpg",
		background: "rgb(183, 73, 69)",
	}
]
/* 商品列表 */
const goodsList = [{
		image: "/static/temp/cate1.jpg",
		image2: "/static/temp/cate2.jpg",
		image3: "/static/temp/cate3.jpg",
		title: "时蔬-番茄",
		price: 23,
		sales: 20,
	},
	{
		image: "/static/temp/cate4.jpg",
		image2: "/static/temp/cate5.jpg",
		image3: "/static/temp/cate6.jpg",
		title: "时蔬-胡萝卜",
		price: 28,
		sales: 25,
	},
	{
		image: "/static/temp/cate7.jpg",
		image2: "/static/temp/cate8.jpg",
		image3: "/static/temp/cate9.jpg",
		title: "时蔬-马铃薯",
		price: 15,
		sales: 11,
	}, {
		image: "/static/temp/cate10.jpg",
		image2: "/static/temp/cate11.jpg",
		image3: "/static/temp/cate12.jpg",
		title: "时蔬-小番茄",
		price: 18,
		sales: 14,
	}, {
		image: "/static/temp/cate13.jpg",
		image2: "/static/temp/cate14.jpg",
		image3: "/static/temp/cate15.jpg",
		title: "时蔬-生菜",
		price: 25,
		sales: 22,
	}, {
		image: "/static/temp/cate16.jpg",
		image2: "/static/temp/cate17.jpg",
		image3: "/static/temp/cate18.jpg",
		title: "时蔬-玉米",
		price: 31,
		sales: 24,
	},
]

/* 购物车 */
const cartList = [{
		id: 1,
		image: '/static/temp/banner1.jpg',
		attr_val: '小金桔',
		stock: 20.60,
		title: '新金桔',
		price: 20.60,
		number: 3
	},
	{
		id: 3,
		image: '/static/temp/banner2.jpg',
		attr_val: '火龙果',
		stock: 3,
		title: '菲斯小火龙',
		price: 25.60,
		number: 5
	},
	{
		id: 4,
		image: '/static/temp/banner4.jpg',
		attr_val: '苹果',
		stock: 55,
		title: '迷诱小苹果',
		price: 30.60,
		number: 4
	}
];
//详情展示页面
const detailData = {
	title: '纯种金毛幼犬活体有血统证书',
	title2: '拆家小能手 你值得拥有',
	favorite: true,
	imgList: [{
			src: 'http://img0.imgtn.bdimg.com/it/u=2396068252,4277062836&fm=26&gp=0.jpg'
		},
		{
			src: 'http://img.pconline.com.cn/images/upload/upc/tx/itbbs/1309/06/c4/25310541_1378426131583.jpg'
		},
		{
			src: 'http://img.pconline.com.cn/images/upload/upc/tx/photoblog/1610/26/c4/28926240_1477451226577_mthumb.jpg'
		},
		{
			src: 'http://picture.ik123.com/uploads/allimg/190219/12-1Z219105139.jpg'
		},
	],
	episodeList: [
		1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24
	],
	guessList: [{
			src: 'http://img.52z.com/upload/news/image/20180530/20180530081619_31029.jpg',
			title: '猫眼指甲油',
			title2: '独树一帜的免照灯猫眼指甲'
		},
		{
			src: 'http://m.china-7.net/uploads/14778449362891.jpg',
			title: '创意屋',
			title2: '创意屋形上下双层高低床'
		},
		{
			src: 'http://www.k73.com/up/allimg/130415/22-130415093527.jpg',
			title: 'MissCandy 指甲油',
			title2: '十分适合喜欢素净的妹纸，尽显淡雅的气质'
		},
		{
			src: 'http://img0.imgtn.bdimg.com/it/u=2108933440,2194129200&fm=214&gp=0.jpg	',
			title: 'RMK 2017星空海蓝唇釉',
			title2: '唇釉质地，上唇后很滋润。少女也会心动的蓝色，透明液体形状。'
		}
	],
	evaList: [{
			src: 'http://gss0.baidu.com/-fo3dSag_xI4khGko9WTAnF6hhy/zhidao/pic/item/77c6a7efce1b9d1663174705fbdeb48f8d546486.jpg',
			nickname: 'Ranth Allngal',
			time: '09-20 12:54',
			zan: '54',
			content: '评论不要太苛刻，不管什么产品都会有瑕疵，客服也说了可以退货并且商家承担运费，我觉得至少态度就可以给五星。'
		},
		{
			src: 'http://img0.imgtn.bdimg.com/it/u=2396068252,4277062836&fm=26&gp=0.jpg',
			nickname: 'Ranth Allngal',
			time: '09-20 12:54',
			zan: '54',
			content: '楼上说的好有道理。'
		}
	]
}
const shareList = [{
		type: 1,
		icon: '/static/temp/share_wechat.png',
		text: '微信好友'
	},
	{
		type: 2,
		icon: '/static/temp/share_moment.png',
		text: '朋友圈'
	},
	{
		type: 3,
		icon: '/static/temp/share_qq.png',
		text: 'QQ好友'
	},
	{
		type: 4,
		icon: '/static/temp/share_qqzone.png',
		text: 'QQ空间'
	}
]
const lazyLoadList = [{
		src: 'http://img0.imgtn.bdimg.com/it/u=2396068252,4277062836&fm=26&gp=0.jpg'
	},
	{
		src: 'http://img.pconline.com.cn/images/upload/upc/tx/itbbs/1309/06/c4/25310541_1378426131583.jpg'
	},
	{
		src: 'http://img.pconline.com.cn/images/upload/upc/tx/photoblog/1610/26/c4/28926240_1477451226577_mthumb.jpg'
	},
	{
		src: 'http://picture.ik123.com/uploads/allimg/190219/12-1Z219105139.jpg'
	},
	{
		src: 'http://img5.imgtn.bdimg.com/it/u=2904900134,438461613&fm=26&gp=0.jpg'
	},
	{
		src: 'http://img1.imgtn.bdimg.com/it/u=1690475408,2565370337&fm=26&gp=0.jpg'
	},
	{
		src: 'http://img.99114.com/group1/M00/7F/99/wKgGS1kVrPGAe5LmAAU2KrJmb3Q923_600_600.jpg'
	},
	{
		src: 'http://img4.imgtn.bdimg.com/it/u=261047209,372231813&fm=26&gp=0.jpg'
	},
	{
		src: 'http://i2.17173cdn.com/i7mz64/YWxqaGBf/tu17173com/20150107/eMyVMObjlbcvDEv.jpg'
	},
	{
		src: 'http://img008.hc360.cn/m4/M02/E7/87/wKhQ6FSrfU6EfUoyAAAAAITAfyc280.jpg'
	},
	{
		src: 'http://pic1.win4000.com/wallpaper/d/5991569950166.jpg'
	},
	{
		src: 'http://gss0.baidu.com/9fo3dSag_xI4khGko9WTAnF6hhy/zhidao/pic/item/6f061d950a7b0208f9fe945e60d9f2d3572cc85e.jpg'
	},
	{
		src: 'http://pic41.nipic.com/20140429/18169759_125841756000_2.jpg'
	},
	{
		src: 'http://www.k73.com/up/allimg/130415/22-130415093527.jpg'
	},
	{
		src: 'http://img.52z.com/upload/news/image/20180530/20180530081619_31029.jpg'
	},
	{
		src: 'http://b-ssl.duitang.com/uploads/item/201410/02/20141002111638_tXAzU.jpeg'
	},
	{
		src: 'http://img2.ph.126.net/C4JW6f57QWSB21-8jh2UGQ==/1762596304262286698.jpg'
	},
	{
		src: 'http://att.bbs.duowan.com/forum/201405/17/190257nzcvkkdg6w2e8226.jpg'
	},
	{
		src: 'http://attach.bbs.miui.com/forum/201504/10/223644v3intigyvva0vgym.jpg'
	},
	{
		src: 'http://pic1.win4000.com/mobile/3/57888a298d61d.jpg'
	},
]

const orderList = [{
		time: '2020-02-06 11:37',
		state: 1,
		goodsList: [{
				image: '/static/temp/banner1.jpg',
			},
			{
				image: '/static/temp/banner2.jpg',
			},
			{
				image: '/static/temp/banner3.jpg',
			},
			{
				image: '/static/temp/banner4.jpg',
			}
		]
	},

]
const cateList = [{
		id: 1,
		name: '推荐搭配1'
	},
	{
		id: 2,
		name: '推荐搭配2'
	},
	{
		id: 3,
		name: '推荐搭配3'
	},
	{
		id: 4,
		name: '推荐搭配4'
	},
	{
		id: 5,
		pid: 1,
		name: '推荐搭配5'
	},
	{
		id: 6,
		pid: 1,
		name: '运营商'
	},
	{
		id: 8,
		pid: 5,
		name: '胡萝卜1',
		picture: '/static/temp/cate2.jpg'
	},
	{
		id: 9,
		pid: 5,
		name: '黄瓜',
		picture: '/static/temp/cate3.jpg'
	},
	{
		id: 10,
		pid: 5,
		name: '小番茄1',
		picture: '/static/temp/cate4.jpg'
	},
	{
		id: 11,
		pid: 5,
		name: '胡萝卜2',
		picture: '/static/temp/cate5.jpg'
	},
	{
		id: 12,
		pid: 5,
		name: '小辣椒',
		picture: '/static/temp/cate6.jpg'
	},
	{
		id: 14,
		pid: 6,
		name: '小番茄2',
		picture: '/static/temp/cate7.jpg'
	},
	{
		id: 15,
		pid: 6,
		name: '胡萝卜3',
		picture: '/static/temp/cate8.jpg'
	},
	{
		id: 16,
		pid: 6,
		name: '小辣椒',
		picture: '/static/temp/cate9.jpg'
	},
	{
		id: 17,
		pid: 2,
		name: '礼品',
	},
	{
		id: 18,
		pid: 2,
		name: '鲜花',
	},
	{
		id: 19,
		pid: 17,
		name: '公益摆件',
		picture: '/static/temp/cate10.jpg'
	},
	{
		id: 20,
		pid: 17,
		name: '创意礼品',
		picture: '/static/temp/cate11.jpg'
	},
	{
		id: 21,
		pid: 18,
		name: '鲜花',
		picture: '/static/temp/cate12.jpg'
	},
	{
		id: 22,
		pid: 18,
		name: '每周一花',
		picture: '/static/temp/cate13.jpg'
	},
	{
		id: 23,
		pid: 18,
		name: '卡通花束',
		picture: '/static/temp/cate14.jpg'
	},
	{
		id: 24,
		pid: 18,
		name: '永生花',
		picture: '/static/temp/cate15.jpg'
	},
	{
		id: 25,
		pid: 3,
		name: '男装'
	},
	{
		id: 26,
		pid: 3,
		name: '女装'
	},
	{
		id: 27,
		pid: 25,
		name: '男士T恤',
		picture: '/static/temp/cate16.jpg'
	},
	{
		id: 28,
		pid: 25,
		name: '男士外套',
		picture: '/static/temp/cate17.jpg'
	},
	{
		id: 29,
		pid: 26,
		name: '裙装',
		picture: '/static/temp/cate18.jpg'
	},
	{
		id: 30,
		pid: 26,
		name: 'T恤',
		picture: '/static/temp/cate19.jpg'
	},
	{
		id: 31,
		pid: 26,
		name: '上装',
		picture: '/static/temp/cate20.jpg'
	},
	{
		id: 32,
		pid: 26,
		name: '下装',
		picture: '/static/temp/cate21.jpg'
	},
	{
		id: 33,
		pid: 4,
		name: '奶粉',
	},
	{
		id: 34,
		pid: 4,
		name: '营养辅食',
	},
	{
		id: 35,
		pid: 4,
		name: '童装',
	},
	{
		id: 39,
		pid: 4,
		name: '喂养用品',
	},
	{
		id: 36,
		pid: 33,
		name: '有机奶粉',
		picture: '/static/temp/cate22.jpg'
	},
	{
		id: 37,
		pid: 34,
		name: '果泥/果汁',
		picture: '/static/temp/cate23.jpg'
	},
	{
		id: 39,
		pid: 34,
		name: '面条/粥',
		picture: '/static/temp/cate24.jpg'
	},
	{
		id: 42,
		pid: 35,
		name: '婴童衣橱',
		picture: '/static/temp/cate16.jpg'
	},
	{
		id: 43,
		pid: 39,
		name: '吸奶器',
		picture: '/static/temp/cate8.jpg'
	},
	{
		id: 44,
		pid: 39,
		name: '儿童餐具',
		picture: '/static/temp/cate4.jpg'
	},
	{
		id: 45,
		pid: 39,
		name: '牙胶安抚',
		picture: '/static/temp/cate18.jpg'
	},
	{
		id: 46,
		pid: 39,
		name: '围兜',
		picture: '/static/temp/cate15.jpg'
	},
]

export default {
	carouselList,
	cartList,
	detailData,
	lazyLoadList,
	userInfo,
	shareList,
	goodsList,
	orderList,
	cateList
}
