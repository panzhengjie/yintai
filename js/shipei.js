$(function(){
	(function(){
		var node1 = document.createElement('style');
		var w = document.documentElement.clientWidth/16;
		node1.innerHTML = 'html{font-size:'+w+'px!important}';
		document.head.appendChild(node1);
	})();
})
