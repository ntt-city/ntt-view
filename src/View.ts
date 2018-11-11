import { ContainerBase } from './container';

// A mechanism for displaying data using custom layout templates and formatting.
export default interface View extends ContainerBase {
    // Sse shell context in state.
    // You may want to react to external events.
    contextToState?: KeyPathMap;

    // Use local storage in state.
    // Even if you close the browser and open the application again, you will have a cached state.
    localToState?: KeyPathMap;

    // Use session storage in state.
    // Sometimes you want the cache only in your current session.
    // When closing the browser, you want the cache to become empty again.
    sessionToState?: KeyPathMap;
}