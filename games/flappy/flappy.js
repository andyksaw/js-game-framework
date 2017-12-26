import { Game } from 'engine/game';
import { PlaneMovement } from 'games/flappy/components/PlaneMovement';

import { GameObjectFactory, Sprite } from 'engine/library/objects';
import { Vector } from 'engine/library/maths';
import { Viewport, Canvas, Camera } from 'engine/library/screen';
import { BoxCollider } from 'engine/library/collisions';

class FlappyGame extends Game {
    onStart() {
        Camera.transform.position = new Vector(15, 0);

        const plane = GameObjectFactory.instantiate('plane', {
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
    }
}

const game = new FlappyGame();
game.initialise();