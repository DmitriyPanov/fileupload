jQuery.fn.fileupload = function(options){
  $(this).change(function(){
    xhr = new XMLHttpRequest;
    xhr.open("POST", options.url+'&fileuploadname='+$(this).val(), true);
    xhr.setRequestHeader("X-Requested-With", "XMLHttpRequest");
    xhr.setRequestHeader("X-File-Name", encodeURIComponent($(this).val()));
    xhr.setRequestHeader("Content-Type", "application/octet-stream");
    xhr.send(this.files[0]);
    xhr.onreadystatechange = function(){            
      if (xhr.readyState == 4){ 
        if(options.dataType == 'json'){
            response = $.parseJSON(xhr.responseText);
            if(response == null) { response = {}; } 
        }else{
          response = xhr.responseText;
        }
        options.success.call("",response);
      }
    }
  });
};
