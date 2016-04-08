# Simple Infinite Scroller

Infinite-scrolling container (automatically load more).

SimpleInfinite mimics the interface of [react-infinite](https://www.npmjs.com/package/react-infinite).
The main difference is, it doesnt try to do fancy performance improvements, like hiding offscreen elements.
This lets it tolerate elements with heights that aren't precomputed (which react-infinite cant do).

```jsx
import SimpleInfinite from './index'

const onInfiniteLoad = () => {
  this.setState({ isLoading: true })
  // fetch more...
  this.setState({ items: moreItems, isLoading: false })
}

<SimpleInfinite 
  infiniteLoadBeginBottomOffset={hasLoadedAll ? undefined : 400}
  onInfiniteLoad={onInfiniteLoad}
  isInfiniteLoading={this.state.isLoading}>
  {this.state.items.map(render)}
</SimpleInfinite>
```