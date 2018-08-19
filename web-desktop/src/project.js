require=function s(d,h,c){function a(e,t){if(!h[e]){if(!d[e]){var n="function"==typeof require&&require;if(!t&&n)return n(e,!0);if(r)return r(e,!0);var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}var i=h[e]={exports:{}};d[e][0].call(i.exports,function(t){return a(d[e][1][t]||t)},i,i.exports,s,d,h,c)}return h[e].exports}for(var r="function"==typeof require&&require,t=0;t<c.length;t++)a(c[t]);return a}({Chord_Edit_Chord_Button:[function(t,e,n){"use strict";cc._RF.push(e,"874c0jt87ZK0pWqqMSAXM5b","Chord_Edit_Chord_Button"),cc.Class({extends:cc.Component,properties:{},start:function(){this.node.on("touchstart",function(){this._Clicked()},this)},_Clicked:function(){this.node.parent.parent.parent.parent.emit("EditButtonClicked",{chord_name:this.node.getChildByName("Label").getComponent(cc.Label).string,path:this})}}),cc._RF.pop()},{}],Chord_Show_and_Hide_Button:[function(t,e,n){"use strict";cc._RF.push(e,"338625tu9dJlrCYgFzmKRd0","Chord_Show_and_Hide_Button"),cc.Class({extends:cc.Component,properties:{Arrow:{type:cc.SpriteFrame,default:[]}},start:function(){}}),cc._RF.pop()},{}],Chord_add:[function(t,e,n){"use strict";cc._RF.push(e,"017f7dK2WNGNKsGMkN1M+c9","Chord_add"),cc.Class({extends:cc.Component,properties:{},onLoad:function(){var t=this;this.node.enable=1,this.node.on("touchstart",function(){1==t.node.enable&&this.node.parent.emit("Add_Chord",null)},this)},start:function(){}}),cc._RF.pop()},{}],Chord_button_mask:[function(t,e,n){"use strict";cc._RF.push(e,"06e07pfPd5HEJq1Bx1mR3vX","Chord_button_mask"),cc.Class({extends:cc.Component,properties:{FadeinTime:{default:.5},FadeoutTime:{default:.5},MaxOpacity:{default:100}},onLoad:function(){var e=this;this.current=0,this.node.on("Chord_Button_Clicked",function(t){0==e.current?e._FadeIn():1==e.current&&e._FadeOut()})},_FadeIn:function(){var t=this;this.current=1;var e=t.node.opacity,n=e;this.FadeIn_callback=function(){0==this.current&&this.unschedule(this.FadeIn_callback),t.node.opacity=n,n++},this.schedule(this.FadeIn_callback,t.FadeinTime/(t.MaxOpacity-e),t.MaxOpacity-e)},_FadeOut:function(){var t=this;this.current=0;var e=t.node.opacity,n=e;this.FadeOut_callback=function(){1==this.current&&this.unschedule(this.FadeOut_callback),t.node.opacity=n,n--},this.schedule(this.FadeOut_callback,t.FadeoutTime/e,e)}}),cc._RF.pop()},{}],Chord_button:[function(t,e,n){"use strict";cc._RF.push(e,"21943wbRqFDoJl7Nz0CVoOZ","Chord_button"),cc.Class({extends:cc.Component,properties:{SweepDelayTime:{default:10}},onLoad:function(){var n=this;cc.log("233"),this.path=new Array,this.track=new Array,this.chorddata={name:null,scale:[0,0,0,0]},this.playon=1,cc.loader.loadResDir("audio/Ukulele",cc.AudioClip,function(t,e){n.path=e});for(var t=0;t<25;t++)cc.audioEngine.preload(n.path[t]);this.node.button_num,this.chosen=0,this.node.on("touchstart",function(t){1==n.node.parent.mode?(this._loadAudio(),1==n.playon&&this._play()):2==this.node.parent.mode?(cc.log("select: Button No."+this.node.button_num),this.node.parent.select=this.node.button_num,this.node.parent.emit("EditSelectEvent",null)):3==this.node.parent.mode&&(this.node.getChildByName("Button_Mask").emit("Chord_Button_Clicked",null),this.node.parent.select==this.node.button_num?(cc.log("unselect: Button No."+this.node.button_num),this.node.parent.select=-1,this.node.parent.emit("SelectEvent","unselect")):(-1!=this.node.parent.select&&cc.log("unselect: Button No."+this.node.parent.select),cc.log("select: Button No."+this.node.button_num),this.node.parent.select=this.node.button_num,this.node.parent.emit("SelectEvent","re_select")))},this),this.node.on("preload",function(t){this._loadAudio()},this)},start:function(){this._loadAudio()},_loadAudio:function(){var d=this;d.chorddata_name=this.node.getChildByName("Chord_Name").getComponent(cc.Label).string,cc.loader.loadRes("/data/Ukulele",function(t,e){if(t)cc.error(t);else{var n=new RegExp(d.chorddata_name+"\\s\\d\\s\\d\\s\\d\\s\\d","i"),o=e.match(n);if(null==o){for(var i=1;i<5;i++)d.node.getChildByName("Chord_Name").getComponent(cc.Label).string=" ";d.playon=0}else{var s=o[0].split(" ");d.chorddata.scale[0]=parseInt(s[1])+9,d.chorddata.scale[1]=parseInt(s[2])+4,d.chorddata.scale[2]=parseInt(s[3]),d.chorddata.scale[3]=parseInt(s[4])+7,d.playon=1}}})},_play:function(){for(var t=this,e=0;e<4;e++)cc.audioEngine.stop(t.track[e]);e=3;this.schedule(function(){t.track[e]=cc.audioEngine.play(t.path[t.chorddata.scale[e]],!1,1),e--},t.SweepDelayTime/1e3,4)}}),cc._RF.pop()},{}],Chord_main:[function(t,e,n){"use strict";cc._RF.push(e,"1fb453qHL5LQ5bnTd1YCNbh","Chord_main"),cc.Class({extends:cc.Component,properties:{ChordButtonPrefab:{type:cc.Prefab,default:null}},onLoad:function(){this.node.mode=1,this.chordlist=new Array,this.chordlist[0]=cc.instantiate(this.ChordButtonPrefab),this.chordlist[0].parent=this.node,this.chordlist[0].setPosition(0,0),this.chordlist[0].button_num=1,this.button_count=this.chordlist.length,this.button_max=10,cc.log("buttoncount="+this.button_count),this.margin_up=20,this.max=5,this.col=1,this.button_width=cc.instantiate(this.ChordButtonPrefab).width,this.button_height=cc.instantiate(this.ChordButtonPrefab).height,this.node.select=-1,this.button_move_time=.2,this.node.on("Add_Chord",function(t){this._addChord()},this),this.node.on("EditSelectEvent",function(t){this._editChord()},this),this.node.on("SelectEvent",function(t){this._multiSelectChord(t)},this)},_addChord:function(){this.button_count<this.button_max&&(this.chordlist[this.button_count]=cc.instantiate(this.ChordButtonPrefab),this.chordlist[this.button_count].parent=this.node,this.chordlist[this.button_count].getChildByName("Chord_Name").getComponent(cc.Label).string=" ",this.chordlist[this.button_count].button_num=this.button_count+1,this.button_count++,this.col=Math.ceil(this.button_count/this.max),this._buttonArrange())},_editChord:function(t){this.node.getChildByName("Table").emit("EditSelectEvent",null)},_deleteChord:function(){},_buttonArrange:function(){for(var t,e=new Array,n=this.node.height/(this.col+1),o=n*(this.col-1)/2,i=1;i<=this.col;i++){var s=i<this.col?this.max:this.button_count%this.max;0==s&&(s=this.max);var d=this.node.width/(s+1);t=-d*(s-1)/2;for(var h=1;h<=s;h++)e[(i-1)*this.max+h-1]=cc.moveTo(this.button_move_time,t,o),t+=d;this.chordlist[this.button_count-1].setPosition((this.node.width+this.button_height)/2,o),o-=n}cc.log(this.node.getChildByName("Add_Button").enable);for(i=this.node.getChildByName("Add_Button").enable=0;i<this.button_count;i++)this.chordlist[i].runAction(e[i]);this.scheduleOnce(function(){this.node.getChildByName("Add_Button").enable=1},this.button_move_time)}}),cc._RF.pop()},{}],Chord_table:[function(t,e,n){"use strict";cc._RF.push(e,"43fccPT1JVFd4JAHfs4jKHq","Chord_table"),cc.Class({extends:cc.Component,properties:{EditChordPrefab:{type:cc.Prefab,default:null},TableMoveTime:.3,ButtonInterval:10},onLoad:function(){var n=this;cc.loader.loadRes("/data/Ukulele",function(t,e){t?cc.error(t):n._createButtonList(e)})},start:function(){(this.node.show=1)==this.node.show?(this.node.parent.mode=2,this.select_editbutton=-1,this.node.parent.select=-1):0==this.node.show&&(this.node.parent.mode=1);this.node.getChildByName("Show_and_Hide_Button").getComponent(cc.Button),this.node.getChildByName("Show_and_Hide_Button").getComponent(cc.Sprite);this._loadButtonPic(this.node.show),this.select_editbutton=-1,this.node.on("EditSelectEvent",function(t){this._editButton()},this),this.node.on("EditButtonClicked",function(t){this._editButtonClicked(t.detail.chord_name,t.detail.path)},this)},_createButtonList:function(t){var e=this,n=new RegExp("[CDEFGA#bmsu247]+\\s\\d\\s\\d\\s\\d\\s\\d","gi"),o=t.match(n);this.node.chord_namelist=new Array,this.node.chord_buttonlist=new Array;for(var i=0;i<o.length;i++)this.node.chord_namelist[i]=o[i].split(" ")[0];var s=(e.ButtonInterval+cc.instantiate(e.EditChordPrefab).width)/2,d=e.ButtonInterval+cc.instantiate(e.EditChordPrefab).width,h=e.node.getChildByName("Chord_List").getChildByName("view").getChildByName("content");h.width=this.node.chord_namelist.length*(e.ButtonInterval+cc.instantiate(this.EditChordPrefab).width);for(i=0;i<this.node.chord_namelist.length;i++)this.node.chord_buttonlist[i]=new cc.instantiate(e.EditChordPrefab),this.node.chord_buttonlist[i].parent=h,this.node.chord_buttonlist[i].getChildByName("Label").getComponent(cc.Label).string=this.node.chord_namelist[i],this.node.chord_buttonlist[i].setPosition(s+d*i,h.height/2)},_editButton:function(){var t=this.node.parent.getComponent("Chord_main").chordlist[this.node.parent.select-1].getChildByName("Chord_Name").getComponent(cc.Label);this.select_editbutton=null;for(var e=0;e<this.node.chord_namelist.length;e++)this.node.chord_namelist[e]==t.string&&(this.select_editbutton=this.node.chord_buttonlist[e]);null!=this.select_editbutton&&(this.select_editbutton.getComponent(cc.Button).interactable=!1,this.scheduleOnce(function(){this.select_editbutton.getComponent(cc.Button).interactable=!0},.3))},_editButtonClicked:function(t,e){if(-1!=this.node.parent.select){var n=this.node.parent.getComponent("Chord_main").chordlist[this.node.parent.select-1].getChildByName("Chord_Name").getComponent(cc.Label),o=this.node.parent.getComponent("Chord_main").chordlist[this.node.parent.select-1];n.string=t,o.emit("preload",null)}},_loadButtonPic:function(t){t*=4;var e=this.node.getChildByName("Show_and_Hide_Button").getComponent(cc.Button),n=this.node.getChildByName("Show_and_Hide_Button").getComponent(cc.Sprite),o=this.node.getChildByName("Show_and_Hide_Button").getComponent("Chord_Show_and_Hide_Button").Arrow;n.spriteFrame=o[0+t],e.normalSprite=o[0+t],e.pressedSprite=o[1+t],e.hoverSprite=o[2+t],e.disabledSprite=o[3+t]},_pauseAllButton:function(){for(var o=this,t=0;t<this.node.children.length;t++)for(var e=this.node.children[t].getComponents(cc.Button),n=0;n<e.length;n++)e[n].enabled=0;this.scheduleOnce(function(){for(var t=0;t<o.node.children.length;t++)for(var e=o.node.children[t].getComponents(cc.Button),n=0;n<e.length;n++)e[n].enabled=1},this.TableMoveTime)},showAndHide:function(){if(1==this.node.show){this.node.show=0,this.node.parent.mode=1,this.select_editbutton=-1,this.node.parent.select=-1,this._loadButtonPic(this.node.show);var t=cc.moveBy(this.TableMoveTime,0,-this.node.height);this.node.runAction(t),this._pauseAllButton()}else if(0==this.node.show){this.node.show=1,this.node.parent.mode=2,this._loadButtonPic(this.node.show);t=cc.moveBy(this.TableMoveTime,0,this.node.height);this.node.runAction(t),this._pauseAllButton()}},deleteButton:function(){(this.node.parent.mode=2)||(this.node.parent.mode=3)},update:function(){this.node.setLocalZOrder(1)}}),cc._RF.pop()},{}]},{},["Chord_Edit_Chord_Button","Chord_Show_and_Hide_Button","Chord_add","Chord_button","Chord_button_mask","Chord_main","Chord_table"]);