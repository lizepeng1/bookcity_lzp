"use strict";define(["jquery","handle","common"],function(n,t,o){var c;location.search.replace(/[\?&](\w+)=([^\?&]+)/g,function(n,t,o){c=o});var e=null;n.ajax({url:"/home/detail",data:{id:c},dataType:"json",async:!1,success:function(n){e=n,console.log(n)}}),o(n("#detailH").html(),e,".top"),n(".content").on("click",function(){n(".content p").toggleClass("small")}),n(".btnlist input").eq(0).on("click",function(){location.href="http://localhost:8089/server/read.html?id="+c})});