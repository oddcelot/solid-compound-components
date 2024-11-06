import { Component, JSX, ParentComponent } from "solid-js";

export type CompundListItemProps = {
  color?: string;
};

export const ListItem: ParentComponent<CompundListItemProps> = (props) => {
  return (
    <li class="Compound.List.Item" style={{ color: props.color }}>
      {props.children}
    </li>
  );
};

export type CompoundListItem = typeof ListItem;
