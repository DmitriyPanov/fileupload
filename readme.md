This plugin uses Jquery for uploading files in FF3.6+, Safari4+.

### Features ###
* does not use a flash

### Development plan ###
* multiple file select, progress-bar all Browser

### Known Issues ###
	
### Client ###
to use the plugin for jquery plug and plug to the page where you plan to use.

      <script src="jquery.min.js" type="text/javascript"></script>
      <script src="jquery.fileupload.js" type="text/javascript"></script>

You can then use the plugin.

      <script>
        $('input[type=file]').fileupload({
          url:"/fileupload.php",
          success:function(dat){
            if(dat.status == 'ok') { alert(dat.file); }
          },
          dataType:'json'
        });
      </script>

* Url - address of the handler to accept the file
* Success - gets a response from the handler and performs actions additionally
* DataType - can return the results in various formats "json" and "txt"

### Server ###
To receive a downloadable file, use the function fileupload (string $file)
* $file - full path to the file

### Example ###

      <?php
        require_once(dirname(__FILE__).'/lib/js/fileupload/fileupload.php');
        fileupload('/upload/test.jpg');
      ?>

      <?php
        require_once(dirname(__FILE__).'/lib/js/fileupload/fileupload.php');
        $dir = dirname(__FILE__).'/upload/avatar/';
        if(!is_dir($dir)) { mkdir($dir); chmod($dir,''); }
        $file = time().'.jpg';
        if(fileupload($dir.$file) === true){
          require_once(dirname(__FILE__).'/lib/php/images.php');
          $res = imgResize(array('input'=>$dir.$file,'output'=>$dir.$file,'xsize'=>'70','quality'=>'70'));
          if($res['status'] == 'err') die(json_encode($res));
          echo json_encode(array('status'=>'ok','file'=>$file));
        }
      ?>
