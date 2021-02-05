            var obstacles,obstaclesGroup;
            var character,ground,gr;
            var wonSprite,checkpoint,power;
            var lives,score=0;
            var gamestate="start"
            var restart,char,iground,score=0,carr,startb
            var back,start2,truck,col,st,i,m;
            var backh,c,coin,coiinGroup;
            var wall;
            

            function preload() {
                gr=loadImage('1.png')
                re=loadImage('restart.png');
                startbut=loadImage('start.png');
                chare=loadAnimation('0001.png','0001.png','0002.png','0002.png');
                characterr=loadAnimation('0001.png')
                carr=loadImage('car.png')
                truck=loadImage('truck.png')
                st=loadImage('story.png')
                c=loadImage('c.gif')
            }
            function setup() {
                createCanvas(windowWidth,windowHeight);



                restart=createButton('restart')
                restart.position(width/2+400,height-600);
                restart.mousePressed(restart1)
                m=createSprite(width/2,height/2,width+400,height+400)
                m.shapeColor='cyan';
                m.visible=false;
                //i.scale=

                backh=createButton('back')
                backh.position(width/2,height/2+120);
                backh.mousePressed(back1);
                backh.hide();

        col=createButton('story of this game');
        col.position(width/2-80,height/2+40);
        col.style('font-size', '30px');
        col.mousePressed(story6);

                back=createButton('back')
                back.hide();

                startb=createButton('start')
            
                startb.position(width/2,height/2);
                startb.mousePressed(starrtt)
                startb.style('font-size', '30px');
            
                
            iground=createSprite(width/2,height/2+280,1100,110);

                obstaclesGroup=new Group();
                coiinGroup=new Group();

                ground=createSprite(width/2,height/2+400,1100,60);
                ground.addImage(gr)
            
                ground.scale=2.1
                character=createSprite(width/2-400,height/2+116,30,120);
            // character.shapeColor='pink'
              character.addAnimation('character_walking',chare)
             character.addAnimation('stop',characterr)
                character.scale=0.5
                restart.visible=false
                ground.visible=false;
                iground.visible=false;
                character.visible=false;
                if(keyDown('space')&&character.y>470){
                //  character.velocityY=-11.5
                    character.changeAnimation('stop',characterr)}


                

                    
            }

            function draw() {
                background('lightgreen')
                drawSprites();
                
             

                if (gamestate==='start') {
                    // background('lightgreen');
                    textSize(75)
                    textFont('impact')
                    fill('darkgreen');
                    text('ADVENTUROUS FOREST',width/2-300,height/2-70);
                }

                character.collide(iground);
                character.velocityY=character.velocityY+0.5
           
                
            
            
            
                if (gamestate==='play') {

                    character.collide
                      character.debug=true
                    if(frameCount%43===0){
                        coin=createSprite(width/2+600,height/2+160,20,110);
                        coin.y=Math.round(random(height/2+50,height/2+160))
                        coin.velocityX= -(13 +5* score/100);
                        coin.addImage(c);
                        coin.scale=0.5
                        coin.scale=0.1
                        coin.setCollider("rectangle",0,0,50,260);
                       
                        coiinGroup.add(coin)
                            }
 wall1();
                            
                        if (character.isTouching(coiinGroup)) {
                            console.log('hi')
                            coiinGroup.setVisibleEach(false);
                            score=score+1
                        }

                    ground.velocityX= -(13 + 5* score/100);
                    m.visible=true;

                    if (ground.x<0) {
                        ground.x=ground.width/2;
                    }
                    restart.hide();
                    col.hide();
                    startb.hide();
                    restart.visible=true;
                    ground.visible=true;
                    iground.visible=true;
                    character.visible=true
                    ;
            if(keyDown('space')&&character.y>470){
            character.velocityY=-11.5
            //character.changeAnimation('stop',characterr)
            }

            

           //score= Math.round(score+getFrameRate()/60.1);
            fill('red')
            text('score = '+score,width/2+360,height-560)

            character.setCollider("rectangle",4,-19,50,character.height);
            character.debug = true

                obstaclest();
                //coins();

            
                
            if(obstaclesGroup.isTouching(character)){

                gamestate='end'
            }
                }
            if(gamestate==='end'){
            obstaclesGroup.destroyEach();
            coin.destroy();
                background('white');
                obstaclesGroup.setVelocityXEach(0);
                obstacles.velocityX=0
                ground.velocityX=0
                restart.show();
                back.show();
                m.visible=false;
                back.mousePressed(back1)
                back.position(width/2+40,height/2+20)
                textSize(32)
                push();
                fill ('red')
                text("YOU LOST",width/2-50,height/2)
                pop();
                fill('darkblue');
                text("YOUR SCORE WAS= "+score,width/2-100,height/2-40)
                restart.position(width/2-20,height/2+20)
                character.changeAnimation('stop',characterr)
                drawSprites();
            restart.visible=false
            ground.visible=false;
            iground.visible=false;
            character.visible=false;

            character.setCollideEach(wall);
            
            }



            }

            function back1() {
                gamestate='start';
                restart.hide();
                back.hide();
                startb.show();
                col.show();
                i.visible=false;
                backh.hide();
            
            }

            function starrtt() {
                gamestate='play' 
                console.log('hi')
                character.changeAnimation('character_walking',chare)
                score=0;
            }

            function restart1() {
                gamestate='play';
                score=0
                restart.position(width/2+400,height-600);
                character.changeAnimation('character_walking',chare)
                ground.visible=true;
                iground.visible=true;
                character.visible=true;
                back.hide();
            }

            function obstaclest() {
                if(frameCount%60===0){
            obstacles=createSprite(width/2+600,height/2+160,20,110);
            obstacles.velocityX= -(13 +5* score/100);

        
            obstacles.addImage(truck);
            

            //obstacles.shapeCol or='red';
            obstacles.scale=0.5
            obstaclesGroup.add(obstacles);
            obstacles.scale=0.4
            obstacles.setCollider("rectangle",0,0,50,260);
            
            //obstacles.velocityY=obstacles.velocityY+10
            //obstacles.collide(iground);
                }
            }

            function story6() {
                i=createSprite(width/2,height/2+70);
                i.addImage(st);
                startb.hide();
                col.hide();
                backh.show();
            }

            function wall1() {
              

            }

        