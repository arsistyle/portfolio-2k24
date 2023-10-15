import { createClient } from 'next-sanity';

export const SANITY_CLIENT = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: '2021-10-14',
  useCdn: false,
  token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
});
