import Base from './Base';

//
export default interface Action extends Omit<Base, 'props' | 'type'> {
    props: Base['props'] & {

    };

    type: 'Action';
}
