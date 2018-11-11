import { Container } from '../container';
import TreeItem from './TreeItem';

export default interface Tree extends Omit<Container, 'props' | 'type'> {

    props: Omit<Container, 'items'> & {
        items: Array<string | TreeItem>;
    }

    type: typeof TreeTypeName;
}

export const TreeTypeName = 'Tree';
