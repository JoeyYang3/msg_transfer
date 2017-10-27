   console.log("content log--------");



// chrome.tabs.query({
//     active: true
// }, function(tabArray){
//     console.log(tabArray);
// });




//接收background发过来的消息    
chrome.extension.onRequest.addListener(
  function(request, sender, sendResponse) {
    console.log("content Listener---")
    console.log(sender.tab ?
                "from a content script:" + sender.tab.url :
                "from the extension");
          sendResponse({farewell: "goodbye"});

    if (request.greeting == "hello from bg")
      sendResponse({farewell: "goodbye"});
    else
      sendResponse({}); // snub them.
  });


    // chrome.runtime.onMessage.addListener(  
    //   function(request, sender, sendResponse) {  
    //     console.log("request:",request.greeting)
    //     // console.log(sender.tab ?  
    //     //             "from a content script:" + sender.tab.url :  
    //     //             "from the extension");  
    //     if (request.greeting){  
    //       console.log("content")
    //       sendResponse({farewell: "I'm contentscript,goodbye!"});  
    //       }  
    //   });  



//获取页面中问题的回答，发送给background
function sendMsgToBackground(){

  var e = document.getElementsByClassName("UserLink-link");
  var f = document.getElementsByClassName("RichText CopyrightRichText-richText");
  var g = ":";
  var h = document.getElementsByTagName("h1");
  var h1 =  h[h.length-1].innerText;
  console.log("Q : " + h1.substring(0,h1.length-2));
  console.log("A :")

  var data = new Object();
  for (var i = f.length-1; i >= 0;  i--) {
     author = e[e.length-1-2*i].innerText;
     answer = f[f.length-1-i].innerText;
     data[i] = answer;
     console.log(author,g,answer);
  };
  console.log(data);


    chrome.runtime.sendMessage(data, function(response) {  
      console.log("response from bg ：",response.farewell);  
    });  

}


sendMsgToBackground();