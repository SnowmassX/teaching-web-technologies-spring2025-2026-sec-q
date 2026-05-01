<?php

    $host = "127.0.0.1";
    $dbuser = "root";
    $dbpass = "";
    $dbname = "webtech";
    


    function getConnection(){
        global $host;
        global $dbuser;
        $con = mysqli_connect($host, $dbuser, $GLOBALS['dbpass'], $GLOBALS['dbname']);
        return $con;
    }

?>
