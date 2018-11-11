import ContainerBase from './ContainerBase';

export default interface Container extends Omit<ContainerBase, 'props' | 'type'> {

    props: ContainerBase['props'] & {

    };

    type: typeof ContainerTypeName;
}

export const ContainerTypeName = 'Container';
