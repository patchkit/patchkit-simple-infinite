import React from 'react'
import SimpleInfinite from './index'

const BATCH_SIZE = 30
const LIMIT = 210

export default class SimpleInfiniteDemo extends React.Component {
  constructor(props) {
    super(props)
    this.state = { isLoading: false, numItems: BATCH_SIZE }
  }

  isAtLimit() {
    return (this.state.numItems >= LIMIT)
  }

  onInfiniteLoad() {
    if (this.isAtLimit())
      return

    this.setState({ isLoading: true })
    setTimeout(() => {
      this.setState({ numItems: this.state.numItems + BATCH_SIZE, isLoading: false })
    }, 200)
  }

  render() {
    var items = []
    for (var i=0; i < this.state.numItems; i++)
      items.push(<div style={{ padding: 10, borderBottom: '1px solid #ddd' }}>Item {i}</div>)

    return <div>
      <h1>patchkit-simple-infinite</h1>
      <section className="demo-simple-infinite">
        <header>&lt;SimpleInfinite infiniteLoadBeginBottomOffset=400&gt;</header>
        <div className="content">
          <SimpleInfinite 
            infiniteLoadBeginBottomOffset={this.isAtLimit() ? undefined : 400}
            onInfiniteLoad={this.onInfiniteLoad.bind(this)}
            isInfiniteLoading={this.state.isLoading}>
            {items}
          </SimpleInfinite>
        </div>
      </section>
    </div>
  }
}