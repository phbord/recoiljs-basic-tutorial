import { useRecoilState } from "recoil";
import { todoListFilterState } from "../atoms/todoListFilterState";

export function TodoListFilters() {
  const [filter, setFilter] = useRecoilState(todoListFilterState);

  const updateFilter = ({target: {value}}) => {
    setFilter(value);
  };

  return (
    <>
      Filter:
      <select value={filter} onChange={updateFilter}>
        <option value="Afficher tout">Tout</option>
        <option value="Afficher Terminés">Terminés</option>
        <option value="Afficher Non-terminés">Non-terminés</option>
      </select>
    </>
  );
}