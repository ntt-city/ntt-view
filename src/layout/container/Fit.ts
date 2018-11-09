import Layout from './Container';
import { Margin } from '../../enums';

export interface Fit {
    // If the individual contained items do not have a margins property specified or margin specified via CSS, the default margins from this property will be applied to each item.
    defaultMargins?: Margin;
}

export const FitTypeName = 'Fit';

export default interface FitLayout extends Fit, Omit<Layout, 'type'> {
    type: typeof FitTypeName;
}
