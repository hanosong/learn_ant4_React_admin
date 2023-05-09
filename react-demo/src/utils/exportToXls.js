const exportToXls = (columns = [], dataSource = []) => {
    let paramData = dataSource;
    const title = columns.map(item => item.title);
    const keys = columns.map(item => item.key);
    const data = paramData.map((item, index) => ({...item, num: index + 1}));
    const dataStr = exportCsv(title, keys, data);
    console.log(dataStr, '===datastr');
    let blob = new Blob(['\ufeff', dataStr]);
    let url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = '请重命名.xls';
    a.click();
};

const exportCsv = (title = [], keys = [], sourceData = []) => {
    let arr = [title];
    sourceData.forEach(item => {
      let temp = [];
      keys.forEach(key => temp.push(item[key] ? `${item[key]}\t` : ''));
      arr.push(temp);
      console.log(arr,'arr')
    })
    return arr.map(item => item.map(i => i + '').join(",")).join('\n')
    // return arr
  }

export {
    exportToXls,
}