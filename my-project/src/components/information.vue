<template>
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
    <button type="button" onclick="alert('HELLO!')">发私信</button>
    </div>

    头像</br>
    <img src=".././assets/avatar1.jpg" width="100" height="100"></br>
    <hr />
	昵称  <tr id="name">Sunny</tr></br>
	<hr />
	学校 上海交通大学</br>
	<hr />
	年级1 大二</br>

	</div>


	<div id="section">
	<h1>个人简介</h1>
	<p>
	We are all in the position of the farmer. If we plant a good seed, we reap a good harvest. If our seed is poor and full of weeds, we reap a useless crop. If we plant nothing at all, we harvest nothing at all. I want the future to be better than the past. 
	</p>

	<p>
	I do not want it contaminated by the mistakes and errors with which history is filled. 
	</p>
	</div>

	<div id="footer">
	
	</div>

</div>

</template>

<style>
#total{
	width: 1000px;
    margin: 10px auto;
    padding: 5px;
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
    float:left;
    padding:5px; 
}
#section {
    width:400px;
    float:left;
    padding:10px; 
}
#footer {
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


</style>
 