export default interface Layout {
    // Used only during a layout run, this value indicates that a layout has finished its calculations. This flag is
    // set to true prior to the call to calculate and should be set to false if this layout has more work to do.
    done?: boolean;

    // true in this class to identify an object as an instantiated Layout, or subclass thereof.
    //
    // Defaults to: true
    isLayout?: boolean;
}
