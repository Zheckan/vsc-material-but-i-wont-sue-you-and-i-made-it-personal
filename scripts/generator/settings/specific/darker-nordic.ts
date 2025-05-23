// #E394DC
// #d68bcf

export default {
  id: 'zheckan.theme',
  name: 'Zheckan',
  type: 'dark',
  scheme: {
    defaultAccent: '#80CBC4',
    background: '#212121',
    backgroundAlt: '#1a1a1a',
    contrastBorder: '#444444',
    sidebarForeground: '#848484',
    scrollbars: '#EEFFFF20',
    comments: '#4A4A4A',
    caret: '#FFCC00',
    findHighlight: '#FFCC00',
    foreground: '#EEFFFF',
    focusBorder: '#FFFFFF',
    guides: '#424242',
    lineNumbers: '#424242',
    invisibles: '#65737E',
    lineHighlight: '#000000',
    selection: '#61616150',
    shadow: '#00000030',
    inputBackground: '#2B2B2B',
    inputForeground: '#EEFFFF',
    inputBorder: '#FFFFFF10',
    scrollbarsHover: '#EEFFFF10',
    statusbarForeground: '#616161',
    listHoverForeground: '#FFFFFF',
    tabActiveForeground: '#FFFFFF',
    inactiveSelectionBackground: '#00000030',
    findMatchBackground: '#000000',
    findMatchHighlightBackground: '#00000050',
    findMatchHighlightBorder: '#ffffff50',
    base: {
      white: '#ffffff',
      black: '#000000',
      red: '#f07178',
      redForHighlight: '#0e0e0e',
      orange: '#F78C6C',
      yellow: '#FFCB6B',
      green: '#C3E88D',
      cyan: '#89DDFF',
      blue: '#82AAFF',
      paleblue: '#B2CCD6',
      purple: '#C792EA',
      brown: '#916b53',
      pink: '#ff9cac',
      violet: '#bb80b3'
    }
  },
  tokenColors: [
    {
      scope: 'string.quoted.binary.single.python',
      settings: {
        foreground: '#A8CC7C',
        fontStyle: '',
      },
    },
    {
      scope: ['constant.language.false.cpp', 'constant.language.true.cpp'],
      settings: {
        foreground: '#82D2CE',
        fontStyle: '',
      },
    },
    {
      scope:
        'punctuation.definition.delayed.unison,punctuation.definition.list.begin.unison,punctuation.definition.list.end.unison,punctuation.definition.ability.begin.unison,punctuation.definition.ability.end.unison,punctuation.operator.assignment.as.unison,punctuation.separator.pipe.unison,punctuation.separator.delimiter.unison,punctuation.definition.hash.unison',
      settings: {
        foreground: '#D6D6DD',
      },
    },
    {
      scope: 'keyword.control.directive',
      settings: {
        foreground: '#A8CC7C',
      },
    },
    {
      scope: 'constant.other.ellipsis.python',
      settings: {
        foreground: '#D1D1D1',
        fontStyle: '',
      },
    },
    {
      scope: 'variable.other.generic-type.haskell',
      settings: {
        foreground: '#83D6C5',
      },
    },
    {
      scope: 'punctuation.definition.tag',
      settings: {
        foreground: '#898989',
        fontStyle: '',
      },
    },
    {
      scope: 'storage.type.haskell',
      settings: {
        foreground: '#F8C762',
      },
    },
    {
      scope: 'support.variable.magic.python',
      settings: {
        foreground: '#D6D6DD',
      },
    },
    {
      scope:
        'punctuation.separator.period.python,punctuation.separator.element.python,punctuation.parenthesis.begin.python,punctuation.parenthesis.end.python',
      settings: {
        foreground: '#D6D6DD',
      },
    },
    {
      scope: 'variable.parameter.function.language.special.self.python',
      settings: {
        foreground: '#EFB080',
      },
    },
    {
      scope: 'variable.language.this.cpp',
      settings: {
        foreground: '#82D2CE',
        fontStyle: '',
      },
    },
    {
      scope: 'storage.modifier.lifetime.rust',
      settings: {
        foreground: '#D6D6DD',
      },
    },
    {
      scope: 'support.function.std.rust',
      settings: {
        foreground: '#AAA0FA',
      },
    },
    {
      scope: 'entity.name.lifetime.rust',
      settings: {
        foreground: '#EFB080',
      },
    },
    {
      scope: 'variable.other.property',
      settings: {
        foreground: '#AA9BF5',
      },
    },
    {
      scope: 'variable.language.rust',
      settings: {
        foreground: '#D6D6DD',
      },
    },
    {
      scope: 'support.constant.edge',
      settings: {
        foreground: '#83D6C5',
      },
    },
    {
      scope: 'constant.other.character-class.regexp',
      settings: {
        foreground: '#D6D6DD',
      },
    },
    {
      scope: 'keyword.operator.quantifier.regexp',
      settings: {
        foreground: '#F8C762',
      },
    },
    {
      scope:
        'punctuation.definition.string.begin,punctuation.definition.string.end',
      settings: {
        foreground: '#d68bcf',
      },
    },
    {
      scope: 'variable.parameter.function',
      settings: {
        foreground: '#D6D6DD',
      },
    },
    {
      scope: 'comment markup.link',
      settings: {
        foreground: '#6D6D6D',
      },
    },
    {
      scope: 'markup.changed.diff',
      settings: {
        foreground: '#EFB080',
      },
    },
    {
      scope:
        'meta.diff.header.from-file,meta.diff.header.to-file,punctuation.definition.from-file.diff,punctuation.definition.to-file.diff',
      settings: {
        foreground: '#AAA0FA',
      },
    },
    {
      scope: 'markup.inserted.diff',
      settings: {
        foreground: '#d68bcf',
      },
    },
    {
      scope: 'markup.deleted.diff',
      settings: {
        foreground: '#D6D6DD',
      },
    },
    {
      scope: 'meta.function.c,meta.function.cpp',
      settings: {
        foreground: '#D6D6DD',
      },
    },
    {
      scope:
        'punctuation.section.block.begin.bracket.curly.cpp,punctuation.section.block.end.bracket.curly.cpp,punctuation.terminator.statement.c,punctuation.section.block.begin.bracket.curly.c,punctuation.section.block.end.bracket.curly.c,punctuation.section.parens.begin.bracket.round.c,punctuation.section.parens.end.bracket.round.c,punctuation.section.parameters.begin.bracket.round.c,punctuation.section.parameters.end.bracket.round.c',
      settings: {
        foreground: '#D6D6DD',
      },
    },
    {
      scope: 'punctuation.separator.key-value',
      settings: {
        foreground: '#D6D6DD',
      },
    },
    {
      scope: 'keyword.operator.expression.import',
      settings: {
        foreground: '#AAA0FA',
      },
    },
    {
      scope: 'support.constant.math',
      settings: {
        foreground: '#EFB080',
      },
    },
    {
      scope: 'support.constant.property.math',
      settings: {
        foreground: '#F8C762',
      },
    },
    {
      scope: 'variable.other.constant',
      settings: {
        foreground: '#EFB080',
      },
    },
    {
      scope: 'variable.other.constant',
      settings: {
        foreground: '#AA9BF5',
      },
    },
    {
      scope: ['storage.type.annotation.java', 'storage.type.object.array.java'],
      settings: {
        foreground: '#EFB080',
      },
    },
    {
      scope: 'source.java',
      settings: {
        foreground: '#D6D6DD',
      },
    },
    {
      scope:
        'punctuation.section.block.begin.java,punctuation.section.block.end.java,punctuation.definition.method-parameters.begin.java,punctuation.definition.method-parameters.end.java,meta.method.identifier.java,punctuation.section.method.begin.java,punctuation.section.method.end.java,punctuation.terminator.java,punctuation.section.class.begin.java,punctuation.section.class.end.java,punctuation.section.inner-class.begin.java,punctuation.section.inner-class.end.java,meta.method-call.java,punctuation.section.class.begin.bracket.curly.java,punctuation.section.class.end.bracket.curly.java,punctuation.section.method.begin.bracket.curly.java,punctuation.section.method.end.bracket.curly.java,punctuation.separator.period.java,punctuation.bracket.angle.java,punctuation.definition.annotation.java,meta.method.body.java',
      settings: {
        foreground: '#D6D6DD',
      },
    },
    {
      scope: 'meta.method.java',
      settings: {
        foreground: '#AAA0FA',
      },
    },
    {
      scope:
        'storage.modifier.import.java,storage.type.java,storage.type.generic.java',
      settings: {
        foreground: '#EFB080',
      },
    },
    {
      scope: 'keyword.operator.instanceof.java',
      settings: {
        foreground: '#83D6C5',
      },
    },
    {
      scope: 'meta.definition.variable.name.java',
      settings: {
        foreground: '#D6D6DD',
      },
    },
    {
      scope: 'keyword.operator.logical',
      settings: {
        foreground: '#D6D6DD',
      },
    },
    {
      scope: 'keyword.operator.bitwise',
      settings: {
        foreground: '#D6D6DD',
      },
    },
    {
      scope: 'keyword.operator.channel',
      settings: {
        foreground: '#D6D6DD',
      },
    },
    {
      scope: 'keyword.operator.css,keyword.operator.scss,keyword.operator.less',
      settings: {
        foreground: '#D6D6DD',
      },
    },
    {
      scope:
        'support.constant.color.w3c-standard-color-name.css,support.constant.color.w3c-standard-color-name.scss',
      settings: {
        foreground: '#F8C762',
      },
    },
    {
      scope: 'punctuation.separator.list.comma.css',
      settings: {
        foreground: '#D6D6DD',
      },
    },
    {
      scope: 'support.constant.color.w3c-standard-color-name.css',
      settings: {
        foreground: '#F8C762',
      },
    },
    {
      scope:
        'support.module.node,support.type.object.module,support.module.node',
      settings: {
        foreground: '#EFB080',
      },
    },
    {
      scope: 'entity.name.type.module',
      settings: {
        foreground: '#EFB080',
      },
    },
    {
      scope:
        ',meta.object-literal.key,support.variable.object.process,support.variable.object.node',
      settings: {
        foreground: '#D6D6DD',
      },
    },
    {
      scope: 'variable.other.readwrite',
      settings: {
        foreground: '#94C1FA',
      },
    },
    {
      scope: 'support.variable.property',
      settings: {
        foreground: '#AA9BF5',
      },
    },
    {
      scope: 'support.constant.json',
      settings: {
        foreground: '#F8C762',
      },
    },
    {
      scope: [
        'keyword.operator.expression.instanceof',
        'keyword.operator.new',
        'keyword.operator.ternary',
        'keyword.operator.optional',
        'keyword.operator.expression.keyof',
      ],
      settings: {
        foreground: '#83D6C5',
      },
    },
    {
      scope: 'support.type.object.console',
      settings: {
        foreground: '#D6D6DD',
      },
    },
    {
      scope: 'support.variable.property.process',
      settings: {
        foreground: '#F8C762',
      },
    },
    {
      scope: 'entity.name.function.js,support.function.console.js',
      settings: {
        foreground: '#EBC88D',
      },
    },
    {
      scope: 'keyword.operator.misc.rust',
      settings: {
        foreground: '#D6D6DD',
      },
    },
    {
      scope: 'keyword.operator.sigil.rust',
      settings: {
        foreground: '#83D6C5',
      },
    },
    {
      scope: 'keyword.operator.delete',
      settings: {
        foreground: '#83D6C5',
      },
    },
    {
      scope: 'support.type.object.dom',
      settings: {
        foreground: '#D6D6DD',
      },
    },
    {
      scope: 'support.variable.dom,support.variable.property.dom',
      settings: {
        foreground: '#D6D6DD',
      },
    },
    {
      scope:
        'keyword.operator.arithmetic,keyword.operator.comparison,keyword.operator.decrement,keyword.operator.increment,keyword.operator.relational',
      settings: {
        foreground: '#D6D6DD',
      },
    },
    {
      scope:
        'keyword.operator.assignment.c,keyword.operator.comparison.c,keyword.operator.c,keyword.operator.increment.c,keyword.operator.decrement.c,keyword.operator.bitwise.shift.c,keyword.operator.assignment.cpp,keyword.operator.comparison.cpp,keyword.operator.cpp,keyword.operator.increment.cpp,keyword.operator.decrement.cpp,keyword.operator.bitwise.shift.cpp',
      settings: {
        foreground: '#83D6C5',
      },
    },
    {
      scope: 'punctuation.separator.delimiter',
      settings: {
        foreground: '#D6D6DD',
      },
    },
    {
      scope: 'punctuation.separator.c,punctuation.separator.cpp',
      settings: {
        foreground: '#83D6C5',
      },
    },
    {
      scope: 'support.type.posix-reserved.c,support.type.posix-reserved.cpp',
      settings: {
        foreground: '#D6D6DD',
      },
    },
    {
      scope: 'keyword.operator.sizeof.c,keyword.operator.sizeof.cpp',
      settings: {
        foreground: '#83D6C5',
      },
    },
    {
      scope: 'variable.parameter.function.language.python',
      settings: {
        foreground: '#F8C762',
      },
    },
    {
      scope: 'support.type.python',
      settings: {
        foreground: '#82D2CE',
      },
    },
    {
      scope: 'keyword.operator.logical.python',
      settings: {
        foreground: '#83D6C5',
      },
    },
    {
      scope: 'variable.parameter.function.python',
      settings: {
        foreground: '#F8C762',
      },
    },
    {
      scope:
        'punctuation.definition.arguments.begin.python,punctuation.definition.arguments.end.python,punctuation.separator.arguments.python,punctuation.definition.list.begin.python,punctuation.definition.list.end.python',
      settings: {
        foreground: '#D6D6DD',
      },
    },
    {
      scope: 'meta.function-call.generic.python',
      settings: {
        foreground: '#AAA0FA',
      },
    },
    {
      scope: 'constant.character.format.placeholder.other.python',
      settings: {
        foreground: '#F8C762',
      },
    },
    {
      scope: 'keyword.operator',
      settings: {
        foreground: '#D6D6DD',
      },
    },
    {
      scope: 'keyword.operator.assignment.compound',
      settings: {
        foreground: '#83D6C5',
      },
    },
    {
      scope:
        'keyword.operator.assignment.compound.js,keyword.operator.assignment.compound.ts',
      settings: {
        foreground: '#D6D6DD',
      },
    },
    {
      scope: 'keyword',
      settings: {
        foreground: '#83D6C5',
      },
    },
    {
      scope: 'entity.name.namespace',
      settings: {
        foreground: '#D1D1D1',
      },
    },
    {
      scope: 'variable',
      settings: {
        foreground: '#D6D6DD',
      },
    },
    {
      scope: 'variable.c',
      settings: {
        foreground: '#D6D6DD',
      },
    },
    {
      scope: 'variable.language',
      settings: {
        foreground: '#C1808A',
      },
    },
    {
      scope: 'token.variable.parameter.java',
      settings: {
        foreground: '#D6D6DD',
      },
    },
    {
      scope: 'import.storage.java',
      settings: {
        foreground: '#EFB080',
      },
    },
    {
      scope: 'token.package.keyword',
      settings: {
        foreground: '#83D6C5',
      },
    },
    {
      scope: 'token.package',
      settings: {
        foreground: '#D6D6DD',
      },
    },
    {
      scope: [
        'entity.name.function',
        'meta.require',
        'support.function',
        'variable.function',
      ],
      settings: {
        foreground: '#EFB080',
      },
    },
    {
      scope: 'entity.name.type.namespace',
      settings: {
        foreground: '#EFB080',
      },
    },
    {
      scope: 'support.class, entity.name.type.class',
      settings: {
        foreground: '#87C3FF',
      },
    },
    {
      scope: 'entity.name.class.identifier.namespace.type',
      settings: {
        foreground: '#EFB080',
      },
    },
    {
      scope: [
        'entity.name.class',
        'variable.other.class.js',
        'variable.other.class.ts',
      ],
      settings: {
        foreground: '#EFB080',
      },
    },
    {
      scope: 'variable.other.class.php',
      settings: {
        foreground: '#D6D6DD',
      },
    },
    {
      scope: 'entity.name.type',
      settings: {
        foreground: '#EFB080',
      },
    },
    {
      scope: 'keyword.control.directive.include.cpp',
      settings: {
        foreground: '#A8CC7C',
      },
    },
    {
      scope: 'control.elements, keyword.operator.less',
      settings: {
        foreground: '#F8C762',
      },
    },
    {
      scope: 'keyword.other.special-method',
      settings: {
        foreground: '#AAA0FA',
      },
    },
    {
      scope: 'storage',
      settings: {
        foreground: '#82D2CE',
      },
    },
    {
      scope: ['storage.modifier.reference', 'storage.modifier.pointer'],
      settings: {
        foreground: '#D1D1D1',
        fontStyle: '',
      },
    },
    {
      scope: 'token.storage',
      settings: {
        foreground: '#83D6C5',
      },
    },
    {
      scope:
        'keyword.operator.expression.delete,keyword.operator.expression.in,keyword.operator.expression.of,keyword.operator.expression.instanceof,keyword.operator.new,keyword.operator.expression.typeof,keyword.operator.expression.void',
      settings: {
        foreground: '#83D6C5',
      },
    },
    {
      scope: 'token.storage.type.java',
      settings: {
        foreground: '#EFB080',
      },
    },
    {
      scope: 'support.function',
      settings: {
        foreground: '#EFB080',
      },
    },
    {
      scope: 'meta.property-name.css',
      settings: {
        foreground: '#87C3FF',
        fontStyle: '',
      },
    },
    {
      scope: 'meta.tag',
      settings: {
        foreground: '#FAD075',
      },
    },
    {
      scope: 'string',
      settings: {
        foreground: '#d68bcf',
      },
    },
    {
      scope: 'entity.other.inherited-class',
      settings: {
        foreground: '#EFB080',
      },
    },
    {
      scope: 'constant.other.symbol',
      settings: {
        foreground: '#D6D6DD',
      },
    },
    {
      scope: 'constant.numeric',
      settings: {
        foreground: '#EBC88D',
      },
    },
    {
      scope: 'constant.other.color',
      settings: {
        foreground: '#EBC88D',
      },
    },
    {
      scope: 'punctuation.definition.constant',
      settings: {
        foreground: '#F8C762',
      },
    },
    {
      scope: [
        'entity.name.tag.template',
        'entity.name.tag.script',
        'entity.name.tag.style',
      ],
      settings: {
        foreground: '#AF9CFF',
      },
    },
    {
      scope: ['entity.name.tag.html'],
      settings: {
        foreground: '#87C3FF',
      },
    },
    {
      scope: 'meta.property-value.css',
      settings: {
        foreground: '#d68bcf',
        fontStyle: '',
      },
    },
    {
      scope: 'entity.other.attribute-name',
      settings: {
        foreground: '#AAA0FA',
      },
    },
    {
      scope: 'entity.other.attribute-name.id',
      settings: {
        foreground: '#AAA0FA',
        fontStyle: '',
      },
    },
    {
      scope: 'entity.other.attribute-name.class.css',
      settings: {
        foreground: '#F8C762',
        fontStyle: '',
      },
    },
    {
      scope: 'meta.selector',
      settings: {
        foreground: '#83D6C5',
      },
    },
    {
      scope: 'markup.heading',
      settings: {
        foreground: '#D6D6DD',
      },
    },
    {
      scope:
        'markup.heading punctuation.definition.heading, entity.name.section',
      settings: {
        foreground: '#AAA0FA',
      },
    },
    {
      scope: 'keyword.other.unit',
      settings: {
        foreground: '#EBC88D',
      },
    },
    {
      scope: 'markup.bold,todo.bold',
      settings: {
        foreground: '#F8C762',
      },
    },
    {
      scope: 'punctuation.definition.bold',
      settings: {
        foreground: '#EFB080',
      },
    },
    {
      scope: 'markup.italic, punctuation.definition.italic,todo.emphasis',
      settings: {
        foreground: '#83D6C5',
      },
    },
    {
      scope: 'emphasis md',
      settings: {
        foreground: '#83D6C5',
      },
    },
    {
      scope: 'entity.name.section.markdown',
      settings: {
        foreground: '#D6D6DD',
      },
    },
    {
      scope: 'punctuation.definition.heading.markdown',
      settings: {
        foreground: '#D6D6DD',
      },
    },
    {
      scope: 'punctuation.definition.list.begin.markdown',
      settings: {
        foreground: '#D6D6DD',
      },
    },
    {
      scope: 'markup.heading.setext',
      settings: {
        foreground: '#D6D6DD',
      },
    },
    {
      scope: 'punctuation.definition.bold.markdown',
      settings: {
        foreground: '#F8C762',
      },
    },
    {
      scope: 'markup.inline.raw.markdown',
      settings: {
        foreground: '#d68bcf',
      },
    },
    {
      scope: 'markup.inline.raw.string.markdown',
      settings: {
        foreground: '#d68bcf',
      },
    },
    {
      scope: 'punctuation.definition.list.markdown',
      settings: {
        foreground: '#D6D6DD',
      },
    },
    {
      scope: [
        'punctuation.definition.string.begin.markdown',
        'punctuation.definition.string.end.markdown',
        'punctuation.definition.metadata.markdown',
      ],
      settings: {
        foreground: '#D6D6DD',
      },
    },
    {
      scope: ['beginning.punctuation.definition.list.markdown'],
      settings: {
        foreground: '#D6D6DD',
      },
    },
    {
      scope: 'punctuation.definition.metadata.markdown',
      settings: {
        foreground: '#D6D6DD',
      },
    },
    {
      scope:
        'markup.underline.link.markdown,markup.underline.link.image.markdown',
      settings: {
        foreground: '#83D6C5',
      },
    },
    {
      scope:
        'string.other.link.title.markdown,string.other.link.description.markdown',
      settings: {
        foreground: '#AAA0FA',
      },
    },
    {
      scope: 'string.regexp',
      settings: {
        foreground: '#D6D6DD',
      },
    },
    {
      scope: 'constant.character.escape',
      settings: {
        foreground: '#D6D6DD',
      },
    },
    {
      scope: 'punctuation.section.embedded, variable.interpolation',
      settings: {
        foreground: '#D6D6DD',
      },
    },
    {
      scope:
        'punctuation.section.embedded.begin,punctuation.section.embedded.end',
      settings: {
        foreground: '#83D6C5',
      },
    },
    {
      scope: 'invalid.illegal',
      settings: {
        foreground: '#D6D6DD',
      },
    },
    {
      scope: 'invalid.illegal.bad-ampersand.html',
      settings: {
        foreground: '#D6D6DD',
      },
    },
    {
      scope: 'invalid.broken',
      settings: {
        foreground: '#D6D6DD',
      },
    },
    {
      scope: 'invalid.deprecated',
      settings: {
        foreground: '#D6D6DD',
      },
    },
    {
      scope: 'invalid.unimplemented',
      settings: {
        foreground: '#D6D6DD',
      },
    },
    {
      scope: 'source.json meta.structure.dictionary.json > string.quoted.json',
      settings: {
        foreground: '#D6D6DD',
      },
    },
    {
      scope:
        'source.json meta.structure.dictionary.json > string.quoted.json > punctuation.string',
      settings: {
        foreground: '#D6D6DD',
      },
    },
    {
      scope:
        'source.json meta.structure.dictionary.json > value.json > string.quoted.json,source.json meta.structure.array.json > value.json > string.quoted.json,source.json meta.structure.dictionary.json > value.json > string.quoted.json > punctuation,source.json meta.structure.array.json > value.json > string.quoted.json > punctuation',
      settings: {
        foreground: '#d68bcf',
      },
    },
    {
      scope:
        'source.json meta.structure.dictionary.json > constant.language.json,source.json meta.structure.array.json > constant.language.json',
      settings: {
        foreground: '#D6D6DD',
      },
    },
    {
      scope: 'support.type.property-name.json',
      settings: {
        foreground: '#82D2CE',
      },
    },
    {
      scope:
        'text.html.laravel-blade source.php.embedded.line.html entity.name.tag.laravel-blade',
      settings: {
        foreground: '#83D6C5',
      },
    },
    {
      scope:
        'text.html.laravel-blade source.php.embedded.line.html support.constant.laravel-blade',
      settings: {
        foreground: '#83D6C5',
      },
    },
    {
      scope:
        'support.other.namespace.use.php,support.other.namespace.use-as.php,support.other.namespace.php,entity.other.alias.php,meta.interface.php',
      settings: {
        foreground: '#EFB080',
      },
    },
    {
      scope: 'keyword.operator.error-control.php',
      settings: {
        foreground: '#83D6C5',
      },
    },
    {
      scope: 'keyword.operator.type.php',
      settings: {
        foreground: '#83D6C5',
      },
    },
    {
      scope: 'punctuation.section.array.begin.php',
      settings: {
        foreground: '#D6D6DD',
      },
    },
    {
      scope: 'punctuation.section.array.end.php',
      settings: {
        foreground: '#D6D6DD',
      },
    },
    {
      scope: 'invalid.illegal.non-null-typehinted.php',
      settings: {
        foreground: '#F44747',
      },
    },
    {
      scope:
        'storage.type.php,meta.other.type.phpdoc.php,keyword.other.type.php,keyword.other.array.phpdoc.php',
      settings: {
        foreground: '#EFB080',
      },
    },
    {
      scope:
        'meta.function-call.php,meta.function-call.object.php,meta.function-call.static.php',
      settings: {
        foreground: '#AAA0FA',
      },
    },
    {
      scope:
        'punctuation.definition.parameters.begin.bracket.round.php,punctuation.definition.parameters.end.bracket.round.php,punctuation.separator.delimiter.php,punctuation.section.scope.begin.php,punctuation.section.scope.end.php,punctuation.terminator.expression.php,punctuation.definition.arguments.begin.bracket.round.php,punctuation.definition.arguments.end.bracket.round.php,punctuation.definition.storage-type.begin.bracket.round.php,punctuation.definition.storage-type.end.bracket.round.php,punctuation.definition.array.begin.bracket.round.php,punctuation.definition.array.end.bracket.round.php,punctuation.definition.begin.bracket.round.php,punctuation.definition.end.bracket.round.php,punctuation.definition.begin.bracket.curly.php,punctuation.definition.end.bracket.curly.php,punctuation.definition.section.switch-block.end.bracket.curly.php,punctuation.definition.section.switch-block.start.bracket.curly.php,punctuation.definition.section.switch-block.begin.bracket.curly.php,punctuation.definition.section.switch-block.end.bracket.curly.php',
      settings: {
        foreground: '#D6D6DD',
      },
    },
    {
      scope: 'support.constant.core.rust',
      settings: {
        foreground: '#F8C762',
      },
    },
    {
      scope:
        'support.constant.ext.php,support.constant.std.php,support.constant.core.php,support.constant.parser-token.php',
      settings: {
        foreground: '#F8C762',
      },
    },
    {
      scope: 'entity.name.goto-label.php,support.other.php',
      settings: {
        foreground: '#AAA0FA',
      },
    },
    {
      scope:
        'keyword.operator.logical.php,keyword.operator.bitwise.php,keyword.operator.arithmetic.php',
      settings: {
        foreground: '#D6D6DD',
      },
    },
    {
      scope: 'keyword.operator.regexp.php',
      settings: {
        foreground: '#83D6C5',
      },
    },
    {
      scope: 'keyword.operator.comparison.php',
      settings: {
        foreground: '#D6D6DD',
      },
    },
    {
      scope: 'keyword.operator.heredoc.php,keyword.operator.nowdoc.php',
      settings: {
        foreground: '#83D6C5',
      },
    },
    {
      scope: 'meta.function.decorator.python',
      settings: {
        foreground: '#A8CC7C',
      },
    },
    {
      scope:
        'punctuation.definition.decorator.python,entity.name.function.decorator.python',
      settings: {
        foreground: '#A8CC7C',
        fontStyle: '',
      },
    },
    {
      scope:
        'support.token.decorator.python,meta.function.decorator.identifier.python',
      settings: {
        foreground: '#D6D6DD',
      },
    },
    {
      scope: 'function.parameter',
      settings: {
        foreground: '#D6D6DD',
      },
    },
    {
      scope: 'function.brace',
      settings: {
        foreground: '#D6D6DD',
      },
    },
    {
      scope: 'function.parameter.ruby, function.parameter.cs',
      settings: {
        foreground: '#D6D6DD',
      },
    },
    {
      scope: 'constant.language.symbol.ruby',
      settings: {
        foreground: '#D6D6DD',
      },
    },
    {
      scope: 'rgb-value',
      settings: {
        foreground: '#D6D6DD',
      },
    },
    {
      scope: 'inline-color-decoration rgb-value',
      settings: {
        foreground: '#F8C762',
      },
    },
    {
      scope: 'less rgb-value',
      settings: {
        foreground: '#F8C762',
      },
    },
    {
      scope: 'selector.sass',
      settings: {
        foreground: '#D6D6DD',
      },
    },
    {
      scope:
        'support.type.primitive.ts,support.type.builtin.ts,support.type.primitive.tsx,support.type.builtin.tsx',
      settings: {
        foreground: '#82D2CE',
      },
    },
    {
      scope: 'block.scope.end,block.scope.begin',
      settings: {
        foreground: '#D6D6DD',
      },
    },
    {
      scope: 'storage.type.cs',
      settings: {
        foreground: '#EFB080',
      },
    },
    {
      scope: 'entity.name.variable.local.cs',
      settings: {
        foreground: '#D6D6DD',
      },
    },
    {
      scope: 'token.info-token',
      settings: {
        foreground: '#AAA0FA',
      },
    },
    {
      scope: 'token.warn-token',
      settings: {
        foreground: '#F8C762',
      },
    },
    {
      scope: 'token.error-token',
      settings: {
        foreground: '#F44747',
      },
    },
    {
      scope: 'token.debug-token',
      settings: {
        foreground: '#83D6C5',
      },
    },
    {
      scope: [
        'punctuation.definition.template-expression.begin',
        'punctuation.definition.template-expression.end',
        'punctuation.section.embedded',
      ],
      settings: {
        foreground: '#83D6C5',
      },
    },
    {
      scope: ['meta.template.expression'],
      settings: {
        foreground: '#D6D6DD',
      },
    },
    {
      scope: ['keyword.operator.module'],
      settings: {
        foreground: '#83D6C5',
      },
    },
    {
      scope: ['support.type.type.flowtype'],
      settings: {
        foreground: '#AAA0FA',
      },
    },
    {
      scope: ['support.type.primitive'],
      settings: {
        foreground: '#EFB080',
      },
    },
    {
      scope: ['meta.property.object'],
      settings: {
        foreground: '#D6D6DD',
      },
    },
    {
      scope: ['variable.parameter.function.js'],
      settings: {
        foreground: '#D6D6DD',
      },
    },
    {
      scope: ['keyword.other.template.begin'],
      settings: {
        foreground: '#d68bcf',
      },
    },
    {
      scope: ['keyword.other.template.end'],
      settings: {
        foreground: '#d68bcf',
      },
    },
    {
      scope: ['keyword.other.substitution.begin'],
      settings: {
        foreground: '#d68bcf',
      },
    },
    {
      scope: ['keyword.other.substitution.end'],
      settings: {
        foreground: '#d68bcf',
      },
    },
    {
      scope: ['keyword.operator.assignment'],
      settings: {
        foreground: '#D6D6DD',
      },
    },
    {
      scope: ['keyword.operator.assignment.go'],
      settings: {
        foreground: '#EFB080',
      },
    },
    {
      scope: ['keyword.operator.arithmetic.go', 'keyword.operator.address.go'],
      settings: {
        foreground: '#83D6C5',
      },
    },
    {
      scope: ['entity.name.package.go'],
      settings: {
        foreground: '#EFB080',
      },
    },
    {
      scope: ['support.type.prelude.elm'],
      settings: {
        foreground: '#D6D6DD',
      },
    },
    {
      scope: ['support.constant.elm'],
      settings: {
        foreground: '#F8C762',
      },
    },
    {
      scope: ['punctuation.quasi.element'],
      settings: {
        foreground: '#83D6C5',
      },
    },
    {
      scope: ['constant.character.entity'],
      settings: {
        foreground: '#D6D6DD',
      },
    },
    {
      scope: [
        'entity.other.attribute-name.pseudo-element',
        'entity.other.attribute-name.pseudo-class',
      ],
      settings: {
        foreground: '#D6D6DD',
      },
    },
    {
      scope: ['entity.global.clojure'],
      settings: {
        foreground: '#EFB080',
      },
    },
    {
      scope: ['meta.symbol.clojure'],
      settings: {
        foreground: '#D6D6DD',
      },
    },
    {
      scope: ['constant.keyword.clojure'],
      settings: {
        foreground: '#D6D6DD',
      },
    },
    {
      scope: ['meta.arguments.coffee', 'variable.parameter.function.coffee'],
      settings: {
        foreground: '#D6D6DD',
      },
    },
    {
      scope: ['source.ini'],
      settings: {
        foreground: '#d68bcf',
      },
    },
    {
      scope: ['meta.scope.prerequisites.makefile'],
      settings: {
        foreground: '#D6D6DD',
      },
    },
    {
      scope: ['source.makefile'],
      settings: {
        foreground: '#EFB080',
      },
    },
    {
      scope: ['storage.modifier.import.groovy'],
      settings: {
        foreground: '#EFB080',
      },
    },
    {
      scope: ['meta.method.groovy'],
      settings: {
        foreground: '#AAA0FA',
      },
    },
    {
      scope: ['meta.definition.variable.name.groovy'],
      settings: {
        foreground: '#D6D6DD',
      },
    },
    {
      scope: ['meta.definition.class.inherited.classes.groovy'],
      settings: {
        foreground: '#d68bcf',
      },
    },
    {
      scope: ['support.variable.semantic.hlsl'],
      settings: {
        foreground: '#EFB080',
      },
    },
    {
      scope: [
        'support.type.texture.hlsl',
        'support.type.sampler.hlsl',
        'support.type.object.hlsl',
        'support.type.object.rw.hlsl',
        'support.type.fx.hlsl',
        'support.type.object.hlsl',
      ],
      settings: {
        foreground: '#83D6C5',
      },
    },
    {
      scope: ['text.variable', 'text.bracketed'],
      settings: {
        foreground: '#D6D6DD',
      },
    },
    {
      scope: ['support.type.swift', 'support.type.vb.asp'],
      settings: {
        foreground: '#EFB080',
      },
    },
    {
      scope: ['entity.name.function.xi'],
      settings: {
        foreground: '#EFB080',
      },
    },
    {
      scope: ['entity.name.class.xi'],
      settings: {
        foreground: '#D6D6DD',
      },
    },
    {
      scope: ['constant.character.character-class.regexp.xi'],
      settings: {
        foreground: '#D6D6DD',
      },
    },
    {
      scope: ['constant.regexp.xi'],
      settings: {
        foreground: '#83D6C5',
      },
    },
    {
      scope: ['keyword.control.xi'],
      settings: {
        foreground: '#D6D6DD',
      },
    },
    {
      scope: ['invalid.xi'],
      settings: {
        foreground: '#D6D6DD',
      },
    },
    {
      scope: ['beginning.punctuation.definition.quote.markdown.xi'],
      settings: {
        foreground: '#d68bcf',
      },
    },
    {
      scope: ['beginning.punctuation.definition.list.markdown.xi'],
      settings: {
        foreground: '#6D6D6D',
      },
    },
    {
      scope: ['constant.character.xi'],
      settings: {
        foreground: '#AAA0FA',
      },
    },
    {
      scope: ['accent.xi'],
      settings: {
        foreground: '#AAA0FA',
      },
    },
    {
      scope: ['wikiword.xi'],
      settings: {
        foreground: '#F8C762',
      },
    },
    {
      scope: ['constant.other.color.rgb-value.xi'],
      settings: {
        foreground: '#D6D6DD',
      },
    },
    {
      scope: ['punctuation.definition.tag.xi'],
      settings: {
        foreground: '#6D6D6D',
      },
    },
    {
      scope: [
        'entity.name.label.cs',
        'entity.name.scope-resolution.function.call',
        'entity.name.scope-resolution.function.definition',
      ],
      settings: {
        foreground: '#EFB080',
      },
    },
    {
      scope: [
        'entity.name.label.cs',
        'markup.heading.setext.1.markdown',
        'markup.heading.setext.2.markdown',
      ],
      settings: {
        foreground: '#D6D6DD',
      },
    },
    {
      scope: [' meta.brace.square'],
      settings: {
        foreground: '#D6D6DD',
      },
    },
    {
      scope: 'comment, punctuation.definition.comment',
      settings: {
        foreground: '#6D6D6D',
        fontStyle: 'italic',
      },
    },
    {
      scope: 'markup.quote.markdown',
      settings: {
        foreground: '#6D6D6D',
      },
    },
    {
      scope: 'punctuation.definition.block.sequence.item.yaml',
      settings: {
        foreground: '#D6D6DD',
      },
    },
    {
      scope: ['constant.language.symbol.elixir'],
      settings: {
        foreground: '#D6D6DD',
      },
    },
    {
      scope:
        'entity.other.attribute-name.js,entity.other.attribute-name.ts,entity.other.attribute-name.jsx,entity.other.attribute-name.tsx,variable.parameter,variable.language.super',
      settings: {
        fontStyle: 'italic',
      },
    },
    {
      scope: 'comment.line.double-slash,comment.block.documentation',
      settings: {
        fontStyle: 'italic',
      },
    },
    {
      scope: 'keyword.control.import.python,keyword.control.flow.python',
      settings: {
        fontStyle: 'italic',
      },
    },
    {
      scope: 'markup.italic.markdown',
      settings: {
        fontStyle: 'italic',
      },
    },
  ],
};
 