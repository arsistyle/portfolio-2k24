import { getHomeProps } from '@/types';
import { SANITY_CLIENT } from './client';

export async function getHome(params: getHomeProps) {
  const { language } = params || {};
  const res = await SANITY_CLIENT.fetch(
    `*[_type == "homeSettings" ${language ? `&& language == "${language}"` : ''}]`
  );
  return res;
}
