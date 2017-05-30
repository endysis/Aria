<?php
DEFINE('DB_USER', 'b899a7072101ba');
DEFINE('DB_PASSWORD', 'c80ab4c1');
DEFINE('DB_HOST', 'us-cdbr-azure-southcentral-f.cloudapp.net');
DEFINE('DB_NAME', 'ariadb1');

$dbc = @mysqli_connect(DB_HOST,DB_USER,DB_PASSWORD,DB_NAME)
OR dies('Could not acces MYSQLdatabase');

?>