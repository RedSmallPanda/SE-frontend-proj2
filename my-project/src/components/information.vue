<template>
  <div>
    <div id="total">
      <div id="background">
      </div>

      <div id="avatar">


      </div>

      <div id="header">
        <h1 >个人资料</h1>

      </div>

      <div id="nav">
        <div id="chat">
          <router-link :to="{path:'/'}">
          <button>注销</button>
          </router-link>
        </div>

        头像<br>
        <img src=".././assets/avatar1.jpg" width="100" height="100"><br>
        <hr />
        昵称  <tr id="name">Sunny</tr><br>
        <hr />
        学校 上海交通大学<br>
        <hr />
        年级 大二<br>

      </div>


      <div id="section">
        <h2>个人简介</h2>
        <p>
          We are all in the position of the farmer. If we plant a good seed, we reap a good harvest. If our seed is poor and full of weeds, we reap a useless crop. If we plant nothing at all, we harvest nothing at all. I want the future to be better than the past.
        </p>

        <p>
          I do not want it contaminated by the mistakes and errors with which history is filled.
        </p>
      </div>
        <div id="foot">
  
        </div>
    </div>
    <div id= "footer">
      <footer-nav v-bind:class="{'isIndex':isNowPage}"></footer-nav>
    </div>
  </div>
</template>

<style>
  #footer{
    margin: 100px auto;
  }
  #total{
    width: 1000px;
    margin: 10px auto;
    padding: 10px;
    padding-bottom: 500px ;
  }
  #header {
    background-color:#C0C0C0;
    color:white;
    text-align:center;
    padding:6px;
  }
  #nav {
    line-height:30px;
    background-color:#eeeeee;
    height:350px;
    width:500px;
    text-align: left;
    float:left;
    padding:5px;
  }
  #section {
    width:470px;
    float:left;
    padding:10px;
    text-align: left;
    color:#555;
 line-height: 25px;
 text-indent: 30px;
  }
  #foot {
    background-color:#C0C0C0;
    color:white;
    clear:both;
    text-align:center;
    padding:10px; 
}
  #name{
    font-size:40px;
  }
  #chat{
    float:right;
    bottom:0;

  }
  button{display:block; width:250px; height:40px; line-height: 40px;
    margin:0 auto; border:none; background-color:#41b883;
    color:#fff; font-size:16px; margin-bottom:5px;}
</style>
<script>
  import FooterNav from '@/components/footer.vue'
  export default{
    components: {
      FooterNav
    },
    data(){
        return{
          isNowPage: true
      }

    }
  }
</script>
