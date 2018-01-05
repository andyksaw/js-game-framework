import withTransform from "engine/modules/Transformable";
import IDestroyable from "engine/modules/IDestroyable";
import { getReturnTypeOf } from 'engine/internal/mixins';

class CameraObjectClass implements IDestroyable {
    public destroy() : void {}
}

export const CameraObject = withTransform(CameraObjectClass);

// export the Type as well so we can use this
// as a property type (see internal/mixins)
const returnType = getReturnTypeOf(CameraObject);
export type CameraObjectType = typeof returnType;