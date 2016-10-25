<?php
	
if(isset($_POST['action']) && !empty($_POST['action'])) {
    $action = $_POST['action'];
    switch($action) {
        case '1' : getName();break;
        case '2' : getDirector();break;
        case '3' : getSuperpoer();break;
    }
}

function getName(){
	$name = $_POST['name'];
	$dbh = new PDO('sqlite:marvelDatabase.db');
	$sth = $dbh->prepare("SELECT Movie_title from Actor natural join acts_in natural join movie where actor_name = " . "'" . $name . "'");
	$sth->execute();
	$results = $sth->fetchAll(PDO::FETCH_ASSOC);
	$json = json_encode($results);
	
	echo $json;
    
}

function getDirector(){
	$director = $_POST['name'];
	$dbh = new PDO('sqlite:marvelDatabase.db');
	$sth = $dbh->prepare("SELECT Movie_title from Director where Name = " . "'" . $director . "'");
	$sth->execute();
	$results = $sth->fetchAll(PDO::FETCH_ASSOC);
	$json = json_encode($results);
	
	echo $json;
	
}

function getSuperpower(){
	$name = $_POST['name'];
	$dbh = new PDO('sqlite:marvelDatabase.db');
	$sth = $dbh->prepare("SELECT Type from Character_name natural join Ability where Name = " . "'" . $name . "'");
	$sth->execute();
	$results = $sth->fetchAll(PDO::FETCH_ASSOC);
	$json = json_encode($results);
	
	echo $json;
	
}

?>
