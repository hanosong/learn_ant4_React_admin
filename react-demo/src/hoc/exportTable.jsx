import React, { memo, useState } from 'react'
import { Table } from 'antd';
import { colunmsDefaultConfig } from "@/utils/columnsDefaultConfig";
import { tableDataSource } from "@/assets/data/table-data";

let columns = [
    {
      title: "序号",
      dataIndex: "num",
      key: "num",
      render: (_, row, index) => index + 1,
    },
    {
      title: "姓名",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "年龄",
      dataIndex: "age",
      key: "age",
    },
  ].map((item) => (item = { ...colunmsDefaultConfig, ...item }));

export default memo((props) => {
    const [_columns, setColumns] = useState(columns);
    const [_dataSource, setDataSource] = useState(tableDataSource);
  return (
   <Table
   {...props}
    columns={props.columns?.length ?  props.columns : _columns}
    dataSource={props.dataSource?.length ? props.dataSource : _dataSource}
   />
  )
})

 