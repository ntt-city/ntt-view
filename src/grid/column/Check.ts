import Base from './Base';

//
export default interface Check extends Omit<Base, 'props' | 'type'> {
    props: Base['props'] & {

    };

    type: 'Check';
}
