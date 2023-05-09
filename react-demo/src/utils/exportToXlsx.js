import * as XLSX from 'xlsx/xlsx.mjs';

const exportToExcelXlsx = (dataSource = [], columns = []) => {
    // 将数据转换为Excel文件格式
    console.log(dataSource)
   // 将表头和数据合并为一个数组
    const headers = columns.map((column) => column.title);
    // 行 x 列
    const data = dataSource.map((item,index) => columns.map((column) => {
        if(item[column.dataIndex]){
           return item[column.dataIndex]
        }else{
           return index + 1
        }
    }));
    const mergedData = [headers].concat(data);
    //skipHeader选项设置为true，这样XLSX库就不会将数组的第一个元素作为表头行。这样，导出的Excel文件中的第一行就会显示我们指定的表头信息，而不是默认的0、1、2等数字。
    const worksheet = XLSX.utils.json_to_sheet(mergedData,{skipHeader: true}); // 接受一个JSON数组作为参数，并将其转换为一个工作表对象。在转换过程中，json_to_sheet函数会自动识别JSON数组中的属性，并将其转换为工作表中的列。第二个参数，传递一个对象来指定列名和列宽等信息。
    const workbook = XLSX.utils.book_new(); // 工作表
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Sheet1');

    // 生成并下载Excel文件
    XLSX.writeFile(workbook, '请重命名.xlsx');
};

export {
    exportToExcelXlsx,
}