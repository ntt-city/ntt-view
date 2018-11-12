import { ContainerBase } from './container';
import { Stateful } from './state';

// A mechanism for displaying data using custom layout templates and formatting.
export default interface View extends Stateful, Omit<ContainerBase, 'props' | 'type'> {

    props: ContainerBase['props'] & {
    };

    type?: typeof ViewTypeName;
}

export const ViewTypeName = 'View';
