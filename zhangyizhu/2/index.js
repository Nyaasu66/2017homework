
function replace() {
  var find_value = document.getElementsByTagName('input')[0].value
  var replace_value = document.getElementsByTagName('input')[1].value
  if (find_value !="" || replace_value !="") {
    while(true) {
      var content_1 = document.getElementById('content').innerText
      var arr_content_1 = content_1.split('')
      var word_length = find_value.length  //2
      var word_index = content_1.indexOf(find_value)
      if (word_index == -1) {
        break
      }
      arr_content_1.splice(word_index,word_length,replace_value)
      document.getElementById('content').innerText = arr_content_1.join('')
    }
  }
  else {
    alert('请输入查找或替换内容！')
  }
}