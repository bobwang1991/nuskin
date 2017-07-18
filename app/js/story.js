$(document).ready(function(){
	var prize_img = 
	[   
		"../../images/story_01/prize (1).png",
		"../../images/story_01/prize (2).png",

		"../../images/story_01/prize (2).jpg",
		"../../images/story_01/prize (3).jpg",
		"../../images/story_01/prize (4).jpg",
		"../../images/story_01/prize (6).jpg",
		"../../images/story_01/prize (8).jpg",
		"../../images/story_01/prize (9).jpg",
		"../../images/story_01/prize (18).jpg"
	];

	var prize_img_desc = 
	[   
		"2014中国年度最佳雇主30强",
		"2014最佳工作场所认证",
		"2014企业幸福指数评选 TOP 10",
		"2014台湾幸福企业",
		"2014中国好雇主",
		"2014年第32届台湾国家杰出经理人",
		"2014中国最佳人力资源典范企业之<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;最佳组织发展典范单项奖",
		"2015亚太最佳雇主（台湾）",
		"2014大街非常雇主30强"
	];

	var prize_index = 0;
	var prize_img_len = prize_img.length;

	set_img_four();


	$(".next").click(function(){
		prize_index += 1;
		if(prize_index >= prize_img_len ){
			prize_index -= prize_img_len;
		}
		set_img_four();
	});

	$(".pre").click(function(){
		prize_index -= 1;
		if(prize_index < 0 ){
			prize_index += prize_img_len;
		}
		set_img_four();
	});



	function set_single_img(classname,prize_index){
		
		$(classname).attr("src",prize_img[prize_index]);
	}


	function set_img_four(){
		var second = (prize_index+1 >= prize_img_len ? prize_index+1-prize_img_len: prize_index+1); 
		var third = (prize_index+2 >= prize_img_len ? prize_index+2-prize_img_len: prize_index+2); 
		var fourth = (prize_index+3 >= prize_img_len ? prize_index+3-prize_img_len: prize_index+3); 

		
		set_single_img(".small_img1",prize_index);
		$(".small_img1").next().html(prize_index+1);
		$(".desc_1>span").first().html(prize_index+1+".");
		$(".desc_1>span+span").html(prize_img_desc[prize_index]);

		set_single_img(".small_img2",second);
		$(".small_img2").next().html(second+1);
		$(".desc_2>span").first().html(second+1+".");
		$(".desc_2>span+span").html(prize_img_desc[second]);

		set_single_img(".small_img3",third);
		$(".small_img3").next().html(third+1);
		$(".desc_3>span").first().html(third+1+".");
		$(".desc_3>span+span").html(prize_img_desc[third]);

		set_single_img(".small_img4",fourth);
		$(".small_img4").next().html(fourth+1);
		$(".desc_4>span").first().html(fourth+1+".");
		$(".desc_4>span+span").html(prize_img_desc[fourth]);

	}
});