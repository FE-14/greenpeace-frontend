/* eslint-disable jsx-a11y/label-has-associated-control */
import { useEffect, useRef, useState } from "react";
import { HiOutlineMinus, HiOutlineSearch } from "react-icons/hi";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
import classNames from "classnames";

import { updateSearchValue } from "../../../features/search/searchSlice";

export default function SearchBar({ isUnderLargeSizeWidth }) {
  const dispatch = useDispatch();
  const { searchValue } = useSelector((store) => store.search);

  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const [isOpen, setIsOpen] = useState(!isUnderLargeSizeWidth);
  const inputRef = useRef(null);
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
      setIsOpen(false);
    }
  };

  useEffect(() => {
    if (pathname === "/search") {
      setValue(searchParams.get("q") || "");
    }
  }, [searchParams.get("q")]);

  useEffect(() => {
    setIsOpen(!isUnderLargeSizeWidth);
  }, [isUnderLargeSizeWidth]);

  useEffect(() => {
    inputRef.current.focus();
  }, [isOpen]);

  useEffect(() => {
    if (isUnderLargeSizeWidth) {
      setIsOpen(false);
    }
  }, [pathname]);

  return (
    <form
      className="flex items-center gap-2 opacity-100"
      onSubmit={handleSubmit}
    >
      <button
        htmlFor="search-bar"
        className="flex cursor-pointer items-center gap-2"
        type="button"
        onClick={() => {
          if (isUnderLargeSizeWidth) {
            setIsOpen((prevCondition) => !prevCondition);
          }
          inputRef.current.focus();
        }}
      >
        <HiOutlineSearch className="h-6 w-6 text-white" />
        <HiOutlineMinus className="hidden h-6 w-6 rotate-90 text-white lg:block" />
      </button>
      <input
        type="search"
        id="search-bar"
        ref={inputRef}
        className={classNames(
          "form-input absolute top-[100%] left-0 right-0 border-0 border-white shadow-lg placeholder:text-sm focus:border-0 focus:outline-none focus:ring-0 md:placeholder:text-base lg:static lg:bg-transparent lg:text-white lg:shadow-none lg:placeholder:text-white/60",
          {
            hidden: !isOpen,
            block: isOpen,
          }
        )}
        placeholder="Telusuri ..."
        value={value}
        onChange={handleChangeSearchValue}
      />
    </form>
  );
}
