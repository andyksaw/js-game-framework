import { Game } from 'engine/game';
import { PlaneMovement } from 'games/flappy/components/PlaneMovement';
import { SceneManager } from 'games/flappy/components/SceneManager';

import { SceneGraph, Sprite } from 'engine/library/objects';
import { Vector } from 'engine/library/maths';
import { Viewport, Canvas, Camera } from 'engine/library/screen';
import { BoxCollider } from 'engine/library/collisions/colliders';

class FlappyGame extends Game {
    onStart() {
        Camera.transform.position = new Vector(15, 0);
        
        const sceneManager = SceneGraph.instantiate('sceneManager', {
            components: [
                SceneManager,
            ],
        });

        const planeRed = SceneGraph.instantiate('plane', {
            position: new Vector(50, -50),
            collider: BoxCollider,
            sprite: {
                assets: [
                    'assets/images/planeRed1.png',
                    // 'assets/images/planeRed2.png',
                    // 'assets/images/planeRed3.png',
                ],
                // timing: 150,
                dimensions: new Vector(50, 50),
                // offset: new Vector(0, 0),
            },
            components: [
                PlaneMovement,
            ],
        });
    }
}

const game = new FlappyGame();
game.initialise();