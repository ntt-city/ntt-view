import { Container } from '../container';
import Item from './Item';

export default interface Menu extends Omit<Container, 'props' | 'type'> {

    props: Omit<Container, 'items'> & {
        items: Array<string | Item>;
    }

    type: typeof MenuTypeName;
}

export const MenuTypeName = 'Menu';
