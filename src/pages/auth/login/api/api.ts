import api from "@api/axios";
import { UserType } from "../types";

export const loginUser = (data: UserType) => {
  return api.post("/auth/login", data);
};
