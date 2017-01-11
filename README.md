# jQuery模态框插件

## 一、运行示例

双击index.html文件查看示例效果。

## 二、用法Usage

**详细代码见文件夹JModal**

1. index.html文件代码

   ```html
       <!DOCTYPE html>
       <html lang="zh-CN">
         <head>
           <meta charset="utf-8">
           <meta http-equiv="X-UA-Compatible" content="IE=edge">
           <meta name="viewport" content="width=device-width, initial-scale=1">
           <title>jQuery模态框插件</title>
           <script type="text/javascript" src="jquery-1.10.1.js"></script>
           <script type="text/javascript" src="jquery.modal.js"></script>
           <script type="text/javascript" src="index.js"></script>
         </head>
         <style type="text/css">
           .btn,.close{
             width: 150px;
             height: 40px;
             text-align: center;
             line-height: 40px;
             border:1px solid #000;
             cursor: pointer;
             margin: 10px;
           }
           .modal{
             border:1px solid #eee;
             padding: 20px;
           }
           .content{
             margin: 10px;
           }
         </style>
         <body>
             <div class="btn">单击弹出模态框</div>
             <div class="modal" style="display: none;">
               <div class="close">单击关闭模态框</div>
               <div class="content">我是模态框内容</div>
             </div>         
         </body>
       </html>
   ```

   **PS：**

   * 在head区域引入jquery文件，jquery.modal.js模态框插件文件，index.js文件。
   * 类btn所在的div用来触发弹出模态框，类modal所在的div用来放模态框中的内容，类close所在的div用来关闭模态框。
   * style="display: none;表示在触发弹出模态框之前，模态框处于隐藏状态。

2. index.js文件代码

   ```
   $(function(){
   	$('.btn').click(function(){
   		$('.modal').jModal({
   			mSize:{mWidth:500,mHeight:250},
   			mTop:150,
   			mAnimation:'slide'
   		});
   	});
   });
   ```

   **PS：**

   * 在触发弹出模态框的元素上(示例为.btn类)绑定click事件，在事件中，选中模态框标签并调用jModal方法即可，参数传递一个对象，用来配置模态框，详细参数配置见下文。
   * 如果不传递参数，则使用默认配置。

   ## 三、API

   1. jQuery模态框插件参数配置

      * mSize:      配置模态框尺寸，是一个对象，包括：

        ​                 mWidth:   配置模态框的宽度，是一个数值，默认单位为‘px’；

        ​                 mHeight:  配置模态框的高度，是一个数值，默认单位为‘px’；

      * mTop:      配置模态框距离可视窗口上方的距离，是一个数值，默认单位为‘px’；

      * mAnimation:  配置模态框弹出的效果，是一个字符串，fade表示渐隐效果，slide表示滑动效果；

      * onchanging:   配置模态框运行结束后的回调函数，是一个方法。

   2. jQuery模态框插件默认参数配置

      以下为模态框插件的默认配置，在调用时可根据需要更改默认配置，也可以通过传递参数覆盖默认配置；

          {
             mSize:{mWidth:500,mHeight:250},
             mTop:100,
             mAnimation:'fade',
             onchanging:function(){}
          };







