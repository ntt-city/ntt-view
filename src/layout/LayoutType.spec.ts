import {
    AbsoluteTypeName,
    AccordionTypeName,
    AnchorTypeName,
    AutoTypeName,
    BorderTypeName,
    BoxTypeName,
    CardTypeName,
    CheckboxGroupTypeName,
    ColumnTypeName,
    ContainerTypeName,
    FitTypeName,
    FormTypeName,
    HBoxTypeName,
    TableTypeName,
    VBoxTypeName
} from './container';
import LayoutType from './LayoutType';

function testType(layout: LayoutType[keyof LayoutType]) {
    switch (layout.type) {
        case AbsoluteTypeName:
            return 'Absolute';
        case AccordionTypeName:
            return 'Accordion';
        case AnchorTypeName:
            return 'Anchor';
        case AutoTypeName:
            return 'Auto';
        case BorderTypeName:
            return 'Border';
        case BoxTypeName:
            return 'Box';
        case CardTypeName:
            return 'Card';
        case CheckboxGroupTypeName:
            return 'CheckboxGroup';
        case ColumnTypeName:
            return 'Column';
        case ContainerTypeName:
            return 'LayoutTypes';
        case FitTypeName:
            return 'Fit';
        case FormTypeName:
            return 'Form';
        case HBoxTypeName:
            return 'HBox';
        case TableTypeName:
            return 'Table';
        case VBoxTypeName:
            return 'VBox';
    }
}

describe('layout', () => {
    it('should have correct type name', () => {
        expect(testType({ props: {}, type: 'Absolute' })).toEqual('Absolute');
        expect(testType({ props: {}, type: 'Accordion' })).toEqual('Accordion');
        expect(testType({ props: {}, type: 'Anchor' })).toEqual('Anchor');
        expect(testType({ props: {}, type: 'Auto' })).toEqual('Auto');
        expect(testType({ props: {}, type: 'Box' })).toEqual('Box');
        expect(testType({ props: {}, type: 'Card' })).toEqual('Card');
        expect(testType({ props: {}, type: 'CheckboxGroup' })).toEqual('CheckboxGroup');
        expect(testType({ props: {}, type: 'Fit' })).toEqual('Fit');
        expect(testType({ props: {}, type: 'Form' })).toEqual('Form');
        expect(testType({ props: {}, type: 'HBox' })).toEqual('HBox');
        expect(testType({ props: { columns: 0 }, type: 'Table' })).toEqual('Table');
        expect(testType({ props: {}, type: 'VBox' })).toEqual('VBox');
    });
});
