import { IAuthority, NewAuthority } from './authority.model';

export const sampleWithRequiredData: IAuthority = {
  name: '6aabb6c1-60b1-4da7-bfa9-9383d738f218',
};

export const sampleWithPartialData: IAuthority = {
  name: '4a0f8bfb-d88c-4236-a7e2-ef8edd277723',
};

export const sampleWithFullData: IAuthority = {
  name: 'c1dea741-95a2-414f-93b4-37a6eb9ce40f',
};

export const sampleWithNewData: NewAuthority = {
  name: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
