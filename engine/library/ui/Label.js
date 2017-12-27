import { UiComponent } from 'engine/library/ui';

export default class Label extends UiComponent {
    constructor(config) {
        const {
            text = '',
            fontSize = 16,
        } = config;
    }
}