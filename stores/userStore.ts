import { defineStore } from 'pinia';

interface User {
  id: string;
  username: string;
  email: string;
  avatar?: string;
}

export const useUserStore = defineStore('user', {
  state: () => ({
    user: null as User | null,
    users: [] as User[], //Might be able to remove
    loading: false,
    error: null as string | null,
  }),

  actions: {
    // ✅ Fetch a single user by ID
    async fetchUser(id: string | undefined) {
      if (!id) {
        console.error('❌ fetchUser: Invalid user ID');
        this.error = 'Invalid user ID';
        return;
      }

      this.error = null;
      this.loading = true;

      try {
        const config = useRuntimeConfig();
        this.user = await $fetch<User>(`${config.public.apiBase}/users/${id}`);
      } catch (err: any) {
        console.error('Error fetching user:', err);
        this.error = err?.data?.message || 'Failed to load user data.';
      } finally {
        this.loading = false;
      }
    },

    // ✅ Login function (ensures correct user data)
    async login(username: string, password: string) {
      this.error = null;
      this.loading = true;

      try {
        const config = useRuntimeConfig();
        const response = await $fetch<{ user: User }>(`${config.public.apiBase}/auth/signin`, {
          method: 'POST',
          body: { username, password },
          headers: { 'Content-Type': 'application/json' }
        });

        // ✅ Ensure response has user data
        if (response?.user) {
          this.user = response.user;
        } else {
          this.error = 'User data missing from response.';
        }
      } catch (err: any) {
        console.error('Error logging in:', err);
        this.error = err?.data?.message || 'Login failed.';
      } finally {
        this.loading = false;
      }
    },

    // ✅ Register function
    async register(username: string, email: string, password: string) {
      this.error = null;
      this.loading = true;

      try {
        const config = useRuntimeConfig();
        const response = await $fetch<{ user: User }>(`${config.public.apiBase}/auth/signup`, {
          method: 'POST',
          body: { username, email, password },
          headers: { 'Content-Type': 'application/json' }
        });

        // ✅ Ensure response has user data
        if (response?.user) {
          this.user = response.user;
        } else {
          this.error = 'User data missing from response.';
        }
      } catch (err: any) {
        console.error('Error signing up:', err);
        this.error = err?.data?.message || 'Registration failed.';
      } finally {
        this.loading = false;
      }
    },

    // ✅ Clear user data (resets state properly)
    clearUser() {
      this.user = null;
      this.error = null;
      this.loading = false;
    }
  },

  getters: {
    isLoggedIn: (state) => !!state.user,
    userName: (state) => state.user?.username || 'Guest',
    userEmail: (state) => state.user?.email || 'No email',
  }
});
