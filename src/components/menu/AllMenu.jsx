import React from "react";
import taco from "/menu/taco.jpeg";
import pasta from "/menu/pasta.jpeg";
import locomoco from "/menu/locomoco.jpeg";
import soup from "/menu/soup.jpeg";
import pumpukin from "/menu/pumpkin.jpeg";
import curry from "/menu/curry.jpeg";
import hiyashi from "/menu/hiyashi.jpeg";
import coffeejelly from "/menu/coffeejelly.jpeg";
import purin from "/menu/purin.jpeg";
import affogard from "/menu/affogard.jpeg";
import yogurt from "/menu/yogurt.jpeg";
import toast from "/menu/toast.jpeg";
import SingleMenu from "./SingleMenu";

const AllMenu = () => {
  const menuItems = [
    { name: "タコライス", image: taco },
    { name: "ラグーパスタ", image: pasta },
    { name: "ロコモコ", image: locomoco },
    { name: "スープ", image: soup },
    { name: "パンプキン", image: pumpukin },
    { name: "カレー", image: curry },
    { name: "冷やし中華", image: hiyashi },
    { name: "コーヒーゼリー", image: coffeejelly },
    { name: "プリン", image: purin },
    { name: "アフォガード", image: affogard },
    { name: "ヨーグルト", image: yogurt },
    { name: "トースト", image: toast },
  ];

  return (
    <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-12">
      {menuItems.map((item, index) => (
        <SingleMenu key={index} name={item.name} image={item.image} />
      ))}
    </div>
  );
};

export default AllMenu;
