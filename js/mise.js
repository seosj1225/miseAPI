function abc(me, sido) {
  $(".placeList").remove();
  $("#loading").show();
  $("button").removeClass("on");
  $(me).addClass("on");
  $.ajax({
    type: "GET",
    url: `https://seosj1225.herokuapp.com/http://apis.data.go.kr/B552584/ArpltnInforInqireSvc/getCtprvnRltmMesureDnsty?sidoName=${sido}&pageNo=1&numOfRows=100&returnType=json&serviceKey=LLYOKDgCpCCttzp0TegJmb4diikHNJt9BlH7bBd4btrPLZeZnBZX5VCUe6MygemWrEMjY9t2Btk36Jxb%2F5ZxyQ%3D%3D&ver=1.0`,
    dataType: "json",
    success: function (getdata) {
      // console.log("getdata", getdata);
      $("#loading").hide();
      usedata(getdata);
    },
    error: function (xhr) {
      console.log(xhr.status + "/" + xhr.errorText);
    },
  });
}
var grade = ["๐", "๐", "๐ฐ", "๐"];

function usedata(data) {
  $(".placeList").remove();
  var myItem = data.response.body.items;
  var elem = `<div class="weatab"><ul class="placeList">`;
  elem += `<li><p>์</p><p>๊ตฌ</p><p>ํตํฉ๋๊ธฐํ๊ฒฝ์ง์</p><p>๋ฏธ์ธ๋จผ์ง</p><p>์ด๋ฏธ์ธ๋จผ์ง</p></li>`;
  for (var i = 0; i < myItem.length; i++) {
    var sidoName = myItem[i].sidoName;
    var stationName = myItem[i].stationName;
    var khaiGrade = myItem[i].khaiGrade;
    var pm10Grade = myItem[i].pm10Grade;
    var pm25Grade = myItem[i].pm25Grade;

    elem += `<li>`;
    elem += `<p>${sidoName}</p>`;
    elem += `<p>${stationName}</p>`;
    elem += `<p>${khaiGrade ? grade[khaiGrade - 1] : "์ ๊ฒ์ค"}</p>`;
    elem += `<p>${pm10Grade ? grade[pm10Grade - 1] : "์ ๊ฒ์ค"}</p>`;
    elem += `<p>${pm25Grade ? grade[pm25Grade - 1] : "์ ๊ฒ์ค"}</p>`;
    elem += `</li>`;
  }
  elem += `</ul></div>`;
  $("#listCon").append(elem);
}

$("#loading").hide();

// header์ site map
$(".siteBtn").on("click", function () {
  $(".siteList").stop().slideToggle(400);
});
