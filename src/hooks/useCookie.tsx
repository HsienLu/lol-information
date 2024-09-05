/**
 * Custom hook to retrieve the value of a cookie by its name.
 * 
 * @param name - The name of the cookie.
 * @returns The value of the cookie, or null if the cookie is not found.
 */
import { useState, useEffect } from 'react';

function useCookie(name: string) {
  const [cookie, setCookie] = useState<string | null>(null);

  useEffect(() => {
    let cookieArr = document.cookie.split(";");

    for(let i = 0; i < cookieArr.length; i++) {
      let cookiePair = cookieArr[i].split("=");

      if(name === cookiePair[0].trim()) {
        setCookie(decodeURIComponent(cookiePair[1]));
      }
    }
  }, [name]);

  return cookie;
}

export default useCookie;