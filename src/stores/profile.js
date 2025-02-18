import { atom } from "nanostores";

export const profiles = atom([
  { id: 1, name: "John Doe", age: 30, email: "john.doe@example.com" },
  { id: 2, name: "Jane Smith", age: 25, email: "jane.smith@example.com" },
  { id: 3, name: "Alice Johnson", age: 28, email: "alice.johnson@example.com" },
]);

export const getProfile = (id) => {
  return profiles.get().find((profile) => profile.id === id);
};

export const addProfile = (profile) => {
  profiles.set([...profiles.get(), profile]);
};
