<?php
	$myPDO = new PDO('sqlite:marvelDatabase');
	$result = $myPDO->query("SELECT Movie_title from Movie NATURAL JOIN Actor NATURAL JOIN Acts_in WHERE Actor_name = \"Robert Downey Jr.\"");

	foreach($result as $row)
    {
        print '<li>' .  $row['Movie_title'] . '</li>';
    }
?>
