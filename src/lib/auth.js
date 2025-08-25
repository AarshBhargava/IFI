import create from "zustand";

// Zustand store
export const useAuth = create((set) => ({
  user: null,
  setUser: (u) => set({ user: u }),
  logout: () => set({ user: null }),
}));

// Mock login (works with Api.login)
export const loginWithToken = (token) => {
  const mockUser = { id: 1, email: "user@example.com", name: "Mock User" };
  useAuth.getState().setUser(mockUser);
  console.log("Logged in (mock)", mockUser);
};

export const logout = () => {
  useAuth.getState().logout();
};
