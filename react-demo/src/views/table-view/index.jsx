import React, { memo, useEffect, useState } from "react";
import { Button, Table } from "antd";
import "./index.less";
import { colunmsDefaultConfig } from "@/utils/columnsDefaultConfig";
import {exportToXls} from '@/utils/exportToXls';
import { exportToExcelXlsx} from '@/utils/exportToXlsx';
import { tableDataSource } from "@/assets/data/table-data";
export default memo(() => {
  const [dataSource, setDataSource] = useState([]);
  useEffect(() => {
    setDataSource(tableDataSource);
  }, []);
 
  const exportExcelToXlsHandle = () => {
    exportToXls(columns, dataSource);
  }
 
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
  return (
    <div>
      <Table columns={columns} dataSource={dataSource} />
      <div className="button-wrapper">
        <Button type="primary" onClick={exportExcelToXlsHandle}>
          导出为Excel(.xls格式)
        </Button>
        <Button  onClick={() => exportToExcelXlsx(dataSource, columns)}>
          导出为Excel(xlsx格式)
        </Button>
      </div>
    </div>
  );
});
