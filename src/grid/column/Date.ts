import Base from './Base';

//
export default interface Date extends Omit<Base, 'props' | 'type'> {
    props: Base['props'] & {

    };

    type: 'Date';
}
