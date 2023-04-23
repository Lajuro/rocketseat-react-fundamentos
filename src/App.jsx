import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";
import { Post } from "./components/Post";

// CSS
import "./global.css";
import styles from "./App.module.css";

export default function App() {
  return (
    <>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post
            author="Roberto Camargo"
            content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. A repudiandae fuga provident dolor, fugit at."
          />
          <Post
            author="João da Silva"
            content="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem, fuga!"
          />
        </main>
      </div>
    </>
  );
}
