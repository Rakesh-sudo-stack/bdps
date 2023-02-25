<html></html>
<script src="https://unpkg.com/sweetalert/dist/sweetalert.min.js"></script>
<?php

include '../connections/bdpscon.php';

function getString($n) {
    $characters = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    $randomString = '';
 
    for ($i = 0; $i < $n; $i++) {
        $index = rand(0, strlen($characters) - 1);
        $randomString .= $characters[$index];
    }
 
    return $randomString;
}

if(isset($_POST['add-admin'])){
    $name = $_POST['name'];
    $email = mysqli_real_escape_string($con,$_POST['email']);
    $permission = $_POST['permission'];
    $password = getString(5);
    $hashedpass = password_hash($password,PASSWORD_BCRYPT);
    $token = getString(10);

    $selectquery = "SELECT `id`, `name`, `email`, `password`, `permission`, `token` FROM `admins` WHERE email='$email'";
    $query = mysqli_query($con,$selectquery);

    $numberOfResponses = mysqli_num_rows($query);
    if($numberOfResponses > 0){
        ?>
        <script>
        swal({
            title: "Email already registered!",
            icon: "warning",
            button: "OK!",
        }).then(()=>{
                    location.replace('../admin.php');
                });
        </script>
        <?php
    }else{
        $insertquery = "INSERT INTO `admins`(`name`, `email`, `password`, `permission`, `token`) VALUES ('$name','$email','$hashedpass','$permission','$token')";
    
        $response = mysqli_query($con,$insertquery);
    
        if($response){
            ?>
            <script>
                swal({
                    title: "Admin Added!",
                    icon: "success",
                    button: "Continue",
                }).then(()=>{
                    location.replace('../admin.php');
                });
            </script>
            <?php
        }else{
            ?>
            <script>
                swal({
                    title: "Some error occured!",
                    icon: "warning",
                    button: "OK!",
                }).then(()=>{
                    location.replace('../admin.php');
                });
            </script>
            <?php
        }
    }
}

?>