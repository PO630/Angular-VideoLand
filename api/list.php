<?php
/**
 * Returns the list of user.
 */
require 'connect.php';
    
$user = [];
$sql = "SELECT id, name, mdp FROM user";

if($result = mysqli_query($con,$sql))
{
  $cr = 0;
  while($row = mysqli_fetch_assoc($result))
  {
    $user[$cr]['id']    = $row['id'];
    $user[$cr]['name'] = $row['name'];
    $user[$cr]['mdp'] = $row['mdp'];
    $cr++;
  }
    
  echo json_encode(['data'=>$user]);
}
else
{
  http_response_code(404);
}

?>