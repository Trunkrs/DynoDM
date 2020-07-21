import {SchemaLoader} from "./helpers/SchemaLoader";
import {SchemaTokenizer} from "./helpers/SchemaTokenizer";


const loader = SchemaLoader.load()
const schema = loader.schema
console.log(schema)
const tokens = SchemaTokenizer.tokenize(schema)
console.log(tokens)