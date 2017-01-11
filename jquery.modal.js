;(function($){
   function Modal(element,options){
      this.$element=$(element);
      this.options=options;
      this.mSize=this.options.mSize;
      this.close=this.$element.children('.close');
   }
   Modal.prototype.init=function(){
   	  this.setBackground();
   	  this.setModal();
   	  this.setClose();
   };
   Modal.prototype.setBackground=function(){
   	  $('.modal-bg').remove();
   	  $('body').append('<div class="modal-bg"></div>')
      $('.modal-bg').css({
      	width:'100%',
      	height:'100%',
      	backgroundColor:'#000',
      	opacity:0.5,
      	position:'fixed',
      	top:0,
      	left:0,
      	display:'none'
      }).fadeIn(500);
   };
   Modal.prototype.setModal=function(){
      this.$element.css({
      	width:this.mSize.mWidth,
      	height:this.mSize.mHeight,
      	backgroundColor:'#fff',
      	position:'absolute',
      	zIndex:9999,
      	top:this.options.mTop,
      	left:'50%',
      	marginLeft:-(this.mSize.mWidth)/2,
      });
      if(this.options.mAnimation==='fade'){
        this.$element.fadeIn(500);
      }else if(this.options.mAnimation==='slide'){
        this.$element.css({top:-(this.mSize.mHeight),opacity:0,display:'block'})
                     .animate({top:this.options.mTop,opacity:1},500);
      }
   };
   Modal.prototype.setClose=function(){
       this.close.click($.proxy(function(){
       	 $('.modal-bg').fadeOut(500);
       	 if(this.options.mAnimation==='fade'){
	       	 this.$element.fadeOut(500);         	 	
       	 }else if(this.options.mAnimation==='slide'){
	        this.$element.animate({top:-(this.mSize.mHeight),opacity:0},500);
       	 }
       },this));
   };  
   $.fn.jModal=function(option){
      return this.each(function(){
      	var options=$.extend({},$.fn.jModal.default,option);
      	var m=new Modal(this,options);
      	m.init();
      	m.options.onchanging();
      })
   };
   $.fn.jModal.default={
      mSize:{mWidth:500,mHeight:250},
      mTop:100,
      mAnimation:'fade',
      onchanging:function(){}
   };
})(jQuery);