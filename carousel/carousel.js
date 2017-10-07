(function() {
				var dom = {

					domClass: function(className) {

						var domList = document.getElementsByClassName(className);

						return domList;

					}

				}
				
				//获取ul区域；
				var $ul = dom.domClass('lb')[0];
				
				//获取li图片标签；
				var $li = $ul.children;
					
					console.log($li);
				
				//获取右键
				var $right = dom.domClass('right')[0];
				
				//开始计数；
				var con=0;
				 var len=$li.length;
				//进行右键轮播
				//轮播按钮小点轮播；
				var $ulDot = dom.domClass('cricle')[0];
				var $liDot = $ulDot.children;

				function rightLunbo(){
					
					$li[con].style.opacity=0;
					$liDot[con].className = '';
				    con++;
				   if(con>=len){
				   	
				   	con=0;
				   	
				   }
					$li[con].style.opacity=1;
					$liDot[con].className='active';
					
				}
				
				//右键循环轮播；
				
			var timer = setInterval(function(){
					
					rightLunbo();
					
				},3000);
				
				//鼠标移入，轮播图轮播停止；
				dom.domClass('carousel')[0].onmouseenter=function(){
					
					clearInterval(timer);
					
				}
				//鼠标离开，轮播图开始轮播；
				dom.domClass('carousel')[0].onmouseleave=function(){
					
					timer = setInterval(function(){
						rightLunbo();
					},3000);
					
				}
				//右键点击功能；
				$right.onclick=function(){
					
				  rightLunbo();
					
				}
				//左键点击功能；
				var $left = dom.domClass('left')[0];
				
				$left.onclick = function(){
					
					$li[con].style.opacity =0;
					$liDot[con].className = '';
					con--;
					if(con<0){
						
						con=len-1;
						
					}
					
					$li[con].style.opacity=1;
					$liDot[con].className = 'active';
					
				}
				//对其进行设置data-index属性
				function property(list,$list){
					var $list = $list||'';
					
					for(var n=0;n<list.length;n++){
						
						list[n].setAttribute('data-index',n);
						list[n].setAttribute('class','');
						$list[n].style.opacity = 0;
					}
					
				}
				//点击小点进行切换图片；进行委托事件；
				$ulDot.onclick = function(eve){
					//表示事件真的触发者；
					var $this = eve.target;
					
					//只有当发生点击事件时，才开始设置data-index属性；
				
					
					
					if(eve.target.nodeName=='LI'){
						property($liDot,$li);
						//获取触发对象对应的图片的序号；
						var index =$this.getAttribute('data-index');
//						console.log(index);
						$liDot[index].className='active';
						con=index;
						$li[index].style.opacity=1;
					}
				}
			}());