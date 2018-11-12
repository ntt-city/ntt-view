import Base from './Base';

//
export default interface Template extends Omit<Base, 'props' | 'type'> {
    props: Base['props'] & {

    };

    type: 'Boolean';
}
