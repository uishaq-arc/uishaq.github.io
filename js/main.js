var windowWidth = $(window).outerWidth();

$(window).resize(function()
{
	windowWidth = $(window).outerWidth();
	// console.log(windowWidth);
	// if(windowWidth<500)
	// $('.newsSub').css('width',(windowWidth-50)+"px");
	// else
	// $('.newsSub').css('width','');

	$(".block_recent_appended_item").empty()
	$(document).find(".block_recent_dataset").each(function(i)
	{
		if(windowWidth >= 768)
		{
			if(i>1)
			{	
				
				$(".block_recent_appended_item").append('<div class="col-md-4 col-sm-4 col-xs-12 m-t-md m-b-md tilehover">'+$(this).html()+'</div>')
				$(this).hide();
			}
			else
			{
				$(this).show();
				$(this).addClass("col-md-6 col-sm-12 col-xs-12 customItem");
			}

		}
		else
		{
				$(this).show();
				$(this).addClass("col-md-6 col-sm-12 col-xs-12");
		}


		
	});

				   

	// $("#searchClick").show();
	$("#searchClick").removeClass("searchOpen");
	//$(".mobileSearch").hide();

	// document.getElementById('marquee').start();
})

$(window).load(function(){
	$(".bxslider").bxSlider(
		{
			
			auto: true,
			pause:10000,
			mode:'fade',
			pager:false
			
		});
});

$(document).ready(function()
{	
	// if(windowWidth<500)
	// $('.newsSub').css('width',(windowWidth-50)+"px");
	// else
	// $('.newsSub').css('width','');
	$('#CompanyNewsTab').on('click',function(){
		$('#IndustryNewsTab').removeClass('active');
		$('#CompetitiveNewsTab').removeClass('active');
		$('#CompanyNewsTab').addClass('active');

		$('#CompanyNewsDiv').css('display','block');
		$('#CompetitiveNewsDiv').css('display','none');
		$('#IndustryNewsDiv').css('display','none');

	});
	$('#IndustryNewsTab').on('click',function(){
		$('#IndustryNewsTab').addClass('active');
		$('#CompetitiveNewsTab').removeClass('active');
		$('#CompanyNewsTab').removeClass('active');

		$('#CompanyNewsDiv').css('display','none');
		$('#CompetitiveNewsDiv').css('display','none');
		$('#IndustryNewsDiv').css('display','block');
	});
	$('#CompetitiveNewsTab').on('click',function(){
		$('#IndustryNewsTab').removeClass('active');
		$('#CompetitiveNewsTab').addClass('active');
		$('#CompanyNewsTab').removeClass('active');

		$('#CompanyNewsDiv').css('display','none');
		$('#CompetitiveNewsDiv').css('display','block');
		$('#IndustryNewsDiv').css('display','none');
	});
	$('#dataTable1').DataTable({
		"ordering": false,
		"searching": false,
		"info": false,
		"pageLength": 50,
	});
	$('#dataTable2').DataTable({
		"ordering": false,
		"searching": false,
		"info": false,
		"pageLength": 50,
	});
	$('#dataTable3').DataTable({
		"ordering": false,
		"searching": false,
		"info": false,
		"pageLength": 50,
	});
	$('#dataTable4').DataTable({
		"ordering": false,
		"searching": false,
		"info": false,
		"pageLength": 50,
	});
	windowWidth = $(window).outerWidth();

	


	$("#megaClik").on("click",function()
	{	

		var getTop = 0; // default
		getTop = $(".newsHeader").offset().top;

		$(".mega_menu").css("top",getTop+"px");

		if($(this).hasClass("megaOpen"))
		{
			$(this).removeClass("megaOpen");
			$(".mega_menu").stop().slideUp(300);
			$(this).find("p").css("visibility","visible");
			$(".cross_icon").hide();
			$(".nav_bar").show();
		}
		else
		{
			$(this).addClass("megaOpen");
			$(".mega_menu").stop().slideDown(300);
			$(this).find("p").css("visibility","hidden");
			$(".cross_icon").show();
			$(".nav_bar").hide();
		}
	});
	$(".FindDept").on("click",function()
	{	
		$("header").get(0).scrollIntoView();
		var getTop = 0; // default
		getTop = $(".newsHeader").offset().top;

		$(".mega_menu").css("top",getTop+"px");

		if($("#megaClik").hasClass("megaOpen"))
		{
			$("#megaClik").removeClass("megaOpen");
			$(".mega_menu").stop().slideUp(300);
			$("#megaClik").find("p").css("visibility","visible");
			$(".cross_icon").hide();
			$(".nav_bar").show();
		}
		else
		{
			$("#megaClik").addClass("megaOpen");
			$(".mega_menu").stop().slideDown(300);
			$("#megaClik").find("p").css("visibility","hidden");
			$(".cross_icon").show();
			$(".nav_bar").hide();
		}
	});


	$("#searchClick").on("click",function()
	{
		$(".mega_menu").stop().slideUp(300);
		$("#megaClik").removeClass("megaOpen");
		$("#megaClik").find("p").css("visibility","visible");
		$(".cross_icon").hide();
		$(".nav_bar").show();
		$(".mega_menu").stop().slideUp(300);
		if($(this).hasClass("searchOpen"))
		{
			
			if(windowWidth <= 767)
			{
				$(this).hide();
				$(".mobileSearch").slideUp(200);
				console.log("");
				
			}
			else
			{
				$(this).show();
				$(".toSearch").css("width",0+"px");
			}

			$(this).removeClass("searchOpen");
		}
		else
		{
			
			if(windowWidth <= 767)
			{
				$(this).hide();
				$(".mobileSearch").slideDown(200);
				$(".mobileSearch input").focus();
				console.log("");
				setTimeout(function(){ $(this).hide(); }, 1000);
			}
			else
			{
				$(this).show();
				$(".toSearch").css("width",80+"%");
				$("#desktopSearchView").focus();
				
			}
			$(this).addClass("searchOpen");
		}
		
	});


	$("#desktopSearchView, #mobileSearchView").on("keyup",function()
	{
		if($(this).val().length > 0 )
		{
			$(".cross").show();
		}
		else
		{
			$(".cross").hide();
		}
	});
	$(".cross").on("click",function()
	{
		$("#desktopSearchView, #mobileSearchView").val("");
		$(this).hide();
	})

	$(document).find("#searchClose").on("click",function()
	{
		$(".mobileSearch").slideUp();
		$("#searchClick").show();
		$("#searchClick").removeClass("searchOpen");
		console.log('heysh')
	});

	$(document).find(".block_recent_dataset").each(function(i)
	{
		if(windowWidth >= 768)
		{
			if(i>1)
			{	
				$(".block_recent_appended_item").append('<div class="col-md-4 col-sm-4 col-xs-12 m-t-md m-b-md tilehover">'+$(this).html()+'</div>')
			}
			else
			{
				$(this).show();
				$(this).addClass("col-md-6 col-sm-12 col-xs-12 customItem");
			}
		}
		else
		{
				$(this).show();
				$(this).addClass("col-md-6 col-sm-12 col-xs-12");
		}

		
	});

});



