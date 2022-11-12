import { selector } from 'recoil';
import axiosInstance from '../../api/axios';
import { iResponseClubInfo } from '../../type/type';

const getClubInfoSelector = selector({
  key:  '@clubInfo/getClubInfoSelector',
  get: async () => {
    const response = await axiosInstance.get<Array<iResponseClubInfo>>('');

    return response.data;
  },
});

export default getClubInfoSelector