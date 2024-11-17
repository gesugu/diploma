import React, {useState, useEffect} from 'react';
import MyLoader from "./UI/loader/MyLoader"
import MyInput from './UI/input/MyInput';
import PostService from '../API/PostService';
import ItemsForm from './ItemsForm';
import ItemsList from "./ItemsList"
import Header from './Header';

const KatalogPage = () => {
    const [items, setItems] = useState([])
    const [isLoading, setIsLoading] = useState(false)

    async function getItems() {
        setIsLoading(true)
        const items = await PostService.getAll()
        setItems(items)
        setIsLoading(false)
    }
    useEffect(()=>{
      getItems();
    }, [])

    function createItem(new_item) {
        setItems([...items, new_item]);
      }
    
      function removeItem(item) {
        setItems(items.filter(p =>p.id !== item.id));
      }
    
    return (
        <div>
            <h1>katalog страница</h1>
            <p>Это главная страница приложения.</p>
            <li><ItemsForm create={createItem}/></li>
            {isLoading ? <div className={'loader-block'}><MyLoader/></div> : <ItemsList remove={removeItem} items={items} title='my products' />}
      <div>
        {getItems}
      </div>
        </div>
    );
}

export default KatalogPage;