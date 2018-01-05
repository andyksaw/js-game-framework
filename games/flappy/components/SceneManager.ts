import { GameObject, Component, BoundingBox } from 'engine/library/objects';
import { Vector } from 'engine/library/maths';
import { Keyboard } from 'engine/library/input';
import { Viewport, Camera } from 'engine/library/screen';
import BoxCollider from 'engine/library/collisions/colliders/BoxCollider';
import SceneGraph from 'engine/library/SceneGraph';

export class SceneManager extends Component {
    private _rockList: Array<GameObject> = [];
    private _scrollSpeed: Vector = Vector.origin;

    public onInstantiate() : void {
        const scene = SceneGraph.instance;

        for(let i = 0; i < 2; i++) {
            scene.instantiate('backgroundSky'+i, {
                position: new Vector(800 * i, 0),
                order: -999,
                sprite: {
                    assets: ['assets/images/background.png'],
                    bounds: new BoundingBox(
                        new Vector(800 * i, 0),
                        new Vector(800, 480),
                    ),
                    // timing: 150,
                },
                components: [
                ],
            });
        }

        const rock = scene.instantiate('rock', {
            position: new Vector(350, -Viewport.instance.height + 239),
            sprite: {
                assets: ['assets/images/rockUp.png'],
                bounds: new BoundingBox(
                    new Vector(350, -Viewport.instance.height + 239),
                    new Vector(108, 239),
                ),
            },
            collider: new BoxCollider(
                new BoundingBox(
                    new Vector(350, -Viewport.instance.height + 239),
                    new Vector(108, 239),
                ),
            ),
        });

        for(let i = 0; i < 2; i++) {
            scene.instantiate('groundBottom'+i, {
                position: new Vector(808 * i, -Viewport.instance.height + 71),
                sprite: {
                    assets: ['assets/images/groundDirt.png'],
                    bounds: new BoundingBox(
                        new Vector(808 * i, -Viewport.instance.height + 71),
                        new Vector(808, 71),
                    ),
                },
            });
        }

        this._scrollSpeed = new Vector(3, 0);
    }

    public onUpdate(timestep: number) : void {
        // let cameraPos = Camera.transform.getPosition().add(this._scrollSpeed);
        // cameraPos = cameraPos.multiply(timestep);

        // Camera.transform.setPosition(cameraPos);
    }
}