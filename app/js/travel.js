$(document).ready(function(){
	var enviroment_img = 
	[   "../../images/new_travel/TW3.jpg",
		"../../images/new_travel/CN1.jpg","../../images/new_travel/CN2.jpg",
		"../../images/new_travel/CN2-1.jpg","../../images/new_travel/CN3.png",
		"../../images/new_travel/HK1.jpg","../../images/new_travel/HK2.jpg",
		"../../images/new_travel/HK3.jpg","../../images/new_travel/TW1.jpg",
		"../../images/new_travel/TW2.jpg"
	];

	var index = 0;
	var len = enviroment_img.length;

	set_img();


	$(".next").click(function(){
		index += 1;
		if(index >= len ){
			index -= len;
		}
		set_img();
	});

	$(".pre").click(function(){
		index -= 1;
		if(index < 0 ){
			index += len;
		}
		set_img();
	});



	function set_single_img(classname,index){
		
		$(classname).attr("src",enviroment_img[index]);
	}


	function set_img(){

		if(index<4){

			$(".pic_bq").css("display","block");
			$(".pic_bq_01").css("display","none");
			$(".pic_bq_02").css("display","none");
		}else if(3<index && index< 7){
			$(".pic_bq").css("display","none");
			$(".pic_bq_01").css("display","block");
			$(".pic_bq_02").css("display","none");
		}else{
			$(".pic_bq").css("display","none");
			$(".pic_bq_01").css("display","none");
			$(".pic_bq_02").css("display","block");
		}

		var middle = (index+1 >= len ? index+1-len: index+1); 
		var right = (index+2 >= len ? index+2-len: index+2); 

		set_single_img(".big_img>img",middle);
		
		set_single_img(".small_img1",index);
		set_single_img(".small_img2",middle);
		set_single_img(".small_img3",right);
	}
});