
$moveby = 441;
$frame_left = 0;
$frame_number = 1;


$(document).ready(function(){
	
	$maxClicks = 3;
	
	$(".next").click(function(){
		$newFrameNo =(($frame_number/1)+1);
		$newLeft = (($frame_left/1)+$moveby);
		$newLeftAttribute = $newLeft+"px";
		
		if($newFrameNo < $maxClicks){
			$("#images").animate({left: $newLeftAttribute},800);
			$frame_left = $newLeft;
			$frame_number = $newFrameNo;
		}
	});
	
	$(".previous").click(function(){
		$newFrameNo =(($frame_number/1)-1);
		$newLeft = (($frame_left/1)-$moveby);
		$newLeftAttribute = $newLeft+"px";
		
		if($newFrameNo > 0){
			$("#images").animate({left: $newLeftAttribute},800);
			$frame_left = $newLeft;
			$frame_number = $newFrameNo;
		}
	});


});

