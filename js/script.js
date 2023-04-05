$(document).ready(function(){
  var countH = 0;
  var countM = 0;
  $("#session").html(countH + ":" + countM);
  var countB = 5;
  $("#break").html(countB);
  var pos = "Tick Tock";
  var countLama;
  var posLama; 
  var count;
  $("#stats").html(pos);
  var clock = $(".timer").FlipClock(0, {
    clockFace: 'HourlyCounter',
    autoStart: false,
    callbacks: {
      interval: function(){
        if (clock.getTime().time == 0){
          if (pos == "session"){
            clock.setTime(countB*60);
            clock.start();
            pos = "break";
            $("#stats").html(pos);
          } else if (pos == "break"){
            clock.setTime(countH*3600 + countM*60);
            clock.start();
            pos = "session";
            $("#stats").html(pos);
          }
        }        
      }
    }
  })  
  //SESSION
  $("#sessInc").on("click", function(){
    if (countM < 59){
      countM += 1;
    } else {
      countH += 1;
      countM = 0;
    }
    $("#session").html(countH + ":" + countM);
  });
  $("#sessDec").on("click", function(){
    if (countH == 0 && countM > 1){
      countM -= 1;
    } else if (countH > 0 && countM == 0){
      countH -= 1;
      countM = 59;
    } else if (countH > 0 && countM > 0){
      countM -= 1;
    }
    $("#session").html(countH + ":" + countM);
  });
  //BREAK
  $("#breakInc").on("click", function(){
    if ($("#break").html() < 60){
      countB += 1;
      $("#break").html(countB);
    }    
  });
  $("#breakDec").on("click", function(){
    if ($("#break").html() > 1){
      countB -= 1;
      $("#break").html(countB);
    }
  });  
  $("#start").on("click", function(){
    if (count != countH*3600 + countM*60 || clock.getTime().time==0){
      clock.setTime(countH*3600 + countM*60);
      pos=" counting... ";
      $("#stats").html(pos);
    } else {
      pos = posLama;
      $("#stats").html(pos);
    }
    count = countH*3600 + countM*60;    
    clock.start();    
  });
  $("#stop").on("click", function(){
    clock.stop();
    countLama = clock.getTime().time;
    posLama = $("#stats").html();
  });
  $("#clear").on("click", function(){
    clock.stop();
    pos = "Tick Tock";
    $("#stats").html(pos);
    clock.setTime(0);
  });
});
