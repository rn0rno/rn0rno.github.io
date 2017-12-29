txt={};
$('#typing_content').contents().find('#current .result_data ul li').each(function(i){
	title=$(this).find('.title').text();
	data=$(this).find('.data').text();
	txt[title]=data;
});

if($('#results_table').length){
	d=$('#results_table').val(JSON.stringify(txt));
	d.attr('style','width:80%;');
} else {
	d=$('<input>').val(JSON.stringify(txt))
	d.attr('id','results_table');
	d.attr('style','width:80%;');
	$('.pp_description').html(d);
}

$('#results_table').select();
document.execCommand('copy');
