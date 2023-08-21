import { useState, useEffect } from "react";
import { TextField , Button} from "@mui/material";


export function List(){

    const [Name, setName] = useState([]);
    const [newName, setNewName] = useState('');
    const [searchName, setSearchName] = useState('');
    const [editingIndex, setEditingIndex] = useState(-1);
    const [editedName, setEditedName] = useState('');
    const [items ,setItems] = useState([]);

    const addName = () => {
        if (newName.trim() === '') return;
        setName([...Name, { text: newName, isEditing: false }]);
        localStorage.setItem('items', JSON.stringify(Name));

        setNewName('');
    };
    const deleteName = (index) => {
        const updatedTodos = Name.filter((_, i) => i !== index);
        setName(updatedTodos);
      };

      const NameEdit = (index) => {
        setEditingIndex(index);
        setEditedName(Name[index].text);
      };
      const saveEdit = (index) => {
        const updatedName = [...Name];
        updatedName[index].text = editedName;
        updatedName[index].isEditing = false;
        setName(updatedName);
        setEditingIndex(-1);
        setEditedName('');
      };
      const filteredName= Name.filter((todo) =>
      todo.text.toLowerCase().includes(searchName.toLowerCase())
    );

    useEffect(() => {

        const savedNames = JSON.parse(localStorage.getItem("items")) || [];
        setItems(savedNames); // Update the state with saved data
      }, [Name]);



    return(
        <div>


            <center>
             <h3>To-Do List</h3>
            </center>
            <TextField id="standard-basic" label="Name*" variant="standard" value={newName} onChange={(e) => setNewName(e.target.value)}/>
            <Button onClick={addName}>Add</Button>
            <TextField id="standard-basic"  variant="outlined"   style={{paddingLeft:'500px'}}    value={searchName}   onChange={(e) => setSearchName(e.target.value)}/>
            <Button onClick={filteredName}>Search</Button>


            <ul style={{border:"1px solid lightgray" ,marginTop:'30px', width:'500px'}}>
          {filteredName.map((todo, index) => (
            <li key={index}>
              {editingIndex === index ? (
                <>
                  <input
                    type="text"
                    value={editedName}
                    onChange={(e) => setEditedName(e.target.value)}
                  />
                  <button onClick={() => saveEdit(index)}>Save</button>
                </>
              ) : (
                <>

                  {todo.text}{items.text}

                {/* {items ? (
            items.map((item, index) => (
            <li key={index}>{item.text}</li>
            ))
        ) : (
            <li>No items available</li>
        )} */}



                  <Button style={{margin:'10px'}} onClick={() => NameEdit(index)}>Update</Button>
                  <Button style={{margin:'0px'}} onClick={() => deleteName(index)}>Delete</Button>
                </>
              )}
            </li>
          ))}
        </ul>
        {/* <ul>
                {items ? (
            items.map((item, index) => (
            <li key={index}>{item.text}</li>
            ))
        ) : (
            <li>No items available</li>
        )}

      </ul> */}
            </div>

    )

}
