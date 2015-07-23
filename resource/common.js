/**
 * Created by 139358 on 2015/6/15.
 */
(function(win){
	function eventHandl(){

	}
	eventHandl.prototype.addEvent=function(obj,type,fn){
		var typeArr=[];
		if(type.indexOf(' ')>0){
			typeArr=type.split(' ');
		}else{
			typeArr.push(type);
		}
		for(var i=0;i<typeArr.length;i++){
			if(win.addEventListener){
				obj.addEventListener(typeArr[i],fn,false);
			}else if(win.attachEvent){
				obj.attachEvent('on'+typeArr[i],fn);
			}else{
				obj['on'+typeArr[i]]=fn;
			}
		}
	}
	eventHandl.prototype.removeEvent=function(obj,type,fn){
		var typeArr=[];
		if(type.indexOf(' ')>0){
			typeArr=type.split(' ');
		}else{
			typeArr.push(type);
		}
		for(var i=0;i<typeArr.length;i++){
			if(win.removeEventListener){
				obj.removeEventListener(typeArr[i],fn,false);
			}else if(win.detachEvent){
				obj.detachEvent('on'+typeArr[i],fn);
			}else{
				obj['on'+typeArr[i]]=null;
			}
		}
	}
	win['comFn']={
		eventHandel:new eventHandl()
	}
})(window)
