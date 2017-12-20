<template>
	<div class="manage tc">
	
		<button v-on:click="add">添加答案</button>
		<div class="input-area" v-show="showAdd">
			<input type="text" placeholder="请输入您的答案" v-model="nameValue">
			<button v-on:click="addName">确定</button>
		</div>
	
		<div class="content-li" v-for="(value,index) in anwsers">
			<div class="header">
				<img :src="value.photo" alt="">
				<span class="name">用户:<strong>{{value.name}}</strong></span>
				<!--<span class="top" v-if="value.data.top">置顶</span>
				<span class="top" v-if="value.data.good">精华</span>
				<span class="tab" v-if="value.data.tab === 'good'">精华</span>
				<span class="tab" v-else-if="value.data.tab === 'share'">分享</span>
				<span class="tab" v-else-if="value.data.tab === 'ask'">问答</span>
				<span class="tab" v-else-if="value.data.tab === 'job'">招聘</span>-->
			</div>
			<!--<div class="title">
				<strong>{{value.data.title}}</strong>
			</div>-->
			<div class="text-content">{{value.content}}</div>
			<!--<div class="related">
				<span>{{value.data.visit_count}}浏览·</span>
				<span>{{value.data.reply_count}}评论</span>
				<span>{{use.formatDate(value.data.last_reply_at)}}</span>
			</div>-->
		</div>
		
		<!--<div class="wrap" v-show="showEdit">
			<div class="content">
				<input type="text" placeholder="请输入图书名称" v-model="newName">
				<button v-on:click="cancel">取消</button>
				<button v-on:click="editName">确定</button>
			</div>
		</div>-->
	<	<footer-nav v-bind:class="{'isManage':isNowPage}"></footer-nav>
	</div>
</template>

<script>
	import footerNav from '../../components/footer.vue'
	export default{
		components: {
			footerNav
		},
		data(){
			return{
				isNowPage: true,
				showAdd: false,
				//showEdit: false,
				anwsers:
				[{photo:'../../assets/1.jpg','name':'用户1','content':'此开卷第一回也。作者自云：曾历过一番梦幻之后，故将真事隐去，而借通灵说此《石头记》一书也，故曰“甄士隐”云云。但书中所记何事何人?自己又云：“今风尘碌碌，一事无成，忽念及当日所有之女子：一一细考较去，觉其行止见识皆出我之上。我堂堂须眉诚不若彼裙钗，我实愧则有馀，悔又无益，大无可如何之日也。当此日，欲将已往所赖天恩祖德，锦衣纨之时，饫甘餍肥之日，背父兄教育之恩，负师友规训之德，以致今日一技无成、半生潦倒之罪，编述一集，以告天下；知我之负罪固多，然闺阁中历历有人，万不可因我之不肖，自护己短，一并使其泯灭也。'},
				{photo:'../../assets/logo.png','name':'用户2','content':'nothing is everything going to waste.'},
				{photo:'../../assets/logo.png','name':'用户3','content':'he is no rich.'}],
				nameValue: '',
				//newName: '',
				editId: 0
			}
		},
		methods: {
			add(){
				this.showAdd = true
			},
			addName(){
				var v = this.nameValue
				if(v.trim() == ""){
					alert("答案不能为空")
				}else{
					var newan = {}
					newan.photo = '../../assets/css/logo.png'
					newan.name = '新用户'
					newan.content = v
					this.anwsers.push(newan)
				}
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

<style>
	.manage{padding-bottom:50px;}
	.manage >button{width:500px; height:70px; line-height:40px; background-color:#4682b4; border: none; border-radius:5px; font-size:30px; color:#fff;}
	table{width:100%; max-width:500px; margin:0 auto; margin-top:20px;}
	.input-area input{width: 200px; height: 40px; line-height:40px; margin:20px 0; outline:none; border:1px solid #333;}
	.input-area button{ width:60px; height: 40px; line-height:40px; background-color:#4682b4; border: none; border-radius:5px; font-size:16px; color:#fff;}


	.content-li {
		box-sizing: border-box;
		padding: 0 0.3rem;
		background: #fff;
		margin-top: 0.25rem;
		box-shadow: 0 -2px 2px rgba(213, 215, 217, .8),
		0 2px 2px rgba(213, 215, 217, .8);
		/*.header {
			height: 0.7rem;
			padding: 0.22rem 0;
			img {
				height: 100%;
				float: left;
				border-radius: 50%;
			}
			span {
				float: left;
				height: 100%;
				margin-left: 0.2rem;
				line-height: 0.7rem;
			}
			.name {
				color: #99A4AA;
			}
			
			
	}*/	
	
}
           .header {
			    height: 0.7rem;
			    padding: 0.22rem 0;
			}
			img {
				height: 100%;
				float: left;
				border-radius: 50%;
			}
			span {
				float: left;
				height: 100%;
				margin-left: 0.2rem;
				line-height: 0.7rem;
			}
			.name {
				color: #99A4AA;
			}
			
.text-content {
			color: #474747;
			font-size:1.2rem;
			line-height:2rem;
			padding: 3rem 0;
		}
</style>
