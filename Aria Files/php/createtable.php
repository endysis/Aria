 <?php
 // DB connection info
 $host = "us-cdbr-azure-southcentral-f.cloudapp.net";
 $user = "b899a7072101ba";
 $pwd = "c80ab4c1";
 $db = "ariadb1";
 
 try{
     $conn = new PDO("mysql:host=$host;dbname=$db", $user, $pwd);
     $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION );
     $sql = "CREATE TABLE mutbl(
                 id INT NOT NULL AUTO_INCREMENT, 
                 PRIMARY KEY(id),
                 artist_name VARCHAR(30),
                 artist_type VARCHAR(30),
				 description VARCHAR(100),
				 fgenre VARCHAR(30),
                 latitude VARCHAR(30),
				 longitude VARCHAR(30)
				 )";
     $conn->query($sql);
	 echo "<h3>Table creating.</h3>";
 }
 catch(Exception $e){
     die(print_r($e));
 }
 echo "<h3>Table created.</h3>";
 ?>
