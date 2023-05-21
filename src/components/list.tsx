import React, { FC, useState } from 'react';
import list from '../data.json';
import { useAppSelector } from '../hooks/store';
import { selectSettings } from '../service/settings-slice';

type TItem = {
  name: string,
  date: string,
  review: string
}

// single review component
const Review: FC<{ el: TItem }> = ({ el }) => {
  return (
    <div className='card rounded-lg border border-gray-400 p-4 mb-2'>
      <div className='header flex justify-between'>
        <h4 className='text-lg font-bold'>{el.name}</h4>
        <span className='text-gray-600 text-sm'>{el.date}</span>
      </div>
      <p>{el.review}</p>
    </div>
  )
}

//review list component
export const List: FC = () => {
  const { lang } = useAppSelector(selectSettings);
  const [page, setPage] = useState(1);

  //reviews on current language
  const currentList = list[lang as keyof typeof list];

  //create reviews list for current page
  let reviews = React.useMemo(() =>
    Object.entries(currentList)
      .slice(10 * (page - 1), 10 * (page - 1) + 9)
      .map(([key, el]) => <Review el={el} key={key} />),
    [currentList, page]);

  //create pages buttons from an array of page numbers 
  const pages = React.useMemo(() =>
    //array of numbers by qty of reviews on a page
    Array.from(
      { length: Math.ceil((Object.keys(currentList).length) / 10) }, (_, i) => i + 1
    )
    // buttons with styling for current page
    .map(i =>
      <li key={i}><button className={`${i === page ? 'bg-slate-800 text-white ' : ''}border border-gray-100 py-1 px-3 rounded-md hover:bg-slate-50 hover:text-black`} onClick={() => setPage(i)}>{i}</button></li>
    ),
    [currentList, page]);

  return (
    <div className="content">
      <div className='list p-8'>
        {reviews}
      </div>
      <ul className='pagination p-8 flex gap-2'>
        {pages}
      </ul>
    </div>
  );
}