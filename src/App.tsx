import { For, type Component } from "solid-js";
import Compound from "./components/compound/Compound";
import logo from "./logo.svg";
import styles from "./App.module.css";

const App: Component = () => {
  return (
    <div class={styles.App}>
      <header class={styles.header}>
        <img src={logo} class={styles.logo} alt="logo" />

        <Compound>
          <Compound.Title>hello there</Compound.Title>

          <Compound.List class="test">
            <For each={[1, 2, 3]}>
              {(num) => (
                <Compound.List.Item color="blue">
                  <div>{num}</div>
                </Compound.List.Item>
              )}
            </For>
            <Compound.List.Item color="red">
              <div>thing</div>
            </Compound.List.Item>
          </Compound.List>
        </Compound>
      </header>
    </div>
  );
};

export default App;
