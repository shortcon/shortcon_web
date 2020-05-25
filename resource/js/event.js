$(document).ready(function () {
  $("#con_name").text("숏콘");
});

function link_call(url) {
  var instargram_url = "https://www.instagram.com/unicon_kr/";
  var facebook_url =
    "https://www.facebook.com/unicon_kr-590986767971568/?eid=ARBRNvvSsgmtaW1pyfM21u_KtZxj8JVzNcpntZxxRd3aaL-86pdmjDfxEVP4XAnmEmnuE03_fCuLvJ1l";
  var youtube_url =
    "https://www.youtube.com/channel/UCb2jCn-9vAB1EjpoZ-z1yNQ?view_as=subscriber";

  if (url == 1) {
    window.open(instargram_url);
  } else if (url == 2) {
    window.open(facebook_url);
  } else {
    window.open(youtube_url);
  }
}
