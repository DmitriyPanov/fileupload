<?php
require_once(dirname(__FILE__).'/fileupload.php');
$file = fileupload(dirname(__FILE__).'/tmp');
echo json_encode(array('status'=>'ok','file'=>$file));
?>
