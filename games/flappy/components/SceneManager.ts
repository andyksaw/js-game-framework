import { GameObject, Component, SceneGraph } from 'engine/library/objects';
import { Vector } from 'engine/library/maths';
import { Keyboard } from 'engine/library/input';
import { Viewport, Camera } from 'engine/library/screen';

export class SceneManager extends Component {
    private _rockList: Array<GameObject> = [];
    private _scrollSpeed: Vector = Vector.origin;

    protected onInstantiate() : void {
        for(let i = 0; i < 2; i++) {
            SceneGraph.instantiate('backgroundSky'+i, {
                position: new Vector(800 * i, 0),
                order: -999,
                sprite: {
                    assets: ['assets/images/background.png'],
                    // timing: 150,
                    dimensions: new Vector(800, 480),
                    // offset: new Vector(0, 0),
                },
                components: [
                ],
            });
        }

        const rock = SceneGraph.instantiate('rock', {
            position: new Vector(350, -Viewport.height + 239),
            sprite: {
                assets: ['assets/images/rockUp.png'],
                dimensions: new Vector(108, 239),
            },
        });

        for(let i = 0; i < 2; i++) {
            SceneGraph.instantiate('groundBottom'+i, {
                position: new Vector(808 * i, -Viewport.height + 71),
                sprite: {
                    assets: ['assets/images/groundDirt.png'],
                    dimensions: new Vector(808, 71),
                },
            });
        }

        this._scrollSpeed = new Vector(3, 0);
    }

    protected onUpdate(timestep: number) : void {
        // let cameraPos = Camera.transform.getPosition().add(this._scrollSpeed);
        // cameraPos = cameraPos.multiply(timestep);

        // Camera.transform.setPosition(cameraPos);
    }
}