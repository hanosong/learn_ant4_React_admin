import { Tooltip } from "antd";

export const defaultCellStyle = {
    width: 200,
    overflow: "hidden",
    textOverflow: "ellipsis",
    wordBreak: "break-all",
    cursor: "pointr",
    fontWeight: "bold",
}

export const colunmsDefaultConfig = {
    width: 200,
    align: "center",
    onCell: () => ({
        style: defaultCellStyle,
    }),
    render: (text) => <Tooltip overlayClassName="tooltip-default" placement="topleft" title={text} >
        {text}
    </Tooltip>
}