## Step1

```
% bit add src/components/atoms/textField
tracking component atoms/text-field:
added src/components/atoms/textField/index.js
```

```
% bit status
new components
(use "bit tag --all [version]" to lock a version with all your changes)

     > text-field ... ok
```

```
% bit import bit.envs/compilers/react@1.0.21 --compiler
the following component environments were installed
- bit.envs/compilers/react@1.0.21
```

```
% bit build
⢀⠀ building components(node:15748) [DEP0005] DeprecationWarning: Buffer() is deprecated due to security and usability issues. Please use the Buffer.alloc(), Buffer.allocUnsafe(), or Buffer.from() methods instead.
✔ building component - text-field
text-field
/Users/hirosue/workspace/bit-react-tutorial/dist/src/components/atoms/textField/index.js.map
/Users/hirosue/workspace/bit-react-tutorial/dist/src/components/atoms/textField/index.js
```

```
% bit tag --all 0.0.1
⡀⠀ importing components(node:15797) [DEP0005] DeprecationWarning: Buffer() is deprecated due to security and usability issues. Please use the Buffer.alloc(), Buffer.allocUnsafe(), or Buffer.from() methods instead.
✔ building component - text-field
1 component(s) tagged
(use "bit export [collection]" to push these components to a remote")
(use "bit untag" to unstage versions)

new components
(first version for components)
     > text-field@0.0.1
```

```
% bit status
staged components
(use "bit export <remote_scope> to push these components to a remote scope")

     > text-field. versions: 0.0.1 ... ok
```

```
% bit export thirosue.react-tutorial
exported 1 components to scope thirosue.react-tutorial
```
