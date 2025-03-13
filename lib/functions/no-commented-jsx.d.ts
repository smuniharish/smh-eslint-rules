import { RuleModule } from '@typescript-eslint/utils/dist/ts-eslint';
type Options = [
    {
        ignorePattern?: string;
    }
];
declare const noCommentedJsx: RuleModule<string, Options>;
export default noCommentedJsx;
