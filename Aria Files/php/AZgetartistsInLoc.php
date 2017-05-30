<html>
 <head>

 </head>
 <body>
 <?php

 /*
 $long = $_GET["long"];
 if(isset( $long)){
	 $sql = 'WHERE `longitude` = "0.59"';
 
 }*/ 

 
 $long = $_GET["long"];
 if(isset( $long)){
	 $sql = 'WHERE longitude < -0.5 AND longitude > -0.6';
 
 }


	 // DB connection info
 $host = "us-cdbr-azure-southcentral-f.cloudapp.net";
 $user = "b899a7072101ba";
 $pwd = "c80ab4c1";
 $db = "ariadb1";
 // Connect to database.
 try {
	 //echo "Connected";
     $conn = new PDO( "mysql:host=$host;dbname=$db", $user, $pwd);
     $conn->setAttribute( PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION );
 }
 catch(Exception $e){
     die(var_dump($e));
 }
 
 
 $counter = 1;
 
 
 $sql_select = "SELECT * FROM mtbl ".$sql;
 $stmt = $conn->query($sql_select);
 $musicians = $stmt->fetchAll(); 
 if(count($musicians) > 0) {
     foreach($musicians as $musician) {
		 ?>
<div class="swiper-slide">
				<div class = "contentBox">
				<div id = "pictureSec">
					<img id = "pP" src = "images/artistPics/<?php echo $counter?>.jpg" alt = "Profile Picture">
				</div>
				<div id = "rightBarrier"></div>
					<p id = "nameText"><i><?php echo $musician['artist_name']?></i></p>
					<p id = "infoText"><?php echo $musician['summaryInfo']?></p>
					<div id = "bottomBarrier">
					<p id = "timeText">2 hours ago</p>
					</div>
				</div>
				<p id = "ad"><?php echo $musician['description']?></p> <!-- Artist Description !-->
				<p id = "at"><?php echo $musician['artist_type']?></p> <!-- Artist Type-->
				<p id = "ag"><?php echo $musician['fgenre']?></p> <!-- Artsit Genre -->
				<p id = "lat"><?php echo $musician['latitude']?></p> <!-- Lat -->
				<p id = "long"><?php echo $musician['longitude']?></p> <!-- Long -->
			</div>			
        
    <?php 
	$counter++;
	}
 } else {
     echo "<h3>No one is currently registered.</h3>";
 }
 
 
 
 
 ?>
 </body>
 </html>
 