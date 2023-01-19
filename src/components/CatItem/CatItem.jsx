import React, { useState } from 'react'
import rstyle from './cats.module.css';
import cat from './../../media/images/Photo.png';

const CatItem = (props) => {

    const [editMode, setEditMode] = useState(false);

    const [about, setAbout] = useState(props.about);
    const [name, setName] = useState(props.name);
    const [taste, setTaste] = useState(props.taste);
    const [gift, setGift] = useState(props.gift);
    const [count, setCount] = useState(props.count);
    const [kg, setKg] = useState(props.kg);
    const [available, setAvailable] = useState(props.available);

    const handleClick = () => {
        props.chooseCat(props.id);
    }
    const editForm = () => {
        setEditMode(!editMode);
    }
    const submitEditData = (e) => {
        e.preventDefault();
        props.updateCat(props.id, about, name, taste, gift, count, kg, available);
        setEditMode(!editMode);
    }

    return (

        <div className={rstyle.cat} onClick={handleClick}>
            <div className={!props.available ? rstyle.notAvailable : (props.chosen ? rstyle.productWrapperChecked : rstyle.productWrapper)}>
                <div className={rstyle.productBorder}>
                    <div className={rstyle.product}>
                        <div className={rstyle.about}>
                            <button className={rstyle.editBut} onClick={editForm}>	&#9997;</button>
                            {editMode
                                ? <form>
                                    <input type="text" placeholder='О продукте' value={about} onChange={(e) => { setAbout(e.target.value) }} />
                                    <input type="text" placeholder='Название продукта' value={name} onChange={(e) => { setName(e.target.value) }} />
                                    <input type="text" placeholder='Вкус' value={taste} onChange={(e) => { setTaste(e.target.value) }} />
                                    <input type="text" placeholder='Количество порций' value={count} onChange={(e) => { setCount(e.target.value) }} />
                                    <input type="text" placeholder='Подарок' value={gift} onChange={(e) => { setGift(e.target.value) }} />
                                    <input type="text" placeholder='Количество кг' value={kg} onChange={(e) => { setKg(e.target.value) }} />
                                    <select value={available} onChange={(e) => { setAvailable(e.target.value) }}>
                                        <option value="true">В наличии</option>
                                        <option value="false">Отсутствует</option>
                                    </select>
                                    <button onClick={submitEditData}>Изменить</button>
                                </form>
                                : <><p className={rstyle.mainP}>{props.about}</p>
                                    <h1>{props.name}</h1>
                                    <h3>{props.taste}</h3>
                                    <p>{props.count}</p>
                                    <p>{props.gift}</p></>
                            }
                        </div>
                        <img src={cat} alt="" />
                        {!editMode && <div className={props.chosen ? rstyle.circleChecked : rstyle.circle}><p><span>{props.kg}</span></p><p>кг</p></div>}

                    </div>
                </div>

            </div>
            <div className={rstyle.buy}>
                {props.available ? <p>Чего сидишь? Порадуй котэ, <a href="#">купи.</a></p> : <p className={rstyle.pNotAvailable}>Недоступно для покупки в данный момент</p>}

            </div>
        </div>
    )
}

export default CatItem