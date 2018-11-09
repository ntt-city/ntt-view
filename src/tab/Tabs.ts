import Component from '../Component';

export const TabsTypeName = 'Tabs';

export default interface Tabs extends Omit<Component, 'type'> {
    type: typeof TabsTypeName;
}