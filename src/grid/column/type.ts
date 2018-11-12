import ActionColumn from './Action';
import BooleanColumn from './Boolean';
import CheckColumn from './Check';
import DateColumn from './Date';
import NumberColumn from './Number';
import RowNumbererColumn from './RowNumberer';
import StringColumn from './String';
import TemplateColumn from './Template';

//
export default interface ColumnType {
    Action: ActionColumn;
    Boolean: BooleanColumn;
    Check: CheckColumn;
    Date: DateColumn;
    Number: NumberColumn;
    RowNumberer: RowNumbererColumn;
    String: StringColumn;
    Template: TemplateColumn;
}

//
export type ColumnTypes =
    ActionColumn['type'] |
    BooleanColumn['type'] |
    CheckColumn['type'] |
    DateColumn['type'] |
    NumberColumn['type'] |
    RowNumbererColumn['type'] |
    StringColumn['type'] |
    TemplateColumn['type'];