import { Game } from 'engine/game';
import { PlaneMovement } from './components/PlaneMovement';
import { SceneManager } from './components/SceneManager';

import { SceneGraph, Sprite, BoundingBox } from 'engine/library/objects';
import { Vector } from 'engine/library/maths';
import { Viewport, Canvas, Camera } from 'engine/library/screen';
import { BoxCollider } from 'engine/library/collisions/colliders';

class FlappyGame extends Game {
    onStart() {
        const scene = SceneGraph.instance;
        const sceneManager = scene.instantiate('sceneManager', {
            components: [
                SceneManager,
            ],
        });

        const planeRed = scene.instantiate('plane', {
            position: new Vector(50, -50),
            // collider: BoxCollider,
            sprite: {
                assets: [
                    'assets/images/planeRed1.png',
                    // 'assets/images/planeRed2.png',
                    // 'assets/images/planeRed3.png',
                ],
                bounds: new BoundingBox(
                    new Vector(50, -50), 
                    new Vector(50, 50)
                ),
                // timing: 150,
            },
            components: [
                PlaneMovement,
            ],
        });
    }
}

const game = new FlappyGame();
game.initialise();