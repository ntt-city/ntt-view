import { Container } from '../container';
import MenuItem from './MenuItem';

export default interface Menu extends Omit<Container, 'props' | 'type'> {

    props: Omit<Container, 'items'> & {
        items: Array<string | MenuItem>;
    }

    type: typeof MenuTypeName;
}

export const MenuTypeName = 'Menu';
