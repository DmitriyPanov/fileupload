This plugin uses Jquery for uploading files in FF3.6+, Safari4+.

### Features ###
* does not use a flash

### Development plan ###
* multiple file select, progress-bar all Browser

### Known Issues ###
Button input file use the top html doc, script use bottom HTML doc. Not use script all body space HTML doc.
	
### Install ###

      <script src="jquery.min.js" type="text/javascript"></script>
      <script src="jquery.fileupload.js" type="text/javascript"></script>

You can then use the plugin.
      <body>
      <input type="file">

      <script>
        $('input[type=file]').fileupload({
          url:"/ajax.php",
          success:function(dat){
            if(dat.status == 'ok') { alert(dat.file); }
          },
          dataType:'json'
        });
      </script>
      </body>

* url - address of the handler to accept the file
* success - gets a response from the handler and performs actions additionally
* dataType - can return the results in various formats "json" and "txt"

### File ajax.php ###

      <?php
        require_once('fileupload.php');
        $dir = '/upload/';
        $file fileupload($dir);
        echo json_encode(array('status'=>'ok','file'=>$file));
      ?>
