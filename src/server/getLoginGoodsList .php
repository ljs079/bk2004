<?php

  $sql = "SELECT * FROM `list`";
 

  $link = mysqli_connect('localhost', 'root', 'root', 'bk2004');
  $res = mysqli_query($link, $sql);
  $data = mysqli_fetch_all($res, MYSQLI_ASSOC);

  // 4. 把结果返回给前端
  echo json_encode(array(
    "message" => "获取商品列表成功",
    
    "code" => 1,
    "list" => $data,
  ));

?>
