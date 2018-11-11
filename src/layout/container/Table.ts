import Layout from './Container';

// This layout allows you to specify the total number of columns.
export default interface TableLayout extends Omit<Layout, 'props' | 'type'> {

    props: Layout['props'] & {
        // The total number of columns to create in the table for this layout. If not specified, all Components added to
        // this layout will be rendered into a single row using one column per Component.
        columns: number;
    };

    type: typeof TableTypeName;
}

export const TableTypeName = 'Table';
