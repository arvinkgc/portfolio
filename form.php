<?php
    $name = $_POST["fullName"];
    $email = $_POST["Email"];
    $phone= $_POST["phoneNumber"];
    $message = $_POST["Message"];

    //Database connection
    $conn = new mysqli('localhost','root','','arvinkgc_form');
    if($conn->connect_error){
        die('Connection Failed : '.$conn->connect_error);
    }else{
        $stmt = $conn->prepare("insert into contact_form(fullName, Email, phoneNumber, Message)
        values(?, ?, ?, ?)");
        $stmt->bind_param("ssss",$fullName,$Email,$phoneNumber,$Message);
        $stmt->execute();
        echo "Message Successfully Sent...";
        $stmt->close();
        $conn->close();
    }

?>