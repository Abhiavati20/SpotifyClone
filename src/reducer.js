export const initialState = {
    user: null,
    playlists: [],
    spotify: null,
    discover_weekly: null,
    top_artists: null,
    playing: false,
    item: null,
  };
  
  const reducer = (state, action) => {
    console.log(action);
    switch (action.type) {
      case "SET_USER":
        return {
          ...state,
          user: action.user,
        };
  
      case "SET_PLAYING":
        return {
          ...state,
          playing: action.playing,
        };
  
      case "SET_ITEM":
        return {
          ...state,
          item: action.item,
        };
  
      case "SET_DISCOVER_WEEKLY":
        return {
          ...state,
          discover_weekly: action.discover_weekly,
        };
  
      case "SET_TOP_ARTISTS":
        return {
          ...state,
          top_artists: action.top_artists,
        };
  
      case "SET_TOKEN":
        return {
          ...state,
          token: action.token,
        };
  
      case "SET_SPOTIFY":
        return {
          ...state,
          spotify: action.spotify,
        };
  
      case "SET_PLAYLISTS":
        return {
          ...state,
          playlists: action.playlists,
        };
      default:
        return state;
    }
  };
  
  export default reducer;
// token:"BQDfNo5RGcsH45ldIUwXlK1Qv20EBizrn9CvX87fOVVY3Zr14WlTDyUYEbltsDmHx4GJGhGMzOhfbOoxhx3Kt15zVwmhvkqO1KqBrzOFALltWDFdLahFQQTCBNujqiDzgD5Rnxpwu-3M3Uxv_far8xEBbF-IfB7pGsLjoX1P3mZf5r2G",