import withTransform from "engine/modules/Transformable";
import IDestroyable from "engine/modules/IDestroyable";

class CameraObject implements IDestroyable {
    public destroy() : void {}
}

export default withTransform(CameraObject);