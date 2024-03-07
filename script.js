var request = new XMLHttpRequest();
request.open("GET", "https://restcountries.com/v3.1/all")
request.send();
request.onload = function () {
    var res = JSON.parse(request.response);
    console.log(res);

//print all 250 countries common name in console
for (var i = 0; i < res.length; i++) {
    console.log(res[i].name.common)
}
}