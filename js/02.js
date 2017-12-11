function tab(json) {
		// 默认选中的类型
		json.event=json.event || 'onmouseenter';
		json.isSelected=json.isSelected || 'active';
		json.isCarousel=json.isCarousel || false;
		// 定义
		// 大盒子
		var oBox=document.getElementById(json.id);
		var pre =document.getElementById('pre');
		var Next =document.getElementById('next');
		// 点击ul1
		var oUl1=oBox.children[0];
		var aLi1=oUl1.children;
		// 显示相应内容的ul2
		var oUl2=oBox.children[1];
		var aLi2=oUl2.children;
		// 图片的下标
		var iNow =0;
		// 设置延迟调用 
		var setTime=null;
		// 默认显示的
		aLi1[0].className=json.isSelected;
		aLi2[0].style.display='block';
		
		for (var i=0; i <aLi1.length;i++) {
				aLi1[i].index = i;
				aLi1[i][json.event]=function () {
					if (json.event =='onclick') {
						iNow =this.index;
						clearAdd();
					} else {
						var _this = this;
						 setTime=setTimeout(function () {
								iNow =_this.index;
								clearAdd();
						},500);
					}
				}
				aLi1[i].onmouseleave=function () {
					clearTimeout(setTime);
				}
			}
			// 先清空所有,再添加样式
		function clearAdd() {
			for (var j=0; j <aLi1.length;j++) {
				aLi1[j].className='';
				aLi2[j].style.display='none';
			}
				console.log(2)
				aLi1[iNow].className=json.isSelected;
				aLi2[iNow].style.display='block';
		}
			// 设置自动播放效果
			if (json.isCarousel) {
				// 开启定时器
				var tid =setInterval(next,1000);
				oBox.onmouseenter=function  () {
					// 关闭定时器
					clearInterval(tid);

				}
				oBox.onmouseleave=function () {
					tid=setInterval(next,1000);
				}
								
			}
			
			function next () {
				iNow++;
				if (iNow == aLi1.length) {
					iNow = 0;

				};
				clearAdd();
				// console.log(1);
				// iNow=iNow % aLi1.length;
				
			}
		
	if (Next) {
		Next.onclick = next;
		// 上一页
		pre.onclick = function () {
			iNow--;
			if(iNow < 0) {
				iNow = aLi1.length -1;
				
			}
			clearAdd();
		}
	}
		
}


	

$(function () {
	// $('.a2 a').hover(function () {
	// 	$(this).css('color','red');
	// },function () {
	// 	$(this).css('color','#669595');
	// })
	// 搜索框底下的文字
	$('.a8 a,.a2 a,.a1 a').on('mouseenter',function () {
		$(this).css('color','red');
	})
	$('.a8 a,.a2 a,.a1 a').on('mouseleave',function () {
		$(this).css('color','#669595');
	})
	


	// 鼠标移入热门,移出市场
	$('.bb4').hover(function () {
		$('.bb4').css('backgroundColor','#303345');
		$('.b3').css('backgroundColor','#e11639');
		$('.bb1').css('display','block')
	},function () {
		$('.bb4').css('backgroundColor','#e11639');
		$('.b3').css('backgroundColor','#303345');
		$('.bb1').css('display','none')
	})
	
	// 吸顶条
	// 获取绝对位置
	var Y = $('#tuPian').offset().top;
	console.log('q'+ Y)
	$(window).scroll(function () {
		// 获取向上滚动的距离
		var disY= $(document).scrollTop();
		// console.log(disY)
		if(disY >= Y) {
			$('.aa2').css('display','block');
		}else {
			$('.aa2').css('display','none');
		}
	})



	// 轮播图
		// 设置ul2的宽
	/*
	var iNow =0;
	var aImg= $('.ul2 img');
	$('.ul2').css({width: 419,height: 240,overflow: 'hidden'});
	$('.ul1 li').mouseenter(function () {
			// 移出所有
		$('.ul1 li').removeClass('active');
		$('.ul2 li').fadeOut();
			// 给自己添加
		$(this).addClass('active');
			
		$('.ul2 li').eq($(this).index()).fadeIn();
	})
	$('#next').click(function () {
		iNow++;
		if (iNow >=aImg.length) {
			iNow =iNow % aImg.length;
		};
	})
	*/


	// 水平手风琴
	$('#youzhi .c1 td').width('95px');


	// 图片阴影
	$('#youxiang img').hover(function () {
		$(this).css('box-shadow','3px 5px 12px #292926');
	},function () {
		$(this).css('box-shadow','none');
	})


	// 图片下移
	$('.d5').hover(function () {
		$(this).children().children().eq(2).css('display','block');
	},function () {
		$(this).children().children().eq(2).css('display','none');
	})

	// 鼠标移入,向左展示运动
	$('.xxx').hover(function () {
		$(this).css('box-shadow','3px 5px 5px #292926');
		$(this).children().eq(2).css('display','block');
	},function () {
		$(this).css('box-shadow','none');
		$(this).children().eq(2).css('display','none');

	});
	// $('.xxx').mouseenter(function () {
	// 	$('.xxx').animate({
	// 	$(this).children().eq(1).display:none,
	// 	$(this).children().eq(2).display:block);
	// },2000)
	// })
	




	// 垂直手风琴
	$('.e12').mouseenter(qin);
	$('.e12').mouseleave(function () {
		$('.e112').css('display','block');
		$('.e12 ul').stop().slideUp();
		$(this).children().children().eq(0).css('color','#ccc');

	});
	


function qin () {
		// if ('mouseenter' ==true) {
		// 	$('.e112').css('display','none');
		// }else {
		// 	$('.e112').css('display','block');
		// }
		$('.e112').css('display','none');
		// 所有的ul图片上拉
		$('.e12 ul').stop().slideUp();
		// 数字是灰色的
		$('.e12 .e13').css('color','#ccc')
		// 获取ul的总体
		var oUl = $(this).children().eq(1);
		// $(this).children().eq(1).stop().slideDown();
		// 判断ul总体是否显示
		// $(this).children().children().eq(0).css('color','#ccc');
		// 	oUl.stop().slideDown();
		oUl.stop().slideDown();
		if (oUl.css('display') == 'block') {
			$(this).children().children().eq(0).css('color','#000');
			
		}else {
			$(this).children().children().eq(0).css('color','#ccc');
			// oUl.stop().slideUp();
		}

	}

	// 鼠标移入,背景颜色改变 灰色
	$('.g56').hover(function () {
		$(this).css('backgroundColor','#b4abab');
	},function () {
		$(this).css('backgroundColor','#fff');
	})

	// 鼠标移入,图片改变 二维码
	$('.i1').hover(function () {
		console.log($(this).children().eq(1))
		$(this).children().children().eq(1).css('display','none');
		$(this).children().eq(1).css('display','block');
	},function () {
		$(this).children().children().eq(1).css('display','block');
		$(this).children().eq(1).css('display','none');
	})

	/*$('.i1').hover(function () {
		var x = $(this).children().eq(1);
		var y = $(this).children().children().eq(1);
		// console.log($(this).children().eq(1))
		y.stop.animate({display:none});
		x.stop.animate({display:block},3000);
		// $(this).children().eq(1).css('display','block');
	},function () {
		x.stop.animate({display:none},3000);
		y.stop.animate({display:block});
		// $(this).children().children().eq(1).css('display','block');
		// $(this).children().eq(1).css('display','none');
	})
	*/
	// 衣联简介 选项卡
	tab({id:'box1',isSelected:'selected'})
	tab({id:'box',isCarousel:false});
	$('#box').mouseenter(function () {
		$('.pre-next').css('display','block');
	})
	$('#box').mouseleave(function () {
		$('.pre-next').css('display','none');
	})
	// 第十二部分 新手指南
	$('.k1 dl dd').hover(function () {
		$(this).children().css('color','#fff');
	},function () {
		$(this).children().css('color','#999999');
	})
	// 苹果手机的背景颜色
	$('.k3 div p').hover(function () {
		$(this).css('backgroundColor','#e2e5ea');
	},function () {
		$(this).css('backgroundColor','#999999');
	})
	
	$('.k5 a').hover(function () {
		$(this).css('color','#fff');
	},function () {
		$(this).css('color','#5c5c5c');
	})
	$('.k11 a').hover(function () {
		$(this).css('color','#fff');
	},function () {
		$(this).css('color','#999');
	})
	// 图片发光
	$('.k14 img').hover(function () {
		$(this).css('backgroundColor','rgba(255,255,255,0.3');
	},function () {
		$(this).css('backgroundColor','none');
	})

	$('.m2,.m3,.m4').hover(function () {
		$(this).css('backgroundColor','red');
	},function () {
		$(this).css('backgroundColor','#000');
	})

	// 懒加载
	
	
		var heightY =$(window).height();
		var result = scrollY + heightY;
		var scrollY =$(document).scrollTop();
		$('img').each(function (index,ele) {
				// ele-->js对象-->jq对象
				var top = $(ele).offset().top;
				if (result >= top) {
					// 加载图片
					// ele.src = ele.getAttribute('_src');
					// var _src = $(ele).attr('_src');
					$(ele).attr('src',$(ele).attr('_src'));
				}
			});
	$(document).on('scroll',function () {
		heightY =$(window).height();
		result = scrollY + heightY;
		scrollY =$(document).scrollTop();
		// 总高度
	$('img').each(function (index,ele) {
				// ele-->js对象-->jq对象
				var top = $(ele).offset().top;
				if (result >= top) {
					// 加载图片
					// ele.src = ele.getAttribute('_src');
					// var _src = $(ele).attr('_src');
					$(ele).attr('src',$(ele).attr('_src'));
				}
			});
	

	})

	

	



})


















	
	
	