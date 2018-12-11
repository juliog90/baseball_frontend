function login()
{
    var apiUrl;
    console.log("Login...");
    // create request object
    var x = new XMLHttpRequest();
    //prepare request
    x.open('GET', apiUrl + "user/");

    x.setRequestHeader('matchId', document.getElementById('matchId').value);

    //x.send();

    //onreadystatechange thing

    //x.onreadystatechange= function()
    //{
        //200: ok
        //404: page not found
        //500: request denied by server

        //if(x.readyState == 4 & x.status == 200)
        //{
            //var jsonResponse= JSON.parse(x.responseText);
            //access
            if(document.getElementById('matchId').value == 1)
            {
                console.log("Accessing...");
                //sessionStorage.match = JSON.parse(x.responseText);
                sessionStorage.clear();
                sessionStorage.matchId= document.getElementById('matchId').value;
                window.location = 'field.html';
            }
            else
            {
                document.getElementById("error").style.display = 'block';
            }
        //}
    //}
}