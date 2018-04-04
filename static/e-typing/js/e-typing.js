type = $('title').text().split(' ')[4];
txt={'タイプ': type, 'created_at': new Date()};

switch (type) {
  case 'ローマ字タイピング':
    data_t = 'trysc.trysc.trysc.std.0'
		break;
  case 'かなタイピング':
		data_t = 'trysc.trysc.trysc.std.1'
		break;
  case '英語タイピング':
		data_t = 'trysc.trysc.trysc.std.2'
		break;
  default:
		data_t = 'trysc.trysc.trysc.std.0'
		break;
}
$.ajax({
  type: 'POST',
  url: 'https://www.e-typing.ne.jp/parts/cgilib/get_typing_setting.asp',
  data: {"d_id": 956503,"t": data_t},
  headers: {
    'content-type': 'application/x-www-form-urlencoded; charset=UTF-8',
  },
}).then(function(response){
  txt['お題'] = $(response).find('title').text()

	$('#typing_content').contents().find('#current .result_data ul li').each(function(i){
		title=$(this).find('.title').text();
		data=$(this).find('.data').text();
		txt[title]=data;
	});

	if($('#results_table').length){
		d=$('#results_table').val(JSON.stringify(txt));
	} else {
		d=$('<input>').val(JSON.stringify(txt))
		d.attr('id','results_table');
		d.attr('style','width:80%;');
		$('.pp_description').html(d);
	}

	$('#results_table').select();
	document.execCommand('copy');
})
