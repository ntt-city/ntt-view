import { Container } from '../container';
import ListItem from './ListItem';

export default interface List extends Omit<Container, 'props' | 'type'> {

    props: Omit<Container, 'items'> & {
        items: Array<string | ListItem>;
    }

    type: typeof ListTypeName;
}

export const ListTypeName = 'List';
