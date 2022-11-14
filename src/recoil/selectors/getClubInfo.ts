import { selector } from 'recoil';
import axiosInstance from '../../api/axios';
import { iResponseClubInfo } from '../../type/type';

const getClubInfoSelector = selector<Array<iResponseClubInfo>>({
  key:  '@clubInfo/getClubInfo',
  get: async () => {
    const response = await axiosInstance.get('');

    return response.data;
  },
});

export default getClubInfoSelector;
