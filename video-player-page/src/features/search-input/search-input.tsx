import React from "react";
import styles from "./search-input.module.css"
import { Search } from "../../shared/ui";

interface SearchInputProps {
  className?: string;
  id: string;
  placeholder: string;
  defaultValue?: string;
  onChange?: () => void;
}

export const SearchInput: React.FC<SearchInputProps> = ({
  className,
  id,
  placeholder,
  defaultValue,
  onChange,
}) => {
  return (
    <label htmlFor={id} className={`${styles.search} ${className}`}>
      <input
        type="text"
        className={styles["search-input"]}
        id={id}
        placeholder={placeholder}
        defaultValue={defaultValue}
        onChange={onChange}
      />
      <div className={styles["search-icon"]}>
        <Search />
      </div>
    </label>
  );
};
