import { useEffect, useState } from "react";
import { HiOutlineMinus, HiOutlineSearch } from "react-icons/hi";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";

import { updateSearchValue } from "../../../features/search/searchSlice";

export default function SearchBar({ isUnderLargeSizeWidth, setNavbarIsOpen }) {
  const dispatch = useDispatch();
  const { searchValue } = useSelector((store) => store.search);

  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const location = useLocation();

  const [value, setValue] = useState(
    searchValue || searchParams.get("q") || ""
  );

  const handleChangeSearchValue = (event) => {
    setValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (value.length === 0) {
      return;
    }

    dispatch(updateSearchValue(searchValue));
    navigate(`/search?q=${value}`);

    if (isUnderLargeSizeWidth) {
      setNavbarIsOpen(false);
    }
  };

  useEffect(() => {
    if (location.pathname === "/search") {
      setValue(searchParams.get("q") || "");
    }
  }, [searchParams.get("q")]);

  return (
    <form className="opacity-100" onSubmit={handleSubmit}>
      <label htmlFor="search-bar" className="flex items-center gap-2">
        <HiOutlineSearch className="h-6 w-6 text-white" />
        <HiOutlineMinus className="h-6 w-6 rotate-90 text-white" />
        <input
          type="search"
          id="search-bar"
          className="form-input border-white bg-transparent text-white placeholder:text-sm placeholder:text-white/60 focus:border-current focus:ring-white/60 md:border-none md:placeholder:text-base md:focus:ring-0"
          placeholder="Telusuri ..."
          value={value}
          onChange={handleChangeSearchValue}
        />
      </label>
    </form>
  );
}
