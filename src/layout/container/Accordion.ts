import Layout from './Box';

export const AccordionTypeName = 'Accordion';

export default interface Accordion extends Omit<Layout, 'props' | 'type'> {
    props: {

    };

    type: typeof AccordionTypeName;
}
