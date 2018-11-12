import Base from './Base';

//
export default interface String extends Omit<Base, 'props' | 'type'> {
    props: Base['props'] & {

    };

    // default
    type?: 'String';
}
