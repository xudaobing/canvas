var myCanvas_01 = document.querySelector('#myCanvas_01');

var ctx_01 = myCanvas_01.getContext('2d');

function fr_jx(){ //纯色填充
	ctx_01.fillStyle="#0000ff";
	ctx_01.fillRect(100,20,150,100);
}

function fr_Lg(){//渐变填充
	var grd=ctx_01.createLinearGradient(20,0,170,0);
	grd.addColorStop(0,"black");
	grd.addColorStop(0.5,"white");
	grd.addColorStop(1,"black");

	ctx_01.fillStyle=grd;
	ctx_01.fillRect(20,20,150,100);
}

function fr_Rg(){
	var grd=ctx_01.createRadialGradient(75,50,5,90,60,100);
	grd.addColorStop(0,"red");
	grd.addColorStop(1,"black");

	// Fill with gradient
	ctx_01.fillStyle=grd;
	ctx_01.fillRect(10,10,150,100);
}


function fr_Img(){//填充图片
	var img = document.createElement("img");
	img.onload = function(){
		var pat=ctx_01.createPattern(img,"repeat");

		ctx_01.rect(0,0,150,100);
		
		ctx_01.fillStyle=pat;
		
		ctx_01.fill(); //填充当前图层
		}
	img.src = 'images/lamp.gif';
}

var btnCont = document.querySelector('.btnCont');
btnCont.addEventListener('click', function(e){
	var _tag = e.target;

	if( _tag ){
		switch( _tag.className ){
			case 'jx_Cs':
			fr_jx();
			break;
			case 'jx_Jb':
			fr_Lg();
			break;
			case 'jx_Fs':
			fr_Rg();
			break;
			case 'jx_Tp':
			fr_Img();
			break;
		};
	};

	//console.log( _tag );
}, false);


/*- 线 -*/
var myCanvas_02 = document.querySelector('#myCanvas_02'),
	ctx_02 = myCanvas_02.getContext('2d');

function sr_line(){//线纯色
	ctx_02.strokeStyle = '#000';
	ctx_02.strokeRect(10, 10, 100, 50);
}

function sr_Lg(){//线渐变
	var gradient = ctx_02.createLinearGradient(50, 0, 150, 0);
	gradient.addColorStop(0, 'red');
	gradient.addColorStop(1, 'black');
	
	ctx_02.strokeStyle = gradient;
	ctx_02.lineWidth = 5;
	ctx_02.strokeRect(20,20,150,100);
}

var btnCont_Line = document.querySelector('.btnCont_Line');
btnCont_Line.addEventListener('click', function(e){
	var _tag = e.target;

	if( _tag ){
		switch( _tag.className ){
			case 'line_cs':
			sr_line();
			break;
			case 'line_jb':
			sr_Lg();
			break;
		};
	};

	//console.log( _tag );
}, false);









