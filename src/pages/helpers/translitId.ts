import cyrillicToTranslit from "cyrillic-to-translit-js";
import newsData from "../../newsData";
import postsData from "../../postsData";
import { ItemType } from "../Item/Item";

export const convertToTranslit = (str: string) => {
  str = str
    .toLowerCase()
    .replace(/[&\/\\#,+()$~%.'":*?<>{}-«»—“”]/g, "")
    .replace(/ +(?= )/g, "");
  return cyrillicToTranslit({ preset: "uk" }).transform(str, "-");
};

export const findItemByTitle = (itemId: string, type: ItemType) => {
  let searchData: any = [];

  switch (type) {
    case ItemType.NEWS:
      searchData = newsData;
      break;
    case ItemType.POST:
      searchData = postsData;
      break;
    default:
      break;
  }

  for (let i = 0; i < searchData.length; i++) {
    if (itemId === convertToTranslit(searchData[i].title)) {
      return searchData[i];
    }
  }
};
