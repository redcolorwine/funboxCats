import React from 'react'
import rstyle from './main.module.css';
import CatItemContainer from '../components/CatItem/CatItemContainer';

const Main = (props) => {

    if (!props.cats) {
        return (
            <div>
                Загрузка...
            </div>
        )
    }
    else {
        let catsItems = props.cats.map(cat => {
            return (<CatItemContainer id={cat.id} key={cat.id} about={cat.about} name={cat.name} taste={cat.taste} count={cat.count} gift={cat.gift} kg={cat.kg} available={cat.available} chosen={cat.chosen} />)
        })
        return (
            <div className={rstyle.main}>
                <div className={rstyle.heading}>
                    <p>Ты сегодня покормил кота?</p>
                </div>
                <div className={rstyle.cats}>
                    {catsItems}
                </div>
            </div>
        )
    }

}

export default Main