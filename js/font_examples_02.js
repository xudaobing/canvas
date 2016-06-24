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
var rect = null;

function create(){
	ctx_01.rect(10, 10, 200, 100);
	ctx_01.lineWidth = 5;
	ctx_01.strokeStyle = 'red';
	ctx_01.stroke();
}

function fill(){
	ctx_01.fillStyle="green";
	ctx_01.fill();
}

function clear(){
	ctx_01.clearRect(20,20,100,50);
}

function scale(){
	ctx_01.scale(1.2, 1.2);
}
function rotate(){
	ctx_01.rotate(20*Math.PI/180);
}

var btnCont = document.querySelector('.btnCont');
btnCont.addEventListener('click', function(e){
	var _tag = e.target;

	if( _tag ){
		switch( _tag.className ){
			case 'jx_cr':
			create();
			break;
			case 'jx_tc':
			fill();
			break;
			case 'jx_cl':
			clear();
			break;
			case 'jx_sc':
			scale();
			break;
			case 'jx_rt':
			rotate();
			break;
		};
	};

	//console.log( _tag );
}, false);













