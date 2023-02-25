<?php
    include './connections/bdpscon.php';
?>
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script nonce="random123" src="https://trusted.example.com/trusted_script.js"></script>
    <script defer src="https://kit.fontawesome.com/40bc81af5c.js" crossorigin="anonymous"></script>
    <link rel="stylesheet" href="./static/css/style.css">
    <link rel="stylesheet" href="./static/css/admin.css">
    <link rel="icon" type="image/x-icon" href="./static/img/bdps_logo_4.webp">
    <title>BDPS Admin Panel</title>
</head>
<body>
    <aside>
        <div class="close-btn">
            <i class='fa-solid fa-xmark'></i>
        </div>
        <a href='./admin.php' class="panel-name">Admin Panel</a>
        <div class="user">
            <i class="fa fa-user"></i>
            <a href=''>Rakesh Jaiswal</a>
        </div>
        <div class="modifications">
            <div class='menu-element solo anchor-active' name='dashboard'>Dashboard</div>
            <div class='menu-element solo' name='slider'>Image Slider</div>
            <div class='menu-element solo' name='announcements'>Announcements</div>
            <div class='menu-element solo' name='notice board'>Notice Board</div>
        </div>
    </aside>
    <div class="container">
        <nav>
            <div class="menu-btn">
                <i class='fa-solid fa-bars'></i>
            </div>
            <div class="left-side">
                <a href="#">Home</a>
                <a href="#">Contact</a>
            </div>
            <div class="right-side">
                <button id='input-search'><i class="fa fa-search"></i></button>
            </div>
            <div class="search-bar">
                <div class="container">
                    <input type="text" placeholder="Search">
                    <div class="search-close-btn"><i class="fa-solid fa-xmark"></i></div>
                    <button><i class="fa fa-search"></i></button>
                </div>
            </div>
        </nav>
        <main></main>
    </div>
    <script defer src='./static/js/admin.js'></script>
</body>
</html>