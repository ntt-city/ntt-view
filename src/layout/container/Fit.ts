import Layout from './Container';
import { Margin } from '../../enums';

export default interface Fit extends Omit<Layout, 'props' | 'type'> {

    props: Layout['props'] & {
        // If the individual contained items do not have a margins property specified or margin specified via CSS, the default margins from this property will be applied to each item.
        defaultMargins?: Margin;
    };

    type: typeof FitTypeName;
}

export const FitTypeName = 'Fit';
