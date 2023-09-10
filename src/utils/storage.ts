export class Storage {
    bucket = localStorage
    get(key: string) {
        const value =this.bucket.getItem(key)
        if (!value) return null
        try {
            return JSON.parse(value)
        } catch {
            return value
        }
    }

    set(key:string, value: unknown) {
        this.bucket.setItem(key, JSON.stringify(value))
    }
}