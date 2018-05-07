# Histore

Histore __[his·to·ry]__: a 200b key-value store backed by navigation state.

Does the fact that `sessionStorage`/`localStorage` is shared across tabs have you down?

Don't worry, here's a strange but widely supported way to store 640kb of object data in a page's navigation state.


## Usage

```js
import histore from 'histore'

let storage = histore()

storage.set('foo', 'bar')
storage.get('foo')  // 'bar'

storage.set('obj', { any: 'object' })
storage.get('obj').any  // 'object'
```

Interestingly, due to the way `history.replaceState` works, storing objects will implicitly clone them using the [Structured Clone algorithm](https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API/Structured_clone_algorithm).


## License

Apache 2.0.