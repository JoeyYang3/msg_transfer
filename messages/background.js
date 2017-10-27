

// jQuery的方法-----------------------
//接收到contentjs发过来的answers时，转发给服务器，接收服务器的回复
chrome.runtime.onMessage.addListener(  
  function(request, sender, sendResponse) {  
    // console.log(sender.tab ?  
    //             "from a content script:" + sender.tab.url :  
    //             "from the extension");  
    console.log("bg log-------------------------------");
    sendResponse({farewell:"bg received"});

    if (request != undefined) {
      console.log("request:",request);

        var url = 'http://localhost:8080/login';
        $.post(url,JSON.stringify(request), function(data,status){
            console.log(" server response:");
            console.log("数据: " + data + "\n状态: " + status);
            sendResponse({farewell:"response from server :"+ data});
         });
        // sendResponse({farewell:"server responseText:"+ data});
    };
  });

// jQuery的方法-----------------------



// // 原生js的方法--------------------
// //接收到contentjs发过来的answers时，转发给服务器，接收服务器的回复
// function sendMsgToServer(data,callback) {
//     var xhttp = new XMLHttpRequest();
//     var method = 'POST';
//     var url = 'http://localhost:8080/login';
//     xhttp.open(method, url, true);
//     xhttp.onreadystatechange = function(){
// 		if (xhttp.readyState == 4) {
// 			callback(xhttp.responseText);
// 		};
// 	}
//     xhttp.send(JSON.stringify(data));
//     // xhttp.onload = function () {
//     //     // send the status back to popup page
//     //     // console.log("xttp.onload " + xhttp.responseText);
//     //     callback(xhttp.responseText);
//     // };
// }

// chrome.runtime.onMessage.addListener(  
//   function(request, sender, sendResponse) {  
//     // console.log(sender.tab ?  
//     //             "from a content script:" + sender.tab.url :  
//     //             "from the extension");  
//     if (request != undefined)  
//     	console.log("request:",request);
//       sendResponse({farewell:"I'm backgroud,goodbye!"+request});  
//       sendMsgToServer(request, function (responseText) {
//                     sendResponse({farewell:"server responseText:"+ responseText});
//                     console.log(" post response:");
//                     console.log(request);
//                 });

// // 原生js的方法-------------------------------






// 发送信息到contentjs
chrome.tabs.getSelected(null, function(tab) {
  chrome.tabs.sendRequest(tab.id, {greeting: "hello from bg"}, function(response) {
    console.log("response from content "+response);
  });
});







 // chrome.tabs.onUpdated.addListener(
 //    function(tabId, changeInfo,tab) {
 //         console.log(tabId);
 //    }
 // );

    // console.log("bg----");


    // chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {  
      // chrome.tabs.sendMessage(tabs[0].id, {greeting: "hello from backgroud"}, function(response) {  
      //   console.log(response.farewell);  
      // });  
    // });  


// chrome.tabs.query({active: true, currentWindow: true}, function(tabs) { 
//     chrome.tabs.sendMessage(tabs[0].id, {greeting: "hello from backgroud"}, function(response) {  
//       if(typeof response !='undefined'){
//             alert(response);
//             console.log("backgroud log:",response.farewell);  

//         }else{
//         	console.log("response is null =>",response);
//             alert("response is null =>",response);
//         }

//       // console.log("backgroud log:",response.farewell);  
//     });  
//  }); 


    // chrome.runtime.sendMessage({greeting: "hello from backgroud"}, function(response) {  
    //   console.log("backgroud log:",response.farewell);  
    // });  