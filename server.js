import express from "express";

const posts = [
  {
    id: 1,
    descricao: "uma foto teste",
    imagem: "https://placecats.com/millie/300/150",
  },

  {
    id: 2,
    descricao: "Gato brincando com um novelo de lã",
    imagem: "https://placecats.com/millie/300/150",
  },
  {
    id: 3,
    descricao: "Gatinho dormindo em uma caixa",
    imagem: "https://placecats.com/millie/300/150",
  },
  {
    id: 4,
    descricao: "Gato fazendo paqueca",
    imagem: "https://placecats.com/millie/300/150",
  },
  {
    id: 5,
    descricao: "Gatos se divertindo",
    imagem: "https://placecats.com/millie/300/150",
  },
  {
    id: 6,
    descricao: "Gato com uma gravata borboleta",
    imagem: "https://placecats.com/millie/300/150",
  },
];

const app = express();
app.use(express.json());

app.listen(3000, () => {
  console.log("Servidor Escutando...");
});
//Buscar um ID na lista
function buscarPostPorID(id) {
  return posts.findIndex((post) => {
    return post.id == Number(id);
  });
}
//Devolve da lista um index
app.get("/posts/:id", (req, res) => {
  const index = buscarPostPorID(req.params.id);
  res.status(200).json(posts[index]);
});
