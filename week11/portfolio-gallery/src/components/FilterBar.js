function FilterBar({ techs, selected, onSelect }) {
  return (
    <div className="filter-bar">
      {techs.map(t => (
        <button
          key={t}
          className={t === selected ? 'filter active' : 'filter'}
          aria-pressed={t === selected}
          onClick={() => onSelect(t)}
        >
          {t}
        </button>
      ))}
    </div>
  );
}

export default FilterBar;
