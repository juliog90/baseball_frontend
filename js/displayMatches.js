
function updateMatches(data){
    var apiUrl = "http://localhost/Sotos_Scorecard/displaymatchescontroller.php";
    var x = new XMLHttpRequest();
    x.open('POST',apiUrl);
    x.setRequestHeader('data',JSON.stringify(data));
    console.log(data);
    x.send();
    x.onreadystatechange = function(){
        if(x.readyState == 4 & x.status == 200){
            var jsonResponse = JSON.parse(x.responseText);
            console.log(jsonResponse);
        }
    }
}