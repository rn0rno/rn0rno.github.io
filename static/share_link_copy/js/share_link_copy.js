var select_text = window.getSelection().toString()

var title_name = document.getElementsByTagName('title')[0]

if (!title_name){
  title_text = ''
} else {
  title_text = title_name.text + ' '
}

if (select_text != ""){
  select_text += " | "
}

var share_text = select_text + title_text + location.href
window.prompt("", share_text);
