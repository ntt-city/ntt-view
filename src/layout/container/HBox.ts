import Layout from './Box';

// A layout that arranges items horizontally across a LayoutTypes. This layout optionally divides available horizontal
// space between child items containing a numeric flex configuration.
//
// This layout may also be used to set the heights of child items by configuring it with the align option.
export default interface HBox extends Omit<Layout, 'props' | 'type'> {

    props: Layout['props'] & {
        // Controls how the child items of the container are aligned. Acceptable configuration values for this property are:
        //
        //     top : Default child items are aligned vertically at the top of the container.
        //     middle : child items are aligned vertically in the middle of the container.
        //     bottom : child items are aligned vertically at the bottom of the container.
        //     stretch : child items are stretched vertically to fill the height of the container.
        //     stretchmax : child items are stretched vertically to the height of the largest item.
        //
        //     Defaults to: 'top'
        align?: 'top' | 'middle' | 'bottom' | 'stretch' | 'stretchmax';

        // The Math method to use for rounding fractional pixels when align:middle is used.
        //
        // Defaults to: 'round'
        alignRoundingMethod?: 'round' | 'floor' | 'ceil';

        // Limits the size of aligned components to the size of the container under certain circumstances. Firstly, the
        // container height must not be determined by the height of the child components. Secondly, the child components
        // must have their height shrinkwrapped.
        //
        // Defaults to: false
        constrainAlign?: boolean;
    };

    type: typeof HBoxTypeName;
}

export const HBoxTypeName = 'HBox';
