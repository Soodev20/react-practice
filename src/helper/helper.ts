import { iResponseClubInfo, iFilterCondition } from '../type/type';

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