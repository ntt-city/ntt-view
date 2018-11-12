//
export default interface Message {

    category: string;

    content: Content;

    encode?: 'ascii';

    format?: 'html' | 'json' | 'markdown' | 'plain' | 'xml';

    sender?: string;
}
