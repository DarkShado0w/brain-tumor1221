import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import DropzoneArea from './components/DropZoneArea';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   
     <DropzoneArea />
     
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
// {LISTS.map(l=>( <NavLink
//   key={l.name}
//   to={l.path}
//   className="link"
//    // onClick={()=> setSelectedList(l.name)}
//    // className={selectedList === "l.name" ? "selected" : ""} 
//    > 
//    {l.icon}
//    {expanded && <span>{l.title}</span>}
   
//    </NavLink>))}
//    </div>
//    </LinksContainer>
//  {/* {LISTS.map((l) => selectedList === l.name && l.component)} */}
//  {/* {selectedList === "" && <h1>Please select any list</h1>} */}
//  <Pagecontainer width={expanded ? 1000 : 1300}>
   
//  <Routes>
//    <Route path="/" element={<h1>Welcome</h1>} />
//    <Route path="productsList" element={<ProductsList />} />
//    <Route path="counter" element={<Counter />} />
//    <Route path="billingList" element={<billingList/>} />
//    <Route path="categoryList" element={<CategoryList />} />
//  </Routes>