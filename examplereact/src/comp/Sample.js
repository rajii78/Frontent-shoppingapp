// function Sample() {
//     const temp = ["sss", "ddd", "eee", "jjj"];


//     return (
//         <div>
//             {
//                 temp.map((name, index) =>
//                     (index === 1) ? <p>{name}</p> : <p>no</p>
//                 )
//             }
//         </div>
//     );
// } export default Sample;

import { useEffect, useState } from "react";

function ExcelLikeView() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(data => {setUsers(data); console.log(data); });
      
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h2>Excel View</h2>

      <table style={{ border:"1px solid" , borderCollapse: "collapse ", width: "100%"}}>
        <thead >
          <tr >
            <th style={{ padding: "20px" , border:"1px solid"}}>ID</th>
            <th style={{ border:"1px solid"}}>Name</th>
            <th style={{ border:"1px solid"}}>username</th>
            <th style={{ border:"1px solid"}}>Phone</th>
            <th style={{ border:"1px solid"}}>Email</th>
            <th style={{ border:"1px solid"}}>City</th>
            <th style={{ border:"1px solid"}}>Geo</th>
            <th style={{ border:"1px solid"}}>street</th>
            <th style={{ border:"1px solid"}}>Company</th>
            <th style={{ border:"1px solid"}}>website</th>
          </tr>
        </thead>

        <tbody  style={{ border:"1px solid"}} >
          {users.map(user => (
            <tr key={user.id}>
              <td style={{  padding: "10px" ,border:"1px solid"}}>{user.id}</td>
              <td style={{ border:"1px solid"}}>{user.name}</td>
              <td style={{ border:"1px solid"}}>{user.username}</td>
              <td style={{ border:"1px solid"}}>{user.phone}</td>
              <td style={{ border:"1px solid"}}>{user.email}</td>
              <td style={{ border:"1px solid"}}>{user.address.city}</td>
              <td style={{ border:"1px solid"}}>{user.address.geo.lat},<br/>{user.address.geo.lng}</td>
              <td style={{ border:"1px solid"}}>{user.address.street},<br/>{user.address.suite},<br/>{user.address.zipcode}</td>
              <td style={{ border:"1px solid"}}>Name: {user.company.name},<br/> Bs: {user.company.bs},<br/> CatchPhrase: {user.company.catchPhrase}</td>
              <td style={{ border:"1px solid"}}>{user.website}</td>
              


            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ExcelLikeView;

// import * as XLSX from "xlsx";
// import { saveAs } from "file-saver";

// function ExportExcel() {

//   const exportExcel = async () => {
//     const response = await fetch("https://jsonplaceholder.typicode.com/users");
//     const data = await response.json();

//     const excelData = data.map(u => ({
//       ID: u.id,
//       Name: u.name,
//       Phone: u.phone,
//       Email: u.email,
//       City: u.address.city,
//       Company: u.company.name
//     }));

//     const sheet = XLSX.utils.json_to_sheet(excelData);
//     const book = XLSX.utils.book_new();
//     XLSX.utils.book_append_sheet(book, sheet, "Users");

//     const buffer = XLSX.write(book, { bookType: "xlsx", type: "array" });
//     saveAs(new Blob([buffer]), "users.xlsx");
//   };

//   return <button onClick={exportExcel}>Export Excel</button>;
// }

// export default ExportExcel;

// import { useState } from "react";
// import * as XLSX from "xlsx";

// function ExcelReader() {
//   const [data, setData] = useState([]);

//   const handleFile = async (e) => {
//     const file = e.target.files[0];
//     if (!file) return;

//     const reader = new FileReader();
//     reader.onload = (evt) => {
//       const bstr = evt.target.result;
//       const workbook = XLSX.read(bstr, { type: "binary" });

//       // Get first sheet (or you can let user choose)
//       const sheetName = workbook.SheetNames[0];
//       const sheet = workbook.Sheets[sheetName];

//       // Convert sheet to JSON
//       const jsonData = XLSX.utils.sheet_to_json(sheet, { defval: "" });
//       setData(jsonData);
//     };
//     reader.readAsBinaryString(file);
//   };

//   return (
//     <div style={{ padding: "20px" }}>
//       <h2>Excel Preview</h2>

//       <input type="file" accept=".xlsx, .xls" onChange={handleFile} />

//       {data.length > 0 && (
//         <table style={{ borderCollapse: "collapse", marginTop: "20px", width: "100%" }}>
//           <thead>
//             <tr>
//               {Object.keys(data[0]).map((key) => (
//                 <th key={key} style={{ border: "1px solid black", padding: "5px" }}>{key}</th>
//               ))}
//             </tr>
//           </thead>
//           <tbody>
//             {data.map((row, idx) => (
//               <tr key={idx}>
//                 {Object.keys(row).map((key) => (
//                   <td key={key} style={{ border: "1px solid black", padding: "5px" }}>{row[key]}</td>
//                 ))}
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       )}
//     </div>
//   );
// }

// export default ExcelReader;
