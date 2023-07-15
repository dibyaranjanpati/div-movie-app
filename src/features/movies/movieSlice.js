import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import MovieApi from "../../comman/Apis/MovieApi";
import { APIKey } from "../../comman/Apis/MovieApiKey";

export const fetchAsyncMovies = createAsyncThunk(
  "movie/fetchAsyncMovies",
  async () => {
    const movieText = "fast";
    const response = await MovieApi.get(
      `?apikey=${APIKey}&s=${movieText}&type=movie`
    );
    return response.data;
  }
);

export const fetchAsyncShows = createAsyncThunk(
  "movie/fetchAsyncShows",
  async () => {
    const showsText = "money";
    const response = await MovieApi.get(
      `?apikey=${APIKey}&s=${showsText}&type=series`
    );
    return response.data;
  }
);

export const fetchAsyncMovieOrShowDetail = createAsyncThunk(
  "movie/fetchAsyncMoviesOrShowDetails",
  async (id) => {
    const response = await MovieApi.get(`?apikey=${APIKey}&i=${id}&Plot=full`);
    return response.data;
  }
);

// const initialState = {
//   movies: {
//     loading: false,
//     data: [],
//     error: null,
//   },
//   shows: {
//     loading: false,
//     data: [],
//     error: null,
//   },
//   selectMoviesOrShows:{
//     loading:false,
//     data:[],
//     error:null
//   }
// };

const initialState = {
  movies: {},
  shows: {},
  selectMovieOrShow: {},
};

// const movieSlice = createSlice({
//   name: "movies",
//   initialState,
//   reducers: {
//     addMovies: (state, { payload }) => {
//       state.movies = payload;
//     },
//   },
//   extraReducers: (builder) => {
//     builder.addCase(fetchAsyncMovies.pending, (state) => {
//       state = {
//         ...state,
//         movies: {
//           ...state.movies,
//           loading: true,
//         },
//       };
//       return state;
//     });
//     builder.addCase(fetchAsyncMovies.fulfilled, (state, action) => {
//       state = {
//         ...state,
//         movies: {
//           ...state.movies,
//           loading: false,
//           data: action.payload,
//         },
//       };
//       console.log("fetched movie ");

//       return state;
//     });
//     builder.addCase(fetchAsyncMovies.rejected, (state, action) => {
//       state = {
//         ...state,
//         movies: {
//           ...state.movies,
//           loading: false,
//           error: action.error.message,
//         },
//       };
//       return state;
//     });
//     builder.addCase(fetchAsyncShows.pending, (state) => {
//       state = {
//         ...state,
//         shows: {
//           ...state.shows,
//           loading: true,
//         },
//       };
//       return state;
//     });
//     builder.addCase(fetchAsyncShows.fulfilled, (state, action) => {
//       state = {
//         ...state,
//         shows: {
//           ...state.shows,
//           loading: false,
//           data: action.payload,
//         },
//       };
//       console.log("fetched shows ");

//       return state;
//     });
//     builder.addCase(fetchAsyncShows.rejected, (state, action) => {
//       state = {
//         ...state,
//         shows: {
//           ...state.movies,
//           loading: false,
//           error: action.error.message,
//         },
//       };

//       return state;
//     });
//     builder.addCase(fetchAsyncMoviesOrShowDetails.pending, (state) => {
//       state = {
//         ...state,
//         selectMoviesOrShows: {
//           ...state.selectMoviesOrShows,
//           loading: true,
//         },
//       };
//       return state;
//     });
//     builder.addCase(
//       fetchAsyncMoviesOrShowDetails.fulfilled,
//       (state, action) => {
//         state = {
//           ...state,
//           selectMoviesOrShows: {
//             ...state.selectMoviesOrShows,
//             loading: false,
//             data: action.payload,
//           },
//         };
//         console.log("fatch sus");
//         return state;
//       }
//     );
//     builder.addCase(fetchAsyncMoviesOrShowDetails.rejected, (state, action) => {
//       state = {
//         ...state,
//         selectMoviesOrShows: {
//           ...state.movies,
//           loading: false,
//           error: action.error.message,
//         },
//       };

//       return state;
//     });
//   },
// });

const movieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    removeSelectedMovieOrShow: (state) => {
      state.selectMovieOrShow = {};
    },
  },
  extraReducers: {
    [fetchAsyncMovies.pending]: () => {
      console.log("Pending");
    },
    [fetchAsyncMovies.fulfilled]: (state, { payload }) => {
      console.log("Fetched Successfully!");
      return { ...state, movies: payload };
    },
    [fetchAsyncMovies.rejected]: () => {
      console.log("Rejected!");
    },
    [fetchAsyncShows.fulfilled]: (state, { payload }) => {
      console.log("Fetched Successfully!");
      return { ...state, shows: payload };
    },
    [fetchAsyncMovieOrShowDetail.fulfilled]: (state, { payload }) => {
      console.log("Fetched Successfully!");
      return { ...state, selectMovieOrShow: payload };
    },
  },
});

export const { removeSelectedMovieOrShow } = movieSlice.actions;
export const getAllMovies = (state) => state.movies.movies;
export const getAllShows = (state) => state.movies.shows;
export const getSelectedMovieOrShow = (state) => state.movies.selectMovieOrShow;
export default movieSlice.reducer;
// export default movieSlice.reducer;
