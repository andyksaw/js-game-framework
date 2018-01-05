import { Game } from 'engine/game';
import { GameObjectFactory } from 'engine/modules';
// import { PlaneMovement } from './components/PlaneMovement';
// import { SceneManager } from './components/SceneManager';

// import { Sprite, BoundingBox } from 'engine/library/objects';
// import { Vector } from 'engine/library/maths';
// import { Viewport, Canvas, Camera } from 'engine/library/screen';
// import { BoxCollider } from 'engine/library/collisions/colliders';
// import SceneGraph from 'engine/library/SceneGraph';

new class FlappyGame extends Game {
    onStart() : void {

        GameObjectFactory.instantiate('test', {
            
        });

        // const scene = SceneGraph.instance;
        // const sceneManager = scene.instantiate('sceneManager', {
        //     components: [
        //         SceneManager,
        //     ],
        // });

        // const planeRed = scene.instantiate('plane', {
        //     position: new Vector(50, -50),
        //     // collider: BoxCollider,
        //     sprite: {
        //         assets: [
        //             'assets/images/planeRed1.png',
        //             // 'assets/images/planeRed2.png',
        //             // 'assets/images/planeRed3.png',
        //         ],
        //         bounds: new BoundingBox(
        //             new Vector(50, -50), 
        //             new Vector(50, 50)
        //         ),
        //         // timing: 150,
        //     },
        //     collider: new BoxCollider(
        //         new BoundingBox(
        //             new Vector(50, -50), 
        //             new Vector(50, 50)
        //         ),
        //     ),
        //     components: [
        //         PlaneMovement,
        //     ],
        // });
    }
}