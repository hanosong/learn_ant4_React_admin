import React, { memo, useEffect, useState } from "react";
import { Button, Table, Form, Row, Col, TreeSelect, Upload, Modal } from "antd";
import ExportTable from "@/hoc/exportTable";

import { colunmsDefaultConfig } from "@/utils/columnsDefaultConfig";
import { exportToXls } from "@/utils/exportToXls";
import { exportToExcelXlsx } from "@/utils/exportToXlsx";
import { formLayoutConfig } from "@/utils/formLayoutConfig";
import {fileToJson} from "@/utils/format";
import { validateAttachmentInfo } from "@/utils/validataAttachments";

import "./index.less";

export default memo(() => {
  const [form] = Form.useForm();
  const Item = Form.Item;
  // const [dataSource, setDataSource] = useState([]);
  const [button, switchButton] = useState(null);
  // 定义用于存储解析后Excel数据的状态
  const [excelData, setExcelData] = useState({
    columns:[],
    dataSource: [],
  });
  useEffect(() => {
    // setDataSource(tableDataSource);
    // setExcelData((excelData) => ({
    //   ...excelData,
    //   columns,
    //   dataSource: tableDataSource,
    // }))
  }, []);

  const exportExcelToXlsHandle = () => {
    const{columns, dataSource} = excelData;
    exportToXls(columns, dataSource);
  };

  const treeOnChange = (v) => {
    switchButton(toggleButton(v));
  };

  const handleExcelUpload = ({file}) => {
    const {name, originFileObj} = file;
    if (originFileObj) {
      const fileName = name;
      const fileArr = fileName.split('.');
      const fileSuffix = fileArr[fileArr.length - 1];
      if (fileSuffix === 'xlsx' || fileSuffix === 'xls') {
        fileToJson(originFileObj, (sheets) => {
          // 处理表格数据：
          const {list:data} = sheets[0];
          const columns = data[0].map((title) => ({
            title, // 表头的名称
            dataIndex: title, // 对应的数据源中的字段名
          })).map(item => (item = { ...colunmsDefaultConfig, ...item }));
          const dataSource = data.slice(1).map((row) => ({
            key: row[0], // 使用第一列数据作为唯一标识符
            ...Object.fromEntries(data[0].map((title, index) => [title, row[index]])),
          }));

          setExcelData((excelData) => ({
            ...excelData,
            columns,
            dataSource,
          }))

          console.group("导入后的数据");
          console.log('获取到的表格数据', sheets);
          console.log('columns', columns);
          console.log('dataSource', dataSource);
          console.groupEnd("导入后的数据");
        });
      } else {
        console.log('不支持该格式的解析');
      }
    } else {
      console.log('请选择文件上传');
    }
  };

  const uploadProps = {
    accept: ".xlsx, .xls",
    showUploadList: false,
    beforeUpload: async (file) => {
      try {
        let canUpload = await validateAttachmentInfo(file);
        console.log(canUpload, "canUpload");
        return canUpload ? Promise.resolve() : Promise.reject();
      } catch (error) {
        return Promise.reject();
      }
    },
    onChange: (info) => {
      handleExcelUpload(info);
    },
  };

  

  const toggleButton = (type = "11") => {
    switch (type) {
      case "1":
        case "11":
        const {dataSource, columns} = excelData;
        return (
          <Button
            key="export-xlsx"
            onClick={() => exportToExcelXlsx(dataSource, columns)}
          >
            导出为Excel(xlsx格式)
          </Button>
        );
      case "12":
        return (
          <Button
            key="export-xls"
            type="primary"
            onClick={exportExcelToXlsHandle}
          >
            导出为Excel(.xls格式)
          </Button>
        );
      case "2":
        return (
          <Upload key="upload-excel" {...uploadProps}>
            <Button>导入Excel</Button>
          </Upload>
        );
      default:
        break;
    }
  };

  

  let treeData = [
    {
      value: "1",
      title: "导出",
      key: "1",
      children: [
        {
          value: "11",
          title: "XLSX格式",
          key: "11",
        },
        {
          value: "12",
          title: "XLS格式",
          key: "12",
        },
      ],
    },
    {
      value: "2",
      title: "上传Excel",
      key: "2",
    },
  ];
  return (
    <div>
      <Form form={form} {...formLayoutConfig.formItemLayout}>
        {/* <Table columns={excelData.columns} dataSource={excelData.dataSource} /> */}
        <ExportTable columns={excelData.columns} dataSource={excelData.dataSource} />
        <Row className="" type="flex" justify="center">
          <Col span={12}>
            <Item name="perForm" label="执行操作">
              <TreeSelect
                showSearch
                style={{
                  width: "100%",
                }}
                // value={value}
                dropdownStyle={{
                  maxHeight: 400,
                  overflow: "auto",
                }}
                placeholder="选择一种方式处理表格数据"
                allowClear
                onChange={treeOnChange}
                treeData={treeData}
              />
            </Item>
          </Col>
          <Col span={12}>{button}</Col>
        </Row>
      </Form>
    </div>
  );
});
