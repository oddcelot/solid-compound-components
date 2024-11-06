import { Component, ParentComponent } from "solid-js";

export const Root: ParentComponent = (props) => {
  return <div class="Compound:Root">{props.children}</div>;
};
