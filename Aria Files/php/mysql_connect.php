<?php
DEFINE('DB_USER', 'musicians');
DEFINE('DB_PASSWORD', 'ripley');
DEFINE('DB_HOST', 'localhost');
DEFINE('DB_NAME', 'ariadb');

$dbc = @mysqli_connect(DB_HOST,DB_USER,DB_PASSWORD,DB_NAME)
OR dies('Could not acces MYSQLdatabase');

?>