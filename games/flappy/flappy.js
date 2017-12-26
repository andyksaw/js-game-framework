import { Game } from 'engine/game';
import { Plane } from 'games/flappy/components/plane';

import { GameObjectFactory, Sprite } from 'engine/library/objects';
import { Vector } from 'engine/library/maths';
import { Viewport, Canvas } from 'engine/library/screen';
import { BoxCollider } from 'engine/library/collisions';

class FlappyGame extends Game {
    onStart() {
        const plane = GameObjectFactory.instantiate('plane', {
            position: new Vector(50, 50),
            collider: BoxCollider,
            sprite: {
                asset: 'assets/images/planeRed1.png',
                dimensions: new Vector(50, 50),
                // offset: new Vector(0, 0),
            },
            components: [
            ],
        });
    }
}

const game = new FlappyGame();
game.initialise();