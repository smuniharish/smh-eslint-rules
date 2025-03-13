import { TSESTree } from '@typescript-eslint/utils';
import { RuleContext, RuleModule } from '@typescript-eslint/utils/dist/ts-eslint';

// Define the type for the rule options
type Options = [
  {
    ignorePattern?: string;
  }
];

const noCommentedJsx: RuleModule<string, Options> = {
  meta: {
    type: "problem",
    docs: {
      description: "Disallow commented-out JSX elements, with optional ignore pattern.",
    },
    schema: [
      {
        type: "object",
        properties: {
          ignorePattern: {
            type: "string",
          },
        },
        additionalProperties: false,
      },
    ],
    messages: {
      commentedJsx: "Avoid commenting out JSX elements. Remove or handle them properly.",
    },
  },
  // Add defaultOptions
  defaultOptions: [{}], // Default options (empty object in this case)
  create(context: RuleContext<string, Options>) {
    // Access the options with proper typing
    const options = context.options[0] || {};
    const ignorePattern = options.ignorePattern ? new RegExp(options.ignorePattern) : null;

    return {
      JSXEmptyExpression(node: TSESTree.JSXEmptyExpression) {
        const sourceCode = context.sourceCode;
        const comments = sourceCode.getCommentsInside(node);

        comments.forEach((comment) => {
          const commentText = comment.value.trim();

          // Check if the comment matches the ignore pattern
          if (ignorePattern && ignorePattern.test(commentText)) {
            return; // Skip reporting if the comment matches the pattern
          }

          // Match potential JSX tags inside the comment
          const hasJsxTag = /<\w+[\s\S]*?>[\s\S]*?<\/\w+>|<\w+[\s\S]*?\/>/.test(commentText);

          if (hasJsxTag) {
            context.report({
              node,
              messageId: "commentedJsx",
            });
          }
        });
      },
    };
  },
};

export default noCommentedJsx;