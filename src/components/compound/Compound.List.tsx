import { Component, JSX, splitProps } from "solid-js";
import { ListItem } from "./Compound.List.Item";

export type CompundListProps = JSX.IntrinsicElements["ul"] & {
  children: JSX.Element;
};

export const List: Component<CompundListProps> = (initialProps) => {
  const [props, rest] = splitProps(initialProps, ["class", "children"]);

  return (
    <ul {...rest} class={`Compound.List ${props.class}`}>
      {props.children}
    </ul>
  );
};

const CompoundList = Object.assign(List, {
  Item: ListItem,
});

export default CompoundList;
