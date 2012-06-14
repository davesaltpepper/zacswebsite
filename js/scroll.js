
$moveby = 927;
$frame_left = 0;
$frame_number = 1;


$(document).ready(function(){
	$("#gallery").hide();
	$maxClicks = $("#images").children().size();
	$("#scrollnavy").hide();
	$("#prevIcon2").hide();
	$("#homeButton").show();
	
	$(".next").click(function(){
		$("#prevIcon").show();
		$("#prevIcon2").hide();
		$newFrameNo =(($frame_number/1)+1);
		
		$newLeft = (($frame_left/1) + 927);
		$newLeftAttribute = $newLeft+"px";
		
		if($newFrameNo <= $maxClicks){
			$("#images").animate({right: $newLeftAttribute},10);
			$frame_left = $newLeft;
			$frame_number = $newFrameNo;
		}
		if($frame_number > $maxClicks-1){
			$("#nextIcon").hide();
		}if($frame_number < $maxClicks-1){
			$("#nextIcon").show();
		}
	});
	
	$(".previous").click(function(){
		$("#nextIcon").show();
		$newFrameNo =(($frame_number/1)-1);
		
		$newLeft = (($frame_left/1) - 927);
		$newLeftAttribute = $newLeft+"px";
		
		
		
		if($newFrameNo > 0){
			$("#images").animate({right: $newLeftAttribute},10);
			$frame_left = $newLeft;
			$frame_number = $newFrameNo;
		}
		if($frame_number > $maxClicks-1){
			$("#nextIcon").hide();
		}if($frame_number < $maxClicks-1){
			$("#nextIcon").show();
		}if($frame_number <= 1){
			$("#prevIcon").hide();
			$("#prevIcon2").show();
		}
	});
	
	$("#print1Button").click(function(){
		$("#gallery").show();
		$("#thumbnailContainer").hide();
		$("#homeButton").hide();
		$("#nextIcon").show();
		$("#scrollnavy").show();
		$("#prevIcon2").show();
		
		if($frame_number > $maxClicks-1){
			$("#nextIcon").hide();
		}if($frame_number < $maxClicks-1){
			$("#nextIcon").show();
		}if($frame_number <= 1){
			$("#prevIcon").hide();
		}
	});
	
	$("#print2Button").click(function(){
		$("#gallery").show();
		$("#thumbnailContainer").hide();
		$("#scrollnavy").show();
		$("#homeButton").hide();
		
		$newFrameNo =(($frame_number/1)+1);
		
		$newLeft = (($frame_left/1) + 927);
		$newLeftAttribute = $newLeft+"px";
		
		
		if($newFrameNo <= $maxClicks){
			$("#images").animate({right: $newLeftAttribute},01);
			$frame_left = $newLeft;
			$frame_number = $newFrameNo;
		}
		
		if($frame_number > $maxClicks-1){
			$("#nextIcon").hide();
		}if($frame_number < $maxClicks-1){
			$("#nextIcon").show();
		}
	});
	
	$("#print3Button").click(function(){
		$("#gallery").show();
		$("#thumbnailContainer").hide();
		$("#scrollnavy").show();
		$("#homeButton").hide();
		
		$frame_number = 2;
		
		$newFrameNo =(($frame_number/1)+1);
		
		$newLeft = (($frame_left/1) + 1854);
		$newLeftAttribute = $newLeft+"px";
		
		
		if($newFrameNo <= $maxClicks){
			$("#images").animate({right: $newLeftAttribute},01);
			$frame_left = $newLeft;
			$frame_number = $newFrameNo;
		}
		
		if($frame_number > $maxClicks-1){
			$("#nextIcon").hide();
		}if($frame_number < $maxClicks-1){
			$("#nextIcon").show();
		}
	});
	
	$("#print4Button").click(function(){
		$("#gallery").show();
		$("#thumbnailContainer").hide();
		$("#scrollnavy").show();
		$("#homeButton").hide();
		$frame_number = 3;
		
		$newFrameNo =(($frame_number/1)+1);
		
		$newLeft = (($frame_left/1) + 2781);
		$newLeftAttribute = $newLeft+"px";
		
		
		if($newFrameNo <= $maxClicks){
			$("#images").animate({right: $newLeftAttribute},01);
			$frame_left = $newLeft;
			$frame_number = $newFrameNo;
		}
		
		if($frame_number > $maxClicks-1){
			$("#nextIcon").hide();
		}if($frame_number < $maxClicks-1){
			$("#nextIcon").show();
		}
	});
	
	$("#print5Button").click(function(){
		$("#gallery").show();
		$("#thumbnailContainer").hide();
		$("#scrollnavy").show();
		$("#homeButton").hide();
		$frame_number = 4;
		
		$newFrameNo =(($frame_number/1)+1);
		
		$newLeft = (($frame_left/1) + 3708);
		$newLeftAttribute = $newLeft+"px";
		
		
		if($newFrameNo <= $maxClicks){
			$("#images").animate({right: $newLeftAttribute},01);
			$frame_left = $newLeft;
			$frame_number = $newFrameNo;
		}
		
		if($frame_number > $maxClicks-1){
			$("#nextIcon").hide();
		}if($frame_number < $maxClicks-1){
			$("#nextIcon").show();
		}
	});
	
	$("#print6Button").click(function(){
		$("#gallery").show();
		$("#thumbnailContainer").hide();
		$("#scrollnavy").show();
		$("#homeButton").hide();
		$frame_number = 5;
		
		$newFrameNo =(($frame_number/1)+1);
		
		$newLeft = (($frame_left/1) + 4635);
		$newLeftAttribute = $newLeft+"px";
		
		
		if($newFrameNo <= $maxClicks){
			$("#images").animate({right: $newLeftAttribute},01);
			$frame_left = $newLeft;
			$frame_number = $newFrameNo;
		}
		
		if($frame_number > $maxClicks-1){
			$("#nextIcon").hide();
		}if($frame_number < $maxClicks-1){
			$("#nextIcon").show();
		}
	});
	
	$("#print7Button").click(function(){
		$("#gallery").show();
		$("#thumbnailContainer").hide();
		$("#scrollnavy").show();
		$("#homeButton").hide();
		$frame_number = 6;
		
		$newFrameNo =(($frame_number/1)+1);
		
		$newLeft = (($frame_left/1) + 5562);
		$newLeftAttribute = $newLeft+"px";
		
		
		if($newFrameNo <= $maxClicks){
			$("#images").animate({right: $newLeftAttribute},01);
			$frame_left = $newLeft;
			$frame_number = $newFrameNo;
		}
		
		if($frame_number > $maxClicks-1){
			$("#nextIcon").hide();
		}if($frame_number < $maxClicks-1){
			$("#nextIcon").show();
		}
	});
	
	$("#print8Button").click(function(){
		$("#gallery").show();
		$("#thumbnailContainer").hide();
		$("#scrollnavy").show();
		$("#homeButton").hide();
		$frame_number = 7;
		
		$newFrameNo =(($frame_number/1)+1);
		
		$newLeft = (($frame_left/1) + 6489);
		$newLeftAttribute = $newLeft+"px";
		
		
		if($newFrameNo <= $maxClicks){
			$("#images").animate({right: $newLeftAttribute},01);
			$frame_left = $newLeft;
			$frame_number = $newFrameNo;
		}
		
		if($frame_number > $maxClicks-1){
			$("#nextIcon").hide();
		}if($frame_number < $maxClicks-1){
			$("#nextIcon").show();
		}
	});
	
	$("#print9Button").click(function(){
		$("#gallery").show();
		$("#thumbnailContainer").hide();
		$("#scrollnavy").show();
		$("#homeButton").hide();
		$frame_number = 8;
		
		$newFrameNo =(($frame_number/1)+1);
		
		$newLeft = (($frame_left/1) + 7416);
		$newLeftAttribute = $newLeft+"px";
		
		
		if($newFrameNo <= $maxClicks){
			$("#images").animate({right: $newLeftAttribute},01);
			$frame_left = $newLeft;
			$frame_number = $newFrameNo;
		}
		
		if($frame_number > $maxClicks-1){
			$("#nextIcon").hide();
		}if($frame_number < $maxClicks-1){
			$("#nextIcon").show();
		}
	});
	
	$("#print10Button").click(function(){
		$("#gallery").show();
		$("#thumbnailContainer").hide();
		$("#scrollnavy").show();
		$("#homeButton").hide();
		$frame_number = 9;
		
		$newFrameNo =(($frame_number/1)+1);
		
		$newLeft = (($frame_left/1) + 8343);
		$newLeftAttribute = $newLeft+"px";
		
		
		if($newFrameNo <= $maxClicks){
			$("#images").animate({right: $newLeftAttribute},01);
			$frame_left = $newLeft;
			$frame_number = $newFrameNo;
		}
		
		if($frame_number > $maxClicks-1){
			$("#nextIcon").hide();
		}if($frame_number < $maxClicks-1){
			$("#nextIcon").show();
		}
	});
	
	$("#print11Button").click(function(){
		$("#gallery").show();
		$("#thumbnailContainer").hide();
		$("#scrollnavy").show();
		$frame_number = 10;
		$("#homeButton").hide();
		
		$newFrameNo =(($frame_number/1)+1);
		
		$newLeft = (($frame_left/1) + 9270);
		$newLeftAttribute = $newLeft+"px";
		
		
		if($newFrameNo <= $maxClicks){
			$("#images").animate({right: $newLeftAttribute},01);
			$frame_left = $newLeft;
			$frame_number = $newFrameNo;
		}
		
		if($frame_number > $maxClicks-1){
			$("#nextIcon").hide();
		}if($frame_number < $maxClicks-1){
			$("#nextIcon").show();
		}
	});
	




});

