$(function(){
	$("form .name,form .number,form .email").click(function(){
		if($(this).val() == "(必填)"){
		$(this).css("color","black").val("");			
		}
	}).blur(function(){
		if($(this).val() == ""){
			$(this).css("color","#a5a49f").val("(必填)");
		}
	});


	$("form .school,form .date").click(function(){
		if($(this).val() == "(可填)"){
		$(this).css("color","black").val("");			
		}
	}).blur(function(){
		if($(this).val() == ""){
			$(this).css("color","#a5a49f").val("(可填)");
		}
	});


});