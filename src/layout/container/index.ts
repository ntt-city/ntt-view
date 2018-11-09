import { default as AbsoluteLayout } from './Absolute';
import { default as AccordionLayout } from './Accordion';
import { default as AnchorLayout } from './Anchor';
import { default as AutoLayout } from './Auto';
import { default as BorderLayout } from './Border';
import { default as BoxLayout } from './Box';
import { default as CardLayout } from './Card';
import { default as CheckboxGroupLayout } from './CheckboxGroup';
import { default as ColumnLayout } from './Column';
import { default as ContainerLayout } from './Container';
import { default as FitLayout } from './Fit';
import { default as FormLayout } from './Form';
import { default as HBoxLayout } from './HBox';
import { default as TableLayout } from './Table';
import { default as VBoxLayout } from './VBox';

export { Absolute, AbsoluteTypeName } from './Absolute';
export { Accordion, AccordionTypeName } from './Accordion';
export { Anchor, AnchorTypeName } from './Anchor';
export { Auto, AutoTypeName } from './Auto';
export { Border, BorderTypeName } from './Border';
export { Box, BoxTypeName } from './Box';
export { Card, CardTypeName } from './Card';
export { CheckboxGroup, CheckboxGroupTypeName } from './CheckboxGroup';
export { Column, ColumnTypeName } from './Column';
export { Container, ContainerTypeName } from './Container';
export { Fit, FitTypeName } from './Fit';
export { Form, FormTypeName } from './Form';
export { HBox, HBoxTypeName } from './HBox';
export { Table, TableTypeName } from './Table';
export { VBox, VBoxTypeName } from './VBox';

export default interface ContainerType {
    Absolute: AbsoluteLayout;
    Accordion: AccordionLayout;
    Anchor: AnchorLayout;
    Auto: AutoLayout;
    Border: BorderLayout;
    Box: BoxLayout;
    Card: CardLayout;
    CheckboxGroup: CheckboxGroupLayout;
    Column: ColumnLayout;
    Container: ContainerLayout;
    Fit: FitLayout;
    Form: FormLayout;
    HBox: HBoxLayout;
    Table: TableLayout;
    VBox: VBoxLayout;
}
