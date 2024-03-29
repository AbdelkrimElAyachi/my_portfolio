<?php define("HOST",$_SERVER["HTTP_HOST"]); ?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="author" content="abdelkrim el ayachi">
    <meta name="description" content="a portfolio website made by abdelkrim el ayachi to find work because he is broke">

    <!-- open graph ? meta data protocol by facebook -->
    <meta name="og:image" content="http://<?=HOST?>"> <!-- needs url-->
    <meta name="og:title" content="abdelkrim el ayachi portfolio">
    <meta name="og:description" content="a portfolio website made by abdelkrim el ayachi to show off his skills">
    <meta name="og:local" content="en_US">
    <meta name="og:type" content="website">
    <meta name="og:site_name" content="Abdelkrim El Ayachi | Web Developper">
    <meta name="og:url" content="http://<?=HOST?>">
    <!-- end of open graph meta data-->

    <!-- twitter meta data protocol -->
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:creator" content="@Abdelkrim_El_Ay">
    <meta name="twitter:site" content="@Abdelkrim_El_Ay">
    <meta name="twitter:title" content="Abdelkrim_El_Ayachi portfolio">
    <meta name="twitter:description" content="a portfolio website made by abdelkrim el ayachi to show off his skills">
    <meta name="twitter:image:src" content="#"><!-- needs url -->
    <!-- end of twitter protocol -->


    <!-- favicon icons -->
    <link rel="icon" type="image/png" sizes="32x32" href="http://<?= HOST ?>/assets/favicon/favicon-32x32.png" />
    <link rel="icon" type="image/png" sizes="96x96" href="http://<?= HOST ?>/assets/favicon/favicon-96x96.png" />
    <link rel="icon" type="image/png" sizes="16x16" href="http://<?= HOST ?>/assets/favicon/favicon-16x16.png" />
    <!-- end of favicon -->
    

    <title>Abdelkrim El Ayachi | WEB DEVELOPPER</title>
    <!-- my css style -->
    <link rel="stylesheet" href="http://<?= HOST ?>/css/normalize.css">
    <link rel="stylesheet" href="http://<?= HOST ?>/css/style.css">

    <!-- my js scripts -->
    <script type="module" src="http://<?= HOST ?>/js/GenerateBackground.js" defer></script>
    <script type="module" src="http://<?= HOST ?>/index.js" defer></script>

    <!-- Option 1: Include in HTML -->
    <!-- <link rel="stylesheet" href="http://cdn.jsdelivr.net/npm/bootstrap-icons@1.3.0/font/bootstrap-icons.css"> -->
</head>
<body>
    <div id="bg"></div>
    <div  id="root">



    </div>
</body>
</html>
