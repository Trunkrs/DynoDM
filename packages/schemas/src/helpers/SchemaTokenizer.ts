export class SchemaTokenizer {
    private readonly tokens = []
    private static readonly TOKEN_TYPES = {
        IDENTIFIER: /[_A-Za-z][_0-9A-Za-z]*/,
        INT: /-?(0|[1-9][0-9]*)/,
        // STRING: TODO: match string fragment
        TRUE: /true/,
        FALSE: /false/,
        LPAREN: /\(/,
        RPAREN: /\)/,
        LBRACKET: /\[/,
        RBRACKET: /]/,
        LCURLY: /{/,
        RCURLY: /}/,
        COLON: /:/,
        COMMA: /,/,
        SINGLE_QUOTE: /'/,
        EQUALS: /=/,
        DOUBLE_QUOTE: /"/,
        OPTIONAL: /\?/,
    }

    public static tokenize(schemaString: string) {
        const tokens =
            schemaString
                .replace(/[:\[\]@?()=]/g,
                    (str) => '`' + str + '`')
                .split(/[\r\n\t\s`]+(?=(?:[^"]*"[^"]*")*[^"]*$)(?=(?:[^']*'[^']*')*[^']*$)/)
        const instance = new SchemaTokenizer(tokens)
        return instance.tokens
    }

    private constructor(tokens: string[]){
        this.tokens = tokens
    }
}