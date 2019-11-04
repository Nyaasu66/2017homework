function getNewList(){
  var value = document.getElementsByTagName('input')[0].value
  var script = document.createElement('script');
  var url = "https://www.baidu.com/sugrec?prod=pc&wd=" + value + "&cb=jsonpRes";
  script.src = url;
  var head =document.getElementsByTagName('head')[0]
  head.appendChild(script); 
  head.removeChild(head.lastChild);
}

function jsonpRes(res) {
  console.log(res)
  document.getElementById('output').innerText = res.g[0].q
}

// function getNewList() {
//   xhr.open("GET","https://www.baidu.com/sugrec?prod=pc&wd=五五开&cb=jsonpRes")
//   xhr.send()
//   xhr.onreadystatechange = function() {
//     if (xhr.readyState === 4) {
//       if (xhr.status === 200) {
//         const res = JSON.parse(xhr.responseText)
//         console.log(res)
//       }
//     }
//   }
// }

