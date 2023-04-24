import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";
import { Post } from "./components/Post";

// CSS
import "./global.css";
import styles from "./App.module.css";

const posts = [
  {
    id: 1,
    author: {
      name: "Roberto Camargo",
      avatarUrl: "https://github.com/Lajuro.png",
      role: "Web Developer"
    },
    content: [
      {
        type: "paragraph",
        content: "Fala galeraa 👋"
      },
      {
        type: "paragraph",
        content: "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀"
      },
      {
        type: "link",
        content: "jane.design/doctorcare"
      },
      {
        type: "hashtag",
        content: "#novoprojeto"
      },
      {
        type: "hashtag",
        content: "#nlw"
      },
      {
        type: "hashtag",
        content: "#rocketseat"
      },
    ],
    publishedAt: new Date('2023-04-23 21:23:00'),
  },
  {
    id: 2,
    author: {
      name: "Mayk Brito",
      avatarUrl: "https://github.com/maykbrito.png",
      role: "Educator @ Rocketseat"
    },
    content: [
      {
        type: "paragraph",
        content: "Opaaa, pessoal! Tudo bem?"
      },
      {
        type: "paragraph",
        content: "Hoje é dia de mais um projeto no NLW. O projeto de hoje é o Happy, um projeto que visa conectar pessoas a orfanatos próximos a elas."
      },
      {
        type: "link",
        content: "mayk.design/happy"
      },
      {
        type: "hashtag",
        content: "#novoprojeto"
      },
      {
        type: "hashtag",
        content: "#nlw"
      },
      {
        type: "hashtag",
        content: "#rocketseat"
      },
    ],
    publishedAt: new Date('2023-04-20 09:50:00'),
  },
]

export default function App() {
  return (
    <>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => (
            <Post
              key={post.id}
              author={post.author}
              content={post.content}
              publishedAt={post.publishedAt}
            />
          ))}
        </main>
      </div>
    </>
  );
}
