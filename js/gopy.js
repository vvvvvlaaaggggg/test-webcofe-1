function kt(){
	var mail=document.gopy.email.value;
	
	if(mail.length==0)
	{
		window.alert('ban chua nhap email');
		window.document.gopy.email.focus();
		return false;
	}
	
}