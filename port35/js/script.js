$(".btn_bar").click(function(){
	$("#nav > ul").toggleClass("on");

	if( $("#nav > ul").hasClass("on") ){
        $("#nav > ul").animate({ "left":"0" },300);
        $("#nav .btn_bar .top-bar").css("transform","rotate(45deg)");
        $("#nav .btn_bar .bottom-bar").css("transform","rotate(-45deg)");
		$("#nav .btn_bar .bottom-bar").css("margin-top","-2px");
		$("#nav .btn_bar span").css("transition","all .5s ease");
    } else {
        $("#nav > ul").animate({ "left":"-100%" },300);
        $("#nav .btn_bar .top-bar").css("transform","rotate(0deg)");
        $("#nav .btn_bar .bottom-bar").css("transform","rotate(0deg)");
		$("#nav .btn_bar .bottom-bar").css("margin-top","8px");
    }
});