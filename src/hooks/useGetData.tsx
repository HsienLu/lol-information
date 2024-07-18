/**
 * `useGetData` 是一個自定義的 hook，用於從給定的資料中取得特定的屬性值。
 *
 * @param {any} data - 應該包含 `data` 物件的物件，該物件應該包含 `prop` 作為屬性。
 * @param {any} prop - 應該在 `data.data` 中存在的屬性名稱。
 * @returns {any} 如果 `prop` 存在且 `data.data[prop]` 也存在，則回傳 `data.data[prop]` 的值；否則，回傳 'loading'。
 */
function useGetData(data:any,prop:any):any{
    return prop && (data?.data[prop] ?? 'loading')
}

export default useGetData