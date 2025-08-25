// src/lib/api.js

export const Api = {
  login: async ({ email, password }) => ({
    data: { token: "mock-jwt" },
  }),
  signup: async ({ name, email, password }) => ({
    data: { message: "Signup mock success" },
  }),
  me: async () => ({
    data: { id: 1, name: "Mock User", email: "user@example.com" },
  }),
  listArtworks: async ({ q, category }) => {
    const all = [
      { id: 1, name: "Sunset", category: "painting" },
      { id: 2, name: "Mountains", category: "photography" },
      { id: 3, name: "Abstract Lines", category: "illustration" },
      { id: 4, name: "3D Cube", category: "3d" },
    ];
    const filtered = all.filter(
      (a) =>
        (!q || a.name.toLowerCase().includes(q.toLowerCase())) &&
        (!category || a.category === category)
    );
    return { data: filtered };
  },
  getArtwork: async (id) => ({ data: { id, name: "Mock Art", category: "painting" } }),
};
