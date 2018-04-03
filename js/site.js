$(document).ready(function() {

  //calculate pace
  $("#paceCalc").click(function() {
    var secondsOutput = $("#timeHours").val() * 3600 + $("#timeMinutes").val() * 60 + $("#timeSeconds").val() * 1
    var pace = (secondsOutput / $("#distance").val()) / 60
    var minutePace = Math.floor(pace)
    var secondPace = (pace - minutePace) * 60
    $("#paceMinutesOutput").text(minutePace);
    $("#paceMinutes").val(minutePace);
    $("#paceSeconds").val(secondPace);

  });

  //calculate distance
  $("#distanceCalc").click(function() {
    var secondsOutput = $("#timeHours").val() * 3600 + $("#timeMinutes").val() * 60 + $("#timeSeconds").val() * 1
    var pace = (secondsOutput / $("#distance").val()) / 60
    var distance = (secondsOutput / pace / 60)
    $("#distanceOutput").text(distance);
    $("#distance").val(distance);

  });


  //calculate time

  $("#timeCalc").click(function() {

    var paceSeconds = parseInt($("#paceSeconds").val())
    var paceMinutes = parseInt($("#paceMinutes").val() * 60)
    var distance = parseInt($("#distance").val())
    var totalPace = paceMinutes + paceSeconds
    var pace = (paceMinutes + paceSeconds) * distance
    var hours = Math.floor(pace / 3600)
    var minutes = Math.floor((pace - Math.floor(pace / 3600) * 3600) / 60)
    var seconds = (((pace - Math.floor(pace / 3600) * 3600) / 60) - Math.floor((pace - Math.floor(pace / 3600) * 3600) / 60)) * 60

    $("#hoursCalc").text(hours);
    $("#timeHours").val(hours);
    $("#minutesCalc").text(minutes);
    $("#timeMinutes").val(minutes);
    $("#secondsCalc").text(seconds);
    $("#timeSeconds").val(seconds);
  });


  //Select marathon
  $("#marathonSelect").click(function() {
    var distanceKM = 42.195
    var distanceMiles = distanceKM / 1.60934
    if ($("#units option:selected").val() == "km") {
      $("#distance").val(distanceKM);
    } else {
      $("#distance").val(distanceMiles);
    }

  });

  //Select Half-marathon
  $("#halfMarathonSelect").click(function() {
    var distanceKM = 21.097
    var distanceMiles = distanceKM / 1.60934
    if ($("#units option:selected").val() == "km") {
      $("#distance").val(distanceKM);
    } else {
      $("#distance").val(distanceMiles);
    }
  });

  //Select 10k
  $("#10kSelect").click(function() {
    var distanceKM = 10
    var distanceMiles = distanceKM / 1.60934
    if ($("#units option:selected").val() == "km") {
      $("#distance").val(distanceKM);
    } else {
      $("#distance").val(distanceMiles);
    }
  });

  //Select 5k
  $("#5kSelect").click(function() {
    var distanceKM = 5
    var distanceMiles = distanceKM / 1.60934
    if ($("#units option:selected").val() == "km") {
      $("#distance").val(distanceKM);
    } else {
      $("#distance").val(distanceMiles);
    }
  });

  $("#convert").click(function() {
    var distance =   $("#distance").val()
    var toKM = distance * 1.60934
    var toMiles = distance / 1.60934
    if ($("#units option:selected").val() == "km") {
      $("#distance").val(toKM);
    } else {
      $("#distance").val(toMiles);
    }

  });

  $("#getSplits").click(function() {
    var text = "";
    var i = 1;
    var secondsOutput = $("#timeHours").val() * 3600 + $("#timeMinutes").val() * 60 + $("#timeSeconds").val() * 1
    var paceinseconds = secondsOutput / $("#distance").val()
    var pace = (secondsOutput / $("#distance").val()) / 60
    var minutePace = Math.floor(pace)
    var secondPace = (pace - minutePace) * 60
    var distance = $("#distance").val() ;
    while (i <= distance) {
      text += "<tr><td>" + i + "</td><td>" + i*minutePace + secondPace + "</td></tr>";
      i++;


    }
      $('.add').append(text);
      $(".splitsDesc").text("You're splits are ");
  });

});
