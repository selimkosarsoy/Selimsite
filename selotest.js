(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
var rect; // used to reference frame bounds
lib.ssMetadata = [
		{name:"selotest_atlas_1", frames: [[0,0,44,41],[0,43,44,41],[0,86,44,41],[0,129,44,41],[0,172,44,41],[0,215,44,41],[46,0,44,41],[46,43,44,41],[46,86,44,41],[46,129,44,41],[46,172,44,41]]}
];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.CachedBmp_32 = function() {
	this.initialize(ss["selotest_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_31 = function() {
	this.initialize(ss["selotest_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_25 = function() {
	this.initialize(ss["selotest_atlas_1"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_24 = function() {
	this.initialize(ss["selotest_atlas_1"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_18 = function() {
	this.initialize(ss["selotest_atlas_1"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_17 = function() {
	this.initialize(ss["selotest_atlas_1"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_10 = function() {
	this.initialize(ss["selotest_atlas_1"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_9 = function() {
	this.initialize(ss["selotest_atlas_1"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_34 = function() {
	this.initialize(ss["selotest_atlas_1"]);
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_2 = function() {
	this.initialize(ss["selotest_atlas_1"]);
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1 = function() {
	this.initialize(ss["selotest_atlas_1"]);
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.A1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		//
		///* Stop at This Frame
		//The  timeline will stop/pause at the frame where you insert this code.
		//Can also be used to stop/pause the timeline of movieclips.
		//*/
		//
		//this.stop();
		//
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = null;
p.frameBounds = [rect, rect];


(lib._1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.text = new cjs.Text("A", "20px 'Times New Roman'");
	this.text.lineHeight = 24;
	this.text.lineWidth = 17;
	this.text.parent = this;
	this.text.setTransform(119.35,279.25);

	this.instance = new lib.CachedBmp_34();
	this.instance.setTransform(116.05,279,0.5,0.5);

	this.text_1 = new cjs.Text("E", "20px 'Times New Roman'");
	this.text_1.lineHeight = 24;
	this.text_1.lineWidth = 14;
	this.text_1.parent = this;
	this.text_1.setTransform(120.55,252.2);

	this.instance_1 = new lib.CachedBmp_34();
	this.instance_1.setTransform(116.05,251.5,0.5,0.5);

	this.text_2 = new cjs.Text("W", "20px 'Times New Roman'");
	this.text_2.lineHeight = 24;
	this.text_2.lineWidth = 22;
	this.text_2.parent = this;
	this.text_2.setTransform(117.6,223.8);

	this.instance_2 = new lib.CachedBmp_34();
	this.instance_2.setTransform(116.05,224,0.5,0.5);

	this.text_3 = new cjs.Text("S", "20px 'Times New Roman'");
	this.text_3.lineHeight = 24;
	this.text_3.lineWidth = 14;
	this.text_3.parent = this;
	this.text_3.setTransform(120.7,196.9);

	this.instance_3 = new lib.CachedBmp_34();
	this.instance_3.setTransform(116.05,196.5,0.5,0.5);

	this.text_4 = new cjs.Text("I", "20px 'Times New Roman'");
	this.text_4.lineHeight = 24;
	this.text_4.lineWidth = 8;
	this.text_4.parent = this;
	this.text_4.setTransform(123.05,169.8);

	this.instance_4 = new lib.CachedBmp_34();
	this.instance_4.setTransform(116.05,169,0.5,0.5);

	this.text_5 = new cjs.Text("B", "20px 'Times New Roman'");
	this.text_5.lineHeight = 24;
	this.text_5.lineWidth = 15;
	this.text_5.parent = this;
	this.text_5.setTransform(120.55,142.3);

	this.instance_5 = new lib.CachedBmp_25();
	this.instance_5.setTransform(116.05,141.5,0.5,0.5);

	this.text_6 = new cjs.Text("T", "18px 'Times New Roman'");
	this.text_6.lineHeight = 22;
	this.text_6.lineWidth = 14;
	this.text_6.parent = this;
	this.text_6.setTransform(120.55,116.1);

	this.instance_6 = new lib.CachedBmp_24();
	this.instance_6.setTransform(116.05,114.25,0.5,0.5);

	this.text_7 = new cjs.Text("A", "20px 'Times New Roman'");
	this.text_7.lineHeight = 24;
	this.text_7.lineWidth = 17;
	this.text_7.parent = this;
	this.text_7.setTransform(67.4,279.25);

	this.instance_7 = new lib.CachedBmp_34();
	this.instance_7.setTransform(64.1,279,0.5,0.5);

	this.text_8 = new cjs.Text("E", "20px 'Times New Roman'");
	this.text_8.lineHeight = 24;
	this.text_8.lineWidth = 14;
	this.text_8.parent = this;
	this.text_8.setTransform(68.6,252.2);

	this.instance_8 = new lib.CachedBmp_34();
	this.instance_8.setTransform(64.1,251.5,0.5,0.5);

	this.text_9 = new cjs.Text("W", "20px 'Times New Roman'");
	this.text_9.lineHeight = 24;
	this.text_9.lineWidth = 22;
	this.text_9.parent = this;
	this.text_9.setTransform(65.65,223.8);

	this.instance_9 = new lib.CachedBmp_34();
	this.instance_9.setTransform(64.1,224,0.5,0.5);

	this.text_10 = new cjs.Text("S", "20px 'Times New Roman'");
	this.text_10.lineHeight = 24;
	this.text_10.lineWidth = 14;
	this.text_10.parent = this;
	this.text_10.setTransform(68.75,196.9);

	this.instance_10 = new lib.CachedBmp_34();
	this.instance_10.setTransform(64.1,196.5,0.5,0.5);

	this.text_11 = new cjs.Text("I", "20px 'Times New Roman'");
	this.text_11.lineHeight = 24;
	this.text_11.lineWidth = 8;
	this.text_11.parent = this;
	this.text_11.setTransform(71.1,169.8);

	this.instance_11 = new lib.CachedBmp_34();
	this.instance_11.setTransform(64.1,169,0.5,0.5);

	this.text_12 = new cjs.Text("B", "20px 'Times New Roman'");
	this.text_12.lineHeight = 24;
	this.text_12.lineWidth = 15;
	this.text_12.parent = this;
	this.text_12.setTransform(68.6,142.3);

	this.instance_12 = new lib.CachedBmp_18();
	this.instance_12.setTransform(64.1,141.5,0.5,0.5);

	this.text_13 = new cjs.Text("T", "18px 'Times New Roman'");
	this.text_13.lineHeight = 22;
	this.text_13.lineWidth = 14;
	this.text_13.parent = this;
	this.text_13.setTransform(68.6,116.1);

	this.instance_13 = new lib.CachedBmp_17();
	this.instance_13.setTransform(64.1,114.25,0.5,0.5);

	this.text_14 = new cjs.Text("V", "20px 'Times New Roman'");
	this.text_14.lineHeight = 24;
	this.text_14.lineWidth = 17;
	this.text_14.parent = this;
	this.text_14.setTransform(119.25,86.6);

	this.instance_14 = new lib.CachedBmp_34();
	this.instance_14.setTransform(116.05,86.95,0.5,0.5);

	this.text_15 = new cjs.Text("A", "20px 'Times New Roman'");
	this.text_15.lineHeight = 24;
	this.text_15.lineWidth = 17;
	this.text_15.parent = this;
	this.text_15.setTransform(119.35,59.6);

	this.instance_15 = new lib.CachedBmp_34();
	this.instance_15.setTransform(116.05,59.35,0.5,0.5);

	this.text_16 = new cjs.Text("E", "20px 'Times New Roman'");
	this.text_16.lineHeight = 24;
	this.text_16.lineWidth = 14;
	this.text_16.parent = this;
	this.text_16.setTransform(120.55,32.55);

	this.instance_16 = new lib.CachedBmp_34();
	this.instance_16.setTransform(116.05,31.85,0.5,0.5);

	this.text_17 = new cjs.Text("W", "20px 'Times New Roman'");
	this.text_17.lineHeight = 24;
	this.text_17.lineWidth = 22;
	this.text_17.parent = this;
	this.text_17.setTransform(117.6,4.15);

	this.instance_17 = new lib.CachedBmp_34();
	this.instance_17.setTransform(116.05,4.35,0.5,0.5);

	this.text_18 = new cjs.Text("S", "20px 'Times New Roman'");
	this.text_18.lineHeight = 24;
	this.text_18.lineWidth = 14;
	this.text_18.parent = this;
	this.text_18.setTransform(120.7,-22.75);

	this.instance_18 = new lib.CachedBmp_34();
	this.instance_18.setTransform(116.05,-23.15,0.5,0.5);

	this.text_19 = new cjs.Text("I", "20px 'Times New Roman'");
	this.text_19.lineHeight = 24;
	this.text_19.lineWidth = 8;
	this.text_19.parent = this;
	this.text_19.setTransform(123.05,-49.85);

	this.instance_19 = new lib.CachedBmp_34();
	this.instance_19.setTransform(116.05,-50.65,0.5,0.5);

	this.text_20 = new cjs.Text("B", "20px 'Times New Roman'");
	this.text_20.lineHeight = 24;
	this.text_20.lineWidth = 15;
	this.text_20.parent = this;
	this.text_20.setTransform(120.55,-77.35);

	this.instance_20 = new lib.CachedBmp_10();
	this.instance_20.setTransform(116.05,-78.15,0.5,0.5);

	this.text_21 = new cjs.Text("M", "18px 'Times New Roman'");
	this.text_21.lineHeight = 22;
	this.text_21.lineWidth = 16;
	this.text_21.parent = this;
	this.text_21.setTransform(118.75,-103.55);

	this.instance_21 = new lib.CachedBmp_9();
	this.instance_21.setTransform(116.05,-105.4,0.5,0.5);

	this.text_22 = new cjs.Text("Variable Refrigerant Flow", "14px 'Times New Roman'");
	this.text_22.lineHeight = 18;
	this.text_22.lineWidth = 191;
	this.text_22.parent = this;
	this.text_22.setTransform(164.9,90.7);

	this.text_23 = new cjs.Text("Roof Top Package Unit", "14px 'Times New Roman'");
	this.text_23.lineHeight = 18;
	this.text_23.lineWidth = 144;
	this.text_23.parent = this;
	this.text_23.setTransform(164.9,62.95);

	this.text_24 = new cjs.Text("Energy Reconery Venatlator", "14px 'Times New Roman'");
	this.text_24.lineHeight = 18;
	this.text_24.lineWidth = 162;
	this.text_24.parent = this;
	this.text_24.setTransform(164.9,35.45);

	this.text_25 = new cjs.Text("Water Chiller", "14px 'Times New Roman'");
	this.text_25.lineHeight = 18;
	this.text_25.lineWidth = 100;
	this.text_25.parent = this;
	this.text_25.setTransform(164.9,7.95);

	this.text_26 = new cjs.Text("On and Off", "14px 'Times New Roman'");
	this.text_26.lineHeight = 18;
	this.text_26.lineWidth = 100;
	this.text_26.parent = this;
	this.text_26.setTransform(164.9,-19.55);

	this.text_27 = new cjs.Text("Inverter", "14px 'Times New Roman'");
	this.text_27.lineHeight = 18;
	this.text_27.lineWidth = 100;
	this.text_27.parent = this;
	this.text_27.setTransform(164.9,-47.05);

	this.text_28 = new cjs.Text("Ultima", "14px 'Times New Roman'");
	this.text_28.lineHeight = 18;
	this.text_28.lineWidth = 100;
	this.text_28.parent = this;
	this.text_28.setTransform(164.9,-74.55);

	this.text_29 = new cjs.Text("Compact Cassette", "14px 'Times New Roman'");
	this.text_29.lineHeight = 18;
	this.text_29.lineWidth = 150;
	this.text_29.parent = this;
	this.text_29.setTransform(164.9,-102.05);

	this.text_30 = new cjs.Text("V", "20px 'Times New Roman'");
	this.text_30.lineHeight = 24;
	this.text_30.lineWidth = 17;
	this.text_30.parent = this;
	this.text_30.setTransform(67.3,86.6);

	this.instance_22 = new lib.CachedBmp_34();
	this.instance_22.setTransform(64.1,86.95,0.5,0.5);

	this.text_31 = new cjs.Text("A", "20px 'Times New Roman'");
	this.text_31.lineHeight = 24;
	this.text_31.lineWidth = 17;
	this.text_31.parent = this;
	this.text_31.setTransform(67.4,59.6);

	this.instance_23 = new lib.CachedBmp_34();
	this.instance_23.setTransform(64.1,59.35,0.5,0.5);

	this.text_32 = new cjs.Text("E", "20px 'Times New Roman'");
	this.text_32.lineHeight = 24;
	this.text_32.lineWidth = 14;
	this.text_32.parent = this;
	this.text_32.setTransform(68.6,32.55);

	this.instance_24 = new lib.CachedBmp_34();
	this.instance_24.setTransform(64.1,31.85,0.5,0.5);

	this.text_33 = new cjs.Text("W", "20px 'Times New Roman'");
	this.text_33.lineHeight = 24;
	this.text_33.lineWidth = 22;
	this.text_33.parent = this;
	this.text_33.setTransform(65.65,4.15);

	this.instance_25 = new lib.CachedBmp_34();
	this.instance_25.setTransform(64.1,4.35,0.5,0.5);

	this.text_34 = new cjs.Text("S", "20px 'Times New Roman'");
	this.text_34.lineHeight = 24;
	this.text_34.lineWidth = 14;
	this.text_34.parent = this;
	this.text_34.setTransform(68.75,-22.75);

	this.instance_26 = new lib.CachedBmp_34();
	this.instance_26.setTransform(64.1,-23.15,0.5,0.5);

	this.text_35 = new cjs.Text("I", "20px 'Times New Roman'");
	this.text_35.lineHeight = 24;
	this.text_35.lineWidth = 8;
	this.text_35.parent = this;
	this.text_35.setTransform(71.1,-49.85);

	this.instance_27 = new lib.CachedBmp_34();
	this.instance_27.setTransform(64.1,-50.65,0.5,0.5);

	this.text_36 = new cjs.Text("B", "20px 'Times New Roman'");
	this.text_36.lineHeight = 24;
	this.text_36.lineWidth = 15;
	this.text_36.parent = this;
	this.text_36.setTransform(68.6,-77.35);

	this.instance_28 = new lib.CachedBmp_2();
	this.instance_28.setTransform(64.1,-78.15,0.5,0.5);

	this.text_37 = new cjs.Text("C", "18px 'Times New Roman'");
	this.text_37.lineHeight = 22;
	this.text_37.lineWidth = 14;
	this.text_37.parent = this;
	this.text_37.setTransform(68.6,-103.55);

	this.instance_29 = new lib.CachedBmp_1();
	this.instance_29.setTransform(64.1,-105.4,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_29},{t:this.text_37},{t:this.instance_28},{t:this.text_36},{t:this.instance_27},{t:this.text_35},{t:this.instance_26},{t:this.text_34},{t:this.instance_25},{t:this.text_33},{t:this.instance_24},{t:this.text_32},{t:this.instance_23},{t:this.text_31},{t:this.instance_22},{t:this.text_30},{t:this.text_29},{t:this.text_28},{t:this.text_27},{t:this.text_26},{t:this.text_25},{t:this.text_24},{t:this.text_23},{t:this.text_22},{t:this.instance_21},{t:this.text_21},{t:this.instance_20},{t:this.text_20},{t:this.instance_19},{t:this.text_19},{t:this.instance_18},{t:this.text_18},{t:this.instance_17},{t:this.text_17},{t:this.instance_16},{t:this.text_16},{t:this.instance_15},{t:this.text_15},{t:this.instance_14},{t:this.text_14},{t:this.instance_13},{t:this.text_13},{t:this.instance_12},{t:this.text_12},{t:this.instance_11},{t:this.text_11},{t:this.instance_10},{t:this.text_10},{t:this.instance_9},{t:this.text_9},{t:this.instance_8},{t:this.text_8},{t:this.instance_7},{t:this.text_7},{t:this.instance_6},{t:this.text_6},{t:this.instance_5},{t:this.text_5},{t:this.instance_4},{t:this.text_4},{t:this.instance_3},{t:this.text_3},{t:this.instance_2},{t:this.text_2},{t:this.instance_1},{t:this.text_1},{t:this.instance},{t:this.text}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib._1, rect = new cjs.Rectangle(63.7,-105.5,294,412.3), [rect]);


(lib.Harf2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.text = new cjs.Text("E", "96px 'Times New Roman'", "#FFFFFF");
	this.text.lineHeight = 108;
	this.text.lineWidth = 64;
	this.text.parent = this;
	this.text.setTransform(4.3,1.55,0.2342,0.2337);

	this.A1 = new lib.A1();
	this.A1.name = "A1";
	this.A1.setTransform(12.65,12.6,0.1543,0.1984,0,0,0,82,63.5);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CC0000").s().p("Ah8B6IAAjzID5AAIAADzg");
	this.shape.setTransform(12.5,12.175);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.A1},{t:this.text}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,25,26.9);
p.frameBounds = [rect];


(lib.Harf1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.text = new cjs.Text("B", "96px 'Times New Roman'", "#FFFFFF");
	this.text.lineHeight = 108;
	this.text.lineWidth = 64;
	this.text.parent = this;
	this.text.setTransform(4.3,1.55,0.2342,0.2337);

	this.A1 = new lib.A1();
	this.A1.name = "A1";
	this.A1.setTransform(12.65,12.6,0.1543,0.1984,0,0,0,82,63.5);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CC0000").s().p("Ah8B6IAAjzID5AAIAADzg");
	this.shape.setTransform(12.5,12.175);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.A1},{t:this.text}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,25,26.9);
p.frameBounds = [rect];


(lib.Buton3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.text = new cjs.Text("E", "96px 'Times New Roman'", "#FFFFFF");
	this.text.lineHeight = 108;
	this.text.lineWidth = 64;
	this.text.parent = this;
	this.text.setTransform(6.8,1.6,0.4057,0.3692);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CC0000").s().p("AjGDAIAAl/IGMAAIAAF/g");
	this.shape.setTransform(19.7,19.15);

	this.instance = new lib._1();
	this.instance.setTransform(-57.4,163.45);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.text}]}).to({state:[{t:this.shape},{t:this.text},{t:this.instance}]},1).to({state:[{t:this.shape},{t:this.text}]},1).to({state:[{t:this.shape},{t:this.text}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-0.1,0,39.7,41.6);
p.frameBounds = [rect, new cjs.Rectangle(-0.1,0,300.4,470.2), rect=new cjs.Rectangle(-0.1,0,39.7,41.6), rect];


(lib.Buton2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Harf2("synched",0);
	this.instance.setTransform(19.75,21.2,1.582,1.5829,0,0,0,12.5,13.4);

	this.text = new cjs.Text("Mini VRF Condensor", "14px 'Times New Roman'");
	this.text.lineHeight = 18;
	this.text.lineWidth = 169;
	this.text.parent = this;
	this.text.setTransform(32.35,142);

	this.text_1 = new cjs.Text("VRF Modular Condensor", "14px 'Times New Roman'");
	this.text_1.lineHeight = 18;
	this.text_1.lineWidth = 172;
	this.text_1.parent = this;
	this.text_1.setTransform(32.35,114.5);

	this.text_2 = new cjs.Text("Condensor", "14px 'Times New Roman'");
	this.text_2.lineHeight = 18;
	this.text_2.lineWidth = 100;
	this.text_2.parent = this;
	this.text_2.setTransform(32.35,87);

	this.text_3 = new cjs.Text("Evaporator", "14px 'Times New Roman'");
	this.text_3.lineHeight = 18;
	this.text_3.lineWidth = 100;
	this.text_3.parent = this;
	this.text_3.setTransform(32.35,59.5);

	this.text_4 = new cjs.Text("N", "20px 'Times New Roman'");
	this.text_4.lineHeight = 24;
	this.text_4.lineWidth = 14;
	this.text_4.parent = this;
	this.text_4.setTransform(4.5,138.8);

	this.instance_1 = new lib.CachedBmp_34();
	this.instance_1.setTransform(0.45,138.4,0.5,0.5);

	this.text_5 = new cjs.Text("M", "20px 'Times New Roman'");
	this.text_5.lineHeight = 24;
	this.text_5.lineWidth = 18;
	this.text_5.parent = this;
	this.text_5.setTransform(2.85,111.7);

	this.instance_2 = new lib.CachedBmp_34();
	this.instance_2.setTransform(0.45,110.9,0.5,0.5);

	this.text_6 = new cjs.Text("C", "20px 'Times New Roman'");
	this.text_6.lineHeight = 24;
	this.text_6.lineWidth = 15;
	this.text_6.parent = this;
	this.text_6.setTransform(4.95,84.2);

	this.instance_3 = new lib.CachedBmp_32();
	this.instance_3.setTransform(0.45,83.4,0.5,0.5);

	this.text_7 = new cjs.Text("E", "18px 'Times New Roman'");
	this.text_7.lineHeight = 22;
	this.text_7.lineWidth = 14;
	this.text_7.parent = this;
	this.text_7.setTransform(4.95,58);

	this.instance_4 = new lib.CachedBmp_31();
	this.instance_4.setTransform(0.45,56.15,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance},{t:this.instance_4},{t:this.text_7},{t:this.instance_3},{t:this.text_6},{t:this.instance_2},{t:this.text_5},{t:this.instance_1},{t:this.text_4},{t:this.text_3},{t:this.text_2},{t:this.text_1},{t:this.text}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,39.6,42.5);
p.frameBounds = [rect, new cjs.Rectangle(0,0,206.4,166.3), rect=new cjs.Rectangle(0,0,39.6,42.5), rect];


(lib.Buton1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Harf1("synched",0);
	this.instance.setTransform(19.75,19.3,1.582,1.582,0,0,0,12.5,12.2);

	this.instance_1 = new lib._1();
	this.instance_1.setTransform(-57.4,163.45);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1},{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,39.6,42.5);
p.frameBounds = [rect, new cjs.Rectangle(0,0,300.3,470.2), rect=new cjs.Rectangle(0,0,39.6,42.5), rect];


// stage content:
(lib.selo = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Buton3();
	this.instance.setTransform(142.95,43.35);
	new cjs.ButtonHelper(this.instance, 0, 1, 2, false, new lib.Buton3(), 3);

	this.instance_1 = new lib.Buton2();
	this.instance_1.setTransform(93.25,43.35);
	new cjs.ButtonHelper(this.instance_1, 0, 1, 2, false, new lib.Buton2(), 3);

	this.instance_2 = new lib.Buton1();
	this.instance_2.setTransform(52.85,55.85,1,1,0,0,0,12.5,12.5);
	new cjs.ButtonHelper(this.instance_2, 0, 1, 2, false, new lib.Buton1(), 3);

	this.text = new cjs.Text("VRF Indoor Unit Example", "23px 'Times New Roman'");
	this.text.lineHeight = 28;
	this.text.lineWidth = 289;
	this.text.parent = this;
	this.text.setTransform(42.95,7.85);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.text},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = rect = new cjs.Rectangle(540.4,325.9,402.8,507.7);
p.frameBounds = [rect];
// library properties:
lib.properties = {
	id: 'B9E35F778AB8994B80F1E2147B0F1A18',
	width: 1000,
	height: 640,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"selotest_atlas_1.png", id:"selotest_atlas_1"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['B9E35F778AB8994B80F1E2147B0F1A18'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;
