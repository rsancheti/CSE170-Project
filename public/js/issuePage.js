function set_json_callback(data){
  // debugger;
  //send back to home or change button text
}

function goBack(){
      window.history.back();
    }

function get_json_callback(data){
  // debugger;
  var parts = decodeURI(window.location.href).split('/');
  var key = parts[parts.length - 1];

  // debugger;
  // console.log(key)
  // console.log(data)
  data[key]['taskStatus'] = true;
  data[key].status = "COMPLETED";
  // console.log(data)
  debugger;
  $.post('/set_data_json', data, set_json_callback);
}

$(document).ready(function(e){
  $('.not-filled-in').click(clickComplete);

  function clickComplete(e){

  	e.preventDefault();



  	// "taskStatus": booleanStatus,
  	// "status": taskStatusStr,
  	// $.post('/issue', {data: JSON.stringify(this)}, function(data, status){
  	// if(data.success){
  	//    console.log("success");
  	//    window.location.href="/homePage";
  	// }
    $.get('/get_data_json', get_json_callback)
  }
})
