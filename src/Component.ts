import Visual from './Visual';

export default interface Component extends Visual {
    config: SimpleObject;

    // use view state as component properties
    stateToProps: KeyPathMap;
}