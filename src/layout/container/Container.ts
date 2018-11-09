import Layout from '../Layout';

export interface Container {
    // An optional extra CSS class that will be added to the container. This can be useful for adding customized styles
    // to the container or any of its children using standard CSS rules.
    // Defaults to: undefined
    itemCls?: string;

    // The element used to correct body padding during overflow.
    overflowPadderEl?: Element;
}

export const ContainerTypeName = 'Container';

export default interface ContainerLayout extends Container, Layout {
    type: typeof ContainerTypeName;
}
