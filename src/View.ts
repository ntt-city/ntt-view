import { ContainerType } from './layout';
import Visual from './Visual';
import { Container } from './layout/enums';

// A mechanism for displaying data using custom layout templates and formatting.
export default interface View {
    // children
    children: Visual[];

    // use shell context as initial state
    contextToState: KeyPathMap;

    // container for children
    container: Container | ContainerType[keyof ContainerType];
}