import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface User {
	id: string;
	name: string;
	email: string;
	password: string; 
}

interface AuthState {
	isAuthenticated: boolean;
	user: User | null;
	users: User[]; 
}

const initialState: AuthState = {
	isAuthenticated: false,
	user: null,
	users: [], 
};

const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		register: (state, action: PayloadAction<User>) => {
			state.users.push(action.payload); 
		},
		login: (
			state,
			action: PayloadAction<{ email: string; password: string }>
		) => {
			const user = state.users.find(
				(u) =>
					u.email === action.payload.email &&
					u.password === action.payload.password
			);

			if (user) {
				state.isAuthenticated = true;
				state.user = {
					id: user.id,
					name: user.name,
					email: user.email,
					password: '',
				}; 
			}
		},
		logout: (state) => {
			state.isAuthenticated = false;
			state.user = null;
		},
	},
});

export const { register, login, logout } = authSlice.actions;
export const authReducer = authSlice.reducer;
