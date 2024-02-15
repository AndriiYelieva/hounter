import { featuredHouse } from '../data/recommendationData';

export const sortedByType = (value) => {
  return featuredHouse.filter(({card}) => card.type === value);
};
