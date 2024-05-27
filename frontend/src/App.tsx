import * as React from 'react';
import { hot } from 'react-hot-loader/root';
import DropZone from './components/DragDrop/DropZone';

interface Props {
  name: string;
}

class App extends React.Component<Props> {
  render() {
    const { name } = this.props;
    return (
      <>
        <h1>Hello {name}</h1>
        <DropZone></DropZone>
        <h2> Hi</h2>
      </>
    );
  }
}

export default hot(App);
