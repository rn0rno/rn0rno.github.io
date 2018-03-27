var title_name = document.getElementsByTagName('title')[0]

if (!title_name){
  title_text = ''
} else {
  title_text = title_name.text + ' - '
}

var share_text = ' | ' +  title_text + location.href
console.log(share_text)
user = window.prompt("コメントがあれば入力してください", share_text);
