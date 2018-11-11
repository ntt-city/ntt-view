import Layout from './Anchor';

export const AbsoluteTypeName = 'Absolute';

export default interface Absolute extends Omit<Layout, 'props' | 'type'> {
    props: {
        // True indicates that changes to one item in this layout do not effect the layout in general. This may need to be
        // set to false if Ext.Component.autoScroll is enabled for the container.
        //
        // Defaults to: true
        ignoreOnContextChange?: boolean;
    };

    type: typeof AbsoluteTypeName;
}
