<?php

if(empty($_POST['filename']) || empty($_POST['content'])){
	exit;
}

$contentHeader = 'function myFunction(move) { 
var text = "";
var me = 0; 
';


$contentTail = '
alert(move);
}';

/*write to file action*/
$content = $contentHeader . $_POST['content'] . $contentTail;
$fp = fopen($_SERVER['DOCUMENT_ROOT'] . "/hackalone/js/myText.js","wb");
fwrite($fp,$content);
fclose($fp);

echo '<script src="js/myText.js"></script>'
   , '<script type="text/javascript">'
   , 'myFunction("1000");'
   , '</script>'
;

/* disable download action
$filename = preg_replace('/[^a-z0-9\-\_\.]/i','',$_POST['filename']);

header("Cache-Control: ");
header("Content-type: text/plain");
header('Content-Disposition: attachment; filename="'.$filename.'"');

echo $_POST['content'];
*/
?>