import { create } from "zustand";
import { UserType } from "../types";
import { loginUser } from "../api/api";

interface useCreateUserStoreType {
  fetchLoginuser: (data: UserType) => Promise<{ access_token: string }>;
}

export const useLoginUserStore = create<useCreateUserStoreType>(() => ({
  fetchLoginuser: async (data: UserType) => {
    const response = await loginUser(data);
    return response.data;
  },
}));
