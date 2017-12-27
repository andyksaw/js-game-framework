import { Game } from 'engine/game';
import { PlaneMovement } from 'games/flappy/components/PlaneMovement';

import { SceneGraph, Sprite } from 'engine/library/objects';
import { Vector } from 'engine/library/maths';
import { Viewport, Canvas, Camera } from 'engine/library/screen';
import { BoxCollider } from 'engine/library/collisions';

class FlappyGame extends Game {
    onStart() {
        Camera.transform.position = new Vector(15, 0);

        const planeRed = SceneGraph.instantiate('plane', {
            position: new Vector(50, -50),
            collider: BoxCollider,
            sprite: {
                asset: 'assets/images/planeRed1.png',
                dimensions: new Vector(50, 50),
                // offset: new Vector(0, 0),
            },
            components: [
                PlaneMovement,
            ],
        });

        const planeGreen = SceneGraph.instantiate('planeGreen', {
            position: new Vector(150, -75),
            sprite: {
                asset: 'assets/images/planeGreen1.png',
                dimensions: new Vector(50, 50),
            },
        });
        

        const planeBlue = SceneGraph.instantiate('planeBlue', {
            position: new Vector(150, -155),
            sprite: {
                asset: 'assets/images/planeBlue1.png',
                dimensions: new Vector(50, 50),
            },
        });
        
        planeGreen.setParent(planeRed);
        planeBlue.setParent(planeGreen);
        
        const rock = SceneGraph.instantiate('rock', {
            position: new Vector(350, -150),
            sprite: {
                asset: 'assets/images/rockUp.png',
                dimensions: new Vector(80, 250),
            },
        });
        
    }
}

const game = new FlappyGame();
game.initialise();