const W=1920,H=1080,DURATION=30;
const zhou=[[766,542],[831,534],[902,540],[948,553],[1016,548],[1078,571],[1119,580],[1133,610],[1135,665],[1132,710],[1145,742],[1185,753],[1194,779],[1163,805],[1186,826],[1186,858],[1209,879],[1190,909],[1150,925],[1126,950],[1102,986],[1091,1036],[1070,1078],[1032,1114],[996,1117],[972,1137],[941,1136],[929,1161],[908,1168],[899,1125],[861,1107],[850,1071],[869,1030],[860,1008],[872,981],[885,978],[909,959],[934,952],[952,923],[964,893],[962,858],[953,837],[930,826],[918,793],[912,767],[896,744],[904,715],[917,697],[903,680],[904,660],[890,642],[864,639],[821,629],[790,621],[770,600]];
const qi=[[1119,580],[1165,563],[1216,557],[1275,557],[1304,548],[1351,554],[1380,538],[1400,526],[1410,545],[1400,567],[1374,583],[1371,616],[1362,643],[1351,655],[1358,680],[1349,706],[1361,728],[1370,760],[1390,791],[1414,812],[1403,822],[1364,817],[1340,836],[1306,846],[1280,838],[1257,831],[1238,803],[1208,798],[1194,779],[1185,753],[1145,742],[1132,710],[1135,665],[1133,610]];
const chen=[[1403,822],[1414,844],[1445,850],[1454,874],[1426,893],[1437,921],[1429,950],[1414,981],[1400,1012],[1392,1045],[1377,1075],[1354,1098],[1321,1120],[1290,1137],[1250,1152],[1215,1161],[1199,1197],[1168,1218],[1133,1200],[1118,1221],[1100,1240],[1071,1259],[1051,1287],[1031,1270],[1021,1230],[1030,1200],[1001,1182],[977,1176],[950,1162],[929,1161],[941,1136],[972,1137],[996,1117],[1032,1114],[1070,1078],[1091,1036],[1102,986],[1126,950],[1150,925],[1190,909],[1209,879],[1186,858],[1186,826],[1163,805],[1194,779],[1208,798],[1238,803],[1257,831],[1280,838],[1306,846],[1340,836],[1364,817]];
const liang=[[1188,861],[1210,869],[1224,894],[1204,907],[1190,895]];
const C={zhou:'#e4b354',qi:'#739ec8',chen:'#b593bc',sui:'#da7454'};
function mix(a,b,t){let aa=a.match(/\w\w/g).map(x=>parseInt(x,16)),bb=b.match(/\w\w/g).map(x=>parseInt(x,16));return '#'+aa.map((v,i)=>Math.round(v+(bb[i]-v)*t).toString(16).padStart(2,'0')).join('')}
function ease(t){t=Math.max(0,Math.min(1,t));return t*t*(3-2*t)}
function draw(ctx,bg,t){
 const p=ease((t-4)/4),q=ease((t-12)/3),r=ease((t-21)/5),l=ease((t-19)/1);
 ctx.clearRect(0,0,W,H);ctx.fillStyle='#f4f0e6';ctx.fillRect(0,0,W,H);
 function txt(s,x,y,size=30,color='#21343b',align='left'){ctx.font=`${size>=40?'bold ':''}${size}px "PingFang SC", "Heiti SC", sans-serif`;ctx.fillStyle=color;ctx.textAlign=align;ctx.fillText(s,x,y)}
 txt('从分立到统一',72,78,48);txt('北周灭齐 → 隋代北周 → 隋灭陈',72,122,25,'#65726f');
 ctx.save();ctx.beginPath();ctx.rect(65,158,1100,835);ctx.clip();ctx.fillStyle='#e0e9e5';ctx.fillRect(65,158,1100,835);
 // All stages share this one immutable map transform. North remains up.
 ctx.translate(65,158);ctx.scale(1.09,1.09);ctx.translate(-660,-515);
 ctx.globalAlpha=.52;ctx.drawImage(bg,0,0,1888,1334);ctx.globalAlpha=1;
 function poly(points,fill){ctx.beginPath();points.forEach(([x,y],i)=>i?ctx.lineTo(x,y):ctx.moveTo(x,y));ctx.closePath();ctx.fillStyle=fill;ctx.fill();ctx.strokeStyle=fill;ctx.lineWidth=2;ctx.stroke()}
 let z=mix(C.zhou,C.sui,q);poly(zhou,z);poly(qi,mix(C.qi,z,p));poly(chen,mix(C.chen,C.sui,r));poly(liang,mix('#9faca0',C.sui,l));
 function border(points,alpha){ctx.save();ctx.globalAlpha=alpha;ctx.beginPath();points.forEach(([x,y],i)=>i?ctx.lineTo(x,y):ctx.moveTo(x,y));ctx.strokeStyle='#fff7e8';ctx.lineWidth=2;ctx.stroke();ctx.restore()}
 border([[1119,580],[1133,610],[1135,665],[1132,710],[1145,742],[1185,753],[1194,779]],1-p);
 border([[1403,822],[1364,817],[1340,836],[1306,846],[1280,838],[1257,831],[1238,803],[1208,798],[1194,779],[1163,805],[1186,826],[1186,858],[1209,879],[1190,909],[1150,925],[1126,950],[1102,986],[1091,1036],[1070,1078],[1032,1114],[996,1117],[972,1137],[941,1136],[929,1161]],1-r);
 // A wipe confined to each territory makes annexation legible without moving geography.
 function wipe(points,start,progress,color){if(progress<=0||progress>=1)return;ctx.save();ctx.beginPath();points.forEach(([x,y],i)=>i?ctx.lineTo(x,y):ctx.moveTo(x,y));ctx.closePath();ctx.clip();ctx.fillStyle=color;ctx.fillRect(start,500,400*progress,900);ctx.restore()}
 wipe(qi,1119,p,z);
 const marker=(x,y,label,dx=13,dy=5)=>{ctx.beginPath();ctx.arc(x,y,4,0,7);ctx.fillStyle='#283b40';ctx.fill();txt(label,x+dx,y+dy,20)};
 marker(1110,770,t>=15?'大兴（原长安）':'长安',-145,-10);marker(1281,690,'邺',12,-12);marker(1386,850,'建康',12,-8);
 if(q<.5){txt('北周',1050,855,47,'#483a20','center');if(p<.85)txt('北齐',1266,725,45,'#263d58','center');else txt('北周',1280,725,43,'#483a20','center')}
 else{txt('隋',1140+80*r,827+95*r,68,'#652d22','center')}
 if(r<.9)txt('陈',1280,1020,54,'#4a3651','center');if(l<.9)txt('西梁',1210,923,15,'#334239','center');
 txt('突厥',1030,536,25,'#617267','center');txt('吐谷浑',825,711,24,'#617267','center');
 ctx.restore();
 txt('北 ↑',1095,204,25);txt('固定比例 · 固定视角',90,969,20,'#465b5b');
 let phase=t<4?0:t<12?1:t<21?2:3;
 let years=['572年形势','577年','581年','589年'];let titles=['北周、北齐、陈并立','北周灭北齐','隋代北周','隋灭陈，统一全国'];
 let notes=[['北周在西，北齐在东','陈位于南方'],['北齐区域并入北周','北方主要政权实现统一'],['杨坚建立隋朝','原北周区域整体更换国号'],['隋军攻入建康，陈亡','结束长期分裂局面']];
 txt(years[phase],1230,237,64,'#b55236');txt(titles[phase],1230,310,36);
 notes[phase].forEach((s,i)=>txt(s,1230,382+i*47,28,'#4f615f'));
 const items=[['577','北周灭齐'],['581','隋代北周'],['589','隋灭陈']];items.forEach(([y,s],i)=>{let yy=558+i*104;ctx.fillStyle=phase===i+1?'#e7d7be':'#ece8df';ctx.fillRect(1225,yy-38,610,84);txt(y,1246,yy+12,33);txt(s,1370,yy+10,28)});
 txt('颜色表示政权归属',1230,902,23,'#62716c');[['北周',C.zhou],['北齐',C.qi],['陈',C.chen],['隋',C.sui]].forEach(([s,c],i)=>{ctx.fillStyle=c;ctx.fillRect(1230+i*150,928,20,20);txt(s,1258+i*150,947,22)});
 txt('疆域为教学示意；依据572年图概括三次变化，未逐年复原边界。587年隋废西梁，动画一并交代。',72,1034,21,'#6d7670');
 ctx.fillStyle='#dcd6c9';ctx.fillRect(0,1069,W,11);ctx.fillStyle='#b55236';ctx.fillRect(0,1069,W*t/DURATION,11);
}
if(typeof module!=='undefined')module.exports={draw,W,H,DURATION};
