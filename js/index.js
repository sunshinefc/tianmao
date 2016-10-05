$(function(){
	var topLb=$('.top_lobox')[0]
	var top_login=$('.top_login',topLb)[0];
	var topLogR=$('.top_loginright',top_login)[0]
	var topR1=$('.top_right1',topLogR)[0]
	var topRhid=$('.top_rhid',topR1)[0]


	var topR4=$('.top_right4',topLogR)[0]
	var topRhid1=$('.top_rhid1',topR4)[0]

	var topR5=$('.top_right5',topLogR)[0]
	var topRhid2=$('.top_rhid2',topR5)[0]

	var topR8=$('.top_right8',topLogR)[0]
	var topRhid3=$('.top_rhid3',topR8)[0]

	var topR9=$('.top_right9',topLogR)[0]
	var topRhid4=$('.top_rhid4',topR9)[0]


	hover(topR1,function(){
		topRhid.style.display='block';
		topR1.style.backgroundColor='#fff';
	},function(){
		topRhid.style.display='none';
		topR1.style.backgroundColor='';

	})

	hover(topR4,function(){
		topRhid1.style.display='block'
		topR4.style.backgroundColor='#fff';
	},function(){
		topRhid1.style.display='none'
		topR4.style.backgroundColor='';

	})


	hover(topR5,function(){
		topRhid2.style.display='block';
	},function(){
		topRhid2.style.display='none';

	})

	hover(topR8,function(){
		topRhid3.style.display='block';
		topR8.style.backgroundColor='#fff';
	},function(){
		topRhid3.style.display='none';
		topR8.style.backgroundColor='';

	})

	hover(topR9,function(){
		topRhid4.style.display='block';
		topR9.style.backgroundColor='#fff';
	},function(){
		topRhid4.style.display='none';
		topR9.style.backgroundColor='';

	})



	//banner上猫头
	var bannerStart=$('.bannerStart')[0];
	var banstarBox=$('.banstarbox',bannerStart)[0];
	var bansRight=$('.bansRight',banstarBox)[0];
	var mt=$('.mt',bansRight)[0];
	//获取猫头img
	var mtimg=$('img',mt)
	//获取a链接
	var mtas=$('a',mt)
	for(var i=0;i<mtimg.length;i++){
		mtas[i].index=i;
		mtas[i].onmouseover=function(){
			for(var j=0;j<mtas.length;j++){
				mtimg[j].style.display='none';
			}
			mtimg[this.index].style.display='block';
		}

		mtas[i].onmouseout=function(){
			mtimg[this.index].style.display='none';
		}
		
	}


	//banner轮播图
	var banner=$('.banner')[0];
	var banmid=$('.banner_mid',banner)[0];
	var banBox=$('.bannerBox',banmid)[0];
	// console.log(banBox)
	//获取图片
	var imgBox=$('.imgBox',banBox)[0];
	var imgs=$('img',imgBox);
	//获取li
	var lis=$('li',banBox)
	// console.log(lis)
	imgs[0].style.opacity=1;
	lis[0].style.backgroundColor='#fff';
	var index=0;

	var t=setInterval(move,2000)
	function move(){
			index++;
			if(index==imgs.length){index=0}
			for(var i=0;i<imgs.length;i++){
				lis[i].style.backgroundColor='#555';
				imgs[i].style.opacity=0;
			}
			imgs[index].style.opacity=1;
			lis[index].style.backgroundColor='#fff';

		}


	banBox.onmouseover=function(){
		clearInterval(t)
	}

	banBox.onmouseout=function(){
		t=setInterval(move,2000)
	}

	for(var i=0;i<imgs.length;i++){

		lis[i].index=i;
		lis[i].onmouseover=function(){

			for(var j=0;j<lis.length;j++){
				lis[j].style.backgroundColor='';
				imgs[j].style.opacity=0;
			}
			lis[this.index].style.backgroundColor='#fff';
			imgs[this.index].style.opacity=1;
		}
	}



	//banner左选项卡
	//获取list

	var banner=$('.banner')[0];
	var bannerMid=$('.banner_mid',banner)[0];
	var bannerW=$('.banner_w',bannerMid)[0];
	var bannerLeft=$('.banner_left',bannerW)[0];
	var bannerList=$('.banner_list',bannerLeft)[0];
	var banList=$('.ban_lists',bannerList)
	var spanscolor=['#e54077','#5049ca','#5b3df5','#ff3378','#573bff','#4080ec','#f75471','#f0a702','#f0a702','#3d7fff','#e62333','#4978ec','#ffaa0f','#3dd29a','#fc202c','#27d0b3']

	// console.log(banList)
	//获取右边的内容
	var banleftCon=$('.banleftCon',bannerLeft)
	var spans=$('span',bannerList)
	for(var i=0;i<banList.length;i++){
			banleftCon[i].style.display='none'
	}
	
	
	for(var i=0;i<banList.length;i++){
		banList[i].index=i;

		banList[i].onmouseover=function(){

			for(var j=0;j<banleftCon.length;j++){
				banleftCon[j].style.display='none'
				spans[j].style.color='';
			}
			banleftCon[this.index].style.display='block'
			spans[this.index].style.color=spanscolor[this.index];
			spans[this.index].style.fontWeight='bold';
		}

		banList[i].onmouseout=function(){
			for(var j=0;j<banleftCon.length;j++){
				banleftCon[j].style.display='none'
			}
		}
	}

	for(var i=0;i<banleftCon.length;i++){
		banleftCon[i].index=i;
		hover(banleftCon[i],function(){
			banleftCon[this.index].style.display='block'
		},function(){
			banleftCon[this.index].style.display='none'
		})
	}








	//shop右下角
	var shop=$('.shop')[0];
	var shopBox=$('.shop_box',shop)
	
	var shopHid=$('.shop_hid')[0];
	var fxxiaoguo=$('.fxxiaoguo',shopHid)
	var sanjiaof=$('.sanjiaof',shopHid)
	console.log(fxxiaoguo)
	for(var i=0;i<shopBox.length;i++){
		shopBox[i].index=i;
		hover(shopBox[i],function(){
			shopBox[this.index].style.backgroundColor='#e40004';
			fxxiaoguo[this.index].style.display='block';
			animate(fxxiaoguo[this.index],{left:-90},300)
		},function(){
			shopBox[this.index].style.backgroundColor='';
			animate(fxxiaoguo[this.index],{left:-120},300)
			fxxiaoguo[this.index].style.display='none';

		})

	}



	//放大效果
	var main4=$('.main_four')[0];
	var main4mf2=$('.main_fourbox',main4)[0];
	var mainf=$('.main_f',main4mf2)
	for(var i=0;i<mainf.length;i++){
		changeBig(mainf[i])
	}


	function changeBig(mainf){
		var mainfa=$('a',mainf)
		
		 
		 for(var i=0;i<mainfa.length;i++){
		 	
		 	mainfa[i].onmouseover=function(){
		 		var img=$('img',this)[0];
		 		animate(img,{width:150,bottom:0},300)
		 		
		 	}
		 	mainfa[i].onmouseout=function(){
		 		var img=$('img',this)[0];
		 		animate(img,{width:122,bottom:10},300)
		 }

		}

	}


	//热门品牌 商标遮罩
	var main3=$('.main_three')[0];
	var mainthmid=$('.main_thmid',main3)[0];
	//获取图片
	var ma3thimgs=$('.m3imgs',mainthmid)
	// console.log(ma3thimgs)

	//获取遮罩
	var m3mask=$('.m3mask',mainthmid)

	for(var i=0;i<ma3thimgs.length;i++){
		ma3thimgs[i].index=i;
		ma3thimgs[i].onmouseover=function(){
			for(var j=0;j<m3mask.length;j++){
				m3mask[j].style.display='none'
			}
			m3mask[this.index].style.display='block'
		}


	}
	
	


	//左移效果 中间
	// var main6=$('.main_six')[0];
	// var main6sm=$('.main_sixm',main6)[0];
	// var main6smm=$('.main_sixmm',main6sm)[0];
	var mainsixmmt=$('.main_sixmmt',document)
	// var main6sa=$('a',main6smm)


	for(var i=0;i<mainsixmmt.length;i++){
		mainsixmmt[i].onmouseover=function(){
			var imgone=$('img',this)[0]
			animate(imgone,{marginLeft:-20},300)
		}

		mainsixmmt[i].onmouseout=function(){
			var imgone=$('img',this)[0]
			animate(imgone,{marginLeft:0},300)
		}
	}

	//右边左移效果
	var main6=$('.main_six');
	for(var i=0;i<main6.length;i++){
		rightmove(main6[i])
	}
	function rightmove(main6){
		var main6sm=$('.main_sixm',main6)[0];
		var main6smm=$('.main_sixmm',main6sm)[3];
		var main6mmtr=$('.main_sixmmtr',main6smm)
		for(var i=0;i<main6mmtr.length;i++){
			main6mmtr[i].onmouseover=function(){
				var img=$('img',this)[0]
				animate(img,{marginLeft:-15},300)
			}
			main6mmtr[i].onmouseout=function(){
				var img=$('img',this)[0]
				animate(img,{marginLeft:0},300)
			}
		}
	}

		var main6=$('.main_six')[2]
		var main6sm=$('.main_sixm',main6)[0];
		var main6smmf=$('.main_sixmmf',main6sm)[3];
		var main6mmtrf=$('.main_sixmmtrf',main6smmf)
		// console.log(main6mmtrf)
		for(var i=0;i<main6mmtrf.length;i++){
			main6mmtrf[i].onmouseover=function(){
				var img=$('img',this)[0]
				animate(img,{marginLeft:-15},300)
			}
			main6mmtrf[i].onmouseout=function(){
				var img=$('img',this)[0]
				animate(img,{marginLeft:0},300)
			}
		}

		//潮电酷玩 左移效果
		var main6two=$('.main_sitwo')[0];
		var main6mlt=$('.main_sitmm',main6two)[0];
		var main6mmtw=$('.main_sitmmt',main6mlt)[0]
		// console.log(main6mmtw)
		main6mmtw.onmouseover=function(){
			var img=$('img',this)[0];
			animate(img,{marginLeft:-20},300)
		}
		main6mmtw.onmouseout=function(){
			var img=$('img',this)[0];
			animate(img,{marginLeft:0},300)
		}


		//猜你喜欢
		var main7m=$('.main_sevenm')[0];
		var main7m1=$('.main_sevenm1',main7m)
		for(var i=0;i<main7m1.length;i++){
			main7m1[i].onmouseover=function(){
				for(var j=0;j<main7m1.length;j++){
					main7m1[j].style.border='';

				}
				this.style.border='1px solid red';
				this.backgroundColor='#fff'
				this.style.opacity=0.7
			}

			main7m1[i].onmouseout=function(){	
				this.style.border='';
				this.style.opacity=1

			}
		}


			//隐藏导航和楼层跳转
				var hidSearch=$('.hidSearch')[0]
				// console.log(hidSearch)

				var falgs=[];
				//楼层跳转
				var leftbodao=$('.left_bottom')[0];
				var leftrbdao=$('.leftrbox',leftbodao);
				
				var sixBox=$('.sixBox')
				var sixTop=[];
				for(var i=0;i<sixBox.length;i++){
					sixTop.push(sixBox[i].offsetTop);
					falgs.push(true);
				}



				//按需加载
				var ch=document.documentElement.clientHeight;
				var needLoad=$('.needLoad')
				var fn=[];
				var needTop=[];
				for(var n=0;n<needLoad.length;n++){
					needTop.push(needLoad[n].offsetTop)
					fn.push(true)
				}

				//隐藏导航
				var f=true;
				window.onscroll=function(){
					var scroll=document.body.scrollTop||document.documentElement.scrollTop;
					if(scroll>870){
						if(f){
							f=false;
							animate(hidSearch,{top:0},300)
							animate(leftbodao,{top:280},500)
							leftbodao.style.display='block'
						}
						
					}else{
						if(!f){
							f=true;
							animate(hidSearch,{top:-50},300)
							animate(leftbodao,{top:-900},500)
						}
						
					}


						//楼层跳转
						// var scroll=document.body.scrollTop||document.documentElement.scrollTop
						// document.title=document.body.scrollTop||document.documentElement.scrollTop

						var bjcolor=['rgb(221,39,39)','rgb(247,169,69)','rgb(25,200,169)','rgb(241,84,83)','rgb(100,195,51)','rgb(10,166,232)','rgb(234,95,141)','rgb(221,39,39)','rgb(221,39,39)']

						// leftrbdao[0].style.backgroundColor=bjcolor[0]
						for(var i=0;i<sixTop.length;i++){
							if(scroll+200>=sixTop[i]){
								for(var j=0;j<sixTop.length;j++){
									leftrbdao[j].style.backgroundColor=''
								}
								leftrbdao[i].style.backgroundColor=bjcolor[i]
							}
						}

						for(var i=0;i<leftrbdao.length;i++){
							leftrbdao[i].index=i;
							leftrbdao[i].onclick=function(){
								animate(document.body,{scrollTop:sixTop[this.index]},300)
								animate(document.documentElement,{scrollTop:sixTop[this.index]},300)
							}
						}


						// 按需加载  
						for(var p=0;p<needTop.length;p++){
							if(scroll+ch>=needTop[p]&&fn[p]){
								fn[p]=false;

								var imgn=needLoad[p].getElementsByTagName('img')
								
								for(var q=0;q<imgn.length;q++){
									imgn[q].src=imgn[q].getAttribute('asrc')
								}
								
							}
						}

					//shop回到顶部
					var shopBox=$('.shop')[0]
					var shopbom=$('a',shopBox)[0]
					console.log(shopbom)
					shopbom.onclick=function(){
						animate(document.body,{scrollTop:0},800)
					}
		}

})