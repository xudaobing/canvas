var body = document.body,
	canvas = document.querySelector('#canvas'),
	ctx = canvas.getContext("2d"),
	GRAVITY_FORCE = 9.81,
	pixelsPerMeter = null;

function wChange(){
	var w = body.offsetWidth,
		h = body.offsetHeight;
	canvas.width = w;
	canvas.height = h;

	pixelsPerMeter = h / 10;
	console.log(w, h);
};
//window.addEventListener('load', wChange, false);
window.addEventListener('resize', wChange, false);

var requestAni = window.requestAnimationFrame || window.webkitRequestAnimationFrame,
	cancelAni = window.cancelAnimationFrame || window.webkitCancelAnimationFrame;

var ball = {
		x : 0,
		y : 0,
		r : 50,
		start_time : null,
		prev_time : null,
		print_id : null,

		isMove : false,

		init : function(){
			this.x = canvas.width - this.r;
			this.y = 50;
		},

		update : function(){
			if( !this.start_time ){
				this.start_time = +new Date();
				this.prev_time = +new Date();
				return;
			};

			var now_time = +new Date();

			this.x -= ( now_time - this.prev_time ) / 1000 * 300;
			this.y += ( now_time - this.prev_time ) / 1000 * ( now_time - this.start_time ) / 1000 * GRAVITY_FORCE * pixelsPerMeter;

			this.prev_time = now_time;
		},

		detect : function(){
			if( this.x <= this.r){
				this.x = this.r;
				this.isMove = false;
			};
			if(this.y >= canvas.height - this.r){
				this.y = canvas.height - this.r;
				this.isMove = false;
			};
		},

		print : function(){
			ctx.clearRect(0, 0, canvas.width, canvas.height);
			ctx.beginPath();
			ctx.arc(this.x, this.y, this.r, 0, 2*Math.PI);
			ctx.fillStyle="green";
			ctx.fill();
		},

		move : function(){
			this.isMove = true;
			if( this.print_id ){
				cancelAni( this.print_id );
				this.print_id = null;
			};

			this.update();
			this.detect();
			this.print();

			if( this.isMove ) this.print_id = requestAni( arguments.callee.bind(this) );
		}
 	};



window.addEventListener('DOMContentLoaded', function(){
	wChange();

	ball.init();
	ball.print();

}, false);







