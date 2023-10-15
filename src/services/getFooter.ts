import { getFooterProps } from '@/types';
import { SANITY_CLIENT } from './client';

export async function getFooter(params: getFooterProps) {
  const { language } = params || {};
  const res = await SANITY_CLIENT.fetch(
    `*[_type == "footerSettings" ${language ? `&& language == "${language}"` : ''}]`
  );
  return res;
}
