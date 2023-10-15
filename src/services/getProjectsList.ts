import { getProjectsListProps } from '@/types';
import { SANITY_CLIENT } from './client';

export async function getProjectsList(params?: getProjectsListProps) {
  const { language, limit = 10 } = params || {};
  const res = await SANITY_CLIENT.fetch(
    `*[_type == "projects" ${
      language ? `&& language == "${language}"` : ''
    }] | order(_createdAt desc) ${limit ? `[0...${limit}]` : ''}`
  );
  return res;
}
