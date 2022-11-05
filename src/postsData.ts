export interface PostsDataProps {
  id: string;
  title: string;
  time: string;
  image: any;
  author: string;
  category: string;
}

const postsData: PostsDataProps[] = [
  {
    id: "1",
    title:
      "«Є реальна загроза, що на два тижні можемо залишитися без світла» — голова Київської ОВА Кулебa",
    time: "01 листопада 2022 14:08",
    image: require("./assets/photo-1.jpeg"),
    author: "Володимир Каран",
    category: "Війна",
  },
  {
    id: "2",
    title:
      "«Максимум на оборону, чимало на дороги та майже 2 мільярди на Єдиний телемарафон: бюджет-2023",
    time: "02 листопада 2022 14:08",
    image: require("./assets/photo-2.jpeg"),
    author: "Володимир Каран",
    category: "Війна",
  },
  {
    id: "3",
    title:
      "«Щойно ми заїхали до колонії — вони підігнали “Гради” й гатили з них». Звільнений із полону азовець «Доцент»",
    time: "03 листопада 2022 14:08",
    image: require("./assets/photo-3.jpg"),
    author: "Володимир Каран",
    category: "Війна",
  },
];

export default postsData;
