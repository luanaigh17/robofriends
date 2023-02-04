import React from 'react';
import Card from './Card';

//access robots through the props, cardlist robots={robots}
//have to give it a key prop or else if a card gets deleted, JS wont know which card got deleted without Key prop

const CardList = ({ robots }) => {
    const cardComponent = robots.map((user, i) => {
        return (
            <Card 
                key={i} 
                id={robots[i].id} 
                name={robots[i].name} 
                email={robots[i].email} 
                />
        );
    })
    return (
        <div>
            {cardComponent}
        </div>
    );
}

export default CardList;




// //!!!!!!!!!!!!!!!!!1
// below is how to restructure the code 

// const CardList = ({ robots }) => {
//     return (
//         <div>
//             {
//                 robots.map((user, i) => {
//                     return (
//                      <Card 
//                         key={i} 
//                         id={robots[i].id} 
//                         name={robots[i].name} 
//                         email={robots[i].email} 
//                         />
//                     );
//                 })
//             }
//         </div>
//     );
// }