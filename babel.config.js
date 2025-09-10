module.exports = {
  presets: [
    ['@babel/preset-env', { targets: { node: 'current' } }],
    ['@babel/preset-react', { runtime: 'automatic' }]
  ],
  plugins: [
    ['babel-plugin-react-compiler', {
      // React Compiler options
      compilationMode: 'annotation', // or 'infer'
      panicThreshold: 'all_errors',
      runtimeModule: 'react/compiler-runtime'
    }]
  ]
};
