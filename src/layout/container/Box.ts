import Layout from './Container';

export default interface Box extends Omit<Layout, 'props' | 'type'> {

    props: Layout['props'] & {
    };

    type: typeof BoxTypeName;
}

export const BoxTypeName = 'Box';
