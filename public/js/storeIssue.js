$(document).ready(function(e){

  	// $(".btn-q1").click(function(e) {
    //   e.preventDefault()
    //   console.log('hello')
    //   // $('btn2-q1').toggleClass('btn2-q1 btn-q1');
    //   $(this).toggleClass('btn-q1 btn2-q1');
    // });
    //
    // $(".btn-q2").click(function() {
    //   console.log('hello2')
    //   $(this).toggleClass('btn-q2 btn2-q2');
    // });

    $(".btn-question").click(function(e){
      e.preventDefault();
      var qNo = $(this).attr('question');
      // alert(qNo)
      $('.btn-question[question="'+ qNo +'"]').removeClass('btn-question-selected');
      $(this).addClass('btn-question-selected');
    })

    $('#finish').click(clickFinish);

  });

  function goBack(){
        window.history.back();
      }

function clickFinish(e){
      e.preventDefault();
      var titleVal = $("#title").val();
      var categoryVal, durationVal, relationshipVal, stepsVal, frequencyVal;
      var descriptionVal = $("#description").val();


      categoryVal = $('.btn-question.btn-question-selected[question="1"]').text().trim();

      console.log(categoryVal);

      durationVal = $('.btn-question.btn-question-selected[question="2"]').text().trim();

      console.log(durationVal);

      relationshipVal = $('.btn-question.btn-question-selected[question="3"]').text().trim();

      console.log(relationshipVal);

      stepsVal = $('.btn-question.btn-question-selected[question="4"]').text().trim();

      console.log(stepsVal);

      frequencyVal = $('.btn-question.btn-question-selected[question="5"]').text().trim();

      console.log(frequencyVal);


      adviceVal1 = "If the issue is not serious, wait a few more days and observe behavior";
      adviceVal2 = "Mention the issue, but be sure not to place blame";
      adviceVal3 = "Communicate your concerns and why it is important to you";

      if(categoryVal == "food"){
        console.log("Entered Food Advice Section");
        adviceVal1 = " food 1";
        adviceVal2 = "food 2";
        adviceVal3 = "food 3";
      }

      if(categoryVal == "cleaning"){
        console.log("Entered Cleaning Advice Section");
        adviceVal1 = "cleaning 1";
        adviceVal2 = "cleaning 2";
        adviceVal3 = "cleaning 3";
      }

      if(categoryVal == "personal"){
        console.log("Entered Personal Advice Section");
        adviceVal1 = " personal 1";
        adviceVal2 = "personal 2";
        adviceVal3 = "personal 3";
      }


      var newIssue = {
        "taskStatus": false,
        "title": titleVal,
        "status": "IN PROGRESS",
        "category": categoryVal,
        "description": descriptionVal,
        "duration": durationVal,
        "relationship": relationshipVal,
        "previous-steps": stepsVal,
        "frequency": frequencyVal,
        "moods": [],
        "latestMood": null,
        // "advice1": "If the issue is not serious, wait a few more days and observe behavior",
        // "advice1status": "incomplete",
        // "advice2": "Mention the issue, but be sure not to place blame",
        // "advice2status": "incomplete",
        // "advice3": "Communicate your concerns and why it is important to you",
        "advice1": adviceVal1,
        "advice2": adviceVal2,
        "advice3": adviceVal3,
        "q1": "Have you been able to observe any additional behavior?",
        "q1answer1": "Yes",
        "q1answer2": "No"
      };
      $.post('/storeIssue', {data: JSON.stringify(newIssue)}, function(data, status){
        if(data.success){
          console.log("success");
          localStorage.setItem('newlyCreatedTitle', titleVal);
          //alert("Your issue has been created and saved to home page!");
          window.location.href="/daily-mood";
        }
      });
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
