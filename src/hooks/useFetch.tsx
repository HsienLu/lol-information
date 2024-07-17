import { useEffect, useState } from "react";
// `useFetch` 是一個自訂的 Hook，它接受一個 URL 作為參數
// 使用範例: 
// const { data, loading, error } = useFetch('https://api.example.com/data');
function useFetch(url: string): { data: any, loading: boolean, error: any }{
    // 定義三個 state 變數：`data`、`loading` 和 `error`
    const [data, setData] = useState(null); // 用來儲存取得的資料
    const [loading, setLoading] = useState(true); // 用來追蹤是否正在取得資料
    const [error, setError] = useState(null); // 用來儲存取得資料時發生的錯誤

    // 使用 `useEffect` Hook 來在組件掛載後取得資料
    useEffect(() => {
        // 使用 `fetch` 函數來取得資料
        fetch(url)
            .then((res) => {
                // 如果回應是成功的，則解析回應的 JSON
                if (res.ok) {
                    return res.json();
                } else {
                    // 如果回應是失敗的，則拋出錯誤
                    throw res;
                }
            })
            .then((data) => {
                // 將解析的資料設定到 `data` state
                setData(data);
            })
            .catch((err) => {
                // 如果有錯誤，則將錯誤設定到 `error` state
                setError(err);
            })
            .finally(() => {
                // 無論成功或失敗，都將 `loading` state 設定為 `false`
                setLoading(false);
            });
    }, [url]); // 只有當 `url` 改變時，才重新取得資料

    // 回傳 `data`、`loading` 和 `error`，讓使用這個 Hook 的組件可以使用這些狀態
    return { data, loading, error };
}

export default useFetch;