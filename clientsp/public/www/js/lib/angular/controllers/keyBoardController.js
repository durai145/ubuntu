define([],
function()
{

	return [ '$scope' , 'toaster','keyBoardService','$state',function($scope,toaster,keyBoardService,$state){

var st='<table class="ctable" >';
var sr ='<tr class="ctable">';
var sd ='<td class="ctext">';
var sc ='<td class="ccaption">';
var dy = st;
var et='</table>';
var er ='</tr>';
var ed ='</td>';
var  offsetArry = new Array('3','66','7','77','56','57','28','65','8','47|56','47','31|64','31|63','75','10','9','41|65','41','40','40|65','21','21|65','42','42|65','62','72','16','36|65','36','46|65','46','31|65','31','5','6','71','70','74','76','52','52|65','64','63','30','25','26','','51','51|65','53|65','53','48','48|66','48|65','15','14','49|65','49','19','18','20','50','50|65','35','35|65');
var chaArr      = new Array('`','^','\',',';',']','}','#','%','<','A','a','B','b','','C','c','D','d','e','E','f','F','g','G','h','i','I','J','j','K','k','L','l','m','M','N','n','n+g','n+s','o','O','P','p','Q','q','r','R','s','S','T','t','u','&','U','V','v','W','w','X','x','Xs','y','Y','z','Z');
var chaArrId    = new Array('id_shift_delta','id_caps','id_cama','id_semicolon','id_rectangle_close_bracle','id_shift_rectangle_close_bracle','id_ambasant','id_hash','id_percentage','id_lesserthan','id_A','id_a','id_B','id_b','id_c','id_C','id_d','id_D','id_E','id_e','id_F','id_f','id_G','id_g','id_h','id_I','id_i','id_j','id_J','id_k','id_K','id_l','id_L','id_M','id_m','id_n','id_N','id_n+g','id_n+s','id_O','id_o','id_p','id_P','id_q','id_Q','id_R','id_r','id_S','id_s','id_t','id_T','id_U','id_u','id_v','id_V','id_w','id_W','id_x','id_X','id_Xs','id_Y','id_y','id_Z','id_z');
chaArr[2]='\\';



$scope.keyBoard=function()
{

//alert("keyBoard:01");
      //var keys="`1234567890-=|QWERTYUIOP[]\|ASDFGHJKL;'|ZXCVBNM,./";
    //var keys="QWERTYUIOP|ASDFGJKL|XCVBNM";
      var keys="1234567890-=|qwertyuiop|asdfgjkl;|xcvbnm|QWERTYUIOP|ASDFGJKL|XCVBNM";
      var keyRows=keys.split('|');
      var keyChars="";
      var keyBoardStr=st;
      //alert("call offsetReplace");

      //alert("keyBoard:keyRows.length="+keyRows.length);
      for (var i=0;i<keyRows.length;i++)
      {
            //alert(" keyRows ");
            keyBoardStr=keyBoardStr+sr;
            //alert(" keyRows["+i+"]"+ keyRows[i]);
            keyChars=keyRows[i].split('');

            for(var j=0;j<keyChars.length;j++)
            {
                  // alert(" keyChars["+j+"]"+keyChars[j]);
                  //    alert(" keyRows ");
                  keyBoardStr=keyBoardStr+sc;
                  //keyBoardStr=keyBoardStr+ chaArrId[offsetReplace(keyChars[j])] + "<input type='button' class=''id='"+chaArrId[offsetReplace(keyChars[j])]+"' value='"+ change(offsetReplace(keyChars[j]))+"'   onclick='fnClick(this);'onfocus='fnFocus(this);'>"; keyBoardStr=keyBoardStr+ed;
                  keyBoardStr=keyBoardStr+  "<input type='button' class=''id='"+chaArrId[offsetReplace(keyChars[j])]+"' value='"+ change(offsetReplace(keyChars[j]))+"'   onclick='fnClick(this);'onfocus='fnFocus(this);'>"; keyBoardStr=keyBoardStr+ed;
               document.getElementById('test').innerHTML=keyBoardStr;
             }
            keyBoardStr=keyBoardStr+er;
            //keyBoardStr=keyBoardStr+er;
      }

      keyBoardStr=keyBoardStr+et;
      document.forms[0].scrCode.value=keyBoardStr;
      //alert(keyBoardStr);
  
      document.getElementById('test').innerHTML=keyBoardStr;
      //test.innerHTML="test";

      };





 rollOver=function(element) {
  //change the colour
        element.className += (element.className?' ':'') + 'CSStoHighlight';
  //change display of child
  for( var x = 0; element.childNodes[x]; x++ ){
    if( element.childNodes[x].tagName == 'UL' ) {
element.childNodes[x].className += (element.childNodes[x].className?' ':'')
+ 'CSStoShow'; }
    if( element.childNodes[x].tagName == 'A' ) {
element.childNodes[x].className += (element.childNodes[x].className?' ':'')
+ 'CSStoHighLink'; }
  }
}

 rollOff=function(element) {
  //change the colour
  element.className = element.className.replace(/ ?CSStoHighlight$/,'');
  //change display of child
  //alert('am calling');
  for( var x = 0; element.childNodes[x]; x++ ){
    if( element.childNodes[x].tagName == 'UL' ) {
element.childNodes[x].className = element.childNodes[x].className.replace(/ ?CSStoShow$/,''); }
    if( element.childNodes[x].tagName == 'A' ) {
element.childNodes[x].className = element.childNodes[x].className.replace(/ ?CSStoHighLink$/,''); }
  }
}


 fnClick=function(obj)
 {
 //alert("fnChange"+obj.value);
 //baseReplace(obj.value);
 //alert("fnClick" +obj.value);
//document.getElementById("pad").value=document.getElementById("pad").value+obj.value;


document.execCommand('insertText',true,document.getElementById("pad").value+obj.value);
//alert(document.getElementById("pad").value);
 }
var keyCombSets="";

 OnPress=function()
{
      var keycode=event.keyCode?event.keyCode : event.charCode;
      var charcode="";
      keyCombSets= event.keyCode;
      try
      {
      charcode=String.fromCharCode(keycode);
      }
      catch(e)
      {
      window.status= "OnDowb :"+e;
      }
      //alert("OnPress:key code:"+keycode+"|charcode:"+charcode);
      window.status="OnPress";
      try
      {
      window.status=" click id <"+chaArrId[offsetReplace(charcode)]+">";
      document.getElementById(chaArrId[offsetReplace(charcode)]).onclick(); 
      document.getElementById(chaArrId[offsetReplace(charcode)]).focus();
      document.getElementById(chaArrId[offsetReplace(charcode)]).className="button";
      }
      catch(e)
      {
      window.status="Please Key Board enable";
      }
      //event.keyCode=113;
}
 OnDown=function()
{
var keycode=event.keyCode?event.keyCode : event.charCode;
var charcode="";
keyCombSets+= event.keyCode;
try
{
charcode=String.fromCharCode(keycode);
}
catch(e)
{
window.status= "OnDowb :"+e;
}
//alert("OnDown:key code:"+keycode+"|charcode:"+charcode);
window.status="OnDown|"+keycode;

}
 OnUp=function()
{
      var keycode=event.keyCode?event.keyCode : event.charCode;
      var charcode="";
      keyCombSets+= event.keyCode;
      try
      {
            charcode=String.fromCharCode(keycode);
      }
      catch(e)
      {
            window.status= "OnDowb :"+e;
      }
      //alert("OnUp:key code:"+keycode+"charcode:"+charcode);
      //window.status="OnUp";
}


 convUniCode=function(code)
{
//alert("code ="+code);
      //code=parseInt(code)+2944;
      if(parseInt(document.getElementById('lang').value) >0 )
      {
      code=parseInt(code)+ parseInt(document.getElementById('lang').value);
//alert("code ="+code);
      var icode=code;
      code=d2h(code);
      code=code.toUpperCase();
      var ucode='"\\u0' + code+'"';
//alert(" uni code ="+ucode);
      if((icode >  1 ) && (icode < 10000))
      {
            //alert("Code=" + code +" hexa Decimal="+d2h(code).toUpperCase()); 
            //setValeById("uniCode",eval(ucode)); 
            return eval(ucode); //alert(eval(ucode));
      }
      else
      {
            alert("unicode out of the limite ");
      }
      }
      return code;
}
 change=function(inp)
{
//alert("change:"+inp);

var offArry=offsetArry[inp];
var out=offArry.split('|');
var i=0;
var rtStr="";
for(var i=0;i <out.length;i++)
{
      //rtStr=rtStr+"$" + out[i]+"="+convUniCode(parseInt(out[i]));
      //rtStr=rtStr+"$" + out[i]+"="+convUniCode(parseInt(out[i]));
      if(parseInt(document.forms[0].lang.value) >0 )
      {
      rtStr=rtStr+convUniCode(parseInt(out[i]));
      }
      else
      {
            rtStr=chaArr[inp];
      }
}


return rtStr;
}
function d2h(d) {return d.toString(16);}
function h2d(h) {return parseInt(h,16);}



 offsetReplaceComb=function()
{
      var ofsetCombo= 'Letter';
      //alert(" offsetReplace:A");
      ofsetCombo=ofsetCombo+'</td>';
      ofsetCombo=ofsetCombo+'<td class="ctext">';
      ofsetCombo=ofsetCombo+'<select name= "rName" id="rName" onchange="javascript:rNo.value=rName.value; val1();">';
      for(lv_i=0;lv_i<chaArr.length;lv_i++)
      ofsetCombo=ofsetCombo+'<option value='+ lv_i+'>'+chaArr[lv_i]+'</option>'; ofsetCombo=ofsetCombo+'</select>';
      ofsetCombo=ofsetCombo+'</td>';
//    alert(" offsetReplace:B");
      ofsetCombo=ofsetCombo+'<td class="ctext">';
      ofsetCombo=ofsetCombo+'offset';
      ofsetCombo=ofsetCombo+'</td>';
      ofsetCombo=ofsetCombo+'<td class="ctext">';
      ofsetCombo=ofsetCombo+'<select name= "rNo" id="rNo"onchange="javascript:rName.value=rNo.value; val1();" >'; for(lv_i=0;lv_i<chaArr.length;lv_i++)
      ofsetCombo=ofsetCombo+'<option value='+lv_i+'>'+offsetArry[lv_i]+'' + lv_i+'</option>'; ofsetCombo=ofsetCombo+'</select>';
      ofsetCombo=ofsetCombo+'</td>';
      //alert(" offsetReplace:C");
      test.innerHTML=ofsetCombo;

  return  0;
}


 offsetReplace=function(inp)
{

      //alert(" inp"+inp);
      for(var i=0;i<chaArr.length;i++)
      {

            if(chaArr[i]==inp)
            {
                 // alert('count:'+ i+':cahr:'+chaArr[i]+':baseArrySplt:'+offsetArry[i]);
                   return i;
            }
      }
  return 1;
}




var readFileIntoDataUrl = function (fileInfo) {
    var loader = $.Deferred(),
      fReader = new FileReader();
    fReader.onload = function (e) {
      loader.resolve(e.target.result);
    };
    fReader.onerror = loader.reject;
    fReader.onprogress = loader.notify;
    fReader.readAsDataURL(fileInfo);
    return loader.promise();
  };
  $.fn.cleanHtml = function () {
    var html = $(this).html();
    return html && html.replace(/(<br>|\s|<div><br><\/div>|&nbsp;)*$/, '');
  };
  $.fn.heaerieDocs = function (userOptions) {
    var editor = this,
      selectedRange,
      options,
      toolbarBtnSelector,
      updateToolbar = function () {
        if (options.activeToolbarClass) {
          $(options.toolbarSelector).find(toolbarBtnSelector).each(function () { 

           // console.log('in  options.commandRole:' );
           // console.log(options.commandRole );
           // console.log('command:');
           // console.log(command );
            var command = $(this).data(options.commandRole);
            if (document.queryCommandState(command)) {
              $(this).addClass(options.activeToolbarClass);
            } else {
              $(this).removeClass(options.activeToolbarClass);
            }
          });
        }
      },
      execCommand = function (commandWithArgs, valueArg) {
        var commandArr = commandWithArgs.split(' '),
          command = commandArr.shift(),
          args = commandArr.join(' ') + (valueArg || '');
        document.execCommand(command, 0, args);
        updateToolbar();
      },
      bindHotkeys = function (hotKeys) {

        $.each(hotKeys, function (hotkey, command) 
        {
          
          editor.keydown(hotkey, function (e) 
          {
            if (editor.attr('contenteditable') && editor.is(':visible')) {
             
              if(command == "doMapForM")
              {

                  console.log(e);


                  document.execCommand('insertText',true,change(offsetReplace(String.fromCharCode(e.keyCode + 32))));

                    /* e.keyIdentifier="U+004F";
                  e.keyCode=78;
                  e.originalEvent.keyIdentifier="U+004F";
                  e.originalEvent.keyCode=78;
                  */

                  //console.log(e.currentTarget.offset());
/*
                   if (  e.shiftKey == true ){
                      //e.currentTarget.innerHTML= e.currentTarget.innerHTML +"<span title='"+String.fromCharCode(e.keyCode)+"'> "+change(offsetReplace(String.fromCharCode(e.keyCode)))+"</span>"
                      e.currentTarget.innerHTML= e.currentTarget.innerHTML +"<span title='"+String.fromCharCode(e.keyCode)+"'> "+change(offsetReplace(String.fromCharCode(e.keyCode)))+"</span>"
                   }
                    else{

                       //  e.currentTarget.innerHTML= e.currentTarget.innerHTML +"<span title='"+String.fromCharCode(e.keyCode)+"'> "+change(offsetReplace(String.fromCharCode(e.keyCode + 32)))+"</span>"
                         e.currentTarget.innerHTML= e.currentTarget.innerHTML +"<span title='"+String.fromCharCode(e.keyCode)+"'> "+change(offsetReplace(String.fromCharCode(e.keyCode + 32)))+"</span>"
                 
                    }
*/
                e.preventDefault();
                e.stopPropagation();


                //document.execCommand("innerHTML", true, change(offsetReplace(String.fromCharCode(e.keyCode + 32))));

                console.log(e);

              }
              else
              {
               e.preventDefault();
              
              e.stopPropagation();
              execCommand(command);
            }

            }
          }).keyup(hotkey, function (e) {
            if (editor.attr('contenteditable') && editor.is(':visible')) {
              e.preventDefault();
              e.stopPropagation();
            }
          });
        });
      },
      getCurrentRange = function () {
        var sel = window.getSelection();
        if (sel.getRangeAt && sel.rangeCount) {

          console.log('getCurrentRange:');
          console.log(sel.getRangeAt(0));
          return sel.getRangeAt(0);
        }
      },
      saveSelection = function () {
        selectedRange = getCurrentRange();
      },
      restoreSelection = function () {
        var selection = window.getSelection();
        if (selectedRange) {
          try {
            selection.removeAllRanges();
          } catch (ex) {
            document.body.createTextRange().select();
            document.selection.empty();
          }

          selection.addRange(selectedRange);
        }
      },
      insertFiles = function (files) {
        editor.focus();
        $.each(files, function (idx, fileInfo) {
          if (/^image\//.test(fileInfo.type)) {
            $.when(readFileIntoDataUrl(fileInfo)).done(function (dataUrl) {
              execCommand('insertimage', dataUrl);
            }).fail(function (e) {
              options.fileUploadError("file-reader", e);
            });
          } else {
            options.fileUploadError("unsupported-file-type", fileInfo.type);
          }
        });
      },
      markSelection = function (input, color) {
        restoreSelection();
        if (document.queryCommandSupported('hiliteColor')) {
          document.execCommand('hiliteColor', 0, color || 'transparent');
        }
        saveSelection();
        input.data(options.selectionMarker, color);
      },
      bindToolbar = function (toolbar, options) {
        toolbar.find(toolbarBtnSelector).click(function () {
          restoreSelection();
          editor.focus();
          execCommand($(this).data(options.commandRole));
          saveSelection();
        });
        toolbar.find('[data-toggle=dropdown]').click(restoreSelection);

        toolbar.find('input[type=text][data-' + options.commandRole + ']').on('webkitspeechchange change', function () {
          var newValue = this.value; /* ugly but prevents fake double-calls due to selection restoration */
          this.value = '';
          restoreSelection();
          if (newValue) {
            editor.focus();
            execCommand($(this).data(options.commandRole), newValue);
          }
          saveSelection();
        }).on('focus', function () {
          var input = $(this);
          if (!input.data(options.selectionMarker)) {
            markSelection(input, options.selectionColor);
            input.focus();
          }
        }).on('blur', function () {
          var input = $(this);
          if (input.data(options.selectionMarker)) {
            markSelection(input, false);
          }
        });
        toolbar.find('input[type=file][data-' + options.commandRole + ']').change(function () {
          restoreSelection();
          if (this.type === 'file' && this.files && this.files.length > 0) {
            insertFiles(this.files);
          }
          saveSelection();
          this.value = '';
        });
      },
      initFileDrops = function () {
        editor.on('dragenter dragover', false)
          .on('drop', function (e) {
            var dataTransfer = e.originalEvent.dataTransfer;
            e.stopPropagation();
            e.preventDefault();
            if (dataTransfer && dataTransfer.files && dataTransfer.files.length > 0) {
              insertFiles(dataTransfer.files);
            }
          });
      };
    options = $.extend({}, $.fn.heaerieDocs.defaults, userOptions);
    toolbarBtnSelector = 'a[data-' + options.commandRole + '],button[data-' + options.commandRole + '],input[type=button][data-' + options.commandRole + ']';
    bindHotkeys(options.hotKeys);
    if (options.dragAndDropImages) {
      initFileDrops();
    }
    bindToolbar($(options.toolbarSelector), options);
    editor.attr('contenteditable', true)
      .on('mouseup keyup mouseout', function () {
        saveSelection();
        updateToolbar();
      });
    $(window).bind('touchend', function (e) {
      var isInside = (editor.is(e.target) || editor.has(e.target).length > 0),
        currentRange = getCurrentRange(),
        clear = currentRange && (currentRange.startContainer === currentRange.endContainer && currentRange.startOffset === currentRange.endOffset);
      if (!clear || isInside) {
        saveSelection();
        updateToolbar();
      }
    });
    return this;
  };
  $.fn.heaerieDocs.defaults = {
    hotKeys: {
      'ctrl+b meta+b': 'bold',
      'ctrl+i meta+i': 'italic',
      'ctrl+u meta+u': 'underline',
      'ctrl+z meta+z': 'undo',
      'ctrl+y meta+y meta+shift+z': 'redo',
      'ctrl+l meta+l': 'justifyleft',
      'ctrl+r meta+r': 'justifyright',
      'ctrl+e meta+e': 'justifycenter',
      'ctrl+j meta+j': 'justifyfull',
      'shift+tab': 'outdent', 
      'a b c d e f g h i j k l m n o p q r s t u v w x y z': 'doMapForM',
      'tab': 'indent'
    },
    toolbarSelector: '[data-role=editor-toolbar]',
    commandRole: 'edit',
    activeToolbarClass: 'btn-info',
    selectionMarker: 'edit-focus-marker',
    selectionColor: 'darkgrey',
    dragAndDropImages: true,
    fileUploadError: function (reason, detail) { console.log("File upload error", reason, detail); }
  };
  
$.fn.selectRange = function(start, end) {
    return this.each(function() {
        if (this.setSelectionRange) {
            this.focus();
            this.setSelectionRange(start, end);
        } else if (this.createTextRange) {
            var range = this.createTextRange();
            range.collapse(true);
            range.moveEnd('character', end);
            range.moveStart('character', start);
            range.select();
        }
    });
};



  $scope.initToolbarBootstrapBindings = function() {
      var fonts = ['Serif', 'Sans', 'Arial', 'Arial Black', 'Courier', 
            'Courier New', 'Comic Sans MS', 'Helvetica', 'Impact', 'Lucida Grande', 'Lucida Sans', 'Tahoma', 'Times',
            'Times New Roman', 'Verdana'],
            fontTarget = $('[title=Font]').siblings('.dropdown-menu');
      $.each(fonts, function (idx, fontName) {
          fontTarget.append($('<li><a data-edit="fontName ' + fontName +'" style="font-family:\''+ fontName +'\'">'+fontName + '</a></li>'));
      });
      $('a[title]').tooltip({container:'body'});
      $('.dropdown-menu input').click(function() {return false;})
        .change(function () {$(this).parent('.dropdown-menu').siblings('.dropdown-toggle').dropdown('toggle');})
        .keydown('esc', function () {this.value='';$(this).change();});

      $('[data-role=magic-overlay]').each(function () { 
        var overlay = $(this), target = $(overlay.data('target')); 
        overlay.css('opacity', 0).css('position', 'absolute').offset(target.offset()).width(target.outerWidth()).height(target.outerHeight());
      });
      if ("onwebkitspeechchange"  in document.createElement("input")) {
        var editorOffset = $('#editor').offset();
        $('#voiceBtn').css('position','absolute').offset({top: editorOffset.top, left: editorOffset.left+$('#editor').innerWidth()-35});
      } else {
        $('#voiceBtn').hide();
      }
  };
 $scope.showErrorAlert= function  (reason, detail) {
    var msg='';
    if (reason==='unsupported-file-type') { msg = "Unsupported format " +detail; }
    else {
      console.log("error uploading file", reason, detail);
    }
    $('<div class="alert"> <button type="button" class="close" data-dismiss="alert">&times;</button>'+ 
     '<strong>File upload error</strong> '+msg+' </div>').prependTo('#alerts');
  };



    
  


$scope.$watch('$viewContentLoaded', function(){
    //Here your view content is fully loaded !!

alert('on viewContentLoaded');
    $('#editor').heaerieDocs({ fileUploadError: $scope.showErrorAlert} );
    window.prettyPrint && prettyPrint();
    
   $scope.initToolbarBootstrapBindings();
  });




 $scope.$on('$viewChangeSuccess', function(){
    //Here your view content is fully loaded !!
    alert('on viewContentLoaded');
    //$scope.getUserDetail();
  });


      // alert("basicDetService");
	
		$scope.basicDetEditSave=function()
    	{


       // console.log($scope);

    			
    		alert('basicDetEditSave :name =' + $scope.name);

        keyBoardService.save({     "grantType"     : "password" 
          /*loginService.authorizeSSO({     "grantType"     : "password" */
                      ,'clientId'    :'CLIENTSP'
                      ,'scope'       : 'GSA'
                      ,'username'    : $scope.email
                      ,'password'    : $scope.password
                      ,'redirectURI' : 'http://localhost:5000/'

                      },function  (resp) {
          // body...
          //console.log($state);
         // $state.go('dashboard');


          //console.log(resp);
          toaster.pop('success','this', JSON.stringify(resp));

          //alert('resp');
        });


          //basicDetService.save()
    		

    		//alert("I am in uss_submit");
    	};
    
	}];
	
});

/*[

 toasterService.pop('success', "title", "text");
      var url = "/authorize"; 
      var config =  { 
          headers: {
            "x-access-token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJIZWFlcmllIEdTTCIsImF1ZCI6Ind3dy5teXJvb21leHBlbnNlLmNvbSIsImlhdCI6IjYwbXMifQ.G37Yj8ljUjbOf-kSyc4j3-YAlbseb1KET9CMBgbJfaE"
           ,'Authorization': 'Basic dGVzdDp0ZXN0'
            ,      'Content-Type': 'application/x-www-form-urlencoded'
            ,'Access-Control-Allow-Origin': false

            
        }
      };
      var dataJson = 
      {
        "email" : "durai145@live.in"
        ,"password" : "1qaz2wsx"
        ,"grantType": "password"
            ,"clientId" : "CLIENTSP"
            ,"scope" : "GSA"
            ,"redirectURI" :"http://localhost:5000"
      };

    /*
    $.post(url , dataJson , function (resp,status,xhr){

        alert("resp" + status);

    },dataType);


  $http.post(url,dataJson,config).then(function (response) 
    { 
     // alert("resp");
      console.log(response);
      alert(JSON.stringify(response));
    },function(data){

      if(data.status == 302)
      {

        alert("Invalid request");
      }
     });
    };

]*/