var select_text = window.getSelection().toString()

if (select_text != ""){
  select_text += " / "
}

window.prompt("", select_text + '"' + document.title + '" ' + document.URL);
