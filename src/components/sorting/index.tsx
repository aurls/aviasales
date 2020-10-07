import React from 'react';
import Types from '../../types';
import actions from '../../store/actions';
import sortings from '../../services/sortings';
import cn from 'classnames';
import './sorting.scss';

type Props = {
  currentSorting: Types.Sorting
  setSorting: typeof actions.setSorting
}

const Sorting: React.FC<Props> = (props: Props) => {
  const {
    currentSorting,
    setSorting
  } = props;

  const onSortingClick = (sorting: Types.Sorting) => {
    setSorting(sorting);
  };

  return (
    <ul className="sorting">
      {
        Object.values(sortings).map((sorting) => {
          const itemStyle = cn(
            'sorting__item',
            { 'is-active': sorting === currentSorting }
          );

          return (
            <li key={sorting.type}
              className={itemStyle}
              onClick={() => onSortingClick(sorting)}>
              {sorting.title}
            </li>);
        })
      }
    </ul>
  );
};

export default React.memo(Sorting);
