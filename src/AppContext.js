import React,  { createContext } from "react"

import iconRecepie1 from './images/icon/icon-recipe1.svg';
import iconRecepie2 from './images/icon/icon-recipe2.svg';
import iconRecepie3 from './images/icon/icon-recipe3.svg';

import iconFb from './images/icon/icon-fb.svg';
import iconIstagram from './images/icon/icon-istagram.svg';
import iconTwitter from './images/icon/icon-twitter.svg';

export const AppContext = createContext();

const data = {
  textLorem: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt nihil suscipit exercitationem cum iure eius corrupti, quisquam incidunt vitae molestias ut quidem recusandae voluptate veniam voluptatibus aperiam minus totam iusto?",
  textHome: "Przepisy na zdrowe jedzenie",
  textRecipes: "Zdrowe pmysły na posiłki:",
  textAdvice: "Trzy proste kroki, od których trzeba zacząć"
};

const dataMenu = [ 'Home', 'Przepisy', 'Porady', 'Contact'];

const dataRecipes = [
  {
    id: 1,
    img: iconRecepie1,
    link: "pasta",
    title: "Pasty",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt nihil suscipit exercitationem cum iure eius corrupti, quisquam incidunt vitae molestias ut quidem recusandae voluptate veniam voluptatibus aperiam minus totam iusto?"
  },
  {
    id: 2,
    img: iconRecepie2,
    link: "salad",
    title: "Sałatki",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt nihil suscipit exercitationem cum iure eius corrupti, quisquam incidunt vitae molestias ut quidem recusandae voluptate veniam voluptatibus aperiam minus totam iusto?"
  },
  {
    id: 3,
    img: iconRecepie3,
    link: "soup",
    title: "Zupy",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt nihil suscipit exercitationem cum iure eius corrupti, quisquam incidunt vitae molestias ut quidem recusandae voluptate veniam voluptatibus aperiam minus totam iusto?"
  },
];

const dataComments = [
  {
    id: 1,
    link: "pasta",
    name: "Daryl",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt nihil suscipit exercitationem cum iure eius corrupti, quisquam incidunt vitae molestias ut quidem recusandae voluptate veniam voluptatibus aperiam minus totam iusto?"
  },
  {
    id: 2,
    link: "pasta",
    name: "Borys",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt nihil suscipit exercitationem cum iure eius corrupti, quisquam incidunt vitae molestias ut quidem recusandae voluptate veniam voluptatibus aperiam minus totam iusto?"
  },
  {
    id: 3,
    link: "soup",
    name: "Tom",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt nihil suscipit exercitationem cum iure eius corrupti, quisquam incidunt vitae molestias ut quidem recusandae voluptate veniam voluptatibus aperiam minus totam iusto?"
  },
  {
    id: 4,
    link: "soup",
    name: "Goral",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt nihil suscipit exercitationem cum iure eius corrupti, quisquam incidunt vitae molestias ut quidem recusandae voluptate veniam voluptatibus aperiam minus totam iusto?"
  },
  {
    id: 5,
    link: "pasta",
    name: "Azyl",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt nihil suscipit exercitationem cum iure eius corrupti, quisquam incidunt vitae molestias ut quidem recusandae voluptate veniam voluptatibus aperiam minus totam iusto?"
  },
  {
    id: 6,
    link: "salad",
    name: "Karol",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt nihil suscipit exercitationem cum iure eius corrupti, quisquam incidunt vitae molestias ut quidem recusandae voluptate veniam voluptatibus aperiam minus totam iusto?"
  },
];

const dataAdvices = [
  {
    id: 1,
    number: "01",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt nihil suscipit exercitationem cum iure eius corrupti, quisquam incidunt vitae molestias ut quidem recusandae voluptate veniam voluptatibus aperiam minus totam iusto?"
  },
  {
    id: 2,
    number: "02",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt nihil suscipit exercitationem cum iure eius corrupti, quisquam incidunt vitae molestias ut quidem recusandae voluptate veniam voluptatibus aperiam minus totam iusto?"
  },
  {
    id: 3,
    number: "03",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt nihil suscipit exercitationem cum iure eius corrupti, quisquam incidunt vitae molestias ut quidem recusandae voluptate veniam voluptatibus aperiam minus totam iusto?"
  },
];

const contactIcon =  [ iconFb, iconIstagram, iconTwitter ] ;

const AppProvider = ({ children }) => {

  return (
    <AppContext.Provider value={{ data, dataMenu, dataRecipes, dataAdvices, contactIcon, dataComments }} >
      {children}
    </AppContext.Provider>
  )
};

export default AppProvider