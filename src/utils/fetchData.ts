import getSuspender from './getSuspender';
import { API_URL } from '../config';

const fetchData = (url: string) => {
  const promise = fetch(API_URL + url).then((res) => res.json());
  return getSuspender(promise);
};

export default fetchData;
