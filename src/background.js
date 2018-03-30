import * as PIXI from 'pixi.js'
PIXI.utils.skipHello();
export default class Background{
  constructor(container) {
    this.container = container;
    this.mW = this.container.clientWidth;
    this.mH = this.container.clientHeight;
    this.initial();
    
  }
  initial = () =>{
    
    this.app = new PIXI.Application(this.mW,this.mH,{backgroundColor:0xffffff});
    //TODO
    // PIXI.Application is better AutoDetect
    // enable to resize
    this.app.renderer.autoResize = true;
    this.app.renderer.resize(window.innerWidth,window.innerHeight);
    // add canvas
    this.container.appendChild(this.app.renderer.view);
    
    this.scene = [];
    this.imageLinks = [
      '/images/back/animal_01.png',
      '/images/back/animal_02.png',
      '/images/back/animal_03.png',
      '/images/back/animal_04.png',
      '/images/back/bell.png',
      '/images/back/bell_02.png',
      '/images/back/bell_03.png',
      '/images/back/circle_01.png',
      '/images/back/circle_02.png',
      '/images/back/circle_03.png',
      '/images/back/circle_04.png',
      '/images/back/rectangle_03.png',
      '/images/back/rectangle_01.png',
      '/images/back/rectangle_02.png',
      '/images/back/rectangle_03.png',
      '/images/back/rectangle_04.png',
      '/images/back/rectangle_05.png',
      '/images/back/rectangle_06.png',
      '/images/back/square_01.png',
      '/images/back/square_02.png',
      '/images/back/square_03.png'
    ];
    this.prepare();
    this.dudeBoundsPadding = 100;
    this.dudeBounds = new PIXI.Rectangle(-this.dudeBoundsPadding,
                                        -this.dudeBoundsPadding,
                                        this.app.renderer.width + this.dudeBoundsPadding * 2,
                                        this.app.renderer.height + this.dudeBoundsPadding * 2);
    this.app.ticker.add(
      ()=>{
        for(let i = 0;i<this.imageLinks.length;i++){
          let dude = this.scene[i];
          dude.direction += dude.turningSpeed * 0.01;
          dude.x += Math.sin(dude.direction) * dude.speed;
          dude.y += Math.cos(dude.direction) * dude.speed;
          dude.rotation = -dude.direction - Math.PI / 2;
          if (dude.x < this.dudeBounds.x) {
            dude.x += this.dudeBounds.width;
          }
          else if (dude.x > this.dudeBounds.x + this.dudeBounds.width) {
            dude.x -= this.dudeBounds.width;
          }
          if (dude.y < this.dudeBounds.y) {
            dude.y += this.dudeBounds.height;
          }
          else if (dude.y > this.dudeBounds.y + this.dudeBounds.height) {
            dude.y -= this.dudeBounds.height;
          }
        }
      }
    )
  }
  prepare = () =>{
    for(let i = 0;i<this.imageLinks.length;i++){
      let sprite = PIXI.Sprite.fromImage(this.imageLinks[i]);
      sprite.anchor.set(0.5);
      sprite.scale.set(0.8 + Math.random() * 0.3);
      sprite.x = Math.random() * this.app.renderer.width;
      sprite.y = Math.random() * this.app.renderer.height;
      sprite.direction = Math.random() * Math.PI * 2;
      sprite.turningSpeed = Math.random() - 0.8;
      sprite.speed = 0.5 + Math.random() * 2;
      this.scene.push(sprite);
      this.app.stage.addChild(sprite)
    }
  }
}