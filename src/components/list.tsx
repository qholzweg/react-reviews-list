import { Component, useState } from 'react';
import list from '../data.json';
import { useAppSelector } from '../hooks/store';
import { selectSettings } from '../service/settings-slice';

type TItem = {
  name: string,
  date: string,
  review: string
}

class Item extends Component<{el: TItem}> {
  render() {
    return (
      <div className='card rounded-lg border border-gray-400 p-4 mb-2'>
        <div className='header flex justify-between'>
          <h4 className='text-lg font-bold'>{this.props.el.name}</h4>
          <span className='text-gray-600 text-sm'>{this.props.el.date}</span>
        </div>
        <p>{this.props.el.review}</p>
      </div>
    )
  }
}

export const List = () => {
  const { lang } = useAppSelector(selectSettings);
  const [page, setPage] = useState(1);
  const currentList = list[lang as keyof typeof list];
  let reviews = Object.entries(currentList)
    .slice(10 * (page - 1), 10 * (page - 1) + 9)
    .map(([key, el]) => <Item el={el} key={key} />);
  const pages = Array.from(
    { length: Math.ceil((Object.keys(currentList).length) / 10) }, (_, i) => i + 1
  )

  return (
    <div className="content">
      <div className='list p-8'>
        {reviews.map(el => el)}
      </div>
      <ul className='pagination p-8 flex gap-2'>
        {pages.map(i =>
          <li key={i}><button className={`${i === page ? 'bg-slate-800 text-white ' : ''}border border-gray-100 py-1 px-3 rounded-md hover:bg-slate-50 hover:text-black`} onClick={() => setPage(i)}>{i}</button></li>
        )}
      </ul>
    </div>
  );
}