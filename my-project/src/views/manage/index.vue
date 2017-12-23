<template>
  <div class="manage tc">
    <img src="../../assets/background3.png"width = "350px"height = "350">
    <div class="input-area1" v-show="!showAdd">
      <input type="text" placeholder="请输入问题"v-model="question">
      <button v-on:click = "searchRes">搜索</button><br><br>
    </div>
    <button v-on:click="add" v-show="addqu">搜不到答案？问大家</button>
    <div class="input-area" v-show="showAdd">
      <input type="text" placeholder="请添加问题" v-model="nameValue">
      <button v-on:click="addName">确定</button>
    </div>
    <button v-on:click="add" v-show="showAdd">返回搜索</button>
    <table>
      <tr>
        <th>我提出的问题</th>
        <th>操作</th>
      </tr>
      <tr v-for="(item,index) in peoples">
        <td>
          {{item.name}}
        </td>
        <td v-bind:id="index"><span v-on:click="edit">编辑</span> <span v-on:click="del">删除</span></td>
      </tr>
    </table>
    <div class="wrap" v-show="showEdit">
      <div class="content">
        <input type="text" placeholder="请修改题目信息" v-model="newName">
        <button v-on:click="cancel">取消</button>
        <button v-on:click="editName">确定</button>
      </div>
    </div>
    <footer-nav v-bind:class="{'isManage':isNowPage}"></footer-nav>
  </div>
</template>

<style>
  .manage{padding-bottom:50px;}
  .manage >button{width:200px; height:40px; line-height:40px; background-color:#339933; border: none; border-radius:5px; font-size:16px; color:#fff;}
  table{width:100%; max-width:500px; margin:0 auto; margin-top:10px;}
  .input-area input{width: 200px; height: 40px; line-height:40px; margin:20px auto; outline:none; border:1px solid #333;}
  .input-area button{ width:60px; height: 40px; line-height:40px; background-color:#339933; border: none; border-radius:5px; font-size:16px; color:#fff;}
  .input-area1 input{width: 600px; height: 40px; line-height:40px; margin:20px auto; outline:none; border:1px solid #333;}
  .input-area1 button{ width:60px; height: 40px; line-height:40px; background-color:#339933; border: none; border-radius:5px; font-size:16px; color:#fff;}
  th,td{letter-spacing:1px;width:100px;color: #555;padding:10px}
  tr input{width:100px; height:30px; padding-left:10px; outline:none; border:1px solid #333;}
  .wrap{display:table; position:fixed; top:0; left:0; height:100%; width:100%; background:rgba(0,0,0,.8); z-index: 10;}
  .wrap .content{display:table-cell; vertical-align:middle;}
  .wrap .content input{height: 40px; line-height: 40px; display:block; margin:0 auto; margin-bottom:10px; font-size:16px;}
  .wrap .content button{width:100px; height: 30px; line-height: 30px; background-color:#339933; border: none; border-radius:5px; font-size:16px; color:#fff;}
</style>

<script>
  import footerNav from '../../components/footer.vue'
  export default{
    components: {
      footerNav
    },
    data(){
      return{
          addqu:true,
        isNowPage: true,
        showAdd: false,
        showEdit: false,
        peoples: [{'name':'偏振片的作用是什么？'},{'name':'如何求曲面积分？'}],
        nameValue: '',
        newName: '',
        question:'',
        editId: 0
      }
    },
    methods: {
      searchRes(){
        var get = this.question
        if(get.trim()==''){
          alert("问题不能为空")
        }else{
          this.$router.push('/search')
        }

      },
      add(){
        this.showAdd = !this.showAdd
        this.addqu = !this.showAdd
      },
      addName(){
        var v = this.nameValue
        if(v.trim() == ""){
          alert("请更新题目信息")
        }else{
          var data = {}
          data.name = v
          this.peoples.push(data)
          this.nameValue = ''
        }
      },
      del(e){
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
          alert("请输入题目信息")
        }else{
          this.peoples[this.editId].name = this.newName
          this.showEdit = false
        }
      }
    }
  }
</script>
