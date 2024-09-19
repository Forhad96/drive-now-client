import { baseApi } from "../../api/baseApi";

const carManagementApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllCars: builder.query({
      query: (args) => {
        const params = new URLSearchParams();
        if (args) {
          args.forEach((item: { name: string; value: string }) => {
            params.append(item.name, item.value);
          });
        }

        return {
          url: "/cars",
          method: "GET",
          // params,
        };
      }
    }),
    addCar: builder.mutation({
      query: (data) => ({
        url: "/cars",
        method: "POST",
        body: data,
      }),
    }),
  }),
});


export const {useGetAllCarsQuery,useAddCarMutation} = carManagementApi