var select_text = window.getSelection().toString()

if (select_text != ""){
  select_text += " | "
}

var share_text = select_text + document.title + ' ' + location.href
window.prompt("", share_text);
