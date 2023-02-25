<?php

$username = 'root';
$password = '';
$database = 'bdps';
$server = 'localhost';

$con = mysqli_connect($server,$username,$password,$database);

if(!$con){
    ?>
    <script>
        alert("Database error");
    </script>
    <?php
    die();
}else{
    ?>
    <script>
        console.log('Connection successful!!')
    </script>
    <?php
}

?>