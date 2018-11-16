import { Element } from '../../Element';

//
export default interface Base extends Omit<Element, 'props'> {
    props: {
    }
}
