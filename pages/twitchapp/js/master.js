$(document).ready(function(){

var streamers = ["shroud", "manvsgame", "a_seagull", "esl_overwatch", "brunofin", "comster404", "seriousgaming","ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas", "empyreanmauler", "zakivory"];

// THIS WAS A SEARCH TEST. IMPLEMENTING IN THE FUTURE
// var streamerInput  = document.getElementById("commentarea");
  // $('#search').click(function(){

           // var searchTerm = $('#searchTerm').val();
           // streamers.push(searchTerm);
           // console.log(streamers);
          //  return streamers;
  //  });

  for (var i = 0; i < streamers.length; i++) {
    $.getJSON('https://api.twitch.tv/kraken/streams/'+ streamers[i] +'?callback=?', function(data) {
    var url;
    var name;
    var status = data.stream;
    var game;
    var check = data.error;
    var missingUser;

    if (check == "Not Found" || check == "Unprocessable Entity"){
      missingUser = data.message.substr(8);
      console.log(missingUser);
      $('.nonUsers').prepend("<li class='noUser'>" + missingUser + "</li>");
      editedStreams = streamers.slice(i);
      console.log("no user");

    } else if (status == null){
      console.log("offline");
       name = data._links.channel.substr(38);
       url = "https://www.twitch.tv/" + name + "/";
       status = "Offline";

       $('.offlineUsers').prepend("<li class='offlineUser'><p><a href='" + url + "'>" + name +"</a><br> Status: " + status + "</p></li>");
    } else {
      console.log("online");
        name = data._links.channel.substr(38);
        url = "https://www.twitch.tv/" + name + "/";
        status = "Online";
        game = data.stream.game;
      console.log(game);
      $('.testArea').prepend("<li class='onlineUser'><p><a href='" + url + "'>" + name +"</a><br> Status: " + status + "<br>Now Playing: "+ game +"</p></li>");
    }

    console.log(url);
    console.log(data);
    console.log(name);

    });
  }



});
