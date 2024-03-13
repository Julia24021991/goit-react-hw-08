import { useId } from "react";
import css from "./SearchBox.module.css"

export const SearchBox = ({ value, onChange }) => {
    const id = useId();

    return (
        <div className={css.searchBar}>
            <label htmlFor={id}>Find contact by name</label>
            <input type="text"
                id={id}
                value={value}
                onChange={event => onChange(event.target.value)} />
        </div>
    )

}