<!--

//alert("import validate");
var DownKeyCode=0,PressKeyCode=0,UpKeyCode=0;
var prcDate='01-jan-2010';
var bizDate='02-jan-2010';
var sysDate='03-jan-2010';
function onKeyUp(obj)
{
    
	//alert("KeyUp");
    cust_pre_onKeyUp(obj);
    var event;
    
    if (window.event)
	{
			event = window.event;
	}
    UpKeyCode=event.keyCode;
    
   // alert( "PressKeyCode= " +PressKeyCode + "|DownKeyCode = " + DownKeyCode + "|UpKeyCode=" +UpKeyCode);
    
    /* 
     * Need to test the key code combination  in windows /Unix
     * Need to check all browsers are compatible with opera/safri/chrome
     * 
     * 
     * */
    if( (PressKeyCode ==  0 || PressKeyCode ==  223   )&& DownKeyCode == 83 && UpKeyCode == 83 )//Alt+s 	
    {
    
        if( obj.getAttribute('dataType') =='DATE' )
        {
                obj.value= sysDate;
                obj.onchange();
        }
        else
        {
                alert( VLDOKU00001);
             
        }
        
    }
    if( (PressKeyCode ==  0 || PressKeyCode == 8747)  && DownKeyCode == 66 && UpKeyCode == 66 ) //alt +b
    {
        if( obj.getAttribute('dataType') =='DATE' )
        {
                obj.value= bizDate;
                obj.onchange();
        }
        else
        {
                alert(VLDOKU00001);
             
        }
        
    }
    if( (PressKeyCode ==  0 || PressKeyCode == 960) && DownKeyCode == 80 && UpKeyCode == 80 ) //alt + p
    {
        if( obj.getAttribute('dataType') =='DATE' )
        {
                obj.value=prcDate;
                obj.onchange();
        }
        else
        {
                alert(VLDOKU00001);
             
        }
        
    }
    cust_post_onKeyUp(obj);
    DownKeyCode=0;
    PressKeyCode=0;
    UpKeyCode=0;
    
}

function onKeyDown(obj)
{
     cust_pre_onKeyDown(obj);
     var event;
     if (window.event)
	{
			event = window.event;
	}
     DownKeyCode=event.keyCode;
    
    cust_post_onKeyDown(obj);
}

function onKeyPress(obj)
{
    cust_pre_onKeyPress(obj);
    
    var event;
    if (window.event)
	{
			var event = window.event;
	}
    PressKeyCode=event.keyCode;
    cust_post_onKeyPress(obj);
}

function onChange(obj)
{
	
    cust_pre_onChange(obj);    
	if(obj.getAttribute('dataType') =="DATE")
	{
		onChangeVal(obj);
	}
	if(obj.getAttribute('dataType')=="NUMBER")
	{
		valNumber(obj);
	}
	if(obj.getAttribute('dataType')=="AMOUNT")
	{
		
		valAmount(obj);
	}
	if(obj.getAttribute('dataType')=="OPTION")
	{
		
		//alert("id "+ obj.id +" value "+obj.value);
		var radioButtons=  document.forms[0].elements[obj.id];
		for(var i=0; i< radioButtons.length; i++)
		{
			if(i==0 )
			radioButtons[i].value = obj.value;
			//alert("value =["+i+"] "+radioButtons[i].value );
		}
		
	}
//alert("onChange <" + obj.value +">" );
	cust_post_onChange(obj);
}
function valAmount(obj)
{
	if(IsFloate(obj.value)== false)
	{
		alert(obj.getAttribute('label') + VLDOKU00004);
		obj.value="";
		obj.focus();
	}
	
}

function valNumber(obj)
{
	if(IsPositiveNumber(obj.value)== false)
	{
		alert(obj.getAttribute('label') + VLDOKU00002);
		obj.value="";
		obj.focus();
	}
}

function IsFloate(a_strString) 
{

	if(( isNaN(a_strString) ) || ( a_strString.indexOf( " " ) != -1 )  )
		return false;
	else if (a_strString < 0 )
		return true;//-ve active
	else
		return true;
}


function IsPositiveNumber(a_strString) 
{

	if(( isNaN(a_strString) ) || ( a_strString.indexOf( " " ) != -1 ) || ( a_strString.indexOf(".") != -1 ))
		return false;
	else if (a_strString < 0 )
		return false;
	else
		return true;
}

function onValidate(obj)
{
	try
	{
	if(obj.getAttribute('task')=='CANCEL')
	{
		window.close();
	}
	if(obj.getAttribute('task') =='SUBMIT')
	{
		if(!fnValidate())
		{
			return false;
			
		}
		//document.forms[0].method="post";
		//document.forms[0].submit();
		//alert("VALOVDL:003");
	}
	if(obj.getAttribute('task') == 'VALIDATE')
	{
		fnValidate();
	
	}
	}
	catch(e)
	{
		alert('VLDOVLException'+e);
	}
}

function onClick(obj)
{

	try
	{
		if (	cust_pre_onClick(obj) == false )
		{
			return false;
		}
	if(obj.getAttribute('task')=='CANCEL')
	{
		window.close();
	}
	else if(obj.getAttribute('task') =='SUBMIT')
	{
		if(!fnValidate())
		{
			return false;
			
		}
			//alert("VALOVDL:003");
	}
	else if(obj.getAttribute('task') == 'VALIDATE')
	{
		if(!fnValidate())
		{
			return false;
			
		}
	
	}
		
	
		 if  (cust_post_onClick(obj) == false )
		{
			return false;
		}
	}
	catch(e)
	{
		alert('VLDOVLExceptiom'+e);
	}

//	alert("V:Submit");

	if(obj.getAttribute('task') =='SUBMIT')
	{

	document.forms[0].method="post";
		document.forms[0].submit();

	}

}

function fnValidate()
{
var elmnts = document.forms[0].elements;
	
	for ( var i=0; i<elmnts.length;i++)
	{
			if(elmnts[i].getAttribute('mndf') =='Y')
			{
				
				
				if(elmnts[i].getAttribute('dataType') == 'OPTION')
				{
					
					var radioButtons=  document.forms[0].elements[elmnts[i].id];
					try
					{
						var lvFlg=true;
						/*
						if(radioButtons[0].value.length !=0)
						{
						//	return false;
							lvFlg=false;

							
						}
						*/
						for(var j=1;j<=radioButtons.length;j++)
						{
						
							
							if( radioButtons[j].checked == true)
							lvFlg=false;
							//return true;
							break;
						}
						
						if (lvFlg  == true)
						{
							alert( VLDOKU00003 + radioButtons[0].getAttribute('label') );
							radioButtons[1].focus();
							return false;
						}

					}
					catch(e)
					{
						alert("FVDException:"+e);
					}
				}
				else if(elmnts[i].value.length==0)
				{
					alert( VLDOKU00003 + elmnts[i].getAttribute('label') );
					elmnts[i].focus();
					return false;
				}
				
			}
	}
	genXml();
	return true;

}
//alert("end validate");
-->


