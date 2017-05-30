 <?php
	 // DB connection info
 $host = "us-cdbr-azure-southcentral-f.cloudapp.net";
 $user = "b899a7072101ba";
 $pwd = "c80ab4c1";
 $db = "ariadb1";
 // Connect to database.
 try {
	 echo "Connected";
     $conn = new PDO( "mysql:host=$host;dbname=$db", $user, $pwd);
     $conn->setAttribute( PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION );
 }
 catch(Exception $e){
     die(var_dump($e));
 }
 
 if(!empty($_POST)) {
 try {
     $artist_name = $_POST['artist_name'];
     $artist_type = $_POST['artist_type'];
     $artist_genre = $_POST['artist_genre'];
     $summaryInfo = $_POST['artist_summary'];
     $description = $_POST['artist_desc'];
     $latitude = $_POST['latitude'];
     $longitude = $_POST['longitude'];

     // Insert data
     $sql_insert = "INSERT INTO `mtbl` (`artist_name`, `summaryInfo`, `artist_type` , `description`, `fgenre`, `latitude`, `longitude`) 
                    VALUES (?,?,?,?,?,?,?)";
     $stmt = $conn->prepare($sql_insert);
     $stmt->bindValue(1, $artist_name);
     $stmt->bindValue(2, $summaryInfo);
     $stmt->bindValue(3, $artist_type);
     $stmt->bindValue(4, $description);
     $stmt->bindValue(5, $artist_genre);
     $stmt->bindValue(6, $latitude);
     $stmt->bindValue(7, $longitude);
     $stmt->execute();
 }
 catch(Exception $e) {
     die(var_dump($e));
 }
 echo "<h3>Data Sent</h3>";
 }
  
 
 
 ?>

 
 
 
 
 
 
 
 
 