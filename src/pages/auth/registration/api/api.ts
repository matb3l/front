import api from "@api/axios";
import { UserType } from "../types";

export const registeredUser = (data: UserType) => {
  return api.post("/auth/register", data);
};
