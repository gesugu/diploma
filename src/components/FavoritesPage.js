import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

const FavoritesPage = () => {
    const {item2_id} = useParams()
    const selectItem = useSelector(state => state.productReducer.selectItem);
    const selectedItem = selectItem.find(item => String(item.id) === String(item2_id));
    return (
        <div>
            {selectItem.length > 0 ? (
                selectItem.map((item) => (
                    <div key={item.id}>
                        <h2>{item.title}</h2>
                        <p>{item.price}₸</p>
                    </div>
                ))
            ) : (
                <p>Нет избранных товаров</p>
            )}
        </div>
    );
}

export default FavoritesPage;