var apiUrl = 'http://localhost/baseball_project/src/';

function showSeasons()
{

  // var team = 1;
  var x = new XMLHttpRequest();
  x.open('GET', 'http://localhost/baseball_project/src/season/');
  x.send();

  x.onreadystatechange = function(){
    if (x.readyState === 4 & x.status === 200) {
      allJson = JSON.parse(x.responseText);
      if (allJson.status === 0) {
      }
      else {
        // document.getElementById('error').innerHTML = allTeamsJson.errorMessage;
        // document.getElementById('error').style.display = 'block';
      }
      var cont = document.getElementById('content');
      var table = document.createElement('table');
      var seasons = allJson.seasons.seasons;

      for(var i = 0; i < seasons.length; i++)
      {
        var name = seasons[i].name;
        var row = document.createElement('div');
        var cell = document.createElement('td');
        cell.innerHTML = name;
        row.appendChild(cell);
        table.appendChild(row);
      }

      cont.appendChild(table);
    }
  }
}

function insertSeason()
{
  var newSea = document.getElementById('season').value;
  var parameter = 'season';


  var x = new XMLHttpRequest();
  x.open("POST", 'http://localhost/baseball_project/src/season/', true);

  //Send the proper header information along with the request
  x.setRequestHeader('newSea', newSea);
  x.send();
  x.onreadystatechange = function() { // Call a function when the state changes.
    if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
      // Request finished. Do processing here.
    }
  }
}

function showComboSeasons()
{

  var parameter = 'season/'
  // var team = 1;
  var x = new XMLHttpRequest();
  x.open('GET', 'http://localhost/baseball_project/src/season/');
  x.send();

  x.onreadystatechange = function(){
    if (x.readyState === 4 & x.status === 200) {
      allJson = JSON.parse(x.responseText);
      if (allJson.status === 0) {
        // document.getElementById('error').style.display = 'none';
      }
      else {
        // document.getElementById('error').innerHTML = allTeamsJson.errorMessage;
        // document.getElementById('error').style.display = 'block';
      }
      var cont = document.getElementById('content');
      var combo = document.createElement('select');
      combo.id = 'combo';
      combo.name = 'combo';
      var seasons = allJson.seasons.seasons;

      for(var i = 0; i < seasons.length; i++)
      {
        var name = seasons[i].name;
        var option = document.createElement('option');
        option.id = seasons[i].id;
        option.innerHTML = name;
        combo.appendChild(option);
      }

      cont.appendChild(combo);
      console.log(cont);
    }
  }
}

function editSeason()
{
  let con = document.getElementById('combo');
  let id = con.options[con.selectedIndex].id;
  let newSea = document.getElementById('season').value;
  let parameter = 'season';
  let x = new XMLHttpRequest();
  x.open("PUT", 'http://localhost/baseball_project/src/season/', true);
  x.setRequestHeader('Content-Type', 'application/json');

  var data = {};
  data['idSeason'] = id;
  data['nameSeason'] = newSea; 
  var jsonData = JSON.stringify(data);
  x.send(jsonData);

  x.onreadystatechange = function(){
    if (x.readyState === 4 & x.status === 200) {
      // allJson = JSON.parse(x.responseText);
      if (allJson.status === 0) {
        // document.getElementById('error').style.display = 'none';
      }
      else {
        // document.getElementById('error').innerHTML = allTeamsJson.errorMessage;
        // document.getElementById('error').style.display = 'block';
      }
    }
  }
}

function delSea()
{
  let con = document.getElementById('combo');
  let id = con.options[con.selectedIndex].id;
  let x = new XMLHttpRequest();
  x.open("DELETE", 'http://localhost/baseball_project/src/season/', true);
  x.setRequestHeader('Content-Type', 'application/json');

  var data = {};
  data['idSeason'] = id;

  var jsonData = JSON.stringify(data);
  x.send(jsonData);

  x.onreadystatechange = function(){
    if (x.readyState === 4 & x.status === 200) {
      // allJson = JSON.parse(x.responseText);
      if (allJson.status === 0) {
        // document.getElementById('error').style.display = 'none';
      }
      else {
        // document.getElementById('error').innerHTML = allTeamsJson.errorMessage;
        // document.getElementById('error').style.display = 'block';
      }
    }
  }
}

function showCategories()
{

  // var team = 1;
  var x = new XMLHttpRequest();
  x.open('GET', 'http://localhost/baseball_project/src/category/');
  x.send();

  x.onreadystatechange = function(){
    if (x.readyState === 4 & x.status === 200) {
      allJson = JSON.parse(x.responseText);
      if (allJson.status === 0) {
      }
      else {
        // document.getElementById('error').innerHTML = allTeamsJson.errorMessage;
        // document.getElementById('error').style.display = 'block';
      }
      var cont = document.getElementById('content');
      var table = document.createElement('table');
      var categories = allJson.categories.categories;

      for(var i = 0; i < categories.length; i++)
      {
        var name = categories[i].name;
        var row = document.createElement('div');
        var cell = document.createElement('td');
        cell.innerHTML = name;
        row.appendChild(cell);
        table.appendChild(row);
      }

      cont.appendChild(table);
    }
  }
}

function insertCategory()
{
  var newSea = document.getElementById('season').value;


  var x = new XMLHttpRequest();
  x.open("POST", 'http://localhost/baseball_project/src/category/', true);

  //Send the proper header information along with the request
  x.setRequestHeader('newCat', newSea);
  x.send();
  x.onreadystatechange = function() { // Call a function when the state changes.
    if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
      // Request finished. Do processing here.
    }
  }
}

function editCat()
{
  let con = document.getElementById('combo');
  let id = con.options[con.selectedIndex].id;
  let newCat = document.getElementById('season').value;
  let x = new XMLHttpRequest();
  x.open("PUT", 'http://localhost/baseball_project/src/category/', true);
  x.setRequestHeader('Content-Type', 'application/json');

  var data = {};
  data['idCategory'] = id;
  data['nameCategory'] = newCat;

  var jsonData = JSON.stringify(data);
  x.send(jsonData);

  x.onreadystatechange = function(){
    if (x.readyState === 4 & x.status === 200) {
      // allJson = JSON.parse(x.responseText);
      console.log(x.responseText);
      if (allJson.status === 0) {
        // document.getElementById('error').style.display = 'none';
      }
      else {
        // document.getElementById('error').innerHTML = allTeamsJson.errorMessage;
        // document.getElementById('error').style.display = 'block';
      }
    }
  }
}

function showComboCategories()
{

  var x = new XMLHttpRequest();
  x.open('GET', 'http://localhost/baseball_project/src/category/');
  x.send();

  x.onreadystatechange = function(){
    if (x.readyState === 4 & x.status === 200) {
      console.log(x.responseText);
      allJson = JSON.parse(x.responseText);
      console.log(allJson);
      if (allJson.status === 0) {
        // document.getElementById('error').style.display = 'none';
      }
      else {
        // document.getElementById('error').innerHTML = allTeamsJson.errorMessage;
        // document.getElementById('error').style.display = 'block';
      }
      var cont = document.getElementById('content');
      var combo = document.createElement('select');
      combo.id = 'combo';
      combo.name = 'combo';
      var categories = allJson.categories.categories;

      for(var i = 0; i < categories.length; i++)
      {
        var name = categories[i].name;
        var option = document.createElement('option');
        option.id = categories[i].id;
        option.innerHTML = name;
        combo.appendChild(option);
      }

      cont.appendChild(combo);
      console.log(cont);
    }
  }
}

function delCategory()
{
  let con = document.getElementById('combo');
  let id = con.options[con.selectedIndex].id;
  let x = new XMLHttpRequest();
  x.open("DELETE", 'http://localhost/baseball_project/src/category/', true);
  x.setRequestHeader('Content-Type', 'application/json');

  var data = {};
  data['idCategory'] = id;

  var jsonData = JSON.stringify(data);
  x.send(jsonData);

  x.onreadystatechange = function(){
    if (x.readyState === 4 & x.status === 200) {
      // allJson = JSON.parse(x.responseText);
      console.log(x.responseText);
      if (allJson.status === 0) {
        // document.getElementById('error').style.display = 'none';
      }
      else {
        // document.getElementById('error').innerHTML = allTeamsJson.errorMessage;
        // document.getElementById('error').style.display = 'block';
      }
    }
  }
}

function showComboTeamCategories()
{

  var parameter = 'season/'
  // var team = 1;
  var x = new XMLHttpRequest();
  x.open('GET', 'http://localhost/baseball_project/src/category/');
  x.send();

  x.onreadystatechange = function(){
    if (x.readyState === 4 & x.status === 200) {
      allJson = JSON.parse(x.responseText);
      console.log(allJson);
      if (allJson.status === 0) {
        // document.getElementById('error').style.display = 'none';
      }
      else {
        // document.getElementById('error').innerHTML = allTeamsJson.errorMessage;
        // document.getElementById('error').style.display = 'block';
      }
      var cont = document.getElementById('content');
      var combo = document.getElementById('combo');

      var categories = allJson.categories.categories;

      for(var i = 0; i < categories.length; i++)
      {
        var name = categories[i].name;
        var option = document.createElement('option');
        option.id = categories[i].id;
        option.innerHTML = name;
        combo.appendChild(option);
      }

      combo.addEventListener("onchangue", updateComboTeams);
      cont.appendChild(combo);
      showComboTeams();
    }
  }
}

function showComboTeams()
{
  var x = new XMLHttpRequest();
  x.open('GET', 'http://localhost/baseball_project/src/team/');
  x.send();

  x.onreadystatechange = function(){
    if (x.readyState === 4 & x.status === 200) {
      allJson = JSON.parse(x.responseText);
      console.log(allJson);
      if (allJson.status === 0) {
        // document.getElementById('error').style.display = 'none';
      }
      else {
        // document.getElementById('error').innerHTML = allTeamsJson.errorMessage;
        // document.getElementById('error').style.display = 'block';
      }
      var cont2 = document.getElementById('content2');
      var combo2 = document.getElementById('combo2');
      // combo2.onChange = showTeam();
      var teams = allJson.teams.teams;

      let combo = document.getElementById('combo');
      let id = combo.options[combo.selectedIndex].id;

      for(var i = 0; i < teams.length; i++)
      {
        if(teams[i].category.id == id)
        {
          var name = teams[i].name;
          var option = document.createElement('option');
          option.id = teams[i].id;
          option.innerHTML = name;
          combo2.appendChild(option);
        }
      }

      cont2.appendChild(combo2);
      loadTeamStuff();
    }
  }
}

function updateComboTeams()
{
  var x = new XMLHttpRequest();
  x.open('GET', 'http://localhost/baseball_project/src/team/');
  x.send();


  x.onreadystatechange = function(){
    if (x.readyState === 4 & x.status === 200) {
      allJson = JSON.parse(x.responseText);
      if (allJson.status === 0) {
        // document.getElementById('error').style.display = 'none';
      }
      else {
        // document.getElementById('error').innerHTML = allTeamsJson.errorMessage;
        // document.getElementById('error').style.display = 'block';
      }
      var cont2 = document.getElementById('content2');
      var combo2 = document.getElementById('combo2');
      combo2.innerHTML = null;

      // combo2.onChange = showTeam();
      var teams = allJson.teams.teams;

      let id = combo.options[combo.selectedIndex].id;

      for(var i = 0; i < teams.length; i++)
      {
        if(teams[i].category.id == id)
        {
          var lel = teams[i].category.id;
          var name = teams[i].name;
          var option = document.createElement('option');
          option.id = teams[i].id;
          option.innerHTML = name;
          combo2.appendChild(option);
        }
      }

      cont2.appendChild(combo2);
      loadTeamStuff();
    }
  }
}

function loadTeamStuff()
{
  var x = new XMLHttpRequest();
  let combo2 = document.getElementById('combo2');
  let id = combo2.options[combo2.selectedIndex].id;
  x.open('GET', 'http://localhost/baseball_project/src/team/' + id);
  x.send();

  x.onreadystatechange = function(){
    if (x.readyState === 4 & x.status === 200) {
      console.log(x.responseText);
      allJson = JSON.parse(x.responseText);
      if (allJson.status === 0) {
        // document.getElementById('error').style.display = 'none';
      }
      else {
        // document.getElementById('error').innerHTML = allTeamsJson.errorMessage;
        // document.getElementById('error').style.display = 'block';
      }

      // combo2.onChange = showTeam();
      var contenedor = document.getElementById('content3');
      contenedor.innerHTML = null;
      var team = allJson.team;
      var table = document.createElement('table');
      table.id = 'teamTabla';
      var fila1 = document.createElement('tr');
      var fila2 = document.createElement('tr');
      var fila3 = document.createElement('tr');
      var celda1 = document.createElement('td');
      var celda2 = document.createElement('td');
      var celda3 = document.createElement('td');
      var celda4 = document.createElement('td');
      var celda5 = document.createElement('td');
      var celda6 = document.createElement('td');
      var status = document.createElement('h5');
      var img = document.createElement('img');
      img.src = team.image;
      img.height = 64;

      celda1.innerHTML = "Estado: Activo";
      if(team.status != 1)
        status.innerHTML = "Estado: Inactivo";

      celda2.innerHTML = "Equipo: " + team.name;
      celda3.appendChild(img);
      celda3.setAttribute("rowspan", "2");
      celda4.innerHTML = "Categoria: " + team.category.name;
      celda5.innerHTML = "Temporada: " + team.season.name;
      celda6.innerHTML = "Entrenador: " + team.coach.person.firstName + " " + team.coach.person.lastName;


      fila1.appendChild(celda1);
      fila1.appendChild(celda2);
      fila2.appendChild(celda3);
      fila1.appendChild(celda4);
      fila2.appendChild(celda5);
      fila2.appendChild(celda6);

      contenedor.appendChild(fila1);
      contenedor.appendChild(fila2);
      contenedor.appendChild(fila3);
    }
  }

}

function delTeam()
{
  let combo2 = document.getElementById('combo2');
  let id = combo2.options[combo2.selectedIndex].id;

  var x = new XMLHttpRequest();

  x.open("DELETE", 'http://localhost/baseball_project/src/team/', true);
  x.setRequestHeader('Content-Type', 'application/json');
  var data = {};
  data['idTeam'] = id;

  var jsonData = JSON.stringify(data);
  x.send(jsonData);

  x.onreadystatechange = function(){
    if (x.readyState === 4 & x.status === 200) {
      // allJson = JSON.parse(x.responseText);
      if (allJson.status === 0) {
        // document.getElementById('error').style.display = 'none';
      }
      else {
        // document.getElementById('error').innerHTML = allTeamsJson.errorMessage;
        // document.getElementById('error').style.display = 'block';
      }
    }
  }
}

function uploadFile() 
{
  const url = 'http://localhost/baseball_project/src/imagecontroller.php';
  const form = document.querySelector('form');

  form.addEventListener('submit', e => {
    e.preventDefault();

    const files = document.querySelector('[type=file]').files;
    const formData = new FormData();

    for (let i = 0; i < files.length; i++) {
      let file = files[i];

      formData.append('files[]', file);
    }

    fetch(url, {
      method: 'POST',
      body: formData
    }).then(response => {
      console.log(response);
    });
  });
}

function showTeamInit()
{
  var x = new XMLHttpRequest();
  x.open('GET', 'http://localhost/baseball_project/src/season/');
  x.send();

  x.onreadystatechange = function(){
    if (x.readyState === 4 & x.status === 200) {
      allJson = JSON.parse(x.responseText);
      console.log(allJson);
      if (allJson.status === 0) {
        // document.getElementById('error').style.display = 'none';
      }
      else {
        // document.getElementById('error').innerHTML = allTeamsJson.errorMessage;
        // document.getElementById('error').style.display = 'block';
      }
      var combo = document.getElementById('season');
      var seasons = allJson.seasons.seasons;

      for(var i = 0; i < seasons.length; i++)
      {
        var name = seasons[i].name;
        var option = document.createElement('option');
        option.id = seasons[i].id;
        option.innerHTML = name;
        combo.appendChild(option);
      }
    }
  }

  var y = new XMLHttpRequest();
  y.open('GET', 'http://localhost/baseball_project/src/category/');
  y.send();

  y.onreadystatechange = function(){
    if (y.readyState === 4 & y.status === 200) {
      allJson2 = JSON.parse(y.responseText);
      if (allJson2.status === 0) {
        // document.getElementById('error').style.display = 'none';
      }
      else {
        // document.getElementById('error').innerHTML = allTeamsJson.errorMessage;
        // document.getElementById('error').style.display = 'block';
      }

      var combo = document.getElementById('category');
      var categories = allJson2.categories.categories;

      for(var i = 0; i < categories.length; i++)
      {
        var name = categories[i].name;
        var option = document.createElement('option');
        option.id = categories[i].id;
        option.innerHTML = name;
        combo.appendChild(option);
      }
    }
  }

  var status = document.getElementById('status');
  var active = document.createElement('option');
  var inactive = document.createElement('option');
  active.id = 1;
  inactive.id = 2;
  active.innerHTML = "Activo";
  inactive.innerHTML = "Inactivo";
  status.appendChild(active);
  status.appendChild(inactive);

  var z = new XMLHttpRequest();
  z.open('GET', 'http://localhost/baseball_project/src/coaches/');
  z.send();

  z.onreadystatechange = function(){
    if (z.readyState === 4 & z.status === 200) {
      allJson3 = JSON.parse(z.responseText);
      if (allJson3.status === 0) {
        // document.getElementById('error').style.display = 'none';
      }
      else {
        // document.getElementById('error').innerHTML = allTeamsJson.errorMessage;
        // document.getElementById('error').style.display = 'block';
      }

      var comboCoach = document.getElementById('coach');
      var coaches = allJson3.coaches;

      for(var i = 0; i < coaches.length; i++)
      {
        var name = coaches[i].person.firstName + " " + coaches[i].person.lastName;
        var option = document.createElement('option');
        option.id = coaches[i].id;
        option.innerHTML = name;
        comboCoach.appendChild(option);
        document.getElementById('btnAdd').disabled = true;

      }
    }
  }
}

function addTeam()
{
  var teamSeason = document.getElementById('season');
  let seasonId = teamSeason.options[teamSeason.selectedIndex].id;
  console.log(seasonId);

  var teamName = document.getElementById('name').value;

  var teamStatus = document.getElementById('status');
  let statusId = teamStatus.options[teamStatus.selectedIndex].id;

  var teamCategory = document.getElementById('category');
  let categoryId = teamCategory.options[teamCategory.selectedIndex].id;

  var teamCoach = document.getElementById('coach');
  let coachId = teamCoach.options[teamCoach.selectedIndex].id;

  var teamImage = document.getElementById('imageUp').value;
  console.log(teamImage);
  var myarr = teamImage.split("\\");
  var image = myarr[myarr.length - 1];

  var x = new XMLHttpRequest();
  x.open("POST", 'http://localhost/baseball_project/src/team/', true);

  //Send the proper header information along with the request
  x.setRequestHeader('nameTeam', teamName);
  x.setRequestHeader('categoryTeam', categoryId);
  x.setRequestHeader('coachTeam', coachId);
  x.setRequestHeader('imageTeam', image);
  x.setRequestHeader('seasonTeam', seasonId); 
  x.send();
  x.onreadystatechange = function() { // Call a function when the state changes.
    if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
      console.log(x.responseText);
    }
  }
  uploadFile();
}

function activate()
{
  var teamName = document.getElementById('name').value;
  var teamImage = document.getElementById('imageUp').value;

  if(teamName == null || teamImage == null)
    return;
  else
    document.getElementById('btnAdd').disabled = false;
}

function login()
{
  var user = document.getElementById('username').value;
  var contra = document.getElementById('contra').value;

  if(user == 'gerardo' && contra == '12345')
  {
    window.location.href = 'menu.html';
  }

  if(user == 'manuelObrador' && contra == '12345')
  {
    window.location.href = 'menu.html';
  }
}
function showEditComboTeamCategories()
{

  var parameter = 'season/'
  // var team = 1;
  var x = new XMLHttpRequest();
  x.open('GET', 'http://localhost/baseball_project/src/category/');
  x.send();

  x.onreadystatechange = function(){
    if (x.readyState === 4 & x.status === 200) {
      allJson = JSON.parse(x.responseText);
      console.log(allJson);
      if (allJson.status === 0) {
        // document.getElementById('error').style.display = 'none';
      }
      else {
        // document.getElementById('error').innerHTML = allTeamsJson.errorMessage;
        // document.getElementById('error').style.display = 'block';
      }
      var cont = document.getElementById('content');
      var combo = document.getElementById('combo');

      var categories = allJson.categories.categories;

      for(var i = 0; i < categories.length; i++)
      {
        var name = categories[i].name;
        var option = document.createElement('option');
        option.id = categories[i].id;
        option.innerHTML = name;
        combo.appendChild(option);
      }

      combo.addEventListener("onchangue", updateComboTeams);
      cont.appendChild(combo);
      showEditComboTeams();
    }
  }
}

function showEditComboTeams()
{
  var x = new XMLHttpRequest();
  x.open('GET', 'http://localhost/baseball_project/src/team/');
  x.send();

  x.onreadystatechange = function(){
    if (x.readyState === 4 & x.status === 200) {
      allJson = JSON.parse(x.responseText);
      console.log(allJson);
      if (allJson.status === 0) {
        // document.getElementById('error').style.display = 'none';
      }
      else {
        // document.getElementById('error').innerHTML = allTeamsJson.errorMessage;
        // document.getElementById('error').style.display = 'block';
      }
      var cont2 = document.getElementById('content2');
      var combo2 = document.getElementById('combo2');
      // combo2.onChange = showTeam();
      var teams = allJson.teams.teams;

      let combo = document.getElementById('combo');
      let id = combo.options[combo.selectedIndex].id;

      for(var i = 0; i < teams.length; i++)
      {
        if(teams[i].category.id == id)
        {
          var name = teams[i].name;
          var option = document.createElement('option');
          option.id = teams[i].id;
          option.innerHTML = name;
          combo2.appendChild(option);
        }
      }

      cont2.appendChild(combo2);
      showTeamInit();
      fillTeam();
    }
  }
}

function fillTeam()
{
  var x = new XMLHttpRequest();
  let combo2 = document.getElementById('combo2');
  let id = combo2.options[combo2.selectedIndex].id;
  x.open('GET', 'http://localhost/baseball_project/src/team/' + id);
  x.send();

  x.onreadystatechange = function(){
    if (x.readyState === 4 & x.status === 200) {
      console.log(x.responseText);
      allJson = JSON.parse(x.responseText);
      if (allJson.status === 0) {
        // document.getElementById('error').style.display = 'none';
      }
      else {
        // document.getElementById('error').innerHTML = allTeamsJson.errorMessage;
        // document.getElementById('error').style.display = 'block';
      }

      var team = allJson.team;

      var teamSeason = document.getElementById('season');
      let seasonId = teamSeason.options[teamSeason.selectedIndex].id;
      console.log(seasonId);
      console.log(team);

      document.getElementById('name').value = team.name;
      var imag = document.createElement('img');
      imag.src = team.image;
      imag.height = 64;

      document.getElementById('imglbl').innerHTML = null;
      document.getElementById('imglbl').appendChild(imag);

      var teamStatus = document.getElementById('status');
      let statusId = teamStatus.options[teamStatus.selectedIndex].id;

      var teamCategory = document.getElementById('category');
      let categoryId = teamCategory.options[teamCategory.selectedIndex].id;

      // var teamCoach = document.getElementById('coach');
      // let coachId = teamCoach.options[teamCoach.selectedIndex].id;

      var teamImage = document.getElementById('imageUp').value;
      console.log(teamImage);
      var myarr = teamImage.split("\\");
      var image = myarr[myarr.length - 1];
    }
  }
}

function editTeam()
{
  let teamId = combo2.options[combo2.selectedIndex].id;
  var teamSeason = document.getElementById('season');
  let seasonId = teamSeason.options[teamSeason.selectedIndex].id;
  console.log(seasonId);

  var teamName = document.getElementById('name').value;

  var teamStatus = document.getElementById('status');
  let statusId = teamStatus.options[teamStatus.selectedIndex].id;

  var teamCategory = document.getElementById('category');
  let categoryId = teamCategory.options[teamCategory.selectedIndex].id;

  var teamCoach = document.getElementById('coach');
  let coachId = teamCoach.options[teamCoach.selectedIndex].id;

  var teamImage = document.getElementById('imageUp').value;
  console.log(teamImage);
  var myarr = teamImage.split("\\");
  var image = myarr[myarr.length - 1];

  var x = new XMLHttpRequest();
  x.open("PUT", 'http://localhost/baseball_project/src/team/', true);
  x.setRequestHeader('Content-Type', 'application/json');

  //Send the proper header information along with the request
  var data = {};
  data['idTeam'] = teamId;
  data['nameTeam'] = teamName;
  data['categoryTeam'] = categoryId;
  data['coachTeam'] = coachId;
  data['imageTeam'] = image;
  data['seasonTeam'] = seasonId; 
  var jsonData = JSON.stringify(data);
  x.send(jsonData);
  x.onreadystatechange = function() { // Call a function when the state changes.
    if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
      console.log(x.responseText);
    }
  }
  uploadFile();
}

function deleteTeam()
{
  let con = document.getElementById('combo2');
  let id = con.options[con.selectedIndex].id;
  let x = new XMLHttpRequest();
  x.open("DELETE", 'http://localhost/baseball_project/src/team/', true);
  x.setRequestHeader('Content-Type', 'application/json');

  var data = {};
  data['idTeam'] = id;

  var jsonData = JSON.stringify(data);
  x.send(jsonData);

  x.onreadystatechange = function(){
    if (x.readyState === 4 & x.status === 200) {
      // allJson = JSON.parse(x.responseText);
      if (allJson.status === 0) {
        // document.getElementById('error').style.display = 'none';
      }
      else {
        // document.getElementById('error').innerHTML = allTeamsJson.errorMessage;
        // document.getElementById('error').style.display = 'block';
      }
    }
  }
}

// function updateTeams()
// {
//   var x = new XMLHttpRequest();
//   x.open('GET', 'http://localhost/baseball_project/src/team/');
//   x.send();

//   x.onreadystatechange = function(){
//     if (x.readyState === 4 & x.status === 200) {
//       allJson = JSON.parse(x.responseText);
//       if (allJson.status === 0) {
//         // document.getElementById('error').style.display = 'none';
//       }
//       else {
//         // document.getElementById('error').innerHTML = allTeamsJson.errorMessage;
//         // document.getElementById('error').style.display = 'block';
//       }
//       var cont2 = document.getElementById('content2');
//       var combo2 = document.getElementById('combo2');
//       combo2.innerHTML = null;

//       // combo2.onChange = showTeam();
//       var teams = allJson.teams.teams;

//       let id = combo.options[combo.selectedIndex].id;

//       for(var i = 0; i < teams.length; i++)
//       {
//         if(teams[i].category.id == id)
//         {
//           var lel = teams[i].category.id;
//           var name = teams[i].name;
//           var option = document.createElement('option');
//           option.id = teams[i].id;
//           option.innerHTML = name;
//           combo2.appendChild(option);
//         }
//       }

//       cont2.appendChild(combo2);
//       updatePlayers();
//     }
//   }
// }

// function updatePlayers()
// {
//   var x = new XMLHttpRequest();
//   x.open('GET', 'http://localhost/baseball_project/src/player/');
//   x.send();

//   x.onreadystatechange = function(){
//     if (x.readyState === 4 & x.status === 200) {
//       allJson = JSON.parse(x.responseText);
//       if (allJson.status === 0) {
//         // document.getElementById('error').style.display = 'none';
//       }
//       else {
//         // document.getElementById('error').innerHTML = allTeamsJson.errorMessage;
//         // document.getElementById('error').style.display = 'block';
//       }
//       var cont4 = document.getElementById('content4');
//       var combo4 = document.getElementById('combo3');
//       combo4.innerHTML = null;

//       // combo2.onChange = showTeam();
//       var players = allJson.players.players;

//       let id = combo2.options[combo2.selectedIndex].id;

//       for(var i = 0; i < players.length; i++)
//       {
//         if(players[i].category.id == id)
//         {
//           var lel = players[i].team.id;
//           var name = players[i].name;
//           var option = document.createElement('option');
//           option.id = players[i].id;
//           option.innerHTML = name;
//           combo4.appendChild(option);
//         }
//       }

//       cont2.appendChild(combo2);
//     }
//   }
// }

// function showCategories()
// {
//   var parameter = 'season/'
//   // var team = 1;
//   var x = new XMLHttpRequest();
//   x.open('GET', 'http://localhost/baseball_project/src/category/');
//   x.send();

//   x.onreadystatechange = function(){
//     if (x.readyState === 4 & x.status === 200) {
//       allJson = JSON.parse(x.responseText);
//       console.log(allJson);
//       if (allJson.status === 0) {
//         // document.getElementById('error').style.display = 'none';
//       }
//       else {
//         // document.getElementById('error').innerHTML = allTeamsJson.errorMessage;
//         // document.getElementById('error').style.display = 'block';
//       }
//       var cont = document.getElementById('content');
//       var combo = document.getElementById('combo');

//       var categories = allJson.categories.categories;

//       for(var i = 0; i < categories.length; i++)
//       {
//         var name = categories[i].name;
//         var option = document.createElement('option');
//         option.id = categories[i].id;
//         option.innerHTML = name;
//         combo.appendChild(option);
//       }

//       combo.addEventListener("onchangue", updateComboTeams);
//       cont.appendChild(combo);
//       showComboTeams();
//     }
//   }
// }
