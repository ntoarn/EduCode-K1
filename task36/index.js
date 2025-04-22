const students = [
    { id: 1, name: "Nguyễn Văn A", age: 20, city: "Hà Nội" },
    { id: 2, name: "Trần Thị B", age: 19, city: "TP.HCM" },
    { id: 3, name: "Lê Văn C", age: 21, city: "Đà Nẵng" },
];

const table = document.getElementById('dataTable')
table.innerHTML  = `
    <thead>
    <tr>
        <th>ID</th>
        <th>Họ và tên</th>
        <th>Tuổi</th>
        <th>Địa chỉ</th>
    </tr>
    </thead>
    <tbody>
    ${students.map((student , index) => (

    `<tr>
    <td>${student.id}</td>
    <td>${student.name}</td>
    <td>${student.age}</td>
    <td>${student.city}</td>
     </tr>
    `)).join("")}
    </tbody>
`;
