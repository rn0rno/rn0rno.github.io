$.ajax({
  type: 'POST',
  url: 'https://www.e-typing.ne.jp/parts/cgilib/get_typing_setting.asp',
  data: {"d_id": 956503,"t": "trysc.trysc.trysc.std.0"},
  headers: {
    'content-type': 'application/x-www-form-urlencoded; charset=UTF-8',
  },
}).then(function(response){
  $('#typing_content').contents().find('#current h1').text($(response).find('title').text())
  $.getScript("https://cdnjs.cloudflare.com/ajax/libs/html2canvas/0.4.1/html2canvas.js", function(){
      html2canvas($('#typing_content').contents().find('#app #result'),{
      onrendered: function(canvas){
      //imgタグのsrcの中に、html2canvasがレンダリングした画像を指定する。
      var imgData = canvas.toDataURL();
      // document.getElementById("result_img").src = imgData;
      $('.pp_bottom').append($('<img>').attr('src', imgData))
      }
    });
  });
})
