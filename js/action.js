var apiUrl;

function action(player, action)
{
    console.log("action...");
    // create request object
    var x = new XMLHttpRequest();
    //prepare request
    x.open('Post', apiUrl + "action/");

    x.setRequestHeader('playerId', player);
    x.setRequestHeader('action', action);
    x.setRequestHeader('entry', document.getElementById('entryscore').value)

    //x.send();
}

/* -- FUNCION DE PHP
private function action($player, $action)
    {

        $connection = MySqlConnection::getConnection();
		  //query
		  $statement = 'insert into matchesHistory (matId, plaId, actId, mthEntry) values (?,?,?,?)';
		  //prepate statment
		  $command = $connection->prepare($statement);
		  //parameters
		  $command->bind_param('iisi', $this->match->getId(), $player->getId(), $action, $this->entry);
		  //execute
          $command->execute();
          //close connection
		  mysqli_stmt_close($command);
		  $connection->close();
    }
*/

function updateDisplay(field, value)
{
    console.log("update display...");
    // create request object
    var x = new XMLHttpRequest();
    //prepare request
    x.open('Post', apiUrl + "updateDisplay/");

    x.setRequestHeader('field', player);
    x.setRequestHeader('value', action);
    x.setRequestHeader('matchId', sessionStorage.matchId);

    //x.send();
}

/* -- FUNCTION DE PHP
private function updateDisplay($field, $value)
    {
        $connection = MySqlConnection::getConnection(); // cambia el bateador en el display
		  //query
          $statement = 'update displayMatches set '+ $field + ' = ? where matId = ?';
		  //prepate statment
		  $command = $connection->prepare($statement);
		  //parameters
          $command->bind_param
          ('ii', $value, $this->match->getId());
		  //execute
          $command->execute();
          //close connection
		  mysqli_stmt_close($command);
		  $connection->close();
    }
*/