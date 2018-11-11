import Layout from './Container';

export default interface FormLayout extends Omit<Layout, 'props' | 'type'> {

    props: Layout['props'] & {
    };

    type: typeof FormTypeName;
}

export const FormTypeName = 'Form';
