
class LocalStorage {

    public static getItem(key: any)  {
        const item = localStorage.getItem(key);
        if(item){
            return JSON.parse(item);
        }
    }

    public static setItem(key:string, value: any): any {
        localStorage.setItem(key, JSON.stringify(value));
    }

    public static exist(key: string): boolean {
        const result = localStorage.getItem(key);
        return result ? true : false;
    }
}


export default LocalStorage;