import Layout from './Box';

// A layout that arranges items vertically down a LayoutTypes. This layout optionally divides available vertical space
// between child items containing a numeric flex configuration.
//
// This layout may also be used to set the widths of child items by configuring it with the align option.
export default interface VBoxLayout extends Omit<Layout, 'props' | 'type'> {

    props: Layout['props'] & {
        // Controls how the child items of the container are aligned. Acceptable configuration values for this property are:
        //
        // left : Default child items are aligned horizontally at the left side of the container.
        // center : child items are aligned horizontally at the mid-width of the container.
        // right : child items are aligned horizontally at the right of the container.
        // stretch : child items are stretched horizontally to fill the width of the container.
        // stretchmax : child items are stretched horizontally to the size of the largest item.
        //
        // Defaults to: 'left'
        align?: 'left' | 'center' | 'right' | 'stretch' | 'stretchmax';

        // The Math method to use for rounding fractional pixels when align:center is used.
        //
        // Defaults to: 'round'
        alignRoundingMethod?: 'round' | 'floor' | 'ceil';

        // Limits the size of aligned components to the size of the container under certain circumstances. Firstly, the
        // container width must not be determined by the width of the child components. Secondly, the child components must
        // have their width shrinkwrapped.
        //
        // Defaults to: false
        sourceconstrainAlign?: boolean;
    };

    type: typeof VBoxTypeName;
}

export const VBoxTypeName = 'VBox';
