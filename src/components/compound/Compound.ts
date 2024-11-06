import List from "./Compound.List";
import { Root } from "./Compound.Root";
import { Title } from "./Compound.Title";

const Compound = Object.assign(Root, {
  Title,
  List,
});

// export { Root, Title, List, ListItem };

export default Compound;
