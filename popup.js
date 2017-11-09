document.addEventListener('DOMContentLoaded', () => {
	var btnchange =  document.getElementById('change');
	btnchange.addEventListener("click", function(){
		var str = document.getElementById("furl").value;
		var furl = new URL(str);
		var story = furl.searchParams.get("story_fbid");
		var accid = furl.searchParams.get("id");
		document.getElementById("result").value = "https://www.facebook.com/" + accid + "/posts/" + story;
	});
	
	var btncopy =  document.getElementById('copy');
	btncopy.addEventListener("click", function(){
		var copyTextarea = document.getElementById("result");
		copyTextarea.select();
		
		document.execCommand('copy');
	});
});