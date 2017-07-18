
function selectable(source){
	//params=$.extend(params,param);
	this.source=source;
	this.init();
}
selectable.prototype={
	opts:{
		box:".sandbox",
		_select:"._select",
		lable:".lable",
		li:".lable>li"
	},
	init:function(){
		this.create();
		this.xEvent();
	},
	xEvent:function(){
		var t=this;
		$("body").on("click",".sandbox",function(){
			var id=$(this).attr("id"),pot=t._position($(this));
			var lable=$(t.opts.lable+'[name="'+id+'"]');
			
			if(lable.css("display")==="block"){
				return false;
			}else{
				$(t.opts.lable).filter(function() {
                    return $(this).css("display")==="block";
                }).css("display","none");
			}
			
			lable.css({display:"block",top:pot.top+30,left:pot.left});
		});
		$("body").on("click",".lable>li",function(){
			var txt=$(this).text(),name,lable=$(this).parent();
			name=lable.attr("name");
			var box=$("#"+name);
			if($(this).is(".selected")){
				lable.css("display","none");
				return false;
			}
			lable.children(".selected").removeClass("selected");
			$(this).addClass("selected");
			box.children(".selected").html(txt);
			lable.css("display","none");
		});
		$("body").click(function(e){
			var target=$(e.target);
			var $lab=$(".lable").filter(function() {
                    return $(this).css("display")==="block";
                });
			if($lab.length<0){
				return false;
			}
			if(!(target.is(".selected"))&&!(target.is(".selectBtn"))&&!(target.is(".lable>li"))&&!(target.is(".sandbox"))){
				$lab.css("display","none");
			}
		});
	},
	_position:function($s){
		var offset=$s.offset();
		return {
			left:offset.left,
			top:offset.top
		};
	},
	create:function(){
		var $st=$(this.opts._select);
		var str1='<div class="selected"></div><div class="selectBtn"></div>';
		$st.css("display","none").after(str1);
		var t=this;
		var source=this.source;
		$st.each(function(){
			var id=t._getRadomID(),parent=$(this).parent();
			
			parent.attr("id",id);
			var sn=$(this).attr("data-source")
			if(sn!=""){
				var ul='<ul class="lable" name='+id+'></ul>';
				$("body").append(ul);
				var data=source[sn];
				t._createUL(id,data);
			}
		});
	},
	_createUL:function(name,data){
		var d,str="",ul=$(this.opts.lable+'[name="'+name+'"]'),i="selected",defautVal="",num=0;
		$valArea=$("#"+name).children(".selected");
		for(d in data){
			if(d.indexOf(i)>-1){
				str+='<li class="selected sli" data-sign="'+d.substring(0,d.indexOf("-"))+'">'+data[d]+'</li>';
				defautVal=data[d];
			}else{
				str+='<li class="sli" data-sign="'+d+'">'+data[d]+'</li>';
			}
			
			if(num===0&&defautVal===""){
				defautVal=data[d];
				num++;
			}
		}
		
		ul.html(str);
			
		this._setDefaultVal(name,defautVal);
	},
	_setDefaultVal:function(id,txt){
		$("#"+id).children(".selected").html(txt);
	},
	_getRadomID:function(){
		var d=new Date();
		return "jQuery"+d.getSeconds()+d.getMilliseconds()+this._randoms(99,0);
	},
	//最大值（必选），最小值（默认为0，可选）
	_randoms:function(maxNum,minNum){
		if(typeof(maxNum)==="number"){
			minNum=(minNum!=undefined&&typeof(minNum)==="number")?minNum:0;
			return Math.floor(Math.random()*maxNum+minNum)
		}else{
			alert("randoms() is wrong!");
			return false;
		}
	}
}