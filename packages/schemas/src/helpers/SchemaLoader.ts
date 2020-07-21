import * as fs from 'fs'

export class SchemaLoader {
    private readonly data: string

    public static load (): SchemaLoader {
        try {
            const data = fs.readFileSync('./schema_ddb.dynodm')
            return new SchemaLoader(data.toString())
        } catch(err) {
            throw(err)
        }
    }

    public get schema(): string {
        return this.data
    }

    constructor(data) {
        this.data = data
    }
}
