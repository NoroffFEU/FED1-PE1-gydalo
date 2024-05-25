export function save(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
  }
  
  export function load(key) {
    try {
      const value = localStorage.getItem(key);
      return JSON.parse(value);
    } catch {
      return null
    } 
  }
  
  export function remove(key) {
    localStorage.removeItem(key);
  }

  // So instead of accessing response.token for example, you can do a middle step like so: result = response.data which means token = result.token