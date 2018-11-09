import Layout from './Anchor';

export interface Absolute {
    // True indicates that changes to one item in this layout do not effect the layout in general. This may need to be
    // set to false if Ext.Component.autoScroll is enabled for the container.
    //
    // Defaults to: true
    ignoreOnContextChange?: boolean;


}

export const AbsoluteTypeName = 'Absolute';

export default interface AbsoluteLayout extends Absolute, Omit<Layout, 'type'> {
    type: typeof AbsoluteTypeName;
}
