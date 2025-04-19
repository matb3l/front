import { create } from "zustand";
import { UserType } from "../types";
import { registeredUser } from "../api/api";

interface useCreateUserStoreType {
  fetchCreateuser: (data: UserType) => void;
}

export const useCreateUserStore = create<useCreateUserStoreType>(() => ({
  fetchCreateuser: async (data: UserType) => {
    await registeredUser(data);
  },
}));
