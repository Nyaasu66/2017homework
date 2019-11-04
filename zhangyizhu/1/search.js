const ctn = document.getElementById('output-container')
function getNewList(){
  var value = document.getElementsByTagName('input')[0].value
  var script = document.createElement('script');
  var url = "https://www.baidu.com/sugrec?prod=pc&wd=" + value + "&cb=jsonpRes";
  script.src = url;
  var head =document.getElementsByTagName('head')[0]
  head.appendChild(script); 
  head.removeChild(head.lastChild);
}

if (!ctn.hasChildNodes()) {
  ctn.style.boxShadow = 0
  ctn.style.border = 0
}

function jsonpRes(res) {
  while(ctn.hasChildNodes()) //当container下还存在子节点时 循环继续
  {
    ctn.removeChild(ctn.firstChild);
  }
  console.log(res)
  if (res.g != undefined) {
    res.g.forEach(function(item){
      const div = document.createElement('div')
      div.innerText = item.q
      div.className = 'output'
      div.onclick = function() {
        location.href = 'https://www.baidu.com/s?wd='+item.q
      }
      ctn.appendChild(div)
    })
  }
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

