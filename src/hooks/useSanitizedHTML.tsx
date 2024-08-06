import React from "react";

// 自定義 Hook：將 HTML 字符串解析為 React 元素
function useSanitizedHTML(htmlString: string) {
  // 將 HTML 字符串解析為 DOM 元素
  const parser = new DOMParser();
  const doc = parser.parseFromString(htmlString, "text/html");
  const elements = Array.from(doc.body.childNodes);

  // 遞歸地將 DOM 元素轉換為 React 元素
  const convertToReactElement = (
    node: ChildNode,
    key: number
  ): React.ReactNode => {
    if (node.nodeType === Node.TEXT_NODE) {
      return node.textContent;
    }

    const children = Array.from(node.childNodes).map((childNode, index) =>
      convertToReactElement(childNode, index)
    );

    return React.createElement(node.nodeName.toLowerCase(), {key}, ...children);
  };

  // 將所有頂層元素轉換為 React 元素
  const reactElements = elements.map((element, index) =>
    convertToReactElement(element, index)
  );

  return reactElements;
}

export default useSanitizedHTML;
