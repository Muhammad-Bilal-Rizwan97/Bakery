import React, { useState } from 'react';
import '../App.css'

const Todo = () => {
        const [inputData, setInputData] = useState('');
        const [items, setItems] = useState([]);

        const addItem = () => {
            if(!inputData){

            }else{
            setItems([...items, inputData]);
            setInputData('');
            }
        }

        // delete the item

        const deleteItem = (id) => {
            const updatedItem = items.filter((elem, ind) => {
                return ind !== id;
            });

            setItems(updatedItem);
        }

        // remove all

        const removeAll = () => {
            setItems([]);
        }

    return (
        <div className="main-div">
            <div className="child-div">
                <figure>
                    <figcaption>Bonami Bakery</figcaption>
                </figure>

                <div className="addItems">
                    <input 
                        type="text" 
                        placeholder="Add School Districts..."
                        value={inputData}
                        onChange={(e) => setInputData(e.target.value) }
                    />
                    <i className="fa fa-plus add-btn text-blue" title="Add Item" onClick={addItem}></i>
                </div>

                <div className="showItems">
                    {
                        items.map((elem, ind) => {
                            return(
                                <div className="eachItem" key={ind}>
                                    <h3>{elem}</h3>
                                    <i className="fa fa-plus " title="Add Item" onClick={addItem}></i>
                                    <i className="far fa-trash-alt add-btn" title="Delete Item" onClick={() => deleteItem(ind)}></i>

                                </div>
                            )
                        })
                    }
                    
                </div>

                {/* Clear All Button */}
                {/* <div className="showItems">
                    <button><span className="btn effect04" data-sm-link-text="Remove All" onClick={removeAll}>CHECK LIST</span></button>
                </div> */}
            </div>
        </div>
    )
}

export default Todo;