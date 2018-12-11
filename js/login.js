var apiUrl = '/baseball_project-master/src/'
function login(){
    console.log('login...');
    //create request object
    var x = new XMLHttpRequest();

    //prepare request
    x.open('GET',apiUrl + 'user/');

    //request headers
    x.setRequestHeader('username',document.getElementById('username').value);
    x.setRequestHeader('password',document.getElementById('password').value);

    //send request
    x.send();

    //onreadystatechange event handler
    x.onreadystatechange = function(){
    //readyState = 4 : bak with info    
    //status = 200 : OK
    //status = 404 : Page not found (check API url)
    //status = 500 : Request denied by server (check API Access-ControlAllow)
        if(x.readyState == 4 & x.status == 200){
            console.log(x.readyState);
            console.log(x.status);
            console.log(x.responseText);
          var jsonResponse = JSON.parse(x.responseText);
          console.log(jsonResponse);
          if(jsonResponse.status == 0){
              //grant access
              sessionStorage['authenticated'] = true;
              sessionStorage['user'] = JSON.stringify(jsonResponse.user);
              sessionStorage['token'] = jsonResponse.token;
              sessionStorage['userlvl'] = jsonResponse.user.role.name;
              if(sessionStorage['userlvl'] == 'Scorekeeper') window.location = 'logMatch.html';
              if(sessionStorage['userlvl'] == 'Viewer') window.location = 'dash/scoreboard.html';
          }else{
              alert(jsonResponse.errorMessage);
              
          }
        }
    }
}
function logout(){
    sessionStorage['authenticated'] = 'false';
    window.location = 'login.html';
}