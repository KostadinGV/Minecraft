/**
 * @typedef {import('./game.js').Game} Game
 */

/**
 * Anything that use the Game object should inherit from this
 */
export class GameComponent {
  constructor(game){
    /**
     * The Game object
     * @type {Game}
     */
    this.game = game;
  }

  get cnf(){
    return this.game.cnf;
  }

  get ki(){
    return this.game.ki;
  }

  get r(){
    return this.game.r;
  }

  get canvas(){
    return this.game.canvas;
  }

  get deltaT(){
    return this.game.deltaT;
  }

  get player(){
    return this.game.player;
  }

  get world(){
    return this.game.world;
  }

  get gl(){
    return this.r.gl;
  }

  addEvent(name, hdlr, thisArg=null, elem=null, opts=null){
    this.game.addEvent(name, hdlr, thisArg, elem, opts);
  }
}
