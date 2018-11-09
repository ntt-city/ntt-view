export default interface SizePolicy {
    // Indicates that the height of the component is consumed.
    readsHeight : boolean;

    // Indicates that the width of the component is consumed.
    sourcereadsWidth : boolean;

    // Indicates that the height of the component will be set (i.e., calculated).
    sourcesetsHeight : boolean;

    // Indicates that the width of the component will be set (i.e., calculated).
    sourcesetsWidth : boolean;
}