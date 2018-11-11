export default interface BoundList {
    onChange: { [key: string]: <T>(value: T) => Action | void; }
    onEvent: { [key: string]: () => Action | void; }
}