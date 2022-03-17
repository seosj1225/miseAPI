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
var grade = ["😍", "🙂", "😰", "😈"];

function usedata(data) {
  $(".placeList").remove();
  var myItem = data.response.body.items;
  var elem = `<div class="weatab"><ul class="placeList">`;
  elem += `<li><p>시</p><p>구</p><p>통합대기환경지수</p><p>미세먼지</p><p>초미세먼지</p></li>`;
  for (var i = 0; i < myItem.length; i++) {
    var sidoName = myItem[i].sidoName;
    var stationName = myItem[i].stationName;
    var khaiGrade = myItem[i].khaiGrade;
    var pm10Grade = myItem[i].pm10Grade;
    var pm25Grade = myItem[i].pm25Grade;

    elem += `<li>`;
    elem += `<p>${sidoName}</p>`;
    elem += `<p>${stationName}</p>`;
    elem += `<p>${khaiGrade ? grade[khaiGrade - 1] : "점검중"}</p>`;
    elem += `<p>${pm10Grade ? grade[pm10Grade - 1] : "점검중"}</p>`;
    elem += `<p>${pm25Grade ? grade[pm25Grade - 1] : "점검중"}</p>`;
    elem += `</li>`;
  }
  elem += `</ul></div>`;
  $("#listCon").append(elem);
}

$("#loading").hide();

// header의 site map
$(".siteBtn").on("click", function () {
  $(".siteList").stop().slideToggle(400);
});
