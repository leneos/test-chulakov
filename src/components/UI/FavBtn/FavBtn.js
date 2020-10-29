import React, { memo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectFavouritePeople, setFavourite } from "../../../redux/appSlice";
export const FavBtn = memo((props) => {
  const favouritePeople = useSelector(selectFavouritePeople);
  const dispatch = useDispatch();
  return (
    <button
      onClick={() => dispatch(setFavourite(props.userId))}
      className={props.className}
    >
      {favouritePeople.includes(props.userId) ? (
        <svg
          width="28"
          height="26"
          viewBox="0 0 28 26"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M14 0L17.1432 9.67376H27.3148L19.0858 15.6525L22.229 25.3262L14 19.3475L5.77098 25.3262L8.91417 15.6525L0.685181 9.67376H10.8568L14 0Z" />
        </svg>
      ) : (
        <svg
          width="28"
          height="26"
          viewBox="0 0 28 26"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M17.1432 9.67376L14 0L10.8568 9.67376H0.685181L8.91417 15.6525L5.77098 25.3262L14 19.3475L22.229 25.3262L19.0858 15.6525L27.3148 9.67376H17.1432ZM24.2371 10.6738H16.4166L14 3.23607L11.5833 10.6738H3.76286L10.0897 15.2705L7.67309 22.7082L14 18.1115L20.3269 22.7082L17.9102 15.2705L24.2371 10.6738Z"
            fill="#1F1F1F"
          />
        </svg>
      )}
    </button>
  );
});
