var url = document.getElementsByName('url')[0];

document.getElementById('save').onclick = function(){
  localStorage['trelloBGUrl'] = url.value;
  alert(url.value);
}

document.body.onload = function(){
  if(localStorage['trelloBGUrl']){
    url.value = localStorage['trelloBGUrl'];
  }
}