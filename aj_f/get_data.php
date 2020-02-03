<?php
if(isset($_POST['name'])){
    $name = $_POST['name'];
    $mob_no = $_POST['mob_no'];
    $email = $_POST['email'];

    $conx = mysqli_connect("localhost","root","demo");

    $sql = "INSERT INTO `info`(`name`, `mob_name`, `email`) VALUES ('$name','$mob_no','$email');";

    $result = mysqli_query($conx,$sql);

    if($result == true){
        echo "<h3>ThankYou......!</h3>";
    }
}
?>