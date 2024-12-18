interface Props {
  categories: string[];
  changeFilter: (category: string) => void;
}

const FilterForm = ({ categories, changeFilter }: Props) => {
  return (
    <form>
      <div className="mb-3">
        <label htmlFor="category-list" className="form-label"></label>
        <select
          onChange={(event) => changeFilter(event.target.value)}
          name="category-list"
          id="category-list"
          className="form-select"
        >
          <option value="all">All Categories</option>
          {categories.map((category, index) => (
            <option key={index} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>
    </form>
  );
};

export default FilterForm;
