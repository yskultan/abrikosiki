module.exports = {
  root: true,
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: 'babel-eslint',
    ecmaVersion: 6,
    sourceType: 'module',
  },
  env: {
    es6: true,
    browser: true,
    node: true,
  },
  
  extends: ['plugin:nuxt/recommended', '@nuxtjs', 'plugin:vue/recommended', 'airbnb-base', 'prettier'],
  plugins: ['vue', 'prettier', 'promise', 'babel'],
  
  settings: {
    'import/resolver': {
      'alias' : {
        'map' : [
          ['~','./src'],
        ],
      },
      'nuxt': {
        nuxtSrcDir: 'src',
        extensions: ['.js', '.vue'],
      },
    },
    'import/core-modules': ['vue', 'vuex', 'axios'],
  },
  
  rules: {
    // не нужно добавлять разрешение файлов при импорте
    'import/extensions': ['error', 'ignorePackages', {
      js: 'never',
      jsx: 'never',
      vue: 'never',
    }],
  
    // единый стиль перевода на другую строку/окончание строки
    'linebreak-style': ['off'],
    'vue/singleline-html-element-content-newline': ['off'],
  
    // предпочитается дефолтный экспорт
    'import/prefer-default-export': ['off'],
  
    // разрешен импорт неиспользуемых компонентов
    'vue/no-unused-components': ['off'],
  
    // имя компонентов в кебаб
    'vue/component-definition-name-casing': ['error', 'kebab-case'],
  
    // нижнее подчеркивание
    'no-underscore-dangle': ['off'],
  
    // переопределение параметров функции
    'no-param-reassign': ['off'],
    'vue/require-component-is': ['off'],
  
    // объявление переменных вверху программы/функции
    'vars-on-top': ['off'],
  
    // передача экземляра объекта ошибки в promise
    'prefer-promise-reject-errors': ['off'],
    'object-shorthand': ['off'],
  
    // в else return не нужен если он есть в if
    'no-else-return': ['error'],
  
    // всегда с точка запятой в конце
    'semi': 'error',
  
    // всегда заканчивать запятой строку в перечислении элементов в объектах, массивах и импортах/экспортах
    'comma-dangle': [1, {
      'arrays': 'always-multiline',
      'objects': 'always-multiline',
      'imports': 'always-multiline',
      'exports': 'always-multiline',
      'functions': 'never',
    }],
  
    // порядок в компонентах
    'vue/order-in-components': ['error', {
      'order': [
        'el',
        'name',
        'parent',
        'functional',
        ['delimiters', 'comments'],
        'layout',
        ['components', 'directives', 'filters'],
        'head',
        'extends',
        'mixins',
        'inheritAttrs',
        'model',
        ['props', 'propsData'],
        'fetch',
        'asyncData',
        'data',
        'computed',
        'watch',
        'LIFECYCLE_HOOKS',
        'methods',
        'head',
        ['template', 'render'],
        'renderError',
      ],
    }],
  
    // отступ всегда два проблела
    'vue/script-indent': ['error', 2],
    'indent': ['error', 2],
  
    // имена компоненто в кебаб-кейсе
    'vue/name-property-casing': ['error', 'kebab-case'],
  
    // всегда одинарные кавычки
    'quotes': ['error', 'single', { 'allowTemplateLiterals': true }],
  
    // можно переопределять переменные
    'no-shadow': 'off',
  
    // имена у функций необязательны
    'func-names': 'off',
  
    // наименования файлов кебаб
    'unicorn/filename-case': [
      'error',
      {
        'cases': {
          'kebabCase': true,
        },
      },
    ],
  
    'vue/v-slot-style': ['warn', {
      'atComponent': 'longform',
      'default': 'longform',
      'named': 'longform',
    }],
  
    'dot-notation': 'off',
  },
};
  