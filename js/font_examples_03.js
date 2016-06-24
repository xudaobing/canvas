var myCanvas_01 = document.querySelector('#myCanvas_01');
function winChange(){
	var w = this.innerWidth,
		h = w * 2 / 3;
	myCanvas_01.width = w;
	myCanvas_01.height = h;
}
window.addEventListener('resize', winChange, false);
window.addEventListener('load', winChange, false);

var ctx_01 = myCanvas_01.getContext('2d');

function ft_cs(){ //字-纯色
	ctx_01.font = 'bold 30px/150px arial';
	ctx_01.fillStyle="#f00";
	ctx_01.fillText("Hello World",10,50,150);
}

function ft_jb(){ //字-渐变
	ctx_01.font = 'bold 30px/150px arial';
	var gradient = ctx_01.createLinearGradient(10, 0, myCanvas_01.width - 10, 0);
	gradient.addColorStop("0","magenta");
	gradient.addColorStop("0.5","blue");
	gradient.addColorStop("1.0","red");
	
	ctx_01.fillStyle = gradient;
	ctx_01.fillText("Hello World",10,100,150);
}

function ft_mb(){ //字-描边
	ctx_01.font = 'bold 30px/150px arial';
	var gradient = ctx_01.createLinearGradient(10, 0, myCanvas_01.width - 10, 0);
	gradient.addColorStop("0","magenta");
	gradient.addColorStop("0.5","blue");
	gradient.addColorStop("1.0","red");
	
	ctx_01.strokeStyle = gradient;
	ctx_01.strokeText("Hello World",10,150,150);
}

function ft_al(){
	ctx_01.font = 'bold 40px/10px arial';
	ctx_01.strokeStyle = '#000';
	ctx_01.lineWidth = 2;
	
	//ctx_01.strokeText();

	var gradient = ctx_01.createLinearGradient(10, 0, 200, 0);
	gradient.addColorStop("0","magenta");
	gradient.addColorStop("0.5","blue");
	gradient.addColorStop("1.0","red");

	ctx_01.fillStyle = gradient;
	ctx_01.fillText("Hello World",10,200,150);
	ctx_01.strokeText("Hello World",10,200,150);
}


var btnCont = document.querySelector('.btnCont');
btnCont.addEventListener('click', function(e){
	var _tag = e.target;

	if( _tag ){
		switch( _tag.className ){
			case 'ft_cs':
			ft_cs();
			break;
			case 'ft_jb':
			ft_jb();
			break;
			case 'ft_mb':
			ft_mb();
			break;
			case 'ft_al':
			ft_al();
			break;
		};
	};

	//console.log( _tag );
}, false);













