import Base from './Base';

//
export default interface Number extends Omit<Base, 'props' | 'type'> {
    props: Base['props'] & {

    };

    type: 'Number';
}
