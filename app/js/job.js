$(function(){
	$(".job_name").toggle(function(){
		$(this).next().addClass('display');
		$(this).parent().siblings().find(".job_detail").removeClass('display');
	},function(){
		$(this).next().removeClass('display');
	});



	$(".job_group li:first-child div:last-child").addClass('display');
	$(".job_left ul li").click(function(){
		$(this).find("div").removeClass("item_not_selected").addClass('item_selected')
		.parent().siblings().find("div").removeClass('item_selected').addClass('item_not_selected');

		var index = $(this).index();
		$(".job_group:eq("+index+")").addClass('display')
		.siblings().removeClass('display');
	});
});