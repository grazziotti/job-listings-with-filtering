import './styles.css'

type Props = {
    filters: string[];
    onRemoveFilter: (index: number) => void;
    onClearFilters: () => void;
}

export const Filter = ({ filters, onRemoveFilter, onClearFilters }: Props) => {
    return (
        <div className="filter">
            <div className="filter__tags">
               {filters.map( (filter, index) => (
                    <div key={index} className="filter__tag">
                        <p className="filter__tag__txt">{filter}</p>
                        <button className="filter__tag__btn" onClick={() => onRemoveFilter(index)}>
                            <img src="/images/icon-remove.svg" alt="Remove icon" />
                        </button>
                    </div>
                ))}
            </div>
            <div className="filter__clear-area">
                <a href="#" className="filter__clear-btn" onClick={() => onClearFilters()}>Clear</a>
            </div>
        </div>
    )
}