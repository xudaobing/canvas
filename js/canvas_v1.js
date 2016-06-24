var numberRegExp = /^[\d.]+$/;


function Canvas(canvas) {
	this.canvas = document.querySelector( canvas );
	this.ctx = this.canvas.getContext("2d");
};

/*- 渐变(放射)、图片填充-*/
Canvas.prototype.linearGradient = function( obj ){
	if( !this.isObject(obj) ) obj = {};
	var _this = this;
	if( !obj.start ) obj.start = {x:0, y:0};
	if( !obj.end ) obj.end = {x:0, y:this.canvas.height};
	
	obj.start.x = numberRegExp.test( obj.start.x ) ? this.toInt( obj.start.x ) : 0;
	obj.start.y = numberRegExp.test( obj.start.y ) ? this.toInt( obj.start.y ) : 0;

	obj.end.x = numberRegExp.test( obj.end.x ) ? this.toInt( obj.end.x ) : 0;
	obj.end.y = numberRegExp.test( obj.end.y ) ? this.toInt( obj.end.y ) : this.canvas.height;

	var ret = this.ctx.createLinearGradient( obj.start.x, obj.start.y, obj.end.x, obj.end.y);

	if( !this.isArray( obj.addColor ) ) obj.addColor = [
		['0','#000'],
		['1','#fff']
	];
	obj.addColor.forEach(function(a){
		if( /^(0|1|[0\.|\.]+[0-9]+)$/.test( a[0] ) ) ret.addColorStop(a[0], a[1]);
	});
	return ret;
};

Canvas.prototype.line = function( option ) { //option => isObject;
	if( !option || !option.to ) return this;

	var _this = this;
	this.ctx.beginPath();
	
	/*- 线 开始点 -*/
	if( !option.start ) option.start = { x : 0, y : 0 };
	this.moveTo( option.start );
	
	/*- 线 转折点 -*/
	if( this.isObject( option.to ) ) this.lineTo( option.to );
	if( this.isArray( option.to ) ) { //多转折点
		option.to.forEach(function( o ){
			if( _this.isObject( o ) ) _this.lineTo( o );
		});
	};

	
	/*- 设置 线 颜色值 或 渐变 -*/
	if( !option.style ) option.style = 'black';
	this.ctx.strokeStyle = option.style;

	/*- 设置 线 宽度 -*/
	if( option.width ) this.lineWidth( option.width );

	!!option.isClose && this.closePath();
	this.stroke();
	return this;
};

Canvas.prototype.lineCap = function( str ){ //结束端点样式
	if( typeof str === 'undefined' ) return this.ctx.lineCap;
	if( typeof str !== 'string' ) str = 'butt';
	str = str.toLowerCase();
	if( str !== 'butt' && !/^(square|round)+$/.test( str ) ) str = 'butt';
	this.ctx.lineCap = str;
	return this;
};
Canvas.prototype.lineJoin = function( str ){ //线拐角类型
	if( typeof str === 'undefined' ) return this.ctx.lineJoin;
	if( typeof str !== 'string' ) str = 'miter';
	str = str.toLowerCase();
	if( str !== 'miter' && !/^(bevel|round)+$/.test( str ) ) str = 'miter';
	this.ctx.lineJoin = str;
	return this;
};
Canvas.prototype.lineWidth = function( int ){ //线宽度
	if( typeof int === 'undefined' ) return this.ctx.lineWidth;
	if( !numberRegExp.test( int ) ) int = 1;
	this.ctx.lineWidth = this.toInt( int );
	return this;
};
Canvas.prototype.miterLimit = function( int ){ //设置或返回线最大斜接长度
	if( typeof int === 'undefined' ) return this.ctx.miterLimit;
	if( !numberRegExp.test( int ) ) int = this.lineWidth();
	this.ctx.miterLimit = this.toInt( int );
	return this;
};
Canvas.prototype.moveTo = function( obj ){
	if( obj && numberRegExp.test( obj.x ) && numberRegExp.test( obj.y ) ) this.ctx.moveTo( this.toInt( obj.x ), this.toInt( obj.y ) );
};
Canvas.prototype.lineTo = function( obj ){
	if( obj && numberRegExp.test( obj.x ) && numberRegExp.test( obj.y ) ) this.ctx.lineTo( this.toInt( obj.x ), this.toInt( obj.y ) );
};
Canvas.prototype.closePath = function(){
	this.ctx.closePath();
	return this;
};
Canvas.prototype.stroke = function(){ //绘制路径
	this.ctx.stroke();
	return this;
};


Canvas.prototype.toInt = function( int ){
	return int && numberRegExp.test( int ) && Math.round( int );
};

Canvas.prototype.isArray = function(o){
	return o && Array.isArray( o );
};
Canvas.prototype.isObject = function( o ){
	return o && Object.prototype.toString.call( o ) === '[object Object]';
};






