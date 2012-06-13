
$moveby = 927;
$frame_left = 0;
$frame_number = 1;


$(document).ready(function(){
	$("#gallery").hide();
	$maxClicks = $("#images").children().size();
	
	
	
	
	
	$(".next").click(function(){
		$newFrameNo =(($frame_number/1)+1);
		
		$newLeft = (($frame_left/1) + 927);
		$newLeftAttribute = $newLeft+"px";
		
		
		if($newFrameNo <= $maxClicks){
			$("#images").animate({right: $newLeftAttribute},10);
			$frame_left = $newLeft;
			$frame_number = $newFrameNo;
		}
	});
	
	$(".previous").click(function(){
		$newFrameNo =(($frame_number/1)-1);
		
		$newLeft = (($frame_left/1) - 927);
		$newLeftAttribute = $newLeft+"px";
		
		
		if($newFrameNo > 0){
			$("#images").animate({right: $newLeftAttribute},10);
			$frame_left = $newLeft;
			$frame_number = $newFrameNo;
		}
		
	});
	
	$("#print1Button").click(function(){
		$("#gallery").show();
		$("#navy").hide();
		$("#thumbnailContainer").hide();
		$("#nextIcon").show();
	});
	
	$("#print2Button").click(function(){
		$("#gallery").show();
		$("#thumbnailContainer").hide();
		$("#navy").hide();
		
		$newFrameNo =(($frame_number/1)+1);
		
		$newLeft = (($frame_left/1) + 927);
		$newLeftAttribute = $newLeft+"px";
		
		
		if($newFrameNo <= $maxClicks){
			$("#images").animate({right: $newLeftAttribute},01);
			$frame_left = $newLeft;
			$frame_number = $newFrameNo;
		}
	});
	
	$("#print3Button").click(function(){
		$("#gallery").show();
		$("#thumbnailContainer").hide();
		$("#navy").hide();
		$frame_number = 2;
		
		$newFrameNo =(($frame_number/1)+1);
		
		$newLeft = (($frame_left/1) + 1854);
		$newLeftAttribute = $newLeft+"px";
		
		
		if($newFrameNo <= $maxClicks){
			$("#images").animate({right: $newLeftAttribute},01);
			$frame_left = $newLeft;
			$frame_number = $newFrameNo;
		}
	});
	
	$("#print4Button").click(function(){
		$("#gallery").show();
		$("#thumbnailContainer").hide();
		$("#navy").hide();
		$frame_number = 3;
		
		$newFrameNo =(($frame_number/1)+1);
		
		$newLeft = (($frame_left/1) + 2781);
		$newLeftAttribute = $newLeft+"px";
		
		
		if($newFrameNo <= $maxClicks){
			$("#images").animate({right: $newLeftAttribute},01);
			$frame_left = $newLeft;
			$frame_number = $newFrameNo;
		}
	});
	
	$("#print5Button").click(function(){
		$("#gallery").show();
		$("#thumbnailContainer").hide();
		$("#navy").hide();
		$frame_number = 4;
		
		$newFrameNo =(($frame_number/1)+1);
		
		$newLeft = (($frame_left/1) + 3708);
		$newLeftAttribute = $newLeft+"px";
		
		
		if($newFrameNo <= $maxClicks){
			$("#images").animate({right: $newLeftAttribute},01);
			$frame_left = $newLeft;
			$frame_number = $newFrameNo;
		}
	});
	
	$("#print6Button").click(function(){
		$("#gallery").show();
		$("#thumbnailContainer").hide();
		$("#navy").hide();
		$frame_number = 5;
		
		$newFrameNo =(($frame_number/1)+1);
		
		$newLeft = (($frame_left/1) + 4635);
		$newLeftAttribute = $newLeft+"px";
		
		
		if($newFrameNo <= $maxClicks){
			$("#images").animate({right: $newLeftAttribute},01);
			$frame_left = $newLeft;
			$frame_number = $newFrameNo;
		}
	});
	
	$("#print7Button").click(function(){
		$("#gallery").show();
		$("#thumbnailContainer").hide();
		$("#navy").hide();
		$frame_number = 6;
		
		$newFrameNo =(($frame_number/1)+1);
		
		$newLeft = (($frame_left/1) + 5562);
		$newLeftAttribute = $newLeft+"px";
		
		
		if($newFrameNo <= $maxClicks){
			$("#images").animate({right: $newLeftAttribute},01);
			$frame_left = $newLeft;
			$frame_number = $newFrameNo;
		}
	});
	
	$("#print8Button").click(function(){
		$("#gallery").show();
		$("#thumbnailContainer").hide();
		$("#navy").hide();
		$frame_number = 7;
		
		$newFrameNo =(($frame_number/1)+1);
		
		$newLeft = (($frame_left/1) + 6489);
		$newLeftAttribute = $newLeft+"px";
		
		
		if($newFrameNo <= $maxClicks){
			$("#images").animate({right: $newLeftAttribute},01);
			$frame_left = $newLeft;
			$frame_number = $newFrameNo;
		}
	});
	
	$("#print9Button").click(function(){
		$("#gallery").show();
		$("#thumbnailContainer").hide();
		$("#navy").hide();
		$frame_number = 8;
		
		$newFrameNo =(($frame_number/1)+1);
		
		$newLeft = (($frame_left/1) + 7416);
		$newLeftAttribute = $newLeft+"px";
		
		
		if($newFrameNo <= $maxClicks){
			$("#images").animate({right: $newLeftAttribute},01);
			$frame_left = $newLeft;
			$frame_number = $newFrameNo;
		}
	});
	
	$("#print10Button").click(function(){
		$("#gallery").show();
		$("#thumbnailContainer").hide();
		$("#navy").hide();
		$frame_number = 9;
		
		$newFrameNo =(($frame_number/1)+1);
		
		$newLeft = (($frame_left/1) + 8343);
		$newLeftAttribute = $newLeft+"px";
		
		
		if($newFrameNo <= $maxClicks){
			$("#images").animate({right: $newLeftAttribute},01);
			$frame_left = $newLeft;
			$frame_number = $newFrameNo;
		}
	});
	
	$("#print11Button").click(function(){
		$("#gallery").show();
		$("#thumbnailContainer").hide();
		$("#navy").hide();
		$frame_number = 10;
		
		$newFrameNo =(($frame_number/1)+1);
		
		$newLeft = (($frame_left/1) + 9270);
		$newLeftAttribute = $newLeft+"px";
		
		
		if($newFrameNo <= $maxClicks){
			$("#images").animate({right: $newLeftAttribute},01);
			$frame_left = $newLeft;
			$frame_number = $newFrameNo;
		}
	});
	




});

