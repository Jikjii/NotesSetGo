import { Material } from '@prisma/client';
import { SortDirection } from 'types';
import { ClientUser } from 'types/models/User';

/**
 * material with user w/o password
 */

export type MaterialWithUser = Material & {
  user: ClientUser;
};

/**
 * upload material
 */
export type MaterialCreateData = Pick<Material, 'title' | 'file' | 'Description'>;

// setting the type of data the form needs to create a file
export type MaterialCreateFormData = {
  title: string;
  file: string[];
  Description: string;
};

/**
 * update material
 */
export type MaterialUpdateData = Partial<
  Pick<Material, 'title' | 'file' | 'Description'>
>;

// both create and update
export type MaterialUpdateMutationData = {
  material: MaterialUpdateData;
  id: number;
};

// --------- Query params request types ----------
// used in queries, api args validation and services

export type MaterialsGetData = Partial<{
  page: number;
  limit: number;
  userId: string;
  email: string;
  username: string;
  searchTerm: string;
  sortDirection: SortDirection;
  published: boolean;
}>;
