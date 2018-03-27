var share_text = ' | ' + document.getElementsByTagName('title')[0].text + ' - ' + location.href
console.log(share_text)
user = window.prompt("コメントがあれば入力してください", share_text);
