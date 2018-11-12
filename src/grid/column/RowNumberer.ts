import Base from './Base';

//
export default interface RowNumberer extends Omit<Base, 'props' | 'type'> {
    props: Base['props'] & {

    };

    type: 'RowNumberer';
}
