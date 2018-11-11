import Layout from './Fit';

export default interface CardLayout extends Omit<Layout, 'props' | 'type'> {

    props: Layout['props'] & {
    };

    type: typeof CardTypeName;
}

export const CardTypeName = 'Card';
