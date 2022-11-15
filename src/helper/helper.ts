import { iResponseClubInfo, iFilterCondition, iPerson } from '../type/type';

export const getFilterCategories = (clubInfo: Array<iResponseClubInfo>): iFilterCondition => {
  const { type, place, price }: iFilterCondition = {
    type: [],
    place: [],
    price: { lower: 0, upper: 0 },
  }

  clubInfo.forEach(data => {
    if (!type.includes(data.club.type)) type.push(data.club.type);
    if (!place.includes(data.club.place)) place.push(data.club.place);

    price.lower = Math.min(price.lower, data.price);
    price.upper = Math.max(price.upper, data.price);
  });

  return ({ type, place, price });
}

export const isIncludesKeyword = (target: string, keyword: string) => {
  return target.includes(keyword);
}

export const isContainName = (names: Array<iPerson>, keyword: string) => {
  return !!names.filter(person => isIncludesKeyword(person.name, keyword)).length;
}

export const isMatchStrOption = (target: string, category: Array<string>) => {
  return !!category.filter(option => isIncludesKeyword(target, option)).length;
}