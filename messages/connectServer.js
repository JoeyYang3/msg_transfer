function xhr(data,callback){
    var xhttp = new XMLHttpRequest();
    var method = 'POST';
//     var data = {
//     "name":"sdfsd",
//     "password":12324234,
//     "contents":"黄河科技红烧鸡块不见不散贷款基本"
// }
    // please configure sever, port, url on popup.html and remember
    var url = 'http://localhost:8080/login';
    xhttp.open(method, url, true);
    xhttp.send(JSON.stringify(data));
    xhttp.onload = function () {
        // send the status back to popup page
        // console.log("xttp.onload " + xhttp.responseText);
        callback(xhttp.responseText);
    };
}


// datas = {
//     "name":"sdfsd",
//     "password":12324234
// }

    var datas = {
    "name":"sdfsd",
    "password":12324234,
    "contents":"黄河科技红烧鸡块不见不散贷款基本"
}


xhr(datas,function(result){
    console.log(" post response:");
    console.log(result);
});