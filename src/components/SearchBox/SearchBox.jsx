import { useDispatch, useSelector } from "react-redux";
import { changeFilter, selectNameFilter } from "../../redux/filtersSlice";
import css from "./SearchBox.module.css";

function SearchBox() {
    const dispatch = useDispatch();
    const nameFilter = useSelector(selectNameFilter);
    const onChangeValue = (e) => dispatch(changeFilter(e.target.value));
    return (
        <div className={css.container}>
            <p>Find contacts by name</p>
            <input
                type="text"
                value={nameFilter}
                onChange={onChangeValue}
            />
        </div>
    );
};

export default SearchBox;