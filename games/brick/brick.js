import { Game } from 'engine/game';
import { Block } from 'games/brick/components/block';
import { Bat } from 'games/brick/components/bat';
import { Ball } from 'games/brick/components/ball';
import { GameObjectFactory } from 'engine/library/gameObjectFactory';
import Vector from 'engine/library/vector';
import Viewport from 'engine/library/viewport';
import Canvas from 'engine/library/canvas';

class BrickGame extends Game {
    onStart() {
        const factory = new GameObjectFactory();
        const bat = factory.instantiate(Bat, {
            id: 'bat',
            dimensions: new Vector(180, 20),
            position: new Vector(50, 50),
        });

        const ball = factory.instantiate(Ball, {
            id: 'ball',
            dimensions: new Vector(25, 25),
            position: Viewport.origin,
        });

        const c = new Canvas();
        // c.drawLine(new Vector(100, 350), new Vector(200, 350));
        
        // c.drawLine(new Vector(100, 350), new Vector(500, 250));
        // c.drawLine(new Vector(100, 350), new Vector(300, 450));

        // const line1 = new Vector(500, 250).subtract(new Vector(100, 350));
        // const line2 = new Vector(300, 450).subtract(new Vector(100, 350));
        // const dot = Vector.dot(line1, line2);
        // console.log(dot, line2.multiply(dot));
        // c.drawLine(new Vector(100, 350), line2.multiply(dot), 'blue');

        // const test = factory.instantiate(Bat, {
        //     id: 'bat',
        //     dimensions: new Vector(180, 20),
        //     position: new Vector(150, 150),
        // });

        // bat.addChild(test);


        // for(let i = 0; i < 3; i++) {
        //     const block = factory.instantiate(Block, {
        //         id: 'test',
        //         dimensions: new Vector(150, 35),
        //         position: new Vector(50 * i, 0),
        //     });
        // }
    }
}

const game = new BrickGame();
game.initialise();