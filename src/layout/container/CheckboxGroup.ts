import Layout from './Container';

export default interface CheckboxGroupLayout extends Omit<Layout, 'props' | 'type'> {

    props: Layout['props'] & {
    };

    type: typeof CheckboxGroupTypeName;
}

export const CheckboxGroupTypeName = 'CheckboxGroup';
