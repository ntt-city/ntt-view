import Layout from './Auto';

export default interface Column extends Omit<Layout, 'props' | 'type'> {

    props: Layout['props'] & {
    };

    type: typeof ColumnTypeName;
}

export const ColumnTypeName = 'Column';

