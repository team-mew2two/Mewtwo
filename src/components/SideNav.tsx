// import { useState } from 'react';

// export function SideNav() {
//   const mockList = ['comp1', 'comp2', 'comp3', 'comp4', 'comp5'];
//   const [count, setCount] = useState(mockList);

//   function handleChange(index: number, event: React.ChangeEvent<HTMLInputElement>) {
//     const updatedList = [...count];
//     updatedList[index] = event.target.value;
//     setCount(updatedList);
//   }

//   function addComp() {
//     setCount([...count, 'new comp']);
//   }

//   return (
//     <>
//       <div className="SideNav">
//         <button onClick={addComp}>Add Comp</button>
//         {count.map((item, index) => (
//           <div key={index}>
//             <input type="text" value={item} onChange={(event) => handleChange(index, event)} className="InputBox" />
//           </div>
//         ))}
//       </div>
//     </>
//   );
// }
