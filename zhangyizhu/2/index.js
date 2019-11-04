
function replace() {
  var value = document.getElementsByTagName('input')[0].value
  if (value !="") {
    while(true) {
      var content_1 = document.getElementById('content').innerText
      var arr_content_1 = content_1.split('')
      var word_length = value.length  //2
      var word_index = content_1.indexOf(value)
      if (word_index == -1) {
        break
      }
      arr_content_1.splice(word_index,word_length,'大哥')
      document.getElementById('content').innerText = arr_content_1.join('')
    }
  }
  else {
    alert('请输入查找内容！')
  }
}