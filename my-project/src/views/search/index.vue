<template>
	<div class="manage tc">	
		<button v-on:click="add">添加答案</button>
		<div class="input-area" v-show="showAdd">
			<input type="text" placeholder="请输入您的答案" v-model="nameValue">
			<button v-on:click="addName">确定</button>
			<button v-on:click="cancel">取消</button>
		</div>

		<div class="content-li" v-for="(value,index) in anwsers"v-bind:id="index">
			<div class="header">
				<img :src="value.photo" />
				<span class="name">{{value.name}}</span>
				<span class="com-up" :class="[value.is_uped ? 'is-uped' : ' ']" v-on:click="setUp">{{value.ups}}</span>			
			</div>
			<div class="text-content">{{value.content}}</div>
			<span class="problem" v-on:click="report">答案不正确？</span>
		</div>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				isNowPage: true,
				showAdd: false,
				anwsers:[
				{'is_uped' : false,photo:'../../static/1.jpg','name':'用户1','content':'此开卷第一回也','ups':135},
				{'is_uped' : false,photo:'../../static/2.jpg','name':'用户2','content':'nothing is everything going to waste.','ups':47},
				{'is_uped' : false,photo:'../../static/3.jpg','name':'用户3','content':'he is no rich.','ups':23}],
				nameValue: '',				
			}
		},
		methods: {
			add(){
				this.showAdd = true
			},
			cancel(){
			this.showAdd = false
			},
			addName(){
				var v = this.nameValue
				if(v.trim() == ""){
					alert("答案不能为空")
				}else{
					
					var newan = {}
					newan.is_uped = false
					newan.photo = '../../static/4.jpg'		
					newan.name = '新用户'
					newan.content = v
					newan.ups = 0
					this.anwsers.push(newan)
					this.nameValue = ""
					this.showAdd = false
				}
			},
			setUp(e){
				var id2 = e.target.offsetParent.id
				if(this.anwsers[id2].is_uped == false){
				this.anwsers[id2].ups++
				this.anwsers[id2].is_uped = true
				}
				else{
				this.anwsers[id2].ups--
				this.anwsers[id2].is_uped = false
				}
			},
			report(){
				alert("已向后台反映，感谢您的反馈！")

			},
		}
	}
</script>

<style scoped>
	.manage{padding: 20px;}
	.manage >button{width:300px; height:50px; line-height:40px; background-color:#41b883; border: none; border-radius:5px; font-size:30px; color:#fff;}
	.input-area input{width: 800px; height: 40px; line-height:40px; margin:20px 0; outline:none; border:1px solid #333;}
	.input-area button{ width:60px; height: 40px; line-height:40px; background-color:#41b883; border: none; border-radius:5px; font-size:16px; color:#fff;}


	.content-li {
		position:relative;
		box-sizing: border-box;
		padding: 0 0.2rem;
		background: #fff;
		margin-top: 0.7rem;
		margin-left: 10rem;
		margin-right: 10rem;
		box-shadow: 0 -4px 4px rgba(213, 215, 217, 0.9),
		0 2px 2px rgba(213, 215, 217,0.9);		
		}
           .header {
			/* position:relative;*/
			    height: 1rem;
			    padding:1rem 1.5rem;
			}
			img {
				height:5rem;
				float: left;
				border-radius:50%;
				 padding:0.5rem 0;
			}
			span {
				float: left;
				height: 100%;
				margin-left: 0.2rem;
				line-height: 0.7rem;
			}
			.name {
				color: #99A4AA;
				 padding:2.5rem 0;
				 font-size:1rem
			}
			.problem{
					float: right;
					width:7rem;
					height: 1.2rem;
					text-align: right;
					line-height: 0.5rem;
					color: #FFFFFF;
					background-color:#999;
					border-radius:5px; 
					 margin-right:1rem;
					 margin-top:-2.2rem;
					 padding-top :0.5rem;
			
				}
				.com-up {
					float: right;
					width: 3rem;
					height: 1.5rem;
					text-align: right;
					background: url("../../assets/upup.svg") no-repeat 30%;
					background-size: contain;
					line-height: 0.5rem;
					color: #999;
					position:absolute;
					right:2rem;
				}
				.is-uped {
					background: url("../../assets/upup2.svg") no-repeat 30%;
					background-size: contain;
				}
			
		.text-content {
			color: #474747;
			font-size:1.0rem;
			line-height:2rem;
			padding: 3rem 3rem;
		}
		
</style>
