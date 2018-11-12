import Base from './Base';

//
export default interface Boolean extends Omit<Base, 'props' | 'type'> {
    props: Base['props'] & {

    };

    type: 'Boolean';
}
