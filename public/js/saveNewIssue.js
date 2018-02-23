
function goBack(){
      window.history.back();
    }

  $(document).ready(function(e){
  	$(".btn").click(function() {
      $(this).css({"background-color":"#33cc99", "color":"white"});
    });
  });

  function submitForm(){
  	$('#newIssueForm').submit(function(){
  		var textVal = $('#title').val();
  		localStorage.setItem('title', textVal);
  		$.post('/createNew', textVal, function(data, status){
  			if(data.success){
  				console.log("success");

  			}
  		});
  	})
  }
/*
  	$('#finish').click(function(){
  	localStorage.setItem('category', $('input[name="category"]:checked').val());

  	});
  	*/
/*
	var moodVal = localStorage.getItem('moods');
	var image = "../images/" + moodVal;
	$(".mood").append("<img class='pic' src='" + image +"'/>");


	$('#finish').click(clickFinish);

	

	function clickFinish(e){
		e.preventDefault();
		var commentVal = $("#text-multi-line").val();
		var today = new Date();
		var newMood = {
			"emoji": moodVal,
			"month": today.getMonth()+1,
			"day": today.getDate(),
			"comment": commentVal
		};
		console.log(newMood);
		$.post('/storeMood', {data: JSON.stringify(newMood)}, function(data, status){
			if(data.success){
				console.log("success");
				window.location.href="/homePage";
			}
		});
	}
*/
  