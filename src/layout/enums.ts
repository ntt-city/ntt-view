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
} from './container/index';

export type Container =
    typeof AbsoluteTypeName |
    typeof AccordionTypeName |
    typeof AnchorTypeName |
    typeof AutoTypeName |
    typeof BorderTypeName |
    typeof BoxTypeName |
    typeof CardTypeName |
    typeof CheckboxGroupTypeName |
    typeof ColumnTypeName |
    typeof ContainerTypeName |
    typeof FitTypeName |
    typeof FormTypeName |
    typeof HBoxTypeName |
    typeof TableTypeName |
    typeof VBoxTypeName;