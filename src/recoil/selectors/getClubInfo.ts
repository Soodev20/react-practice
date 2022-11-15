import { selector } from 'recoil';
import axiosInstance from '../../api/axios';
import mockData from '../../static/exampleData.json';
import { iResponseClubInfo } from '../../type/type';

const getClubInfoSelector = selector<Array<iResponseClubInfo>>({
  key:  '@clubInfo/getClubInfo',
  get: async () => {
    try {
      const response = await axiosInstance.get('');

      if (response.status === 200) return response.data;
    } catch (e) {
      return mockData;
    }
  },
});

export default getClubInfoSelector;
