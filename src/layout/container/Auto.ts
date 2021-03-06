import Layout from './Container';

export const AutoTypeName = 'Auto';

export default interface Auto extends Omit<Layout, 'props' | 'type'> {
    props: {
        // Set to true to leave space for a vertical scrollbar (if the OS shows space-consuming scrollbars) regardless of
        // whether a scrollbar is needed.
        //
        // This is useful if content height changes during application usage, but you do not want the calculated width of
        // child items to change when a scrollbar appears or disappears. The scrollbar will appear in the reserved space,
        // and the calculated width of child Components will not change.
        reserveScrollbar?: boolean;
    };

    type: typeof AutoTypeName;
}
