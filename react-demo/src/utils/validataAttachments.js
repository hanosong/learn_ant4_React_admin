/**
   * @descipiton 上传前文件校验
   * @param {*} type
   * @returns
   */
export const validateAttachmentInfo = (file) => {
    const fileName = `${file.name.replace(/\s+/g, "")}`;
    if (new TextEncoder("utf8").encode(fileName).length > 200) {
      Modal.warn({
        title: "警告",
        okText: "确定",
        content: `文件名长度超过限制要求！`,
      });
      return Promise.reject();
    }
    if (file.size > 1024 * 1024 * 20) {
      Modal.warn({
        title: "警告",
        okText: "确定",
        content: `文件的大小为${file.size},超过限制要求！`,
      });
      return Promise.reject();
    }
    if (file.size < 1 || !fileName.indexOf(".")) {
      Modal.warn({
        title: "警告",
        okText: "确定",
        content: `上传文件内容空或无文件类型,请检查！`,
      });
      return Promise.reject();
    }
    return Promise.resolve(true);
  };