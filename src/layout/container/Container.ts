import Children from '../../Children';
import Layout from '../Layout';
import { Visual } from '../../Visual';

export default interface Container extends Omit<Layout,'props' | 'type'> {

    props: {
        children: Array<Visual | Children>;

        // An optional extra CSS class that will be added to the container. This can be useful for adding customized styles
        // to the container or any of its children using standard CSS rules.
        // Defaults to: undefined
        itemCls?: string;

        // The element used to correct body padding during overflow.
        overflowPadderEl?: Element;
    };

    type: typeof ContainerTypeName;
}

export const ContainerTypeName = 'Container';
