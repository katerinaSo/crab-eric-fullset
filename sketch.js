let cnv;
let bodyImgs = [];
let eyesImgs=[]
let hatImgs=[]
let eyespick,hatpick,bodypick;
let character = "crab";
let crab;
let saveBtn;
let all
let hash,hashDisplay
let num=1
function preload() {
 
     for (let i = 1; i < 7; i++) {
    hatImgs.push(loadImage("hat/hat" + i + ".png"));
  }
     for (let i = 1; i < 7; i++) {
    bodyImgs.push(loadImage("body/skin" + i + ".png"));
  }
     for (let i = 1; i < 7; i++) {
    eyesImgs.push(loadImage("eyes/eyes" + i + ".png"));
  }
    
    
	
}

function setup() {
  cnv = createCanvas(640, 640);
  imageMode(CENTER);
  cnv.parent("#cnv");
  btn = select("#gen");
  hashDisplay=select("#hashCode")
  hatpick=random(hatImgs)
  eyespick=random(eyesImgs)
  bodypick=random(bodyImgs)  
  crab = select("#new");
  crab.mouseClicked(generatePic);
  saveBtn = select("#saveBtn");
  saveBtn.mouseClicked(savePic);
	all=select('#all')
	all.mouseClicked(allpossible)
}

function draw() {
  clear();
  imageMode(CENTER) 
  image(bodypick, width/2, height/2);
  image(hatpick, width / 2, height/2); 
  image(eyespick,width/2,height/2)
}

function generatePic() {
  bodypick = random(bodyImgs);	 
  eyespick= random(eyesImgs)
  hatpick = random(hatImgs)
    
  hash=str(sha256(character+Date.now()))
  hashDisplay.html(hash)	
}


function savePic() {
  saveCanvas(cnv,hash, "png");
}

function allpossible(){
	
	for(let i=0;i<bodyImgs.length;i++){
		for(let j=0;j<eyesImgs.length;j++){
			for(let k=0;k<hatImgs.length;k++){
				image(bodyImgs[i],width/2,height/2)
				image(eyesImgs[j],width/2,height/2)
				image(hatImgs[k],width/2,height/2)
				hash=str(sha256(character+Date.now()))
				saveCanvas('crab'+num+ ".png");
				num+=1
			}
		}
	}
}