<template>
	<view>
		<page-head :title="title"></page-head>
		<view class="uni-padding-wrap uni-common-mt">
			<view class="demo">
				<block v-if="imageSrc">
					<image :src="imageSrc" class="image" mode="widthFix"></image>
				</block>
				<block v-else>
					<view class="uni-hello-addfile" @click="chooseImage">+ 选择图片</view>
				</block>
			</view>
		</view>
	</view>
</template>
<script>
	export default {
		data() {
			return {
				title: 'uploadFile',
				imageSrc: ''
			}
		},
		onUnload() {
			this.imageSrc = '';
		},
		methods: {
			chooseImage: function() {
				uni.chooseImage({
					count: 1,
					sizeType: ['compressed'],
					sourceType: ['album'],
					success: (res) => {
						//console.log('chooseImage success, temp path is', res.tempFilePaths[0])
						var imageSrc = res.tempFilePaths[0] // res.tempFilePaths[0] imageSrc即url路径
						console.log(res.tempFilePaths)
						//console.log('路径是：' + imageSrc)  // 尝试性地打印路径
						uni.uploadFile({
							url: 'https://unidemo.dcloud.net.cn/upload', // https://unidemo.dcloud.net.cn/upload
							filePath: imageSrc,  // url路径赋值给文件路径filePath
							name: 'data',  // 名称为 data
							success: (res) => {  // 上传成功后
								// 尝试打印返回对象
								//console.log('uploadImage success, res is:', res)
								uni.showToast({
									title: '上传成功',
									icon: 'success',
									duration: 1000
								})
								this.imageSrc = imageSrc  //未知作用：可能是提升作用域
								this.getResult();  // 传进去url
								//console.log('调用成功')
							},
							fail: (err) => {
								console.log('uploadImage fail', err);
								uni.showModal({
									content: err.errMsg,
									showCancel: false
								});
							}
						});
					},
					fail: (err) => {
						console.log('chooseImage fail', err)
						// #ifdef MP
						uni.getSetting({
							success: (res) => {
								let authStatus = res.authSetting['scope.album'];
								if (!authStatus) {
									uni.showModal({
										title: '授权失败',
										content: 'Hello uni-app需要从您的相册获取图片，请在设置界面打开相关权限',
										success: (res) => {
											if (res.confirm) {
												uni.openSetting()
											}
										}
									})
								}
							}
						})
						// #endif
					}
				})
			},
			// console.log('https://imgchr.com/' + imageSrc)
			//'imgsrt': 'https://unidemo.dcloud.net.cn/upload' + imageSrc,
			getResult() {
				uni.request({
					url: 'http://182.92.111.84:10081/distinguish/img/df10d566a3234b7096023627c6c97edf',
					method: 'post',
					data: {
						'imgsrt': 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1328093985,3466044960&fm=26&gp=0.jpg',
						'type': 1
					},
					header: {
						'content-type': 'application/x-www-form-urlencoded'
					},
					success(res) {
						console.log('\n' + res.data.result)
					},
					fail(err) {
						console.log('\n' + err + '    err')
					}
				})
			},
		}
	}
</script>

<style>
	.image {
		width: 100%;
	}

	.demo {
		background: #FFF;
		padding: 50rpx;
	}
</style>
