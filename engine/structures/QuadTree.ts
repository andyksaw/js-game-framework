import { Vector } from "engine/library/maths";

export class QuadNode<T> {
    constructor(
        private _position: Vector,
        private _data: T,
    ) {}

    get position() : Vector {
        return this._position;
    }

    get data() : T {
        return this._data;
    }
}

class Quad<T> {

    // child quads
    private _topLeftTree: Quad<T> = null;
    private _topRightTree: Quad<T> = null;
    private _botLeftTree: Quad<T> = null;
    private _botRightTree: Quad<T> = null;
    private _node: QuadNode<T> = null;

    constructor(
        private _topLeft: Vector = Vector.origin,
        private _botRight: Vector = Vector.origin,
    ) {}

    get topLeft() : Vector {
        return this._topLeft;
    }
    get botRight() : Vector {
        return this._botRight;
    }

    public insert(node: QuadNode<T>) : void {
        if(!this.inBoundary(node.position)) {
            return;
        }

        // since our coordinate system's unit should not be less than 1
        // we shouldn't subdivide quads past that point
        if(
            Math.abs(this._topLeft.x - this._botRight.x) <= 1 &&
            Math.abs(this._topLeft.y - this._botRight.y) <= 1
        ) {
            if(this._node == null) {
                this._node = node;
            }
            return;
        }

        // left region
        if((this._topLeft.x + this._botRight.x) / 2 >= node.position.x) {

            // top left region
            if((this._topLeft.y + this._botRight.y) / 2 >= node.position.y) {
                if(this._topLeftTree == null) {
                    this._topLeftTree = new Quad<T>(
                        new Vector(this._topLeft.x, this._topLeft.y),
                        new Vector(
                            (this._topLeft.x + this._botRight.x) / 2,
                            (this._topLeft.y + this._botRight.y) / 2
                        )
                    );
                }
                this._topLeftTree.insert(node);

            // bot left region
            } else {
                if(this._botLeftTree == null) {
                    this._botLeftTree = new Quad<T>(
                        new Vector(
                            this._topLeft.x, 
                            (this._topLeft.y + this._botRight.y) / 2
                        ),
                        new Vector(
                            (this._topLeft.x + this._botRight.x) / 2,
                            this._botRight.y
                        )
                    );
                }
                this._botLeftTree.insert(node);
            }

        // right region
        } else {
            


        }
    }

    public search(position: Vector) : void {

    }

    public inBoundary(position: Vector) : boolean {
        return false;
    }
}

export default class QuadTree<T> {
    
    

}