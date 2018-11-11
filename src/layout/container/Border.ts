import Layout from './Container';

export default interface Border extends Omit<Layout, 'props' | 'type'> {

    props: Layout['props'] & {

    };

    type: typeof BorderTypeName;
}

export const BorderTypeName = 'Border';
