import Visual from '../Visual';
import LayoutTypes from './LayoutTypes';

export default interface Layout extends Omit<Visual, 'type'> {
    type: LayoutTypes;
}
