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
      console.log(allJson);
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
      console.log(cont);
    }
  }
}

function insertSeason()
{
  var newSea = document.getElementById('season').value;
  console.log(newSea);
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

function editCat()
{
  let con = document.getElementById('combo');
  let id = con.options[con.selectedIndex].id;
  console.log(id);
  let newSea = document.getElementById('season').value;
  console.log(newSea);
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
      console.log(allJson);
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
      console.log(cont);
    }
  }
}

function insertCategory()
{
  var newSea = document.getElementById('season').value;
  console.log(newSea);


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

