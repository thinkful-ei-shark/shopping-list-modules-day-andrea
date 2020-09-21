
import item from './item.js';
const items = [];
const hideCheckedItems = false;

function findById(id) { 
        return items.find(item => item.id === id)
}
function addItem(name) {
    try {
        item.validateName(name); 
        items.push(item.create(name));
      } catch(error) {
        console.log(`Cannot add item: ${error.message}`) 
      }
}

const findAndToggleChecked = function(id) {
   const foundItem = findById(id);
   foundItem.checked = !foundItem.checked;
}

function findAndUpdateName(id, newName) {
    try {
        //item.validateName(name); 
        const item = findById(id);
        item.name = newName;
    } catch(error) {
        (`Cannot update name: ${error.message}`)
    }
}

    function findAndDelete (id) {
    const index = findById(id);
    items.splice(index, 1)
}
 

export default {
    items,
    hideCheckedItems,
    findById,
    addItem,
    findAndUpdateName,
    findAndToggleChecked,
    findAndDelete
};
