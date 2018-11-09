import Layout from './Auto';

export interface Anchor {
    // This configuation option is to be applied to child items of a container managed by this layout (ie. configured
    // with layout:'anchor').
    // This value is what tells the layout how an item should be anchored to the container. items added to an
    // AnchorLayout accept an anchoring-specific config property of anchor which is a string containing two values: the
    // horizontal anchor value and the vertical anchor value (for example, '100% 50%'). The following types of anchor
    // values are supported:
    //
    // * Percentage : Any value between 1 and 100, expressed as a percentage.
    // The first anchor is the percentage width that the item should take up within the container, and the second is the
    // percentage height.
    //
    // * Offsets : Any positive or negative integer value.
    // his is a raw adjustment where the first anchor is the offset from the right edge of the container, and the second
    // is the offset from the bottom edge.
    //
    // * Sides : Valid values are right (or r) and bottom (or b)
    // Either the container must have a fixed size or an anchorSize config value defined at render time in order for
    // these to have any effect.
    //
    // * Mixed
    // Anchor values can also be mixed as needed. For example, to render the width offset from the container right edge
    // by 50 pixels and 75% of the container's height use:
    anchor?: string;

    // Default anchor for all child container items applied if no anchor or specific width is set on the child item.
    defaultAnchor?: string;
}

export const AnchorTypeName = 'Anchor';

export default interface AnchorLayout extends Anchor, Omit<Layout, 'type'> {
    type: typeof AnchorTypeName;
}
