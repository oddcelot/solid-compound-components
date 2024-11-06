import { ParentComponent } from "solid-js";

export const Title: ParentComponent = (props) => {
  return <h3 class="Compound:Title">{props.children}</h3>;
};
