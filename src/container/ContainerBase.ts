import Children from '../Children';
import { Visual } from '../Visual';
import { LayoutType, LayoutTypes } from '../layout';

export default interface ContainerBase extends Omit<Visual, 'props'> {
    props: {
        // A string component id or the numeric index of the component that should be initially activated within the
        // container's layout on render. For example, activeItem: 'item-1' or activeItem: 0 (index 0 = the first item in the
        // container's collection). activeItem only applies to layout styles that can display items one at a time.
        //
        // Defaults to: 0;
        activeItem?: number | string;

        // true to use overflow:'auto' on the components layout element and show scroll bars automatically when necessary, false to clip any overflowing content. This should not be combined with overflowX or overflowY.
        //
        // Defaults to: false
        autoScroll?: boolean;

        children?: Children;

        // The container items
        items: Array<string | Visual>;

        // layout.
        //
        // Default is 'Auto';
        layout?: LayoutTypes | LayoutType[keyof LayoutType];
    }
}
