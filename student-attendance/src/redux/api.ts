import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const backendURL = "/";

const api = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({
        baseUrl: backendURL,
        prepareHeaders: (headers: Headers, args: { getState: any }) => {
            const token = args.getState().auth.token;
            if (token) {
                headers.set('Authorization', `Bearer ${token}`);
            }
            return headers;
        },
    }),
    tagTypes: ["Admin", "Teacher"] as const,

    endpoints: (builder) => ({
        // ADMIN AUTHORIZATION
        adminRegister: builder.mutation({
            query: (user: any) => ({
                url: `/adminAuth/school_sign_up`,
                method: 'POST',
                body: user,
            }),
        }),
        adminLogin: builder.mutation({
            query: (user: any) => ({
                url: `/adminAuth/school_login`,
                method: 'POST',
                body: user,
            }),
        }),
        // GET ADMIN INFO
        getAdmin: builder.query({
            query: () => ({
                url: `/adminAuth/admin_account`,
                method: 'GET',
            }),
            providesTags: ["Admin"]
        }),
        // TEACHER AUTHORIZATION
        teacherRegister: builder.mutation({
            query: (user: any) => ({
                url: `/adminAuth/school_sign_up`,
                method: 'POST',
                body: user,
            }),
        }),
        teacherLogin: builder.mutation({
            query: (user: any) => ({
                url: `/adminAuth/school_login`,
                method: 'POST',
                body: user,
            }),
        }),
        // GET ADMIN INFO
        getTeacher: builder.query({
            query: () => ({
                url: `/adminAuth/admin_account`,
                method: 'GET',
            }),
            providesTags: ["Admin"]
        }),
    })
});
export default api;
export const {
    //Admin Auth
    useAdminRegisterMutation,
    useAdminLoginMutation,
    useGetAdminQuery,
    //Teacher Authorization
    useTeacherRegisterMutation,
    useTeacherLoginMutation,
    useGetTeacherQuery,
} = api;
