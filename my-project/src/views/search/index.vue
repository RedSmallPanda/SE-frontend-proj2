<template>
	<div class="manage tc">
	
		<button v-on:click="add">添加答案</button>
		<div class="input-area" v-show="showAdd">
			<input type="text" placeholder="请输入您的答案" v-model="nameValue">
			<button v-on:click="addName">确定</button>
			<button v-on:click="cancel">取消</button>
		</div>
<ul>
		<li class="content-li" v-for="(value,index) in anwsers">
			<div class="header">
				<img :src="value.photo" />
				<span class="name">{{value.name}}</span>
				<span class="com-up" :class="[value.is_uped ? 'is-uped' : ' ']" v-bind:id="index" v-on:click="setUp">{{value.ups}}</span>
				<span class="problem" v-on:click="report">答案不正确？</span>
				
			</div>
			<!--<div class="title">
				<strong>{{value.data.title}}</strong>
			</div>-->
			<div class="text-content">{{value.content}}</div>
		</li>
	</ul>
		<!--footer-nav v-bind:class="{'isManage':isNowPage}"></footer-nav-->
	</div>
</template>

<script>
	export default{
		data(){
			return{
				isNowPage: true,
				showAdd: false,
				anwsers:[
				{'is_uped' : false,photo:'../../static/1.jpg','name':'用户1','content':'此开卷第一回也','ups':6660},
				{'is_uped' : false,photo:'../../static/2.jpg','name':'用户2','content':'nothing is everything going to waste.','ups':0},
				{'is_uped' : false,photo:'../../static/3.jpg','name':'用户3','content':'he is no rich.','ups':0}],
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
					this.showAdd = false
				}
			},
			setUp(e){
				var id = e.target.offsetParent.id
				alert(id)
				if(this.anwsers[id].is_uped == false){
				this.anwsers[id].ups++
				this.anwsers[id].is_uped = true
				}
				else{
				this.anwsers[id].ups--
				this.anwsers[id].is_uped = false
				}
			},
			report(){
				alert("已向后台反映，感谢您的反馈！")

			},
			/*del(e){
				var id = e.target.offsetParent.id
				this.peoples.splice(id,1)
			},
			edit(e){
				var id = e.target.offsetParent.id
				this.showEdit = true
				this.editId = id
				this.newName = this.peoples[id].name
			},
			cancel(){
				this.showEdit = false
			},
			editName(){
				var v = this.newName
				if(v.trim() == ""){
					alert("请输入图书名称")
				}else{
					this.peoples[this.editId].name = this.newName
					this.showEdit = false
				}
			}*/
		}
	}
</script>

<style scoped>
	.manage{padding-bottom:50px;}
	.manage >button{width:500px; height:70px; line-height:40px; background-color:#41b883; border: none; border-radius:5px; font-size:30px; color:#fff;}
	.input-area input{display:input;width: 200px; height: 40px; line-height:40px; margin:20px 0; outline:none; border:1px solid #333;}
	.input-area button{display:button; width:60px; height: 40px; line-height:40px; background-color:#41b883; border: none; border-radius:5px; font-size:16px; color:#fff;}


	.content-li {
		position:relative;
		box-sizing: border-box;
		padding: 0 0.2rem;
		background: #fff;
		margin-top: 0.5rem;
		box-shadow: 0 -2px 2px rgba(213, 215, 217, .8),
		0 2px 2px rgba(213, 215, 217, .8);		
		}
           .header {
			 position:relative;
			    height: 1rem;
			    padding:0.2rem 0;
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
					height: 1.5rem;
					text-align: right;
					line-height: 0.5rem;
					color: #FFFFFF;
					background-color:#999;
					border-radius:5px; 
					padding-top:0.7rem;
					position:absolute; right:0rem; top:2rem;
			
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
